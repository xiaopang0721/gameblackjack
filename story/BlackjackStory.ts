/**
* name 21点剧情
*/
module gameblackjack.story {
	const enum MAP_STATUS {
		MAP_STATE_NONE = 0,		//初始化
		MAP_STATE_SHUFFLE = 1,  //洗牌中
		MAP_STATE_BET = 2,		//准备下注
		MAP_STATE_DEAL = 3,		//准备发牌
		MAP_STATE_DEALING = 4,	//准备中
		MAP_STATE_DEAL_END = 5, //发牌结束
		MAP_STATE_BUY = 6,		//准备买保险
		MAP_STATE_SEECARD = 7,	//庄家看牌
		MAP_STATE_XIAN = 8,	    //闲家打牌中
		MAP_STATE_ZHUANG = 9,	//庄家打牌中
		MAP_STATE_SETTLE = 10,	//准备结算
		MAP_STATE_SETTLEING = 11,//结算中
		MAP_STATE_END = 12,	    //结束
	}
	export class BlackjackStory extends gamecomponent.story.StoryNormalBase {

		private _blackjackMgr: BlackjackMgr;
		private _cardsTemp: any = [];
		private _blackjackMapInfo: BlackjackMapInfo;
		public _isDealCard: boolean = false;	//是否发过牌了

		constructor(v: Game, mapid: string, maplv: number) {
			super(v, mapid, maplv);
			this.init();
		}

