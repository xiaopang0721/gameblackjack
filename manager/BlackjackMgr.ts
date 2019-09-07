/**
* 21点-牌 
*/
module gameblackjack.manager {
	const CARDS_TYPE_BLACKJACK = 100;		//黑杰克
	const CARDS_TYPE_WUXIAOLONG = 99;		//五小龙
	const MIN_CHECKTIME: number = 1000;//最小检测时间间隔(毫秒)
	export class BlackjackMgr extends gamecomponent.managers.PlayingCardMgrBase<BlackjackData>{
		public isReLogin: boolean = false;	//是否断线重连

		static readonly MAPINFO_OFFLINE: string = "BlackjackMgr.MAPINFO_OFFLINE";//假精灵
		static readonly DEAL_CARDS: string = "BlackjackMgr.DEAL_CARDS";//发牌结束
		private _offsetTime: number//剩余检测时间(毫秒)
		private _unitOffline: UnitOffline;//假精灵信息
		private _cardsTemp: any = [];	//牌数据
		private _partPos: any = [];		//分牌过的位置

		constructor(game: Game) {
			super(game);
		}

		get unitOffline() {
			return this._unitOffline;
		}

		set unitOffline(v) {
			this._unitOffline = v;
			this.event(BlackjackMgr.MAPINFO_OFFLINE)
		}

		//心跳更新
		update(diff: number) {
			if (this._offsetTime > 0) {
				this._offsetTime -= diff;
				return;
			}
			this._offsetTime = MIN_CHECKTIME;
		}

		createObj(u: Unit) {
			let card = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CARD_MARK, BlackjackData) as BlackjackData;
			card.pos = new Vector2(950, 160);
			return card;
		}

		//加一张牌
		addCard(val: number, create_fun: Handler, ownerIdx: number, cardIdx: number, isPart: boolean): void {
			let mainIdx = this._game.sceneObjectMgr.mainUnit.GetIndex();
			let card: BlackjackData;
			card = create_fun.run();
			this._cards.push(card)
			card.Init(val);
			card.sortScore = -cardIdx;
			if (!isPart) {
				if (cardIdx == 2) {
					cardIdx = 3;
				}
				else if (cardIdx == 3) {
					for (let i = 0; i < this._cards.length; i++) {
						let card = this._cards[i];
						if (card._ownerIdx == ownerIdx) {
							card._cardIdx = card._cardIdx - 1;
							card && card.fapai();
						}
					}
				}
			} else {
				if (cardIdx == 1 && ownerIdx % 10 == 1) {
					card.disable = true;
				}
			}
			card.myOwner(null, mainIdx, ownerIdx, cardIdx, isPart);
			card && card.fapai();
		}

		cardCount(card: number): number {
			let cardCount = 0;
			card = card - 1;
			let val = card % 52;
			let cardVal = val % 13 + 1;
			if (cardVal > 10)
				cardCount = 10;
			else
				cardCount = cardVal;
			return cardCount;
		}

		// 黑杰克
		private isBlackJack(cards: any, isPart: boolean): boolean {
			//分牌的不算
			if (isPart) return false;
			//2张牌，A和10以上
			if (cards.length != 2) return false;
			if (cards[0] != 1) return false;
			if (cards[1] != 10) return false;
			return true;
		}

		//五小龙
		private isWuXiaoLong(cards: any): boolean {
			//必须是5张牌
			if (cards.length != 5) return false;
			//总点数低于22点
			let count = cards[0];
			for (let i = 1; i < cards.length; i++) {
				count = count + cards[i];
			}
			if (count > 21) return false;
			return true;
		}

		// 计算下点数
		public checkCardsType(cards: any, isPart: boolean): any {
			let newCards = [];
			for (let index = 0; index < cards.length; index++) {
				newCards.push(this.cardCount(cards[index]));
			}
			newCards.sort((a, b) => {
				return a - b;
			})
			let count = [0, 0];
			//特殊牌
			if (this.isBlackJack(newCards, isPart)) {
				count[0] = CARDS_TYPE_BLACKJACK;
			}
			else if (this.isWuXiaoLong(newCards)) {
				count[0] = CARDS_TYPE_WUXIAOLONG;
			}
			else {
				let val = newCards[0];
				for (let i = 1; i < newCards.length; i++) {
					val = val + newCards[i];
				}
				count[0] = val;
				//如果有A
				if (newCards[0] == 1) {
					if (val <= 11) {
						val = val + 10;
						count[1] = val;
					}
				}
				//爆牌了
				if (val > 21) {
					val = 0;
					count[0] = val;
				}
			}
			return count;
		}

		sort() {
			let mainiIdx = this._game.sceneObjectMgr.mainUnit.GetIndex();
			let cardIndex = 0;
			for (let index = 0; index < this._cardsTemp.length; index++) {
				for (let i = 0; i < this._cardsTemp[index].cards.length; i++) {
					let card = this._cards[cardIndex] as BlackjackData;
					let isPart = false;
					if (this._partPos.indexOf(Math.floor(this._cardsTemp[index].idx / 10)) >= 0) {
						isPart = true;
					}
					let cardIdx: number = i;
					if (!isPart) {
						if (this._cardsTemp[index].cards.length < 4) {
							cardIdx = i + 1;
						}
					}
					card.Init(this._cardsTemp[index].cards[i]);
					card.myOwner(null, mainiIdx, this._cardsTemp[index].idx, cardIdx, isPart);
					card.sortScore = -i;
					cardIndex++;
				}
			}
			//还有张特殊的牌
			if (cardIndex == this._cards.length - 1) {
				let card = this._cards[cardIndex] as BlackjackData;
				card.Init(0);
				card.myOwner(null, mainiIdx, 60, 2, false);
				card.sortScore = -1;
			}
		}

