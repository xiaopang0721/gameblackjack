/**
* 21点-房间
*/
module gameblackjack.page {
    const enum MAP_STATUS {
        MAP_STATE_NONE = 0,	    //初始化
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
    const ChipConfig: any = {
        "31": [3, 300, 20],       //新手
        "32": [10, 1000, 200],      //初级
        "33": [30, 3000, 500],      //中级
        "34": [100, 10000, 1000],     //高级
    };
    //音效url
    const MUSIC_PATH = {
        bgMusic: "black_bgm.mp3",
        baoPaiMusic: "baopai.mp3",
        chipMusic: "chouma.mp3",
        startMusic: "kais.mp3",
        teShuPaiMusic: "tesupai.mp3",
        loseMusic: "tongyong/lose",
        winMusic: "tongyong/win",
    }
    export class BlackjackMapPage extends game.gui.base.Page {
        private _viewUI: ui.nqp.game_ui.ershiyidian.ErShiYiDianUI;
        private _mapInfo: BlackjackMapInfo;
        private _blackjackMgr: BlackjackMgr;
        private _blackjackStory: BlackjackStory;
        private _battleIndex: number = -1;
        private _betPos: number = 0;    //下注位置
        private _betVal: number = 0;    //拉霸下注数额
        private _lastBetVal: number = 0;//最终下注数额，续押用
        private _totalTime: number;     //操作倒计时总时间
        private _mainIndex: number;     //主玩家位置，倒计时用
        private _curBetPos: number;     //当前下注位置，倒计时用
        private _betInfo: any = [];     //各个位置下注信息
        private _buyInfo: any = [];     //各个位置买保险信息
        private _allCardsInfo: any = [];//所有座位的牌
        private _betTemp: any = [];     //下注的位置，购买保险用
        private _partPos: any = [];		//分牌过的位置
        private _doubleSeat: any = [];   //双倍下注的位置
        private _totalBetNum: any = []; //各个位置总下注
        private _totalChip: any = [];   //所有下注筹码
        private _insuranceChip: any = [];   //买保险筹码
        private _endTime: number;   //倒计时结束时间
        private _clipList: Array<BlackjackClip> = [];//飘字
        private _dealCards: boolean = false;    //是否发完牌
        private _boomPos: any = { 10: [530, 240], 20: [320, 208], 30: [160, 130], 40: [900, 130], 50: [740, 208] }; //爆炸位置
        private _boomPosPart: any = {
            10: [505, 225], 11: [585, 225], 20: [317, 199], 21: [385, 229], 30: [153, 115],
            31: [207, 154], 40: [877, 139], 41: [935, 97], 50: [697, 218], 51: [764, 188]
        }; //爆炸位置,分牌的
        private _doublePos: any = { 10: [645, 309], 20: [463, 283], 30: [316, 211], 40: [981, 205], 50: [826, 280] }; //双倍标识位置
        private _doublePosPart: any = {
            10: [607, 301], 11: [684, 301], 20: [440, 275], 21: [505, 303], 30: [288, 196],
            31: [340, 233], 40: [949, 228], 41: [1004, 188], 50: [781, 300], 51: [845, 271]
        }; //双倍标识位置,分牌的

        constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
            super(v, onOpenFunc, onCloseFunc);
            this._isNeedDuang = false;
            this._asset = [
                PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                Path_game_blackjack.atlas_game_ui + "ershiyidian.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
                Path_game_blackjack.atlas_game_ui + "ershiyidian/effect.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "general/effect/fapai_2.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "general/effect/xipai.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
            ];
        }

        // 页面初始化函数
        protected init(): void {
            this._viewUI = this.createView('game_ui.ershiyidian.ErShiYiDianUI');
            this.addChild(this._viewUI);
            if (!this._blackjackMgr) {
                this._blackjackStory = this._game.sceneObjectMgr.story as BlackjackStory;
                this._blackjackMgr = this._blackjackStory.blackjackMgr;
                this._blackjackMgr.on(BlackjackMgr.DEAL_CARDS, this, this.onAfterDealCards);
            }
            this._game.playMusic(Path_game_blackjack.music_blackjack + MUSIC_PATH.bgMusic);
            this.initClip();
        }

        //跟注数值
        private _minClip: BlackjackClip;
        //比牌数值
        private _maxClip: BlackjackClip;
        private initClip(): void {
            if (!this._minClip) {
                this._minClip = new BlackjackClip(BlackjackClip.MAP_XZ);
                this._minClip.centerX = this._viewUI.clip_min.centerX;
                this._minClip.centerY = this._viewUI.clip_min.centerY;
                this._viewUI.clip_min.parent.addChild(this._minClip);
                this._viewUI.clip_min.visible = false;
            }
            if (!this._maxClip) {
                this._maxClip = new BlackjackClip(BlackjackClip.MAP_XZ);
                this._maxClip.centerX = this._viewUI.clip_max.centerX;
                this._maxClip.centerY = this._viewUI.clip_max.centerY;
                this._viewUI.clip_max.parent.addChild(this._maxClip);
                this._viewUI.clip_max.visible = false;
            }
        }

        private clearClipXZ(): void {
            if (this._minClip) {
                this._minClip.removeSelf();
                this._minClip.destroy();
                this._minClip = null;
            }
            if (this._maxClip) {
                this._maxClip.removeSelf();
                this._maxClip.destroy();
                this._maxClip = null;
            }
        }

        // 页面打开时执行函数
        protected onOpen(): void {
            super.onOpen();
            this.updateViewUI();
            this.onUpdateUnitOffline();
            if (!this._blackjackMgr.isReLogin) {
                this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_MATCH, null, (page) => {
                    this._viewUI.btn_continue.visible = page.dataSource;
                });
                this._viewUI.btn_continue.visible = false;
            } else {
                this.onUpdateMapInfo();
            }

            this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.on(BlackjackMapInfo.EVENT_BLACKJACK_STATUS_CHECK, this, this.onUpdateMapState);
            this._game.sceneObjectMgr.on(BlackjackMapInfo.EVENT_BLACKJACK_BATTLE_CHECK, this, this.updateBattledInfo);

            this.onUpdateMapState();
            this.updateBattledInfo();
            this._viewUI.btn_menu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_back.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_rule.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_seeting.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_record.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_xuya.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_bet.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_min.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_max.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_enter.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_buy.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_notbuy.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_ask.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_part.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_double.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_stop.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_complete.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_continue.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_baodian.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_chongzhi.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_qifu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            for (let i = 0; i < 5; i++) {
                this._viewUI["img_pool" + i] && this._viewUI["img_pool" + i].on(LEvent.CLICK, this, this.onChoosePos, [i]);
            }
        }

        //打开时要处理的东西
        private updateViewUI(): void {
            this._viewUI.img_menu.visible = false;
            this._viewUI.box_state0.visible = false;
            this._viewUI.box_state1.visible = false;
            this._viewUI.box_state2.visible = false;
            this._viewUI.box_bet.visible = false;
            this._viewUI.btn_continue.visible = false;
            this._viewUI.view_boom.visible = false;
            this._viewUI.text_info.visible = false;
            this._viewUI.text_roomtype.visible = false;
            this._viewUI.txt_choose0.visible = false;
            this._viewUI.view_boom.ani1.stop();
            this._viewUI.view_qipao5_0.visible = false;
            this._viewUI.view_hjk5.visible = false;
            this._viewUI.view_wxl5.visible = false;
            this._viewUI.view_xipai.visible = false;
            this._viewUI.view_xipai.ani_xipai.stop();
            this._viewUI.view_paixie.img_card.visible = false;
            this._viewUI.view_paixie.ani1.stop();

            for (let i = 0; i < 5; i++) {
                this._viewUI["view_player" + i].visible = false;
                this._viewUI["box_chip" + i].visible = false;
                this._viewUI["view_player" + i].img_frame.visible = false;
                this._viewUI["txt_name" + i].visible = false;
                this._viewUI["box_prompt" + i].visible = false;
                this._viewUI["img_choose" + i].visible = false;
                this._viewUI["img_chip" + i].visible = false;
                this._viewUI["view_hjk" + i].visible = false;
                this._viewUI["img_double" + i].visible = false;
                this._viewUI["view_hjk" + i].ani1.stop();
                this._viewUI["view_wxl" + i].visible = false;
                this._viewUI["view_wxl" + i].ani1.stop();
                this._viewUI["img_pos" + i].visible = false;
                this._viewUI["img_baoxian" + i].visible = false;
                this._viewUI["img_bao" + i].visible = false;
                for (let index = 0; index < 2; index++) {
                    this._viewUI["view_qipao" + i + "_" + index].visible = false;
                    this._viewUI["view_qipao" + i + "_" + index].img_bg.skin = Path_game_blackjack.ui_blackjack + "bg_1.png"
                    this._viewUI["view_wxl" + i + "_" + index].visible = false;
                    this._viewUI["img_double" + i + "_" + index].visible = false;
                    this._viewUI["view_wxl" + i + "_" + index].ani1.stop();
                }
            }

            this._viewUI.hslider_bet.min = 1;//设置 this.hslider_bet 最低位置值。
            this._viewUI.hslider_bet.max = 100;//设置 this.hslider_bet 最高位置值。
            this._viewUI.hslider_bet.value = 1;//设置 this.hslider_bet 当前位置值。
            this._viewUI.hslider_bet.tick = 1;//设置 this.hslider_bet 刻度值。
            this._viewUI.hslider_bet.showLabel = false;
            this._viewUI.hslider_bet.changeHandler = new Handler(this, this.onChangeHslider);//设置 this.hslider_bet 位置变化处理器。
            this._viewUI.img_heguan.skin = Path_game_blackjack.ui_blackjack + "heguan.png";
        }