		init() {
			super.init();
			if (!this._blackjackMgr) {
				this._blackjackMgr = new BlackjackMgr(this._game);
			}
			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
			this._game.sceneObjectMgr.on(MapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
			this.onIntoNewMap();
		}

		get blackjackMgr() {
			return this._blackjackMgr;
		}

		set mapLv(lv: number) {
			this.maplv = lv;
		}

		get mapLv() {
			return this.maplv;
		}

		private onIntoNewMap(info?: MapAssetInfo): void {
			if (!info) return;

			this.onMapInfoChange();
			this._game.uiRoot.closeAll();
			this._game.uiRoot.HUD.open(BlackjackPageDef.PAGE_BLACKJACK_MAP);
		}

		private onMapInfoChange(): void {
			let mapinfo = this._game.sceneObjectMgr.mapInfo;
			this._blackjackMapInfo = mapinfo as BlackjackMapInfo;
			if (mapinfo) {
				this.onUpdateState();
				this.onUpdateCardInfo();
			} else {
				this._blackjackMgr.unitOffline = this._offlineUnit;
			}
		}

		private onUpdateState(): void {
			let mapinfo: MapInfo = this._game.sceneObjectMgr.mapInfo;
			let mainUnit: Unit = this._game.sceneObjectMgr.mainUnit;
			if (!mapinfo) return;
			if (!mainUnit) return;
			if (!mainUnit.GetIndex()) return;
			let statue = mapinfo.GetMapState();
			switch (statue) {
				case MAP_STATUS.MAP_STATE_DEALING://发牌
					if (this._isDealCard) return;
					let handle = new Handler(this, this._blackjackMgr.createObj);
					this.updateCardsCount();
					this._blackjackMgr.Init(this._cardsTemp, handle);
					this._blackjackMgr.isDealCard();
					this._blackjackMgr.sort();
					this._blackjackMgr.fapai();
					this._isDealCard = true;
					break;
			}
		}

		//断线重连,重发下牌
		private onUpdateCardInfo(): void {
			let mapinfo: MapInfo = this._game.sceneObjectMgr.mapInfo;
			let mainUnit: Unit = this._game.sceneObjectMgr.mainUnit;
			if (!mapinfo) return;
			if (!mainUnit) return;
			if (!mainUnit.GetIndex()) return;
			if (!this.isReConnected) return;
			let statue = mapinfo.GetMapState();
			if (statue > MAP_STATUS.MAP_STATE_NONE && statue < MAP_STATUS.MAP_STATE_SETTLEING) {
				this._blackjackMgr.isReLogin = true;
				if (this._isDealCard) return;
				if (statue > MAP_STATUS.MAP_STATE_DEAL) {
					this.calculateCards();
					let handle = new Handler(this, this._blackjackMgr.createObj);
					this._blackjackMgr.Init(this._cardsTemp, handle);
					this._blackjackMgr.reDealCard();
					this._blackjackMgr.sort();
					this._blackjackMgr.refapai();
					this._isDealCard = true;
				}
			}
		}

		//根据下注来发牌
		private updateCardsCount(): void {
			let mapInfo = this._game.sceneObjectMgr.mapInfo as data.BlackjackMapInfo;
			let battleInfoMgr = mapInfo.battleInfoMgr;
			let card = [1, 2];
			this._cardsTemp = [];
			for (let i = 0; i < battleInfoMgr.info.length; i++) {
				let battleInfo = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBase;
				if (battleInfo instanceof gamecomponent.object.BattleInfoDeal) {	//发牌
					this._cardsTemp = this._cardsTemp.concat(card);
				}
			}
		}

		//断线重连算下牌数
		private calculateCards(): void {
			let mapInfo = this._game.sceneObjectMgr.mapInfo as data.BlackjackMapInfo;
			let battleInfoMgr = mapInfo.battleInfoMgr;
			let card = [1, 2];
			this._cardsTemp = [];
			for (let i = 0; i < battleInfoMgr.info.length; i++) {
				let battleInfo = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBase;
				if (battleInfo instanceof gamecomponent.object.BattleInfoDeal) {	//发牌
					this._cardsTemp = this._cardsTemp.concat(card);
				}
				else if (battleInfo instanceof gamecomponent.object.BattleInfoAsk) {	//要牌
					this._cardsTemp.push(1);
				}
				else if (battleInfo instanceof gamecomponent.object.BattleInfoFanPai) {	//庄家翻牌
					this._cardsTemp.push(1);
				}
			}
		}

		createofflineUnit() {
			//创建假精灵
			let unitOffline = new UnitOffline(this._game.sceneObjectMgr);
			let mainPlayer = this._game.sceneObjectMgr.mainPlayer;
			if (mainPlayer) {
				unitOffline.SetStr(UnitField.UNIT_STR_NAME, mainPlayer.playerInfo.nickname);
				unitOffline.SetStr(UnitField.UNIT_STR_HEAD_IMG, mainPlayer.playerInfo.headimg);
				unitOffline.SetDouble(UnitField.UNIT_INT_MONEY, mainPlayer.playerInfo.money);
				unitOffline.SetUInt32(UnitField.UNIT_INT_QI_FU_END_TIME, mainPlayer.GetQiFuEndTime(mainPlayer.playerInfo.qifu_type - 1));
				unitOffline.SetUInt32(UnitField.UNIT_INT_QI_FU_TYPE, mainPlayer.playerInfo.qifu_type);
				unitOffline.SetUInt32(UnitField.UNIT_INT_VIP_LEVEL, mainPlayer.playerInfo.vip_level);
			}
			unitOffline.SetUInt16(UnitField.UNIT_INT_UINT16, 0, 1);

			this._offlineUnit = unitOffline;
		}

		enterMap() {
			//各种判断
			if (this.mapinfo) return false;
			if (!this.maplv) {
				this.maplv = this._last_maplv;
			}
			this._game.network.call_match_game(this._mapid, this.maplv);
			return true;
		}

		leavelMap() {
			//各种判断
			this._game.network.call_leave_game();
			return true;
		}

		clear() {
			super.clear();
			this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
			this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
			this._game.sceneObjectMgr.off(MapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
			if (this._blackjackMgr) {
				this._blackjackMgr.clear();
				this._blackjackMgr = null;
			}
			this._blackjackMapInfo = null;
		}
	}
}