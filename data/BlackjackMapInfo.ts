/**
* 21点-地图 
*/
module gameblackjack.data {
	export class BlackjackMapInfo extends gamecomponent.object.MapInfoT<BlackjackData> {
		//地图状态变更
		static EVENT_BLACKJACK_STATUS_CHECK: string = "BlackjackMapInfo.EVENT_BLACKJACK_STATUS_CHECK";
		//战斗体更新
		static EVENT_BLACKJACK_BATTLE_CHECK: string = "BlackjackMapInfo.EVENT_BLACKJACK_BATTLE_CHECK";

		constructor(v: SceneObjectMgr) {
			super(v, () => { return new BlackjackData() });
		}

		onUpdate(flags: number, mask: UpdateMask, strmask: UpdateMask): void {
			super.onUpdate(flags, mask, strmask);
			let isNew = flags & core.obj.OBJ_OPT_NEW;
			if (isNew || mask.GetBit(MapField.MAP_INT_BATTLE_INDEX)) {
				this._battleInfoMgr.OnUpdate();
				this._sceneObjectMgr.event(BlackjackMapInfo.EVENT_BLACKJACK_BATTLE_CHECK);
			}
			if (isNew || mask.GetBit(MapField.MAP_INT_MAP_BYTE)) {
				this._sceneObjectMgr.event(BlackjackMapInfo.EVENT_BLACKJACK_STATUS_CHECK);
			}
		}

		public getBattleInfoToString(): string {
			let str: string = "";
			let str1: string = "";	//庄家发第二张牌前的字符串
			let str2: string = "";	//庄家发第二张牌的字符串
			let str3: string = "";	//庄家发第二张牌后的字符串
			let isDouble: boolean = false;
			let isPartTemp = [];
			let partCount: number = 0;
			for (let i = 0; i < this._battleInfoMgr.info.length; i++) {
				let battleInfo = this._battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBase;
				if (battleInfo.Type == 22) {
					let info = this._battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBlackJackBet;
					let name = this.GetPlayerNameFromSeat(info.SeatIndex);
					let newString = name + "：" + "在" + Math.floor(info.Pos / 10) + "号座位下注了" + info.BetVal;
					if (str1 == "") {
						str1 = newString;
					} else {
						str1 = str1 + "#" + newString;
					}
				} else if (battleInfo.Type == 1) {
					let info = this._battleInfoMgr.info[i] as gamecomponent.object.BattleInfoPass;
					let name = this.GetPlayerNameFromSeat(info.SeatIndex);
					let newString = name + "：" + "下注完成";
					str1 = str1 + "#" + newString;
				} else if (battleInfo.Type == 16) {
					let info = this._battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBuy;
					let name = this.GetPlayerNameFromSeat(info.SeatIndex);
					let newString = name + "：" + "在" + info.Pos / 10 + "号座位买保险";
					str1 = str1 + "#" + newString;
				} else if (battleInfo.Type == 15) {
					let info = this._battleInfoMgr.info[i] as gamecomponent.object.BattleInfoDeal;
					let type: string;
					if (info.CardType == 99) {
						type = "点数是：五小龙";
					} else if (info.CardType == 100) {
						type = "点数是：黑杰克";
					} else if (info.CardType == 0) {
						type = "爆牌";
					} else {
						type = "点数是：" + info.CardType.toString();
					}
					let posStr: string;
					if (info.SeatIndex == 60) {
						posStr = "庄家";
						str2 = "给" + posStr + "发牌，";
					} else {
						posStr = Math.floor(info.SeatIndex / 10) + "号座位";
						let newString = "给" + posStr + "发牌，" + type;
						str1 = str1 + "#" + newString;
					}
				} else if (battleInfo.Type == 18) {
					let info = this._battleInfoMgr.info[i] as gamecomponent.object.BattleInfoPart;
					isPartTemp.push(info.Pos / 10);
					partCount = 2;
				} else if (battleInfo.Type == 17) {
					isDouble = true;
				} else if (battleInfo.Type == 19) {
					let info = this._battleInfoMgr.info[i] as gamecomponent.object.BattleInfoAsk;
					let type: string;
					if (info.CardType == 99) {
						type = "点数是：五小龙";
					} else if (info.CardType == 100) {
						type = "点数是：黑杰克";
					} else if (info.CardType == 0) {
						type = "爆牌";
					} else {
						type = "点数是：" + info.CardType.toString();
					}
					let index = Math.floor(info.SeatIndex / 10);
					let posStr: string = isPartTemp.indexOf(index) >= 0 ? index + "号座位，牌" + (info.SeatIndex % 10 + 1) : index + "号座位";
					let newString: string;
					if (isDouble && info.SeatIndex != 60) {
						newString = posStr + "双倍下注，" + type;
						isDouble = false;
					} else {
						if (partCount == 0) {
							if (info.SeatIndex == 60) {
								posStr = "庄家";
							}
							newString = posStr + "要牌，" + type;
						} else {
							newString = index + "号座位分牌，牌" + (info.SeatIndex % 10 + 1) + type;
							partCount--;
						}
					}
					if (str3 == "") {
						str3 = newString;
					} else {
						str3 = str3 + "#" + newString;
					}
				} else if (battleInfo.Type == 20) {
					let info = this._battleInfoMgr.info[i] as gamecomponent.object.BattleInfoStop;
					let index = Math.floor(info.Pos / 10);
					let posStr: string = isPartTemp.indexOf(index) >= 0 ? index + "号座位，牌" + (info.Pos % 10 + 1) : index + "号座位";
					let newString = posStr + "停牌";
					str3 = str3 + "#" + newString;
				} else if (battleInfo.Type == 11) {
					let info = this._battleInfoMgr.info[i] as gamecomponent.object.BattleInfoSettle;
					let name = this.GetPlayerNameFromSeat(info.SeatIndex);
					let newString = name + "盈利：" + info.SettleVal;
					str3 = str3 + "#" + newString;
					isDouble = false;
					isPartTemp = [];
					partCount = 0;
				} else if (battleInfo.Type == 34) {
					let info = this._battleInfoMgr.info[i] as gamecomponent.object.BattleInfoFanPai;
					if (info.SeatIndex == 60) {
						let type: string;
						if (info.CardType == 99) {
							type = "点数是：五小龙";
						} else if (info.CardType == 100) {
							type = "点数是：黑杰克";
						} else if (info.CardType == 0) {
							type = "爆牌";
						} else {
							type = "点数是：" + info.CardType.toString();
						}
						str2 = str2 + type;
					}
				}
			}
			str = str1 + "#" + str2 + "#" + str3;
			return str;
		}

		//通过座位取玩家名字
		private GetPlayerNameFromSeat(index: number): string {
			let name: string;
			let users = this._battleInfoMgr.users;
			name = users[index - 1].name;
			return name
		}
	}
}