		//发牌
		fapai() {
			let count = 0;
			let cardCount = 0
			for (let index = 0; index < 2; index++) {
				for (let i = 0; i < this._cardsTemp.length; i++) {
					let card = this._cards[index + i * 2];
					//播音效
					if (card) {
						Laya.timer.once(200 * count, this, () => {
							this._game.playSound(PathGameTongyong.music_tongyong + "fapai.mp3", false);
							card.fapai();
							cardCount++;
							if (cardCount == this._cards.length)
								this.event(BlackjackMgr.DEAL_CARDS)
						});
						count++;
					}
				}
			}
		}

		//重连发牌
		refapai() {
			let isFan: boolean = false;
			//到庄家打牌了
			if (this._game.sceneObjectMgr.mapInfo.GetMapState() >= 8) {
				isFan = true;
			}
			for (let i = 0; i < this._cards.length; i++) {
				let card = this._cards[i];
				card && card.refapai(isFan);
			}
		}

		//翻牌
		fanpaiOne() {
			for (let index = 0; index < this._cards.length; index++) {
				let element = this._cards[index];
				element.fanpaiOne();
			}
		}

		//发牌了
		isDealCard(): void {
			this._cardsTemp = [];
			let mapInfo = this._game.sceneObjectMgr.mapInfo as data.BlackjackMapInfo;
			let battleInfoMgr = mapInfo.battleInfoMgr;
			for (let i = 0; i < battleInfoMgr.info.length; i++) {
				let battleInfo = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBase;
				if (battleInfo instanceof gamecomponent.object.BattleInfoDeal) {	//发牌
					//新整一个数组
					let cardsTemp = [];
					for (let cardIdx = 0; cardIdx < battleInfo.Cards.length; cardIdx++) {
						cardsTemp.push(battleInfo.Cards[cardIdx]);
					}
					let obj = {
						idx: battleInfo.SeatIndex,
						cards: cardsTemp,
					}
					this._cardsTemp.push(obj);
				}
			}
		}

		//分牌
		partCard(ownerIdx: number): void {
			let mainIdx = this._game.sceneObjectMgr.mainUnit.GetIndex();
			for (let i = 0; i < this._cards.length; i++) {
				let card = this._cards[i];
				if (card._ownerIdx == ownerIdx) {
					if (card._cardIdx == 1) {
						card.myOwner(null, mainIdx, ownerIdx, 0, true);
					}
					else if (card._cardIdx == 2) {
						card.myOwner(null, mainIdx, ownerIdx + 1, 0, true);
					}
					card.sortScore = 0;
					card.scaleX = 1;
					card.fenpai();
				}
			}
		}

		//断线重连
		reDealCard(): void {
			this._cardsTemp = [];
			let mapInfo = this._game.sceneObjectMgr.mapInfo as data.BlackjackMapInfo;
			let battleInfoMgr = mapInfo.battleInfoMgr;
			for (let i = 0; i < battleInfoMgr.info.length; i++) {
				let battleInfo = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBase;
				if (battleInfo instanceof gamecomponent.object.BattleInfoDeal) {	//发牌
					//新整一个数组
					let cardsTemp = [];
					for (let cardIdx = 0; cardIdx < battleInfo.Cards.length; cardIdx++) {
						cardsTemp.push(battleInfo.Cards[cardIdx]);
					}
					let obj = {
						idx: battleInfo.SeatIndex,
						cards: cardsTemp,
					}
					this._cardsTemp.push(obj);
				}
				else if (battleInfo instanceof gamecomponent.object.BattleInfoPart) {	//分牌
					this._partPos.push(battleInfo.Pos / 10)
					for (let k = 0; k < this._cardsTemp.length; k++) {
						if (battleInfo.Pos == this._cardsTemp[k].idx) {
							let card = [];
							card.push(this._cardsTemp[k].cards[1]);
							let obj = {
								idx: battleInfo.Pos + 1,
								cards: card,
							}
							this._cardsTemp.push(obj);
							this._cardsTemp[k].cards.splice(1, 1);
						}
					}
				}
				else if (battleInfo instanceof gamecomponent.object.BattleInfoAsk) {	//要牌
					for (let i = 0; i < this._cardsTemp.length; i++) {
						if (this._cardsTemp[i].idx == battleInfo.SeatIndex) {
							this._cardsTemp[i].cards.push(battleInfo.Card)
						}
					}
				}
				else if (battleInfo instanceof gamecomponent.object.BattleInfoFanPai) {	//庄家翻牌
					for (let i = 0; i < this._cardsTemp.length; i++) {
						if (this._cardsTemp[i].idx == battleInfo.SeatIndex) {
							this._cardsTemp[i].cards.push(battleInfo.Card)
						}
					}
				}
			}
		}

		//牌置灰
		setDisabled(ownerIdx: number, isPart: boolean): void {
			for (let i = 0; i < this._cards.length; i++) {
				let card = this._cards[i];
				if (!isPart) {
					card.disable = false;
				} else {
					if (Math.floor(card._ownerIdx / 10) == Math.floor(ownerIdx / 10) && card._ownerIdx != ownerIdx) {
						card.disable = true;
					} else {
						card.disable = false;
					}
				}
			}
		}

		//重置数据
		resetData(): void {
			this._cardsTemp = [];
		}

		//庄家第二张牌设值
		setCardVal(val): void {
			for (let index = 0; index < this._cards.length; index++) {
				let card = this._cards[index];
				if (card._ownerIdx == 60 && card._cardIdx == 2) {
					card.Init(val);
				}
			}
		}
	}
}