        //按钮点击
        protected onBtnTweenEnd(e: LEvent, target: any) {
            switch (target) {
                case this._viewUI.btn_menu://菜单
                    this._viewUI.img_menu.visible = true;
                    this._viewUI.btn_menu.visible = false;
                    break;
                case this._viewUI.btn_back://返回
                    let mapinfo: BlackjackMapInfo = this._game.sceneObjectMgr.mapInfo as BlackjackMapInfo;
                    if (mapinfo && mapinfo.GetPlayState() == 1) {
                        this._game.showTips("游戏尚未结束，请先打完这局哦~");
                        return;
                    }
                    this.resetData();
                    this.clearMapInfoListen();
                    this._blackjackMgr.clear();
                    this._blackjackStory.clear();
                    this.clearClip();
                    this._game.sceneObjectMgr.leaveStory(true);
                    // this.close();
                    break;
                case this._viewUI.btn_rule://规则
                    this._game.uiRoot.general.open(BlackjackPageDef.PAGE_BLACKJACK_RULE);
                    break;
                case this._viewUI.btn_seeting://设置
                    this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_SETTING);
                    break;
                case this._viewUI.btn_record://战绩
                    this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_RECORD, (page) => {
                        page.dataSource = BlackjackPageDef.GAME_NAME;
                    });
                    break;
                case this._viewUI.btn_xuya://续压
                    this._viewUI.box_bet.visible = false;
                    let betVal = this._lastBetVal;
                    if (betVal > this._game.sceneObjectMgr.mainPlayer.playerInfo.money) {
                        betVal = this._game.sceneObjectMgr.mainPlayer.playerInfo.money;
                    }
                    if (this._betPos == 0) {
                        this._betPos = this._game.sceneObjectMgr.mainUnit.GetIndex();
                    }
                    this._game.network.call_blackjack_bet(betVal.toString(), this._betPos);
                    break;
                case this._viewUI.btn_bet://押注
                    this._viewUI.box_bet.visible = true;
                    this._viewUI.btn_bet.visible = false;
                    this._viewUI.btn_enter.visible = true;
                    break;
                case this._viewUI.btn_min://最小
                    this._viewUI.box_bet.visible = false;
                    let minBet = ChipConfig[this._blackjackStory.mapLv][0];
                    if (this._game.sceneObjectMgr.mainPlayer.playerInfo.money < ChipConfig[this._blackjackStory.mapLv][0]) {
                        this._game.showTips("金币不足");
                        return;
                    }
                    if (this._betPos == 0) {
                        this._betPos = this._game.sceneObjectMgr.mainUnit.GetIndex();
                    }
                    this._game.network.call_blackjack_bet(minBet.toString(), this._betPos);
                    break;
                case this._viewUI.btn_max://最大
                    this._viewUI.box_bet.visible = false;
                    let maxBet = ChipConfig[this._blackjackStory.mapLv][1];
                    let hasMoney = this._game.sceneObjectMgr.mainPlayer.playerInfo.money;
                    if (maxBet > hasMoney) {
                        maxBet = hasMoney;
                    }
                    if (maxBet < ChipConfig[this._blackjackStory.mapLv][0]) {
                        this._game.showTips("金币不足");
                        return;
                    }
                    if (this._betPos == 0) {
                        this._betPos = this._game.sceneObjectMgr.mainUnit.GetIndex();
                    }
                    this._game.network.call_blackjack_bet(maxBet.toString(), this._betPos);
                    break;
                case this._viewUI.btn_enter:
                    this._viewUI.box_bet.visible = false;
                    if (this._game.sceneObjectMgr.mainPlayer.playerInfo.money < ChipConfig[this._blackjackStory.mapLv][0]) {
                        this._game.showTips("金币不足");
                        return;
                    }
                    if (this._betPos == 0) {
                        this._betPos = this._game.sceneObjectMgr.mainUnit.GetIndex();
                    }
                    this._game.network.call_blackjack_bet(this._betVal.toString(), this._betPos);
                    break;
                case this._viewUI.btn_buy://买保险
                    let needMoney = 0;
                    for (let buyIdx = 0; buyIdx < this._betInfo.length; buyIdx++) {
                        if (this._betInfo[buyIdx].pos == this._betPos * 10) {
                            needMoney = this._betInfo[buyIdx].chip / 2
                        }
                    }
                    if (this._game.sceneObjectMgr.mainPlayer.playerInfo.money < needMoney) {
                        this._game.showTips("金币不足，购买失败！");
                        return;
                    }
                    this._game.network.call_blackjack_buy_insurance(1, this._betPos);
                    break;
                case this._viewUI.btn_notbuy://不买保险
                    this._game.network.call_blackjack_buy_insurance(2, this._betPos);
                    break;
                case this._viewUI.btn_ask://要牌
                    this._game.network.call_blackjack_ask_card();
                    break;
                case this._viewUI.btn_part://分牌
                    this._game.network.call_blackjack_part_card();
                    break;
                case this._viewUI.btn_double://双倍
                    this._game.network.call_blackjack_bet_double();
                    break;
                case this._viewUI.btn_stop://停牌
                    this._game.network.call_blackjack_stop_card();
                    break;
                case this._viewUI.btn_complete:
                    this._viewUI.box_bet.visible = false;
                    this._game.network.call_blackjack_bet_complete();
                    break;
                case this._viewUI.btn_continue://继续游戏
                    if (this._game.sceneObjectMgr.mainPlayer.playerInfo.money < ChipConfig[this._blackjackStory.mapLv][2]) {
                        this.onNotEnoughMoney()
                        return;
                    }
                    if (this._game.sceneObjectMgr.mapInfo instanceof MapInfo) {
                        this.clearClip();
                        this.resetData();
                        this.updateViewUI();
                        // this._blackjackStory.removeListen();
                        // this.clearMapInfoListen();
                        this._blackjackMgr.clear();
                        this._blackjackMgr.resetData();
                        this._game.sceneObjectMgr.leaveStory();

                    } else {
                        this.onUpdateMapInfo();
                    }
                    break;
                case this._viewUI.btn_baodian://宝典
                    this._game.uiRoot.general.open(BlackjackPageDef.PAGE_BLACKJACK_BAODIAN);
                    break;
                case this._viewUI.btn_chongzhi://充值
                    this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                    break;
                case this._viewUI.btn_qifu://祈福
                    this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_QIFU);
                    break;
                default:
                    break;
            }
        }

        //点击任意地方关闭菜单
        protected onMouseClick(e: LEvent) {
            if (e.currentTarget != this._viewUI.btn_menu) {
                this._viewUI.img_menu.visible = false;
                this._viewUI.btn_menu.visible = true;
            }
        }

        //下注滚动条
        private onChangeHslider(value: number): void {
            if (!this._game.sceneObjectMgr.mainPlayer) return;
            this._betVal = value * ChipConfig[this._blackjackStory.mapLv][0];
            let hasMoney = this._game.sceneObjectMgr.mainPlayer.playerInfo.money;
            if (this._betVal > hasMoney) {
                this._betVal = hasMoney;
            }
            this._viewUI.text_bet.text = this._betVal.toString();
        }

        //选择位置
        private onChoosePos(index: number, e: LEvent): void {
            let mapinfo: BlackjackMapInfo = this._game.sceneObjectMgr.mapInfo as BlackjackMapInfo;
            if (!mapinfo) return;
            if (index == 0) return;
            //只有下注的时候才能选位置
            let status = mapinfo.GetMapState();
            if (status != MAP_STATUS.MAP_STATE_BET) return;
            let mainIdx = this._game.sceneObjectMgr.mainUnit.GetIndex();
            let isBetMain: boolean = false;     //自己的位置是否下注过
            let isBetTarget: boolean = false;   //目标位置是不是已经被下注了
            if (this._game.sceneObjectMgr.mainUnit.IsBetComplete()) {
                return;
            }
            let unitIdx = (mainIdx + index) % 5 == 0 ? 5 : (mainIdx + index) % 5;
            //该座位有人
            let unit = this._game.sceneObjectMgr.getUnitByIdx(unitIdx);
            if (unit) return;
            for (let i = 0; i < this._betInfo.length; i++) {
                if (this._betInfo[i].pos == mainIdx * 10) {
                    isBetMain = true;
                }
                //已经被抢了，按钮置灰，直接return 
                if (this._betInfo[i].pos == unitIdx * 10) {
                    this._viewUI.btn_max.disabled = true;
                    this._viewUI.btn_min.disabled = true;
                    this._viewUI.btn_bet.disabled = true;
                    return;
                }
            }
            if (!isBetMain) return; //没下注，不能选其他位置
            this._viewUI.btn_max.disabled = false;
            this._viewUI.btn_min.disabled = false;
            this._viewUI.btn_bet.disabled = false;
            this._viewUI.btn_bet.visible = true;
            this._viewUI.btn_enter.visible = false;
            this._viewUI.btn_enter.disabled = false;
            this._viewUI.btn_complete.disabled = false;
            let idx = (this._betPos - mainIdx + 5) % 5;
            this._viewUI["img_choose" + idx].visible = false;
            this._viewUI["box_prompt" + idx].visible = false;
            this._betPos = unitIdx;
            idx = (this._betPos - mainIdx + 5) % 5;
            this._viewUI["img_choose" + idx].visible = true;
            this._viewUI["box_prompt" + idx].visible = false;
            this._viewUI["txt_prompt" + idx].text = "点击在此区域下注";
            this._viewUI["img_prompt" + idx].skin = Path_game_blackjack.ui_blackjack + "tu_qipuao1.png";
        }

        private onUnitAdd(u: Unit): void {
            this.onUpdateUnit();

        }

        //玩家出去了
        private onUnitRemove(u: Unit) {
            this.onUpdateUnit();
            //隐藏下买保险标识
            let posIdx = (u.GetIndex() - this._game.sceneObjectMgr.mainUnit.GetIndex() + 5) % 5;
            this._viewUI["img_baoxian" + posIdx].visible = false;
        }

        //精灵显示
        private onUpdateUnit(qifu_index?: number): void {
            let mapinfo: BlackjackMapInfo = this._game.sceneObjectMgr.mapInfo as BlackjackMapInfo;
            if (!mapinfo) return;
            let mainUnit = this._game.sceneObjectMgr.mainUnit;
            if (!mainUnit) return;
            if (!this._blackjackStory.mapLv) return;
            let idx = mainUnit.GetIndex();
            if (!idx) return;
            let max_val = ChipConfig[this._blackjackStory.mapLv][1];
            let curMoney = mainUnit.GetMoney();
            let moneyStr: string;
            if (max_val < curMoney) {
                moneyStr = max_val.toString();
            } else {
                moneyStr = EnumToString.getPointBackNum(mainUnit.GetMoney(), 2).toString();
            }
            //this._viewUI.btn_max.label = StringU.substitute("            {0}", moneyStr);
            this._maxClip.setText(moneyStr,true);
            let betPos = this._mapInfo.GetCurrentBetPos();
            let max = 5;
            for (let index = 0; index < max; index++) {
                let posIdx = (idx + index) % max == 0 ? 5 : (idx + index) % max;
                let unit = this._game.sceneObjectMgr.getUnitByIdx(posIdx)
                this._viewUI["view_player" + index].visible = unit;
                this._viewUI["img_chip" + index].visible = unit;
                this._viewUI["img_pos" + index].visible = unit;
                if (unit) {
                    let name = getMainPlayerName(unit.GetName());
                    this._viewUI["view_player" + index].text_name.text = name;
                    let money = EnumToString.getPointBackNum(unit.GetMoney(), 2);
                    this._viewUI["view_player" + index].text_money.text = money;
                    this._viewUI["img_pos" + index].skin = Path_game_blackjack.ui_blackjack + "tu_weizhi" + posIdx + ".png"
                    if (unit == mainUnit) {
                        //点了下注完成，按钮都隐藏
                        if (unit.IsBetComplete()) {
                            this._viewUI.box_state0.visible = false;
                            for (let i = 0; i < 5; i++) {
                                this._viewUI["box_prompt" + i].visible = false;
                            }
                        }
                    }
                    //头像框
                    this._viewUI["view_player" + index].img_txk.visible = unit.GetVipLevel() > 0;
                    if (this._viewUI["view_player" + index].img_txk.visible) {
                        this._viewUI["view_player" + index].img_txk.skin = PathGameTongyong.ui_tongyong_touxiang + "tu_v" + unit.GetVipLevel() + ".png";
                    }
                    //祈福成功 头像上就有动画
                    if (qifu_index && posIdx == qifu_index) {
                        this._viewUI["view_player" + index].qifu_type.visible = true;
                        this._viewUI["view_player" + index].qifu_type.skin = this._qifuTypeImgUrl;
                        this.playTween(this._viewUI["view_player" + index].qifu_type, qifu_index);
                    }
                    //时间戳变化 才加上祈福标志
                    if (unit.GetQFEndTime(unit.GetQiFuType() - 1) > this._game.sync.serverTimeBys) {
                        if (qifu_index && posIdx == qifu_index) {
                            Laya.timer.once(2500, this, () => {
                                this._viewUI["view_player" + index].img_qifu.visible = true;
                                if (this._viewUI["view_player" + index].img_qifu.visible && unit.GetQiFuType()) {
                                    this._viewUI["view_player" + index].img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + this._nameStrInfo[unit.GetQiFuType() - 1] + ".png";
                                }
                            })
                        } else {
                            this._viewUI["view_player" + index].img_qifu.visible = true;
                            if (this._viewUI["view_player" + index].img_qifu.visible && unit.GetQiFuType()) {
                                this._viewUI["view_player" + index].img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + this._nameStrInfo[unit.GetQiFuType() - 1] + ".png";
                            }
                        }
                    } else {
                        this._viewUI["view_player" + index].img_qifu.visible = false;
                        this._viewUI["view_player" + index].img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + unit.GetHeadImg() + ".png";
                    }
                }
            }
        }

        private _diff: number = 500;
        private _timeList: { [key: number]: number } = {};
        private _firstList: { [key: number]: number } = {};
        private playTween(img: LImage, index: number, isTween?: boolean) {
            if (!img) return;
            if (!this._timeList[index]) {
                this._timeList[index] = 0;
            }
            if (this._timeList[index] >= 2500) {
                this._timeList[index] = 0;
                this._firstList[index] = 0;
                img.visible = false;
                return;
            }
            Laya.Tween.to(img, { alpha: isTween ? 1 : 0.2 }, this._diff, Laya.Ease.linearNone, Handler.create(this, this.playTween, [img, index, !isTween]), this._firstList[index] ? this._diff : 0);
            this._timeList[index] += this._diff;
            this._firstList[index] = 1;
        }

        private _nameStrInfo: string[] = ["xs", "px", "gsy", "gg", "cs", "tdg"];
        private _qifuTypeImgUrl: string;
        protected onOptHandler(optcode: number, msg: any) {
            if (msg.type == Operation_Fields.OPRATE_GAME) {
                switch (msg.reason) {
                    case Operation_Fields.OPRATE_GAME_QIFU_SUCCESS_RESULT:
                        let dataInfo = JSON.parse(msg.data);
                        //打开祈福动画界面
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_QIFU_ANI, (page) => {
                            page.dataSource = StringU.substitute(PathGameTongyong.ui_tongyong_qifu + "f_{0}1.png", this._nameStrInfo[dataInfo.qf_id - 1]);
                        });
                        //相对应的玩家精灵做出反应
                        this._qifuTypeImgUrl = StringU.substitute(PathGameTongyong.ui_tongyong_qifu + "f_{0}2.png", this._nameStrInfo[dataInfo.qf_id - 1]);
                        this.onUpdateUnit(dataInfo.qifu_index);
                        break;
                }
            }
        }

        //地图监听
        private onUpdateMapInfo(): void {
            let mapInfo = this._game.sceneObjectMgr.mapInfo;
            this._mapInfo = mapInfo as BlackjackMapInfo;
            if (mapInfo) {
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
                this._viewUI.view_boom.ani1.on(LEvent.COMPLETE, this, this.afterBoom);
                this._viewUI.view_xipai.ani_xipai.on(LEvent.COMPLETE, this, this.afterXiPai);
                this._viewUI.btn_continue.visible = false;
                if (this._blackjackMgr.isReLogin) {
                    this._blackjackStory.mapLv = this._mapInfo.GetMapLevel();
                    this.updateBattledInfo();
                    this.onUpdateMapState();
                    this.onAfterDealCards();
                    this._viewUI.view_paixie.img_card.visible = true;
                    this._blackjackMgr.isReLogin = false;
                }
                this.onUpdateUnit();
            } else {
                this.onUpdateUnitOffline();
                this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_MATCH, null, (page) => {
                    this._viewUI.btn_continue.visible = page.dataSource;
                });
                this._viewUI.btn_continue.visible = false;
            }
        }

        //假精灵数据
        private onUpdateUnitOffline() {
            if (!this._blackjackMgr.unitOffline) return;
            let unitOffline = this._blackjackMgr.unitOffline;
            let mPlayer = this._game.sceneObjectMgr.mainPlayer;
            if (unitOffline) {
                this._viewUI.view_player0.visible = true;
                let money;
                if (mPlayer) {
                    if (mPlayer.playerInfo) {
                        money = mPlayer.playerInfo.money;
                        this._viewUI.view_player0.text_name.text = getMainPlayerName(mPlayer.playerInfo.nickname);
                        this._viewUI.view_player0.img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + mPlayer.playerInfo.headimg + ".png";
                        this._viewUI.view_player0.img_qifu.visible = mPlayer.GetQiFuEndTime(mPlayer.playerInfo.qifu_type - 1) > this._game.sync.serverTimeBys;
                        if (this._viewUI.view_player0.img_qifu.visible && mPlayer.playerInfo.qifu_type) {
                            this._viewUI.view_player0.img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + this._nameStrInfo[mPlayer.playerInfo.qifu_type - 1] + ".png";
                        }
                        //头像框
                        this._viewUI.view_player0.img_txk.visible = mPlayer.playerInfo.vip_level > 0;
                        if (this._viewUI.view_player0.img_txk.visible) {
                            this._viewUI.view_player0.img_txk.skin = PathGameTongyong.ui_tongyong_touxiang + "tu_v" + mPlayer.playerInfo.vip_level + ".png";
                        }
                    }
                } else {
                    money = unitOffline.GetMoney();
                    this._viewUI.view_player0.text_name.text = getMainPlayerName(unitOffline.GetName());
                    this._viewUI.view_player0.img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + unitOffline.GetHeadImg() + ".png";
                    this._viewUI.view_player0.img_qifu.visible = unitOffline.GetQiFuEndTime() > this._game.sync.serverTimeBys;
                    if (this._viewUI.view_player0.img_qifu.visible && unitOffline.GetQiFuType()) {
                        this._viewUI.view_player0.img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + this._nameStrInfo[unitOffline.GetQiFuType() - 1] + ".png";
                    }
                    //头像框
                    this._viewUI.view_player0.img_txk.visible = unitOffline.GetVipLevel() > 0;
                    if (this._viewUI.view_player0.img_txk.visible) {
                        this._viewUI.view_player0.img_txk.skin = PathGameTongyong.ui_tongyong_touxiang + "tu_v" + unitOffline.GetVipLevel() + ".png";
                    }
                }
                money = EnumToString.getPointBackNum(money, 2);
                this._viewUI.view_player0.text_money.text = money.toString();
            }
        }

        //地图状态
        private onUpdateMapState(): void {
            if (!this._mapInfo) return;
            let mainUnit = this._game.sceneObjectMgr.mainUnit;
            if (!mainUnit) return;
            let idx = mainUnit.GetIndex();
            if (!idx) return;
            let betPos = this._mapInfo.GetCurrentBetPos();
            let statue = this._mapInfo.GetMapState();
            // this._viewUI.btn_min.label =
            this._minClip.setText(ChipConfig[this._blackjackStory.mapLv][0], true); //StringU.substitute("          {0}", ChipConfig[this._blackjackStory.mapLv][0]);
            this._viewUI.text_bet.text = ChipConfig[this._blackjackStory.mapLv][0];
            this._betVal = ChipConfig[this._blackjackStory.mapLv][0];
            this._viewUI.text_info.text = "牌局号：" + this._mapInfo.GetGameNo();
            this._viewUI.text_info.visible = true;
            this._viewUI.text_roomtype.visible = true;
            let str = "";
            if (this._blackjackStory.mapLv == Web_operation_fields.GAME_ROOM_CONFIG_BLACKJACK_1) {
                str = "新手场：底注：";
            } else if (this._blackjackStory.mapLv == Web_operation_fields.GAME_ROOM_CONFIG_BLACKJACK_2) {
                str = "小资场：底注：";
            } else if (this._blackjackStory.mapLv == Web_operation_fields.GAME_ROOM_CONFIG_BLACKJACK_3) {
                str = "老板场：底注：";
            } else if (this._blackjackStory.mapLv == Web_operation_fields.GAME_ROOM_CONFIG_BLACKJACK_4) {
                str = "富豪场：底注：";
            }
            this._viewUI.text_roomtype.text = str + ChipConfig[this._blackjackStory.mapLv][0];
            if (!this._dealCards) {
                this.onAfterDealCards();
            }
            if (statue != MAP_STATUS.MAP_STATE_SHUFFLE) {
                this._viewUI.view_xipai.visible = false;
                this._viewUI.view_xipai.ani_xipai.stop();
            }
            if (statue == MAP_STATUS.MAP_STATE_BET) {
                this._viewUI.box_state0.visible = true;
                if (this._betTemp.length == 0) {
                    this._viewUI.btn_max.disabled = false;
                    this._viewUI.btn_min.disabled = false;
                    this._viewUI.btn_bet.disabled = false;
                    this._viewUI.btn_enter.disabled = false;
                }
            } else {
                this._viewUI.box_state0.visible = false;
                this._viewUI.box_bet.visible = false;
                for (let index = 0; index < 5; index++) {
                    this._viewUI["box_prompt" + index].visible = false;
                    this._viewUI["img_choose" + index].visible = false;
                }
            }
            if (statue != MAP_STATUS.MAP_STATE_BUY) {
                this._viewUI.box_state1.visible = false;
                for (let index = 0; index < 5; index++) {
                    this._viewUI["box_prompt" + index].visible = false;
                }
            }
            if (statue == MAP_STATUS.MAP_STATE_XIAN) {
                this._viewUI.btn_part.disabled = false;
                this._viewUI.btn_double.disabled = false;
            } else {
                this._viewUI.box_state2.visible = false;
            }
            if (statue == MAP_STATUS.MAP_STATE_SHUFFLE) {
                this._game.playSound(Path_game_blackjack.music_blackjack + MUSIC_PATH.startMusic, false);
                this._viewUI.view_xipai.visible = true;
                this._viewUI.view_xipai.ani_xipai.play(1, false);
            } else if (statue == MAP_STATUS.MAP_STATE_BET) {
                this.onUpdateUnit();
                this._viewUI.btn_complete.visible = false;
                this._viewUI.btn_enter.visible = false;
                this._viewUI.btn_bet.visible = true;
                this._viewUI.btn_xuya.visible = true;
                //没选择过下注位置，默认自己的位置
                if (this._betPos == 0) {
                    this._viewUI.img_choose0.visible = true;
                }
                if (this._lastBetVal == 0) {
                    this._viewUI.btn_xuya.disabled = true;
                } else {
                    this._viewUI.btn_xuya.disabled = false;
                }
                //倒计时
                let now_time = this._game.sync.serverTimeBys * 1000;
                let endTime = this._mapInfo.GetCountDown() * 1000;
                this._totalTime = endTime - now_time;
                this._endTime = this._mapInfo.GetCountDown() * 1000;
                this._mainIndex = idx;
                for (let i = 0; i < 5; i++) {
                    this._viewUI["view_player" + i].img_frame.visible = true;
                }
            }
            if (statue == MAP_STATUS.MAP_STATE_DEAL) {
                this._viewUI["img_choose" + (this._betPos - idx + 5) % 5].visible = false;
                this._betPos = 0;
                for (let i = 0; i < 5; i++) {
                    this._viewUI["view_player" + i].img_frame.visible = false;
                }
            }
            if (statue == MAP_STATUS.MAP_STATE_DEALING) {
                this._viewUI.view_paixie.ani2.play(0,true);
            }
            if (statue >= MAP_STATUS.MAP_STATE_DEAL_END) {
                this._viewUI.view_paixie.ani2.stop();
            }
            if (statue == MAP_STATUS.MAP_STATE_BUY) {
                if (this._betPos == 0) {
                    this._betPos = idx;
                }
                let needMoney = 0;
                for (let i = 0; i < this._betInfo.length; i++) {
                    if (this._betInfo[i].pos == this._betPos * 10) {
                        needMoney = this._betInfo[i].chip / 2
                    }
                }
                this._viewUI.box_state1.visible = true;
                //倒计时
                let now_time = this._game.sync.serverTimeBys * 1000;
                let endTime = this._mapInfo.GetCountDown() * 1000;
                this._totalTime = endTime - now_time;
                this._endTime = this._mapInfo.GetCountDown() * 1000;
                this._mainIndex = idx;
                for (let i = 0; i < 5; i++) {
                    this._viewUI["view_player" + i].img_frame.visible = true;
                }
            }
            if (statue == MAP_STATUS.MAP_STATE_SEECARD) {
                if (this._betPos > 0) {
                    this._viewUI["box_prompt" + (this._betPos - idx + 5) % 5].visible = false;
                }
                for (let i = 0; i < 5; i++) {
                    this._viewUI["view_player" + i].img_frame.visible = false;
                }
                this._viewUI.img_heguan.skin = Path_game_blackjack.ui_blackjack + "heguan_06.png";
            }
            if (statue == MAP_STATUS.MAP_STATE_XIAN) {
                //庄家不是黑杰克，收走保险筹码
                let bankerCount: number = 0;
                for (let i = 0; i < this._allCardsInfo.length; i++) {
                    if (this._allCardsInfo[i].pos == 60) {
                        let cards = this._allCardsInfo[i].cards;
                        let temp = this._blackjackMgr.checkCardsType(cards, false)
                        bankerCount = temp[1] > 0 ? temp[1] : temp[0];
                        this._viewUI.view_qipao5_0.txt_count.text = bankerCount.toString();
                    }
                }
                if (bankerCount != 100) {
                    for (let i = 0; i < this._insuranceChip.length; i++) {
                        let chip: BlackjackChip = this._insuranceChip[i]
                        chip.loseBaoXianChip();
                    }
                }
                //分牌后，牌是否置灰
                let isPart = false;
                if (this._partPos.indexOf(Math.floor(betPos / 10)) >= 0) {
                    isPart = true;
                }
                this._blackjackMgr.setDisabled(betPos, isPart);
                //闲家各种状态
                for (let i = 0; i < 5; i++) {
                    this._viewUI["view_player" + i].img_frame.visible = false;
                }
                let now_time = this._game.sync.serverTimeBys * 1000;
                let endTime = this._mapInfo.GetCountDown() * 1000;
                this._totalTime = endTime - now_time;
                this._endTime = this._mapInfo.GetCountDown() * 1000;
                this._mainIndex = idx;
                this._curBetPos = betPos;
                let needMoney = 0;
                let betIdx: number;
                for (let i = 0; i < this._betInfo.length; i++) {
                    if (this._betInfo[i].pos == betPos) {
                        needMoney = this._betInfo[i].chip;
                        betIdx = this._betInfo[i].idx;
                        if (this._betInfo[i].idx == idx) {
                            this._viewUI.box_state2.visible = true;
                        } else {
                            this._viewUI.box_state2.visible = false;
                        }
                    }
                }
                //置灰分牌和双倍下注按钮
                let unit = this._game.sceneObjectMgr.getUnitByIdx(betIdx);
                if (unit) {
                    if (unit.GetMoney() < needMoney) {
                        this._viewUI.btn_double.disabled = true;
                        this._viewUI.btn_part.disabled = true;
                    } else {
                        for (let i = 0; i < this._allCardsInfo.length; i++) {
                            if (this._allCardsInfo[i].pos == betPos) {
                                let cards = this._allCardsInfo[i].cards;
                                if (cards.length != 2) {
                                    this._viewUI.btn_double.disabled = true;
                                    this._viewUI.btn_part.disabled = true;
                                } else {
                                    this._viewUI.btn_double.disabled = false;
                                    if (this._blackjackMgr.cardCount(cards[0]) != this._blackjackMgr.cardCount(cards[1]) || this._partPos.indexOf(Math.floor(betPos / 10)) >= 0) {
                                        this._viewUI.btn_part.disabled = true;
                                    } else {
                                        this._viewUI.btn_part.disabled = false;
                                    }
                                }
                            }
                        }
                    }
                }
                let posIdx = (Math.floor(betPos / 10) - idx + 5) % 5;
                Laya.timer.once(500, this, this.updateHeGuan);
            }
            if (statue == MAP_STATUS.MAP_STATE_ZHUANG) {
                Laya.timer.clear(this, this.updateHeGuan);
                this._blackjackMgr.setDisabled(betPos, false);
                Laya.timer.once(500, this, () => {
                    this._blackjackMgr.fanpaiOne();
                    this._viewUI.img_heguan.skin = Path_game_blackjack.ui_blackjack + "heguan.png";
                    //显示庄家点数
                    for (let i = 0; i < this._allCardsInfo.length; i++) {
                        let cardIdx = this._allCardsInfo[i].pos
                        if (cardIdx == 60) {
                            let cards = this._allCardsInfo[i].cards
                            let count = this._blackjackMgr.checkCardsType(cards, false);
                            if (count[0] == 100) {
                                this._viewUI.view_hjk5.visible = true;
                                this._viewUI.view_hjk5.ani1.play(1, false);
                                this._viewUI.view_qipao5_0.visible = false;
                                if (!this._blackjackMgr.isReLogin) {
                                    this._game.playSound(Path_game_blackjack.music_blackjack + MUSIC_PATH.teShuPaiMusic, false)
                                }
                            } else {
                                if (count[1] > 0) {
                                    this._viewUI.view_qipao5_0.txt_count.text = count[0] + "/" + count[1];
                                } else {
                                    this._viewUI.view_qipao5_0.txt_count.text = count[0];
                                }
                                this._viewUI.view_qipao5_0.visible = true;
                                this._viewUI.view_qipao5_0.img_bg.skin = Path_game_blackjack.ui_blackjack + "bg_1.png"
                            }
                        }
                    }
                })
            }
            if (statue == MAP_STATUS.MAP_STATE_SETTLEING) {
                //结算中，有庄家黑杰克直接结算，也有正常游戏结算
                this._viewUI.img_heguan.skin = Path_game_blackjack.ui_blackjack + "heguan.png";
                this._blackjackMgr.fanpaiOne();
                let bankerCount: number = 0;
                for (let i = 0; i < this._allCardsInfo.length; i++) {
                    if (this._allCardsInfo[i].pos == 60) {
                        let cards = this._allCardsInfo[i].cards;
                        let temp = this._blackjackMgr.checkCardsType(cards, false)
                        bankerCount = temp[1] > 0 ? temp[1] : temp[0];
                        if (bankerCount > 0) {
                            this._viewUI.view_qipao5_0.txt_count.text = bankerCount.toString();
                        }
                    }
                }
                //庄家是黑杰克，保险的筹码表现
                if (bankerCount == 100) {
                    this._viewUI.view_hjk5.visible = true;
                    this._viewUI.view_hjk5.ani1.play(1, false);
                    this._viewUI.view_qipao5_0.visible = false;
                    if (!this._blackjackMgr.isReLogin) {
                        this._game.playSound(Path_game_blackjack.music_blackjack + MUSIC_PATH.teShuPaiMusic, false)
                    }
                    for (let buyIdx = 0; buyIdx < this._buyInfo.length; buyIdx++) {
                        if (this._buyInfo[buyIdx].optType == 1) {
                            let betVal: number = 0;
                            for (let k = 0; k < this._betInfo.length; k++) {
                                if (this._buyInfo[buyIdx].pos * 10 == this._betInfo[k].pos) {
                                    betVal = this._betInfo[k].chip;
                                }
                            }
                            let chipType = Math.floor(betVal / ChipConfig[this._blackjackStory.mapLv][0]);
                            this.createObj(this._chipTypeHjk, this._buyInfo[buyIdx].pos, idx, this._buyInfo[buyIdx].idx, chipType);
                            Laya.timer.once(1000, this, () => {
                                for (let k = 0; k < this._insuranceChip.length; k++) {
                                    let chip: BlackjackChip = this._insuranceChip[k]
                                    chip.flyAllChip(this._buyInfo[buyIdx].pos, this._buyInfo[buyIdx].idx);
                                }
                            })
                        }
                    }
                }
                //正常的结算筹码表现
                for (let index = 0; index < this._allCardsInfo.length; index++) {
                    let pos = Math.floor(this._allCardsInfo[index].pos / 10);
                    let isPart = false;
                    if (this._partPos.indexOf(pos) >= 0) {
                        isPart = true;
                    }
                    if (this._allCardsInfo[index].pos != 60) {
                        let childPos = this._allCardsInfo[index].pos % 10;
                        let posIdx = (pos - idx + 5) % 5;
                        let cards = this._allCardsInfo[index].cards;
                        let temp = this._blackjackMgr.checkCardsType(cards, isPart)
                        let count = temp[1] > 0 ? temp[1] : temp[0];
                        let ownerIdx: number;
                        let betVal: number = 0;
                        for (let k = 0; k < this._betInfo.length; k++) {
                            if (this._allCardsInfo[index].pos == this._betInfo[k].pos) {
                                ownerIdx = this._betInfo[k].idx;
                                betVal = this._betInfo[k].chip;
                            }
                        }
                        let chipType = Math.floor(betVal / ChipConfig[this._blackjackStory.mapLv][0]);
                        if (count > bankerCount) {
                            this._viewUI["view_qipao" + posIdx + "_" + childPos].img_bg.skin = Path_game_blackjack.ui_blackjack + "bg_2.png"
                            //创建筹码
                            Laya.timer.once(1000, this, () => {
                                this.createObj(this._chipTypeWin, this._allCardsInfo[index].pos, idx, ownerIdx, chipType);
                            })
                            Laya.timer.once(2000, this, () => {
                                for (let i = 0; i < this._totalChip.length; i++) {
                                    let chip: BlackjackChip = this._totalChip[i]
                                    chip.flyAllChip(this._allCardsInfo[index].pos, ownerIdx);
                                }
                            })
                        } else if (count < bankerCount || count == 0) {
                            for (let i = 0; i < this._totalChip.length; i++) {
                                let chip: BlackjackChip = this._totalChip[i]
                                chip.loseFlyChip(this._allCardsInfo[index].pos);
                            }
                        } else {
                            Laya.timer.once(2000, this, () => {
                                for (let i = 0; i < this._totalChip.length; i++) {
                                    let chip: BlackjackChip = this._totalChip[i]
                                    chip.flyAllChip(this._allCardsInfo[index].pos, ownerIdx);
                                }
                            })
                        }
                    }
                }
            }
            if (statue == MAP_STATUS.MAP_STATE_END) {
                this.onNotEnoughMoney();
                this._viewUI.btn_continue.visible = true;
            }
        }

        private updateHeGuan(): void {
            if (!this._mapInfo) return;
            let posIdx = (Math.floor(this._mapInfo.GetCurrentBetPos() / 10) - this._game.sceneObjectMgr.mainUnit.GetIndex() + 5) % 5;
            this._viewUI.img_heguan.skin = Path_game_blackjack.ui_blackjack + "heguan_" + posIdx + ".png";
        }

        //发完牌了，显示看牌按钮还有发筹码
        private onAfterDealCards(): void {
            let idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
            this._dealCards = true;
            this._viewUI.view_paixie.ani2.stop();
            for (let i = 0; i < this._allCardsInfo.length; i++) {
                let cardIdx = this._allCardsInfo[i].pos
                let cards = this._allCardsInfo[i].cards
                let posIdx = (Math.floor(cardIdx / 10) - idx + 5) % 5
                let isPart = false;
                if (this._partPos.indexOf(Math.floor(cardIdx / 10)) > -1) {
                    isPart = true;
                }
                let count = this._blackjackMgr.checkCardsType(cards, isPart);
                if (this._allCardsInfo[i].pos < 60) {
                    if (count[0] == 100) {
                        this._viewUI["view_hjk" + posIdx].visible = true;
                        this._viewUI["view_hjk" + posIdx].ani1.play(1, false);
                        this._viewUI["view_qipao" + posIdx + "_0"].visible = false;
                        if (!this._blackjackMgr.isReLogin) {
                            this._game.playSound(Path_game_blackjack.music_blackjack + MUSIC_PATH.teShuPaiMusic, false)
                        }
                    } else {
                        if (count[1] > 0) {
                            this._viewUI["view_qipao" + posIdx + "_0"].txt_count.text = count[0] + "/" + count[1];
                        } else {
                            this._viewUI["view_qipao" + posIdx + "_0"].txt_count.text = count[0];
                        }
                        this._viewUI["view_qipao" + posIdx + "_0"].visible = true;
                        this._viewUI["view_qipao" + posIdx + "_0"].img_bg.skin = Path_game_blackjack.ui_blackjack + "bg_1.png"
                    }
                }
            }
        }

        //个人操作倒计时
        update(): void {
            let mainUnit = this._game.sceneObjectMgr.mainUnit;
            if (!mainUnit) return;
            let mapinfo: BlackjackMapInfo = this._game.sceneObjectMgr.mapInfo as BlackjackMapInfo;
            if (!mapinfo) return;
            let now_time = this._game.sync.serverTimeBys * 1000;
            let remain_time: number = this._endTime - now_time;
            if (remain_time > 0) {
                let statue = mapinfo.GetMapState();
                let angle = remain_time / this._totalTime * 360;
                angle = 360 - angle;
                if (statue == MAP_STATUS.MAP_STATE_XIAN) {
                    for (let index = 0; index < this._betInfo.length; index++) {
                        if (this._betInfo[index].pos == this._curBetPos) {
                            let posIdx = (this._betInfo[index].idx - this._mainIndex + 5) % 5;
                            this._viewUI["view_player" + posIdx].img_frame.visible = true;
                            let imgMask = this._viewUI["view_player" + posIdx].img_mask;
                            imgMask.graphics.clear();
                            imgMask.graphics.drawPie(imgMask.width / 2, imgMask.height / 2, 200, angle - 90, 360 - 90, "");
                        }
                    }
                } else {
                    for (let i = 0; i < 5; i++) {
                        let imgMask = this._viewUI["view_player" + i].img_mask;
                        imgMask.graphics.clear();
                        imgMask.graphics.drawPie(imgMask.width / 2, imgMask.height / 2, 200, angle - 90, 360 - 90, "");
                        let unitIdx = (i + this._mainIndex) % 5 == 0 ? 5 : (i + this._mainIndex) % 5;
                        let unit = this._game.sceneObjectMgr.getUnitByIdx(unitIdx);
                        if (unit) {
                            if (statue == MAP_STATUS.MAP_STATE_BET) {
                                if (unit.IsBetComplete()) {
                                    this._viewUI["view_player" + i].img_frame.visible = false;
                                } else {
                                    this._viewUI["view_player" + i].img_frame.visible = true;
                                }
                            }
                            else if (statue == MAP_STATUS.MAP_STATE_BUY) {
                                let count: number;
                                for (let index = 0; index < this._betInfo.length; index++) {
                                    if (this._betInfo[index].idx == unitIdx) {
                                        count++;
                                    }
                                }
                                if (this._buyInfo.length >= count) {
                                    this._viewUI["view_player" + i].img_frame.visible = false;
                                } else {
                                    this._viewUI["view_player" + i].img_frame.visible = true;
                                }
                            }
                        }
                    }
                }
            }
        }

        //战斗日志
        private updateBattledInfo(): void {
            if (!this._mapInfo) return;
            let mainUnit = this._game.sceneObjectMgr.mainUnit;
            if (!mainUnit) return;
            let battleInfoMgr = this._mapInfo.battleInfoMgr;
            let mainIdx = mainUnit.GetIndex();
            if (!mainIdx) return;
            for (let i = 0; i < battleInfoMgr.info.length; i++) {
                let battleInfo = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBase;
                let index = battleInfoMgr.info.length;
                switch (battleInfo.Type) {
                    case 22: {   //下注
                        if (this._battleIndex < i) {
                            this._battleIndex = i
                            let info = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBlackJackBet;
                            let obj = {
                                pos: info.Pos,      //下注位置
                                idx: info.SeatIndex,    //玩家位置
                                chip: info.BetVal,      //下注多少
                            }
                            this._betInfo.push(obj);
                            //显示下注多少用
                            let bet_obj = {
                                pos: info.Pos / 10,
                                chip: info.BetVal,
                            }
                            this._totalBetNum.push(bet_obj);
                            let posIdx = (info.Pos / 10 - mainIdx + 5) % 5;
                            //存下自己下注过的位置
                            if (info.SeatIndex == mainIdx) {
                                this._betTemp.push(info.Pos);
                                this._viewUI.btn_max.disabled = true;
                                this._viewUI.btn_min.disabled = true;
                                this._viewUI.btn_bet.disabled = true;
                                this._viewUI.btn_enter.disabled = true;
                                this._viewUI["img_choose" + posIdx].visible = false;
                            }
                            //下注的是自己位置，显示下注完成按钮
                            if (info.Pos == mainIdx * 10) {
                                this._viewUI.btn_complete.visible = true;
                                this._viewUI.btn_xuya.visible = false;
                                this._lastBetVal = info.BetVal;
                                //空位置显示下东西
                                for (let unitIdx = 1; unitIdx < 6; unitIdx++) {
                                    let unit = this._game.sceneObjectMgr.getUnitByIdx(unitIdx);
                                    if (!unit) {
                                        let posIndex = (unitIdx - mainIdx + 5) % 5;
                                        let isBet: boolean = false;
                                        for (let k = 0; k < this._betInfo.length; k++) {
                                            //已经被抢了，按钮置灰，直接return 
                                            if (this._betInfo[k].pos == unitIdx * 10) {
                                                isBet = true;
                                                break;
                                            }
                                        }
                                        if (!isBet) {
                                            this._viewUI["txt_prompt" + posIndex].text = "点击在此区域下注";
                                            this._viewUI["img_prompt" + posIndex].skin = Path_game_blackjack.ui_blackjack + "tu_qipuao1.png";
                                            this._viewUI["box_prompt" + posIndex].visible = true;
                                        }
                                    }
                                }
                            }
                            //显示下注总筹码
                            this._viewUI["box_chip" + posIdx].visible = true;
                            let chipStr = EnumToString.getPointBackNum(info.BetVal, 2);
                            this._viewUI["text_chip" + posIdx].text = chipStr;
                            //创建筹码
                            let chipType = Math.floor(info.BetVal / ChipConfig[this._blackjackStory.mapLv][0]);
                            this.createObj(this._chipTypeBet, info.Pos, mainIdx, info.SeatIndex, chipType);
                            //抢注的位置显示名字
                            if (info.Pos != info.SeatIndex * 10) {
                                let unit = this._game.sceneObjectMgr.getUnitByIdx(info.SeatIndex)
                                let name = unit.GetName();
                                if (unit.type == UnitField.TYPE_ID_PLAYER) {
                                    if (unit.GetIndex() == mainIdx) {
                                        name = getMainPlayerName(unit.GetName());
                                    } else {
                                        name = getOtherPlayerName(unit.GetName());
                                    }
                                }
                                this._viewUI["txt_name" + posIdx].visible = true;
                                this._viewUI["txt_name" + posIdx].text = name;
                                this._viewUI["box_prompt" + posIdx].visible = false;
                            }
                        }
                        break;
                    }
                    case 15: {   //发牌
                        if (this._battleIndex < i) {
                            this._battleIndex = i
                            let info = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoDeal;
                            //新整一个数组
                            let cardsTemp = [];
                            for (let cardIdx = 0; cardIdx < info.Cards.length; cardIdx++) {
                                cardsTemp.push(info.Cards[cardIdx]);
                            }
                            let obj = {
                                pos: info.SeatIndex,    //位置
                                cards: cardsTemp,      //牌
                            }
                            this._allCardsInfo.push(obj);
                        }
                        break;
                    }
                    case 16: {   //买保险
                        if (this._battleIndex < i) {
                            this._battleIndex = i
                            let info = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBuy;
                            let obj = {
                                pos: info.Pos,          //买保险位置
                                idx: info.SeatIndex,    //玩家位置
                                optType: info.OptType,  //操作类型
                            }
                            this._buyInfo.push(obj);
                            //下一家购买保险
                            if (info.SeatIndex == mainIdx) {
                                this._betTemp.splice(0, 1);
                                let betIdx = (this._betPos - mainIdx + 5) % 5;
                                this._viewUI["box_prompt" + betIdx].visible = false;
                                if (this._betTemp.length > 0) {
                                    this._betPos = this._betTemp[0] / 10
                                    betIdx = (this._betPos - mainIdx + 5) % 5;
                                    this._viewUI["box_prompt" + betIdx].visible = true;
                                    this._viewUI["txt_prompt" + betIdx].text = "是否为您下注的" + (this._betPos - mainIdx + 5) % 5 + "号位购买保险";
                                    this._viewUI["img_prompt" + betIdx].skin = Path_game_blackjack.ui_blackjack + "tu_qipuao.png";
                                } else {
                                    this._viewUI.box_state1.visible = false;
                                }
                            }
                            //显示下注总筹码
                            let betVal = info.BetVal;
                            let posIdx = (info.Pos - mainIdx + 5) % 5;
                            for (let idx = 0; idx < this._totalBetNum.length; idx++) {
                                if (this._totalBetNum[idx].pos == info.Pos) {
                                    this._totalBetNum[idx].chip = this._totalBetNum[idx].chip + betVal;
                                    let chipStr = EnumToString.getPointBackNum(this._totalBetNum[idx].chip, 2);
                                    this._viewUI["text_chip" + posIdx].text = chipStr;
                                }
                            }
                            if (info.OptType == 1) {
                                //创建筹码
                                let chipType = Math.floor(info.BetVal / ChipConfig[this._blackjackStory.mapLv][0]);
                                this.createObj(this._chipTypeBuy, info.Pos, mainIdx, info.SeatIndex, chipType);
                                //显示买保险标识
                                this._viewUI["img_baoxian" + posIdx].visible = this._viewUI["img_chip" + posIdx].visible;
                                this._viewUI["img_bao" + posIdx].visible = this._viewUI["txt_name" + posIdx].visible;
                            }

                        }
                        break;
                    }
                    case 17: {   //双倍下注
                        if (this._battleIndex < i) {
                            this._battleIndex = i
                            let info = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoDouble;
                            this._doubleSeat.push(info.Pos);
                            //显示下注总筹码
                            for (let idx = 0; idx < this._totalBetNum.length; idx++) {
                                if (this._totalBetNum[idx].pos == Math.floor(info.Pos / 10)) {
                                    this._totalBetNum[idx].chip = this._totalBetNum[idx].chip + info.BetVal;
                                    let posIdx = (Math.floor(info.Pos / 10) - mainIdx + 5) % 5;
                                    let chipStr = EnumToString.getPointBackNum(this._totalBetNum[idx].chip, 2);
                                    this._viewUI["text_chip" + posIdx].text = chipStr;
                                }
                            }
                            //创建筹码
                            let chipType = Math.floor(info.BetVal / ChipConfig[this._blackjackStory.mapLv][0]);
                            this.createObj(this._chipTypeDouble, info.Pos, mainIdx, info.SeatIndex, chipType);
                            let isPart: boolean = false;
                            let pos = Math.floor(info.Pos / 10);
                            let posIdx = (pos - mainIdx + 5) % 5;
                            let childPos = info.Pos % 10;
                            let doubleIdx = (info.Pos - mainIdx * 10 + 50) % 50 + 10;
                            if (this._partPos.indexOf(pos) >= 0) {
                                isPart = true;
                            }
                            if (!isPart) {
                                this._viewUI["img_double" + posIdx].visible = true;
                                this._viewUI["img_double" + posIdx].x = this._doublePos[doubleIdx][0];
                                this._viewUI["img_double" + posIdx].y = this._doublePos[doubleIdx][1];
                            } else {
                                this._viewUI["img_double" + posIdx + "_" + childPos].visible = true;
                                this._viewUI["img_double" + posIdx + "_" + childPos].x = this._doublePosPart[doubleIdx][0];
                                this._viewUI["img_double" + posIdx + "_" + childPos].y = this._doublePosPart[doubleIdx][1];
                            }
                        }
                        break;
                    }
                    case 18: {   //分牌
                        if (this._battleIndex < i) {
                            this._battleIndex = i
                            let info = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoPart;
                            this._partPos.push(info.Pos / 10)
                            for (let k = 0; k < this._allCardsInfo.length; k++) {
                                if (info.Pos == this._allCardsInfo[k].pos) {
                                    let card = [];
                                    card.push(this._allCardsInfo[k].cards[1]);
                                    let obj = {
                                        pos: info.Pos + 1,
                                        cards: card,
                                    }
                                    this._allCardsInfo.push(obj);
                                    this._allCardsInfo[k].cards.splice(1, 1);
                                }
                            }
                            if (!this._blackjackMgr.isReLogin) {
                                this._blackjackMgr.partCard(info.Pos)
                                this._blackjackMgr.setDisabled(info.Pos, true);
                            }
                            //显示下注总筹码
                            let posIdx = (Math.floor(info.Pos / 10) - mainIdx + 5) % 5;
                            for (let idx = 0; idx < this._totalBetNum.length; idx++) {
                                if (this._totalBetNum[idx].pos == Math.floor(info.Pos / 10)) {
                                    this._totalBetNum[idx].chip = this._totalBetNum[idx].chip + info.BetVal;
                                    let chipStr = EnumToString.getPointBackNum(this._totalBetNum[idx].chip, 2);
                                    this._viewUI["text_chip" + posIdx].text = chipStr;
                                }
                            }
                            //创建筹码
                            for (let chipId = 0; chipId < this._totalChip.length; chipId++) {
                                let chip = this._totalChip[chipId] as BlackjackChip;
                                if (chip._posIndex == info.Pos) {
                                    chip.moveChip(info.Pos);
                                }
                            }
                            let obj = {
                                pos: info.Pos + 1,      //下注位置
                                idx: info.SeatIndex,    //玩家位置
                                chip: info.BetVal,      //下注多少
                            }
                            this._betInfo.push(obj);
                            let chipType = Math.floor(info.BetVal / ChipConfig[this._blackjackStory.mapLv][0]);
                            this.createObj(this._chipTypePart, info.Pos + 1, mainIdx, info.SeatIndex, chipType);
                            //显示点数
                            this._viewUI["view_qipao" + posIdx + "_1"].visible = true;
                            //分牌按钮置灰
                            if (info.SeatIndex == mainIdx) {
                                this._viewUI.btn_part.disabled = true;
                            }
                        }
                        break;
                    }
                    case 19: {   //要牌
                        if (this._battleIndex < i) {
                            this._battleIndex = i
                            let info = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoAsk;
                            let handle = Handler.create(this, this._blackjackMgr.createObj);
                            let posIdx = (Math.floor(info.SeatIndex / 10) - mainIdx + 5) % 5;
                            for (let cardIdx = 0; cardIdx < this._allCardsInfo.length; cardIdx++) {
                                if (this._allCardsInfo[cardIdx].pos == info.SeatIndex) {
                                    this._allCardsInfo[cardIdx].cards.push(info.Card)
                                    let isPart = false;
                                    let pos = Math.floor(info.SeatIndex / 10);
                                    if (this._partPos.indexOf(pos) >= 0) {
                                        isPart = true;
                                    }
                                    if (!this._blackjackMgr.isReLogin) {
                                        this._blackjackMgr.addCard(info.Card, handle, info.SeatIndex, this._allCardsInfo[cardIdx].cards.length - 1, isPart)
                                        this._game.playSound(PathGameTongyong.music_tongyong + "fapai.mp3", false);
                                    }
                                    let count = this._blackjackMgr.checkCardsType(this._allCardsInfo[cardIdx].cards, isPart);
                                    //显示点数
                                    let childPos = info.SeatIndex % 10;
                                    let boomIdx = (info.SeatIndex - mainIdx * 10 + 50) % 50 + 10;
                                    if (info.SeatIndex < 60) {
                                        Laya.timer.once(200, this, () => {
                                            if (count[0] == 0) {
                                                this._viewUI["view_qipao" + posIdx + "_" + childPos].img_bg.skin = Path_game_blackjack.ui_blackjack + "bg_4.png"
                                                this._viewUI["view_qipao" + posIdx + "_" + childPos].txt_count.text = "爆牌";
                                                if (!this._blackjackMgr.isReLogin) {
                                                    this._game.playSound(Path_game_blackjack.music_blackjack + MUSIC_PATH.baoPaiMusic, false);
                                                    if (!isPart) {
                                                        this._viewUI.view_boom.x = this._boomPos[boomIdx][0];
                                                        this._viewUI.view_boom.y = this._boomPos[boomIdx][1];
                                                    } else {
                                                        this._viewUI.view_boom.x = this._boomPosPart[boomIdx][0];
                                                        this._viewUI.view_boom.y = this._boomPosPart[boomIdx][1];
                                                    }
                                                    this._viewUI.view_boom.visible = true;
                                                    this._viewUI.view_boom.ani1.play(1, false);
                                                }
                                            } else {
                                                this._viewUI["view_qipao" + posIdx + "_" + childPos].img_bg.skin = Path_game_blackjack.ui_blackjack + "bg_1.png"
                                                if (count[0] == 99) {
                                                    if (!this._blackjackMgr.isReLogin) {
                                                        this._game.playSound(Path_game_blackjack.music_blackjack + MUSIC_PATH.teShuPaiMusic, false)
                                                    }
                                                    if (!isPart) {
                                                        this._viewUI["view_wxl" + posIdx].visible = true;
                                                        this._viewUI["view_wxl" + posIdx].ani1.play(1, false);
                                                    } else {
                                                        this._viewUI["view_wxl" + posIdx + "_" + childPos].visible = true;
                                                        this._viewUI["view_wxl" + posIdx + "_" + childPos].ani1.play(1, false);
                                                    }
                                                    this._viewUI["view_qipao" + posIdx + "_" + childPos].visible = false;
                                                } else {
                                                    if (count[1] > 0) {
                                                        //双倍下注，特殊对待
                                                        if (this._doubleSeat.indexOf(info.SeatIndex) >= 0) {
                                                            this._viewUI["view_qipao" + posIdx + "_" + childPos].txt_count.text = count[1];
                                                        } else {
                                                            this._viewUI["view_qipao" + posIdx + "_" + childPos].txt_count.text = count[0] + "/" + count[1];
                                                        }
                                                    } else {
                                                        this._viewUI["view_qipao" + posIdx + "_" + childPos].txt_count.text = count[0];
                                                    }
                                                }
                                            }
                                        })
                                    } else if (info.SeatIndex == 60) {
                                        Laya.timer.once(200, this, () => {
                                            if (count[0] == 0) {
                                                this._viewUI.view_qipao5_0.img_bg.skin = Path_game_blackjack.ui_blackjack + "bg_4.png"
                                                this._viewUI.view_qipao5_0.txt_count.text = "爆牌";
                                                if (!this._blackjackMgr.isReLogin) {
                                                    this._game.playSound(Path_game_blackjack.music_blackjack + MUSIC_PATH.baoPaiMusic, false);
                                                    this._viewUI.view_boom.x = 530;
                                                    this._viewUI.view_boom.y = 140;
                                                    this._viewUI.view_boom.visible = true;
                                                    this._viewUI.view_boom.ani1.play(1, false);
                                                }
                                            } else {
                                                this._viewUI.view_qipao5_0.img_bg.skin = Path_game_blackjack.ui_blackjack + "bg_1.png"
                                                if (count[0] == 99) {
                                                    if (!this._blackjackMgr.isReLogin) {
                                                        this._game.playSound(Path_game_blackjack.music_blackjack + MUSIC_PATH.teShuPaiMusic, false)
                                                    }
                                                    this._viewUI.view_wxl5.visible = true;
                                                    this._viewUI.view_wxl5.ani1.play(1, false);
                                                    this._viewUI.view_qipao5_0.visible = false;
                                                } else {
                                                    if (count[1] > 0) {
                                                        this._viewUI.view_qipao5_0.txt_count.text = count[0] + "/" + count[1];
                                                    } else {
                                                        this._viewUI.view_qipao5_0.txt_count.text = count[0];
                                                    }
                                                }
                                            }
                                        })
                                    }
                                }
                                //改变按钮状态
                                if (this._allCardsInfo[cardIdx].pos == this._mapInfo.GetCurrentBetPos()) {
                                    for (let k = 0; k < this._betInfo.length; k++) {
                                        if (this._allCardsInfo[cardIdx].pos == this._betInfo[k].pos) {
                                            if (this._betInfo[k].idx == mainIdx) {
                                                let cards = this._allCardsInfo[cardIdx].cards;
                                                if (cards.length > 2) {
                                                    this._viewUI.btn_double.disabled = true;
                                                } else {
                                                    this._viewUI.btn_double.disabled = false;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        break;
                    }
                    case 34: {   //21点翻牌
                        if (this._battleIndex < i) {
                            this._battleIndex = i
                            let info = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoFanPai;
                            for (let cardIdx = 0; cardIdx < this._allCardsInfo.length; cardIdx++) {
                                if (this._allCardsInfo[cardIdx].pos == info.SeatIndex) {
                                    this._allCardsInfo[cardIdx].cards.push(info.Card)
                                }
                            }
                            if (info.SeatIndex == 60) {
                                this._blackjackMgr.setCardVal(info.Card);
                            }
                        }
                        break;
                    }
                    case 20: {   //停牌
                        if (this._battleIndex < i) {
                            this._battleIndex = i
                            let info = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoStop;
                            let posIdx = (Math.floor(info.Pos / 10) - mainIdx + 5) % 5;
                            let childPos = info.Pos % 10;
                            for (let cardIdx = 0; cardIdx < this._allCardsInfo.length; cardIdx++) {
                                if (this._allCardsInfo[cardIdx].pos == info.Pos) {
                                    let isPart = false;
                                    let pos = Math.floor(info.Pos / 10);
                                    if (this._partPos.indexOf(pos) >= 0) {
                                        isPart = true;
                                    }
                                    let count = this._blackjackMgr.checkCardsType(this._allCardsInfo[cardIdx].cards, isPart);
                                    //显示点数
                                    if (info.SeatIndex < 60) {
                                        let cardCount = count[0] > count[1] ? count[0] : count[1];
                                        this._viewUI["view_qipao" + posIdx + "_" + childPos].txt_count.text = cardCount;
                                    }
                                }
                            }
                        }
                        break;
                    }
                    case 11: {   //结算
                        if (this._battleIndex < i) {
                            this._battleIndex = i
                            let info = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoSettle;
                            this.addMoneyClip(info.SettleVal, info.SeatIndex);
                        }
                        break;
                    }
                    default:
                        break;
                }
            }
        }

        private _chipTypeBet: number = 1;  //下注丢筹码
        private _chipTypeBuy: number = 2;  //买保险丢筹码
        private _chipTypeDouble: number = 3;  //双倍下注丢筹码
        private _chipTypePart: number = 4;  //分牌丢筹码
        private _chipTypeWin: number = 5;  //赢了丢筹码
        private _chipTypeHjk: number = 6;   //庄家黑杰克，发给买保险的
        private _chipCount: any = [[1, 1], [5, 2], [10, 3], [15, 1], [20, 2], [25, 3], [35, 1], [45, 3], [55, 3],
        [60, 1], [65, 2], [70, 3], [75, 1], [80, 2], [85, 3], [90, 1], [95, 2], [100, 3],];   //单次下注筹码数量
        //创建筹码
        private createObj(optType: number, posIdx: number, mainIdx: number, ownerIdx: number, val: number) {
            let isPart = false;
            if (this._partPos.indexOf(Math.floor(posIdx / 10)) >= 0) {
                isPart = true;
            }
            let maxCount: number = 0;
            for (let i = 0; i < this._chipCount.length; i++) {
                if (val <= this._chipCount[i][0]) {
                    maxCount = this._chipCount[i][1];
                    break;
                }
            }
            for (let chipCount = 0; chipCount < maxCount; chipCount++) {
                let index: number = chipCount;
                if (optType == this._chipTypeDouble) {
                    index = index + maxCount;
                }
                let chip = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CHIP_MARK, BlackjackChip) as BlackjackChip;
                chip.setData(optType, posIdx, mainIdx, index, isPart, ownerIdx, val);
                if (optType == this._chipTypeBet || optType == this._chipTypeDouble || optType == this._chipTypePart) {
                    this._totalChip.push(chip);
                    if (this._blackjackMgr.isReLogin) {
                        chip.drawChip();
                    }
                    else {
                        chip.sendChip();
                    }
                }
                else if (optType == this._chipTypeBuy) {
                    this._insuranceChip.push(chip);
                    chip.sendinsuranceChip();
                }
                else if (optType == this._chipTypeWin) {
                    this._totalChip.push(chip);
                    chip.winFlyChip(posIdx, isPart)
                }
                else if (optType == this._chipTypeHjk) {
                    this._insuranceChip.push(chip);
                    chip.sendHjkChip();
                }
            }
            if (!this._blackjackMgr.isReLogin) {
                this._game.playSound(Path_game_blackjack.music_blackjack + MUSIC_PATH.chipMusic, false);
            }
        }

        //清理筹码
        private clearChip(): void {
            if (this._totalChip && this._totalChip.length) {
                for (let i: number = 0; i < this._totalChip.length; i++) {
                    let chip = this._totalChip[i] as BlackjackChip;
                    this._game.sceneObjectMgr.clearOfflineObject(chip);
                    // chip.clear();
                    // chip = null;
                }
            }
            this._totalChip = [];
            if (this._insuranceChip && this._insuranceChip.length) {
                for (let i: number = 0; i < this._insuranceChip.length; i++) {
                    let chip = this._insuranceChip[i] as BlackjackChip;
                    this._game.sceneObjectMgr.clearOfflineObject(chip);
                    // chip.clear();
                    // chip = null;
                }
            }
            this._insuranceChip = [];
        }

        //金币变化 飘字clip
        public addMoneyClip(value: number, pos: number): void {
            let idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
            if (!idx) return;
            let valueClip = value >= 0 ? new BlackjackClip(BlackjackClip.ADD_MONEY_FONT) : new BlackjackClip(BlackjackClip.SUB_MONEY_FONT);
            let preSkin = value >= 0 ? PathGameTongyong.ui_tongyong_general + "tu_jia.png" : PathGameTongyong.ui_tongyong_general + "tu_jian.png";
            valueClip.scale(0.8, 0.8);
            valueClip.anchorX = 0.5;
            let moneyStr = EnumToString.getPointBackNum(Math.abs(value), 2);
            valueClip.setText(moneyStr + "", true, false, preSkin);
            let index = (pos - idx + 5) % 5;
            let moveX = 50;
            let moveY = 30;
            //中间那个飘字位置比较特殊
            if (index == 0) {
                moveX = -50;
                moveY = 80;
            }
            let posX = this._viewUI["view_player" + index].x + moveX;
            let posY = this._viewUI["view_player" + index].y + moveY;
            let deep = this._viewUI.img_menu.parent.getChildIndex(this._viewUI.img_menu);
            if (!valueClip.parent) this._viewUI.box_view.addChildAt(valueClip, deep);
            valueClip.pos(posX, posY);
            this._clipList.push(valueClip);
            Laya.Tween.clearAll(valueClip);
            Laya.Tween.to(valueClip, { y: posY - 70 }, 1000);
            if (index == 0) {
                let maxRan = value >= 0 ? 3 : 4;
                let musicType = MathU.randomRange(1, maxRan);
                let str: string = value >= 0 ? MUSIC_PATH.winMusic : MUSIC_PATH.loseMusic;
                this._game.playSound(PathGameTongyong.music_tongyong + str + musicType + ".mp3", true);
            }
        }

        //清理飘钱动画
        private clearClip(): void {
            if (this._clipList && this._clipList.length) {
                for (let i: number = 0; i < this._clipList.length; i++) {
                    let clip = this._clipList[i];
                    clip.removeSelf();
                    clip.destroy();
                    clip = null;
                }
            }
            this._clipList = [];
        }

        //爆牌效果播完要隐藏
        private afterBoom(): void {
            this._viewUI.view_boom.visible = false;
        }

        //洗牌动画之后
        private afterXiPai(): void {
            Laya.Tween.clearAll(this._viewUI.view_xipai);
            Laya.Tween.to(this._viewUI.view_xipai, { x: 977, y: 37, rotation: 7, scaleX: 0.5, scaleY: 0.5 }, 300, null, Handler.create(this, () => {
                this._viewUI.view_paixie.img_card.visible = true;
                this._viewUI.view_paixie.ani1.play(1, false);
                this._viewUI.view_xipai.visible = false;
            }));
        }

        //充值弹框
        private onNotEnoughMoney(): void {
            if (!this._game.sceneObjectMgr.mainPlayer) return;
            if (this._game.sceneObjectMgr.mainPlayer.playerInfo.money < ChipConfig[this._blackjackStory.mapLv][2]) {
                TongyongPageDef.ins.alertRecharge(StringU.substitute("老板，您的金币少于{0}哦~\n补充点金币去大杀四方吧~", ChipConfig[this._blackjackStory.mapLv][2]), () => {
                    this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                }, () => {
                }, false, TongyongPageDef.TIPS_SKIN_STR['cz']);
            }
        }

        //重置数据
        private resetData(): void {
            this._battleIndex = -1;
            this._betPos = 0;
            this._betVal = 0;
            this._betInfo = [];
            this._buyInfo = [];
            this._allCardsInfo = [];
            this._betTemp = [];
            this._totalBetNum = [];
            this._partPos = [];
            this._totalChip = [];
            this._doubleSeat = [];
            this._blackjackMgr && (this._blackjackMgr.isReLogin = false);
            this._viewUI.view_xipai.rotation = 0;
            this._viewUI.view_xipai.scaleX = 1;
            this._viewUI.view_xipai.scaleY = 1;
            this._viewUI.view_xipai.x = 636;
            this._viewUI.view_xipai.y = 243;
            this.clearChip();
            this._dealCards = false;
            this._blackjackStory && (this._blackjackStory._isDealCard = false);
        }

        private clearMapInfoListen(): void {
            this._viewUI.view_boom.ani1.off(LEvent.COMPLETE, this, this.afterBoom);
            this._viewUI.view_xipai.ani_xipai.off(LEvent.COMPLETE, this, this.afterXiPai);

            this._game.sceneObjectMgr.off(BlackjackMapInfo.EVENT_BLACKJACK_STATUS_CHECK, this, this.onUpdateMapState);
            this._game.sceneObjectMgr.off(BlackjackMapInfo.EVENT_BLACKJACK_BATTLE_CHECK, this, this.updateBattledInfo);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
            this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
            Laya.Tween.clearAll(this);
            Laya.timer.clearAll(this);
        }

        public close(): void {
            if (this._viewUI) {
                this._viewUI.btn_menu.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_back.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_rule.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_seeting.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_record.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_xuya.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_bet.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_min.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_max.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_enter.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_buy.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_notbuy.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_ask.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_part.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_double.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_stop.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_complete.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_continue.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_baodian.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_chongzhi.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_qifu.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.view_boom.ani1.off(LEvent.COMPLETE, this, this.afterBoom);
                this._viewUI.view_xipai.ani_xipai.off(LEvent.COMPLETE, this, this.afterXiPai);

                this._viewUI.view_boom.ani1.off(LEvent.COMPLETE, this, this.afterBoom);
                this._viewUI.view_xipai.ani_xipai.off(LEvent.COMPLETE, this, this.afterXiPai);

                this._game.sceneObjectMgr.off(BlackjackMapInfo.EVENT_BLACKJACK_STATUS_CHECK, this, this.onUpdateMapState);
                this._game.sceneObjectMgr.off(BlackjackMapInfo.EVENT_BLACKJACK_BATTLE_CHECK, this, this.updateBattledInfo);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
                this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                Laya.Tween.clearAll(this);
                Laya.timer.clearAll(this);
                this._totalChip = [];
                this._betInfo = [];
                this._buyInfo = [];
                this._allCardsInfo = [];
                this._betTemp = [];
                this._partPos = [];
                this._doubleSeat = [];
                this._totalBetNum = [];
                this._totalChip = [];
                this._insuranceChip = [];

                this._clipList = [];
                this.clearClip();
                this.clearClipXZ();
                if (this._blackjackMgr) {
                    this._blackjackMgr.off(BlackjackMgr.DEAL_CARDS, this, this.onAfterDealCards);
                }
                this._mapInfo = null;
                this._game.stopMusic();
                this._game.stopAllSound();
            }


            super.close();
        }
    }
}