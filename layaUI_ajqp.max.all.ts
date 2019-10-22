
module ui.ajqp.game_ui.ershiyidian.component {
    export class Effect_chongzhiUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":246,"height":94},"child":[{"type":"Box","props":{"y":0,"x":0},"child":[{"type":"Button","props":{"y":-28,"x":0,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_chongzhi.png"}},{"type":"Box","props":{"y":0,"x":0,"blendMode":"lighter"},"child":[{"type":"Button","props":{"y":0,"x":12,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/tu_chizhizz.png"}},{"type":"Image","props":{"x":79.16666666666666,"skin":"tongyong_ui/game_ui/tongyong/general/tu_czsg.png","renderType":"mask"},"compId":3}]}]}],"animations":[{"nodes":[{"target":3,"keyframes":{"x":[{"value":-173,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":0},{"value":183,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":40}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.ershiyidian.component.Effect_chongzhiUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.ershiyidian.component {
    export class Effect_yqUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":106,"height":144},"child":[{"type":"Image","props":{"y":71,"x":53,"skin":"tongyong_ui/game_ui/tongyong/yq/tu_kuang.png","scaleY":1.2,"scaleX":1.2,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":3},{"type":"Image","props":{"y":71,"x":53,"skin":"tongyong_ui/game_ui/tongyong/yq/tu_kuang.png","scaleY":1.2,"scaleX":1.2,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":4},{"type":"Image","props":{"y":71,"x":53,"skin":"tongyong_ui/game_ui/tongyong/yq/tu_kuang.png","scaleY":1.2,"scaleX":1.2,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":5},{"type":"Image","props":{"y":71,"x":53,"skin":"tongyong_ui/game_ui/tongyong/yq/tu_kuang.png","scaleY":1.1199999999999999,"scaleX":1.1199999999999999,"anchorY":0.5,"anchorX":0.5,"alpha":0.5714285714285714},"compId":6},{"type":"Image","props":{"y":71,"x":53,"skin":"tongyong_ui/game_ui/tongyong/yq/tu_kuang.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5,"alpha":0.6666666666666666},"compId":7},{"type":"Image","props":{"y":71,"x":53,"skin":"tongyong_ui/game_ui/tongyong/yq/tu_kuang.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":8},{"type":"Image","props":{"y":73,"x":52,"skin":"tongyong_ui/game_ui/tongyong/yq/xx10013.png","anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":24}],"animations":[{"nodes":[{"target":3,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleY","index":5},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":14}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleX","index":5},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":14}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":6},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":14}]}},{"target":4,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":4,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":10},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":20}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":4,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":10},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":20}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":4,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":6},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":12},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":20}]}},{"target":5,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":5,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":16},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":27}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":5,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":16},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":27}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":5,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":12},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":18},{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":26}]}},{"target":6,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":6,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":22},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":32}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":6,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":22},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":32}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":6,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":19},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":25},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":32}]}},{"target":7,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":7,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":28},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":38}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":7,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":28},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":38}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":7,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":24},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":30},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":38}]}},{"target":8,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":8,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleY","index":34},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleY","index":44}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":8,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleX","index":34},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleX","index":44}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":8,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":30},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":36},{"value":0,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":44}]}},{"target":24,"keyframes":{"skin":[{"value":"tongyong_ui/game_ui/tongyong/yq/xx10000.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":0},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10001.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":4},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10002.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":6},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10003.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":8},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10004.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":10},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10005.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":12},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10006.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":14},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10007.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":16},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10008.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":18},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10009.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":20},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10010.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":22},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10011.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":24},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10012.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":26},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10013.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":28},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10014.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":30},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10015.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":32},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10016.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":34},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10017.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":36},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10018.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":38},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10019.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":40}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":24,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":false,"target":24,"key":"alpha","index":2},{"value":0,"tweenMethod":"linearNone","tween":true,"target":24,"key":"alpha","index":41}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.ershiyidian.component.Effect_yqUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.ershiyidian.component {
    export class PaiXeiUI extends View {
		public ani1:Laya.FrameAnimation;
		public ani2:Laya.FrameAnimation;
		public img_card:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":200,"height":200},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"blackjack_ui/game_ui/ershiyidian/tu_pai1.png"}},{"type":"Image","props":{"y":0,"x":0,"var":"img_card","skin":"blackjack_ui/game_ui/ershiyidian/tu_pai2.png"},"compId":3},{"type":"Image","props":{"y":44,"x":-37,"skin":"tongyong_ui/game_ui/tongyong/general/effect/fapai_2/10000.png"},"compId":5},{"type":"Image","props":{"y":0,"x":0,"skin":"blackjack_ui/game_ui/ershiyidian/tu_pai3.png"}}],"animations":[{"nodes":[{"target":3,"keyframes":{"y":[{"value":-75,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":10}],"x":[{"value":40,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":10}]}}],"name":"ani1","id":1,"frameRate":24,"action":0},{"nodes":[{"target":5,"keyframes":{"skin":[{"value":"tongyong_ui/game_ui/tongyong/general/effect/fapai_2/10000.png","tweenMethod":"linearNone","tween":false,"target":5,"key":"skin","index":0},{"value":"tongyong_ui/game_ui/tongyong/general/effect/fapai_2/10001.png","tweenMethod":"linearNone","tween":false,"target":5,"key":"skin","index":1},{"value":"tongyong_ui/game_ui/tongyong/general/effect/fapai_2/10002.png","tweenMethod":"linearNone","tween":false,"target":5,"key":"skin","index":2}]}}],"name":"ani2","id":2,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.ershiyidian.component.PaiXeiUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.ershiyidian.component {
    export class PaoPaoUI extends View {
		public img_bg:Laya.Image;
		public txt_count:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":50,"height":32},"child":[{"type":"Image","props":{"y":15,"x":26,"var":"img_bg","skin":"blackjack_ui/game_ui/ershiyidian/bg_1.png","scaleX":-1,"anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":7,"x":7,"width":35,"var":"txt_count","text":"爆牌","leading":6,"height":20,"fontSize":16,"color":"#dadada","align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.ershiyidian.component.PaoPaoUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.ershiyidian.component {
    export class PaoPao1UI extends View {
		public img_bg:Laya.Image;
		public txt_count:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":50,"height":32},"child":[{"type":"Image","props":{"y":16,"x":25,"var":"img_bg","skin":"blackjack_ui/game_ui/ershiyidian/bg_1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":7,"x":7,"width":35,"var":"txt_count","text":"爆牌","leading":6,"height":20,"fontSize":16,"color":"#dadada","align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.ershiyidian.component.PaoPao1UI.uiView);
        }
    }
}

module ui.ajqp.game_ui.ershiyidian.component {
    export class TouXiangUI extends View {
		public img_head:Laya.Image;
		public img_txk:Laya.Image;
		public text_name:laya.display.Text;
		public text_money:laya.display.Text;
		public img_frame:Laya.Image;
		public img_mask:Laya.Image;
		public img_qifu:Laya.Image;
		public qifu_type:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":100,"height":138},"child":[{"type":"Box","props":{"y":1,"x":1},"child":[{"type":"Image","props":{"y":73,"x":-15,"skin":"tongyong_ui/game_ui/tongyong/general/tu_txk1.png"}},{"type":"Image","props":{"y":30,"x":49,"var":"img_head","skin":"tongyong_ui/game_ui/tongyong/touxiang/head_0.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":79,"x":-6,"width":114,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k2.png","height":24}},{"type":"Image","props":{"y":78,"x":-10,"skin":"tongyong_ui/game_ui/tongyong/general/icon_money.png"}},{"type":"Image","props":{"y":-16,"x":2,"var":"img_txk","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_v1.png","scaleY":0.95,"scaleX":0.95}},{"type":"Text","props":{"y":113,"x":-3,"wordWrap":true,"width":102,"var":"text_name","text":"玩家名字","leading":6,"height":21,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":80,"x":-5,"wordWrap":true,"width":110,"var":"text_money","text":"0","leading":6,"height":22,"fontSize":20,"color":"#f8ea5e","align":"center"}},{"type":"Image","props":{"y":0,"x":0,"var":"img_frame","skin":"tongyong_ui/game_ui/tongyong/general/tu_djs.png"},"child":[{"type":"Image","props":{"y":-3,"x":-3,"width":104,"var":"img_mask","renderType":"mask","height":142}}]},{"type":"Image","props":{"y":21,"x":69,"visible":false,"var":"img_qifu","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_qf.png"}},{"type":"Image","props":{"y":64,"x":49,"visible":false,"var":"qifu_type","skin":"tongyong_ui/game_ui/tongyong/qifu/f_cs2.png","scaleY":0.5,"scaleX":0.5,"anchorY":1,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.ershiyidian.component.TouXiangUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.ershiyidian.component {
    export class YingUI extends View {
		public ani1:Laya.FrameAnimation;
		public img_win:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":120,"height":120},"child":[{"type":"Image","props":{"var":"img_win","skin":"ui/game_ui/zhajinhua/tu_ying2.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"scaleY":[{"value":2,"tweenMethod":"backOut","tween":true,"target":2,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":10}],"scaleX":[{"value":2,"tweenMethod":"backOut","tween":true,"target":2,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":10}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.ershiyidian.component.YingUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.ershiyidian.effect {
    export class BaoPaiUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":210,"height":210},"child":[{"type":"Image","props":{"y":103,"x":104,"skin":"blackjack_ui/game_ui/ershiyidian/effect/20000.png","anchorY":0.5,"anchorX":0.5},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"skin":[{"value":"blackjack_ui/game_ui/ershiyidian/effect/20000.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":0},{"value":"blackjack_ui/game_ui/ershiyidian/effect/20001.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":1},{"value":"blackjack_ui/game_ui/ershiyidian/effect/20002.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":2},{"value":"blackjack_ui/game_ui/ershiyidian/effect/20003.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":3},{"value":"blackjack_ui/game_ui/ershiyidian/effect/20004.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":4},{"value":"blackjack_ui/game_ui/ershiyidian/effect/20005.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":5},{"value":"blackjack_ui/game_ui/ershiyidian/effect/20006.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":6},{"value":"blackjack_ui/game_ui/ershiyidian/effect/20007.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":7},{"value":"blackjack_ui/game_ui/ershiyidian/effect/20008.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":8},{"value":"blackjack_ui/game_ui/ershiyidian/effect/20009.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":9},{"value":"blackjack_ui/game_ui/ershiyidian/effect/20010.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":10},{"value":"blackjack_ui/game_ui/ershiyidian/effect/20011.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":11},{"value":"blackjack_ui/game_ui/ershiyidian/effect/20012.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":12},{"value":"blackjack_ui/game_ui/ershiyidian/effect/20013.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":13},{"value":"blackjack_ui/game_ui/ershiyidian/effect/20014.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":14},{"value":"blackjack_ui/game_ui/ershiyidian/effect/20015.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":15},{"value":"blackjack_ui/game_ui/ershiyidian/effect/20016.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":16},{"value":"blackjack_ui/game_ui/ershiyidian/effect/20017.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":17},{"value":"blackjack_ui/game_ui/ershiyidian/effect/20018.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":18},{"value":"blackjack_ui/game_ui/ershiyidian/effect/20019.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":19},{"value":"blackjack_ui/game_ui/ershiyidian/effect/20020.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":20},{"value":"blackjack_ui/game_ui/ershiyidian/effect/20021.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":21},{"value":"blackjack_ui/game_ui/ershiyidian/effect/20022.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":22},{"value":"blackjack_ui/game_ui/ershiyidian/effect/20023.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":23},{"value":"blackjack_ui/game_ui/ershiyidian/effect/20024.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":24},{"value":"blackjack_ui/game_ui/ershiyidian/effect/20025.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":25}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.ershiyidian.effect.BaoPaiUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.ershiyidian.effect {
    export class HeiJieKeUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":300,"height":200},"child":[{"type":"Image","props":{"skin":"blackjack_ui/game_ui/ershiyidian/effect/10000.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"x":[{"value":150,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":150,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":35}],"skin":[{"value":"blackjack_ui/game_ui/ershiyidian/effect/10000.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":0},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10001.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":1},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10002.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":2},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10003.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":3},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10004.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":4},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10005.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":5},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10006.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":6},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10007.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":7},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10008.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":8},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10009.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":9},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10010.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":10},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10011.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":11},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10012.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":12},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10013.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":13},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10014.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":14},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10015.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":15},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10016.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":16},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10017.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":17},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10018.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":18},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10019.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":19},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10020.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":20},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10021.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":21},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10022.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":22},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10023.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":23},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10024.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":24},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10025.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":25},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10026.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":26},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10027.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":27},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10028.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":28}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.ershiyidian.effect.HeiJieKeUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.ershiyidian.effect {
    export class WuXiaoLongUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":300,"height":200},"child":[{"type":"Image","props":{"skin":"blackjack_ui/game_ui/ershiyidian/effect/30000.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"x":[{"value":150,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":150,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":35}],"skin":[{"value":"blackjack_ui/game_ui/ershiyidian/effect/30000.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":0},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30001.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":1},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30002.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":2},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30003.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":3},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30004.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":4},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30005.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":5},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30006.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":6},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30007.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":7},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30008.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":8},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30009.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":9},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30010.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":10},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30011.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":11},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30012.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":12},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30013.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":13},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30014.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":14},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30015.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":15},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30016.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":16},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30017.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":17},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30018.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":18},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30019.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":19},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30020.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":20},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30021.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":21},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30022.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":22},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30023.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":23},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30024.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":24},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30025.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":25},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30026.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":26},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30027.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":27},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30028.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":28}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.ershiyidian {
    export class ErShiYiDianUI extends View {
		public box_view:Laya.Box;
		public img_double3:Laya.Image;
		public img_double2:Laya.Image;
		public img_double1:Laya.Image;
		public img_double0:Laya.Image;
		public img_double4:Laya.Image;
		public img_heguan:Laya.Image;
		public img_pool2:Laya.Image;
		public img_pool1:Laya.Image;
		public img_pool0:Laya.Image;
		public img_pool4:Laya.Image;
		public img_pool3:Laya.Image;
		public img_chip2:Laya.Image;
		public img_chip1:Laya.Image;
		public img_chip0:Laya.Image;
		public img_chip4:Laya.Image;
		public img_chip3:Laya.Image;
		public img_choose2:Laya.Image;
		public img_choose1:Laya.Image;
		public img_choose0:Laya.Image;
		public txt_choose0:Laya.Label;
		public img_choose4:Laya.Image;
		public img_choose3:Laya.Image;
		public view_hjk0:ui.ajqp.game_ui.ershiyidian.effect.HeiJieKeUI;
		public view_hjk1:ui.ajqp.game_ui.ershiyidian.effect.HeiJieKeUI;
		public view_hjk2:ui.ajqp.game_ui.ershiyidian.effect.HeiJieKeUI;
		public view_hjk3:ui.ajqp.game_ui.ershiyidian.effect.HeiJieKeUI;
		public view_hjk4:ui.ajqp.game_ui.ershiyidian.effect.HeiJieKeUI;
		public view_wxl0:ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI;
		public view_wxl1:ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI;
		public view_wxl2:ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI;
		public view_wxl3:ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI;
		public view_wxl4:ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI;
		public view_wxl0_0:ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI;
		public view_wxl0_1:ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI;
		public view_wxl1_0:ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI;
		public view_wxl1_1:ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI;
		public view_wxl2_0:ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI;
		public view_wxl2_1:ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI;
		public view_wxl3_0:ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI;
		public view_wxl3_1:ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI;
		public view_wxl4_0:ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI;
		public view_wxl4_1:ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI;
		public box_chip0:Laya.Box;
		public text_chip0:laya.display.Text;
		public box_chip1:Laya.Box;
		public text_chip1:laya.display.Text;
		public box_chip2:Laya.Box;
		public text_chip2:laya.display.Text;
		public box_chip4:Laya.Box;
		public text_chip4:laya.display.Text;
		public box_chip3:Laya.Box;
		public text_chip3:laya.display.Text;
		public txt_name0:Laya.Label;
		public txt_name4:Laya.Label;
		public txt_name3:Laya.Label;
		public txt_name1:Laya.Label;
		public txt_name2:Laya.Label;
		public view_wxl5:ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI;
		public view_qipao5_0:ui.ajqp.game_ui.ershiyidian.component.PaoPaoUI;
		public view_hjk5:ui.ajqp.game_ui.ershiyidian.effect.HeiJieKeUI;
		public view_qipao2_1:ui.ajqp.game_ui.ershiyidian.component.PaoPao1UI;
		public view_qipao1_1:ui.ajqp.game_ui.ershiyidian.component.PaoPao1UI;
		public view_qipao0_1:ui.ajqp.game_ui.ershiyidian.component.PaoPao1UI;
		public view_qipao4_1:ui.ajqp.game_ui.ershiyidian.component.PaoPao1UI;
		public view_qipao3_1:ui.ajqp.game_ui.ershiyidian.component.PaoPao1UI;
		public view_qipao2_0:ui.ajqp.game_ui.ershiyidian.component.PaoPaoUI;
		public view_qipao1_0:ui.ajqp.game_ui.ershiyidian.component.PaoPaoUI;
		public view_qipao0_0:ui.ajqp.game_ui.ershiyidian.component.PaoPaoUI;
		public view_qipao4_0:ui.ajqp.game_ui.ershiyidian.component.PaoPaoUI;
		public view_qipao3_0:ui.ajqp.game_ui.ershiyidian.component.PaoPaoUI;
		public view_boom:ui.ajqp.game_ui.ershiyidian.effect.BaoPaiUI;
		public box_prompt0:Laya.Box;
		public img_prompt0:Laya.Image;
		public txt_prompt0:laya.display.Text;
		public box_prompt1:Laya.Box;
		public img_prompt1:Laya.Image;
		public txt_prompt1:laya.display.Text;
		public box_prompt2:Laya.Box;
		public img_prompt2:Laya.Image;
		public txt_prompt2:laya.display.Text;
		public box_prompt4:Laya.Box;
		public img_prompt4:Laya.Image;
		public txt_prompt4:laya.display.Text;
		public box_prompt3:Laya.Box;
		public img_prompt3:Laya.Image;
		public txt_prompt3:laya.display.Text;
		public img_double3_1:Laya.Image;
		public img_double4_0:Laya.Image;
		public img_double4_1:Laya.Image;
		public img_double0_0:Laya.Image;
		public img_double0_1:Laya.Image;
		public img_double1_0:Laya.Image;
		public img_double1_1:Laya.Image;
		public img_double2_0:Laya.Image;
		public img_double2_1:Laya.Image;
		public img_double3_0:Laya.Image;
		public view_paixie:ui.ajqp.game_ui.ershiyidian.PaiXeiUI;
		public box_state0:Laya.Box;
		public btn_xuya:Laya.Button;
		public btn_max:Laya.Button;
		public clip_max:Laya.Clip;
		public btn_min:Laya.Button;
		public clip_min:Laya.Clip;
		public btn_bet:Laya.Button;
		public btn_enter:Laya.Button;
		public btn_complete:Laya.Button;
		public box_state1:Laya.Box;
		public btn_buy:Laya.Button;
		public btn_notbuy:Laya.Button;
		public box_state2:Laya.Box;
		public btn_ask:Laya.Button;
		public btn_stop:Laya.Button;
		public btn_double:Laya.Button;
		public btn_part:Laya.Button;
		public btn_continue:Laya.Button;
		public btn_baodian:Laya.Button;
		public text_info:laya.display.Text;
		public text_roomtype:laya.display.Text;
		public view_player2:ui.ajqp.game_ui.tongyong.TouXiangdutiaoUI;
		public view_player1:ui.ajqp.game_ui.tongyong.TouXiangdutiaoUI;
		public view_player4:ui.ajqp.game_ui.tongyong.TouXiangdutiaoUI;
		public view_player0:ui.ajqp.game_ui.tongyong.TouXiangdutiaoUI;
		public view_player3:ui.ajqp.game_ui.tongyong.TouXiangdutiaoUI;
		public img_pos2:Laya.Image;
		public img_pos1:Laya.Image;
		public img_pos0:Laya.Image;
		public img_pos4:Laya.Image;
		public img_pos3:Laya.Image;
		public img_baoxian2:Laya.Image;
		public img_baoxian1:Laya.Image;
		public img_baoxian0:Laya.Image;
		public img_baoxian4:Laya.Image;
		public img_baoxian3:Laya.Image;
		public view_xipai:ui.ajqp.game_ui.tongyong.effect.XiPaiUI;
		public img_bao2:Laya.Image;
		public img_bao1:Laya.Image;
		public img_bao0:Laya.Image;
		public img_bao4:Laya.Image;
		public img_bao3:Laya.Image;
		public box_bet:Laya.Box;
		public text_bet:laya.display.Text;
		public hslider_bet:Laya.VSlider;
		public btn_back:Laya.Button;
		public img_menu:Laya.Image;
		public btn_rule:Laya.Button;
		public btn_seeting:Laya.Button;
		public btn_record:Laya.Button;
		public btn_menu:Laya.Button;
		public btn_qifu:Laya.Button;
		public btn_chongzhi:ui.ajqp.game_ui.ershiyidian.component.Effect_chongzhiUI;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":1280,"var":"box_view","height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"width":1280,"scaleY":1.05,"scaleX":1.05,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":212,"x":964,"var":"img_double3","skin":"blackjack_ui/game_ui/ershiyidian/tu_shuangbei.png","skewX":15,"scaleY":0.45,"scaleX":0.45,"rotation":-35}},{"type":"Image","props":{"y":204,"x":307,"var":"img_double2","skin":"blackjack_ui/game_ui/ershiyidian/tu_shuangbei.png","skewX":-15,"scaleY":0.45,"scaleX":0.45,"rotation":35}},{"type":"Image","props":{"y":276,"x":450,"var":"img_double1","skin":"blackjack_ui/game_ui/ershiyidian/tu_shuangbei.png","skewX":-16,"scaleY":0.45,"scaleX":0.45,"rotation":20}},{"type":"Image","props":{"y":308,"x":635,"var":"img_double0","skin":"blackjack_ui/game_ui/ershiyidian/tu_shuangbei.png","scaleY":0.45,"scaleX":0.45}},{"type":"Image","props":{"y":284,"x":813,"var":"img_double4","skin":"blackjack_ui/game_ui/ershiyidian/tu_shuangbei.png","skewX":16,"scaleY":0.45,"scaleX":0.45,"rotation":-20}},{"type":"Image","props":{"y":50,"width":315,"skin":"blackjack_ui/game_ui/ershiyidian/heguan_chair.png","height":109,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":107.5,"var":"img_heguan","skin":"blackjack_ui/game_ui/ershiyidian/heguan.png","scaleY":1,"scaleX":1,"centerX":0,"anchorY":0.4,"anchorX":0.5}},{"type":"Image","props":{"y":779,"x":643,"skin":"blackjack_ui/game_ui/ershiyidian/chair_1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":604,"x":1174,"skin":"blackjack_ui/game_ui/ershiyidian/chair_2.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":714,"x":952,"width":250,"skin":"blackjack_ui/game_ui/ershiyidian/chair_2.png","height":374,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":714,"x":332,"skin":"blackjack_ui/game_ui/ershiyidian/chair_2.png","scaleX":-1,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":604,"x":102,"width":250,"skin":"blackjack_ui/game_ui/ershiyidian/chair_2.png","scaleX":-1,"height":374,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":274,"x":230,"var":"img_pool2","skin":"blackjack_ui/game_ui/ershiyidian/wei_1_1.png","scaleY":0.9,"scaleX":0.9,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":367,"x":400,"var":"img_pool1","skin":"blackjack_ui/game_ui/ershiyidian/wei_1_1.png","scaleY":0.9,"scaleX":0.9,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":407,"var":"img_pool0","skin":"blackjack_ui/game_ui/ershiyidian/wei_1_1.png","scaleY":0.9,"scaleX":0.9,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":372,"x":880,"var":"img_pool4","skin":"blackjack_ui/game_ui/ershiyidian/wei_1_1.png","scaleY":0.9,"scaleX":0.9,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":274,"x":1055,"var":"img_pool3","skin":"blackjack_ui/game_ui/ershiyidian/wei_1_1.png","scaleY":0.9,"scaleX":0.9,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":242,"x":115,"var":"img_chip2","skin":"blackjack_ui/game_ui/ershiyidian/chip_1.png"}},{"type":"Image","props":{"y":379,"x":278,"var":"img_chip1","skin":"blackjack_ui/game_ui/ershiyidian/chip_2.png"}},{"type":"Image","props":{"y":439,"x":517,"var":"img_chip0","skin":"blackjack_ui/game_ui/ershiyidian/chip_3.png"}},{"type":"Image","props":{"y":387,"x":842,"var":"img_chip4","skin":"blackjack_ui/game_ui/ershiyidian/chip_4.png"}},{"type":"Image","props":{"y":236,"x":1056,"var":"img_chip3","skin":"blackjack_ui/game_ui/ershiyidian/chip_5.png"}},{"type":"Image","props":{"y":231,"x":183,"var":"img_choose2","skin":"blackjack_ui/game_ui/ershiyidian/wei_1_2.png"},"child":[{"type":"Label","props":{"y":32,"x":19,"wordWrap":true,"width":58,"text":"请下注","leading":10,"height":23,"fontSize":18,"color":"#ffffff","align":"center"}}]},{"type":"Image","props":{"y":324,"x":353,"var":"img_choose1","skin":"blackjack_ui/game_ui/ershiyidian/wei_2_2.png"},"child":[{"type":"Label","props":{"y":30,"x":17,"wordWrap":true,"width":58,"text":"请下注","leading":10,"height":23,"fontSize":18,"color":"#ffffff","align":"center"}}]},{"type":"Image","props":{"y":366,"x":591,"var":"img_choose0","skin":"blackjack_ui/game_ui/ershiyidian/wei_3_2.png"},"child":[{"type":"Label","props":{"y":35,"x":21,"wordWrap":true,"width":58,"var":"txt_choose0","text":"请下注","leading":10,"height":23,"fontSize":18,"color":"#ffffff","align":"center"}}]},{"type":"Image","props":{"y":329,"x":832,"var":"img_choose4","skin":"blackjack_ui/game_ui/ershiyidian/wei_4_2.png"},"child":[{"type":"Label","props":{"y":33,"x":19,"wordWrap":true,"width":58,"text":"请下注","leading":10,"height":23,"fontSize":18,"color":"#ffffff","align":"center"}}]},{"type":"Image","props":{"y":232,"x":1006,"var":"img_choose3","skin":"blackjack_ui/game_ui/ershiyidian/wei_5_2.png"},"child":[{"type":"Label","props":{"y":33,"x":19,"wordWrap":true,"width":58,"text":"请下注","leading":10,"height":23,"fontSize":18,"color":"#ffffff","align":"center"}}]},{"type":"HeiJieKe","props":{"y":273,"x":490,"var":"view_hjk0","runtime":"ui.ajqp.game_ui.ershiyidian.effect.HeiJieKeUI"}},{"type":"HeiJieKe","props":{"y":191,"x":308,"var":"view_hjk1","rotation":20,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.HeiJieKeUI"}},{"type":"HeiJieKe","props":{"y":81,"x":187,"var":"view_hjk2","rotation":35,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.HeiJieKeUI"}},{"type":"HeiJieKe","props":{"y":250,"x":851,"var":"view_hjk3","rotation":-35,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.HeiJieKeUI"}},{"type":"HeiJieKe","props":{"y":298,"x":691,"var":"view_hjk4","rotation":-20,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.HeiJieKeUI"}},{"type":"WuXiaoLong","props":{"y":274,"x":490,"var":"view_wxl0","runtime":"ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI"}},{"type":"WuXiaoLong","props":{"y":193,"x":309,"var":"view_wxl1","rotation":20,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI"}},{"type":"WuXiaoLong","props":{"y":83,"x":188,"var":"view_wxl2","rotation":35,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI"}},{"type":"WuXiaoLong","props":{"y":252,"x":850,"var":"view_wxl3","rotation":-35,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI"}},{"type":"WuXiaoLong","props":{"y":300,"x":690,"var":"view_wxl4","rotation":-20,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI"}},{"type":"WuXiaoLong","props":{"y":281,"x":482,"var":"view_wxl0_0","scaleY":0.8,"scaleX":0.8,"rotation":0,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI"}},{"type":"WuXiaoLong","props":{"y":282,"x":551,"var":"view_wxl0_1","scaleY":0.8,"scaleX":0.8,"rotation":0,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI"}},{"type":"WuXiaoLong","props":{"y":190,"x":315,"var":"view_wxl1_0","scaleY":0.8,"scaleX":0.8,"rotation":25,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI"}},{"type":"WuXiaoLong","props":{"y":227,"x":372,"var":"view_wxl1_1","scaleY":0.8,"scaleX":0.8,"rotation":20,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI"}},{"type":"WuXiaoLong","props":{"y":84,"x":184,"var":"view_wxl2_0","scaleY":0.8,"scaleX":0.8,"rotation":35,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI"}},{"type":"WuXiaoLong","props":{"y":133,"x":241,"var":"view_wxl2_1","scaleY":0.8,"scaleX":0.8,"rotation":35,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI"}},{"type":"WuXiaoLong","props":{"y":270,"x":849,"var":"view_wxl3_0","scaleY":0.8,"scaleX":0.8,"rotation":-35,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI"}},{"type":"WuXiaoLong","props":{"y":228,"x":902,"var":"view_wxl3_1","scaleY":0.8,"scaleX":0.8,"rotation":-35,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI"}},{"type":"WuXiaoLong","props":{"y":309,"x":683,"var":"view_wxl4_0","scaleY":0.8,"scaleX":0.8,"rotation":-20,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI"}},{"type":"WuXiaoLong","props":{"y":282,"x":749,"var":"view_wxl4_1","scaleY":0.8,"scaleX":0.8,"rotation":-20,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI"}},{"type":"Box","props":{"y":432,"x":641,"var":"box_chip0","mouseThrough":true,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"width":122,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k2.png","sizeGrid":"0,20,0,20","scaleY":0.7,"scaleX":0.7,"height":36}},{"type":"Text","props":{"y":3,"wordWrap":true,"width":86,"var":"text_chip0","text":"500.00","leading":6,"height":20,"fontSize":18,"color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"y":394,"x":375,"var":"box_chip1","rotation":25,"mouseThrough":true,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"width":122,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k2.png","sizeGrid":"0,20,0,20","scaleY":0.7,"scaleX":0.7,"height":36}},{"type":"Text","props":{"y":3,"wordWrap":true,"width":86,"var":"text_chip1","text":"500.00","leading":6,"height":20,"fontSize":18,"color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"y":291,"x":204,"var":"box_chip2","rotation":45,"mouseThrough":true,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"width":122,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k2.png","sizeGrid":"0,20,0,20","scaleY":0.7,"scaleX":0.7,"height":36}},{"type":"Text","props":{"y":3,"wordWrap":true,"width":86,"var":"text_chip2","text":"500.00","leading":6,"height":20,"fontSize":18,"color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"y":396,"x":894,"var":"box_chip4","rotation":-20,"mouseThrough":true,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"width":122,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k2.png","sizeGrid":"0,20,0,20","scaleY":0.7,"scaleX":0.7,"height":36}},{"type":"Text","props":{"y":3,"wordWrap":true,"width":86,"var":"text_chip4","text":"500.00","leading":6,"height":20,"fontSize":18,"color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"y":292,"x":1071,"var":"box_chip3","rotation":-45,"mouseThrough":true,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"width":122,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k2.png","sizeGrid":"0,20,0,20","scaleY":0.7,"scaleX":0.7,"height":36}},{"type":"Text","props":{"y":3,"wordWrap":true,"width":86,"var":"text_chip3","text":"500.00","leading":6,"height":20,"fontSize":18,"color":"#ffffff","align":"center"}}]},{"type":"Label","props":{"y":460,"x":573,"wordWrap":true,"width":128,"var":"txt_name0","text":"玩家名字六字","leading":10,"height":14,"fontSize":14,"color":"#ccff00","align":"center"}},{"type":"Label","props":{"y":437,"x":858,"wordWrap":true,"width":128,"var":"txt_name4","text":"玩家名字六字","skewX":23,"rotation":-20,"leading":10,"height":16,"fontSize":14,"color":"#ccff00","align":"center"}},{"type":"Label","props":{"y":342,"x":1068,"wordWrap":true,"width":98,"var":"txt_name3","text":"玩家名字六字","skewX":30,"rotation":-50,"leading":10,"height":23,"fontSize":14,"color":"#ccff00","align":"center"}},{"type":"Label","props":{"y":394,"x":301,"wordWrap":true,"width":128,"var":"txt_name1","text":"玩家名字六字","skewX":-23,"rotation":20,"leading":10,"height":17,"fontSize":14,"color":"#ccff00","align":"center"}},{"type":"Label","props":{"y":257,"x":140,"wordWrap":true,"width":93,"var":"txt_name2","text":"玩家名字六字","skewX":-30,"rotation":50,"leading":10,"height":14,"fontSize":14,"color":"#ccff00","align":"center"}},{"type":"WuXiaoLong","props":{"y":140,"x":490,"var":"view_wxl5","runtime":"ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI"}},{"type":"PaoPao","props":{"y":248,"x":544,"var":"view_qipao5_0","runtime":"ui.ajqp.game_ui.ershiyidian.component.PaoPaoUI"}},{"type":"HeiJieKe","props":{"y":140,"x":490,"var":"view_hjk5","runtime":"ui.ajqp.game_ui.ershiyidian.effect.HeiJieKeUI"}},{"type":"PaoPao1","props":{"y":266,"x":283,"var":"view_qipao2_1","rotation":32,"runtime":"ui.ajqp.game_ui.ershiyidian.component.PaoPao1UI"}},{"type":"PaoPao1","props":{"y":355,"x":453,"var":"view_qipao1_1","rotation":17,"runtime":"ui.ajqp.game_ui.ershiyidian.component.PaoPao1UI"}},{"type":"PaoPao1","props":{"y":371,"x":687,"var":"view_qipao0_1","runtime":"ui.ajqp.game_ui.ershiyidian.component.PaoPao1UI"}},{"type":"PaoPao1","props":{"y":324,"x":902,"var":"view_qipao4_1","rotation":-27,"runtime":"ui.ajqp.game_ui.ershiyidian.component.PaoPao1UI"}},{"type":"PaoPao1","props":{"y":220,"x":1067,"var":"view_qipao3_1","rotation":-38,"runtime":"ui.ajqp.game_ui.ershiyidian.component.PaoPao1UI"}},{"type":"PaoPao","props":{"y":189,"x":185,"var":"view_qipao2_0","rotation":39,"runtime":"ui.ajqp.game_ui.ershiyidian.component.PaoPaoUI"}},{"type":"PaoPao","props":{"y":298,"x":333,"var":"view_qipao1_0","rotation":30,"runtime":"ui.ajqp.game_ui.ershiyidian.component.PaoPaoUI"}},{"type":"PaoPao","props":{"y":371,"x":544,"var":"view_qipao0_0","runtime":"ui.ajqp.game_ui.ershiyidian.component.PaoPaoUI"}},{"type":"PaoPao","props":{"y":372,"x":782,"var":"view_qipao4_0","rotation":-22,"runtime":"ui.ajqp.game_ui.ershiyidian.component.PaoPaoUI"}},{"type":"PaoPao","props":{"y":293,"x":960,"var":"view_qipao3_0","rotation":-30,"runtime":"ui.ajqp.game_ui.ershiyidian.component.PaoPaoUI"}},{"type":"BaoPai","props":{"y":230,"x":526,"var":"view_boom","runtime":"ui.ajqp.game_ui.ershiyidian.effect.BaoPaiUI"}},{"type":"Box","props":{"y":396,"x":642,"width":244,"var":"box_prompt0","height":46,"anchorY":1,"anchorX":0.5},"child":[{"type":"Image","props":{"y":45,"x":120.5,"width":241,"var":"img_prompt0","skin":"blackjack_ui/game_ui/ershiyidian/tu_qipuao.png","height":45,"anchorY":1,"anchorX":0.5}},{"type":"Text","props":{"y":5,"x":11.5,"width":219,"var":"txt_prompt0","text":"是否为您下注的x号位购买保险","leading":6,"height":23,"fontSize":15,"color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"y":365,"x":399,"width":263,"var":"box_prompt1","height":47,"anchorY":1,"anchorX":0.5},"child":[{"type":"Image","props":{"y":45,"x":133,"var":"img_prompt1","skin":"blackjack_ui/game_ui/ershiyidian/tu_qipuao.png","sizeGrid":"0,149,0,29","anchorY":1,"anchorX":0.5}},{"type":"Text","props":{"y":6,"width":257,"var":"txt_prompt1","text":"是否为您下注的x号位购买保险","leading":6,"height":23,"fontSize":15,"color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"y":273,"x":231,"width":260,"var":"box_prompt2","height":47,"anchorY":1,"anchorX":0.5},"child":[{"type":"Image","props":{"y":45,"x":129,"var":"img_prompt2","skin":"blackjack_ui/game_ui/ershiyidian/tu_qipuao.png","sizeGrid":"0,149,0,29","anchorY":1,"anchorX":0.5}},{"type":"Text","props":{"y":8,"x":28,"width":208,"var":"txt_prompt2","text":"是否为您下注的x号位购买保险","leading":6,"height":16,"fontSize":15,"color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"y":361,"x":878,"width":262,"var":"box_prompt4","height":44,"anchorY":1,"anchorX":0.5},"child":[{"type":"Image","props":{"y":45,"x":131,"var":"img_prompt4","skin":"blackjack_ui/game_ui/ershiyidian/tu_qipuao.png","sizeGrid":"0,149,0,29","anchorY":1,"anchorX":0.5}},{"type":"Text","props":{"y":5,"width":257,"var":"txt_prompt4","text":"是否为您下注的x号位购买保险","leading":6,"height":23,"fontSize":15,"color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"y":267,"x":1056,"width":287,"var":"box_prompt3","height":46,"anchorY":1,"anchorX":0.5},"child":[{"type":"Image","props":{"y":45,"x":140.5,"var":"img_prompt3","skin":"blackjack_ui/game_ui/ershiyidian/tu_qipuao.png","anchorY":1,"anchorX":0.5}},{"type":"Text","props":{"y":5,"x":31.5,"width":219,"var":"txt_prompt3","text":"是否为您下注的x号位购买保险","leading":6,"height":23,"fontSize":15,"color":"#ffffff","align":"center"}}]},{"type":"Image","props":{"y":191,"x":1001,"var":"img_double3_1","skin":"blackjack_ui/game_ui/ershiyidian/tu_shuangbei.png","skewX":15,"scaleY":0.36,"scaleX":0.36,"rotation":-35}},{"type":"Image","props":{"y":306,"x":789,"var":"img_double4_0","skin":"blackjack_ui/game_ui/ershiyidian/tu_shuangbei.png","skewX":16,"scaleY":0.36,"scaleX":0.36,"rotation":-25}},{"type":"Image","props":{"y":279,"x":856,"var":"img_double4_1","skin":"blackjack_ui/game_ui/ershiyidian/tu_shuangbei.png","skewX":16,"scaleY":0.36,"scaleX":0.36,"rotation":-25}},{"type":"Image","props":{"y":310,"x":593,"var":"img_double0_0","skin":"blackjack_ui/game_ui/ershiyidian/tu_shuangbei.png","scaleY":0.36,"scaleX":0.36}},{"type":"Image","props":{"y":310,"x":647,"var":"img_double0_1","skin":"blackjack_ui/game_ui/ershiyidian/tu_shuangbei.png","scaleY":0.365,"scaleX":0.36}},{"type":"Image","props":{"y":266,"x":408,"var":"img_double1_0","skin":"blackjack_ui/game_ui/ershiyidian/tu_shuangbei.png","skewX":-16,"scaleY":0.36,"scaleX":0.36,"rotation":25}},{"type":"Image","props":{"y":297,"x":462,"var":"img_double1_1","skin":"blackjack_ui/game_ui/ershiyidian/tu_shuangbei.png","skewX":-16,"scaleY":0.36,"scaleX":0.36,"rotation":25}},{"type":"Image","props":{"y":179,"x":258,"var":"img_double2_0","skin":"blackjack_ui/game_ui/ershiyidian/tu_shuangbei.png","skewX":-15,"scaleY":0.36,"scaleX":0.36,"rotation":35}},{"type":"Image","props":{"y":218,"x":317,"var":"img_double2_1","skin":"blackjack_ui/game_ui/ershiyidian/tu_shuangbei.png","skewX":-15,"scaleY":0.36,"scaleX":0.36,"rotation":35}},{"type":"Image","props":{"y":232,"x":947,"var":"img_double3_0","skin":"blackjack_ui/game_ui/ershiyidian/tu_shuangbei.png","skewX":15,"scaleY":0.36,"scaleX":0.36,"rotation":-35}},{"type":"PaiXei","props":{"y":63,"x":861,"var":"view_paixie","runtime":"ui.ajqp.game_ui.ershiyidian.PaiXeiUI"}}]},{"type":"Box","props":{"y":675,"x":640,"width":1280,"var":"box_state0","height":60,"centerX":0,"bottom":15,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":28,"x":942,"width":180,"var":"btn_xuya","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_2.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#7e2314","labelStroke":2,"labelSize":26,"labelPadding":"-4","labelColors":"#ffffff","labelBold":true,"height":60,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":14,"x":55,"skin":"blackjack_ui/game_ui/ershiyidian/tu_xy.png"}}]},{"type":"Button","props":{"y":-1,"x":402,"width":210,"var":"btn_max","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_6.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#000060","labelStroke":2,"labelSize":26,"labelPadding":"-6","labelColors":"#fbd9ff","labelBold":true,"height":60},"child":[{"type":"Image","props":{"y":15,"x":28,"skin":"blackjack_ui/game_ui/ershiyidian/tu_zdz.png"}},{"type":"Box","props":{"y":14,"x":115,"width":57,"height":28},"child":[{"type":"Clip","props":{"var":"clip_max","skin":"blackjack_ui/game_ui/ershiyidian/clip_zd.png","index":0,"clipX":11,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Button","props":{"y":30,"x":292,"width":210,"var":"btn_min","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_6.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#000060","labelStroke":2,"labelSize":26,"labelPadding":"-6","labelColors":"#fbd9ff","labelBold":true,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":14,"x":32,"skin":"blackjack_ui/game_ui/ershiyidian/tu_zxz.png"}},{"type":"Box","props":{"y":14,"x":115,"width":57,"height":28},"child":[{"type":"Clip","props":{"var":"clip_min","skin":"blackjack_ui/game_ui/ershiyidian/clip_zd.png","index":0,"clipX":11,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Button","props":{"y":28,"x":757,"width":180,"var":"btn_bet","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d5126","labelStroke":2,"labelSize":26,"labelPadding":"-4","labelColors":"#ffffff","labelBold":true,"height":60,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":12,"x":49,"skin":"blackjack_ui/game_ui/ershiyidian/tu_xz.png"}}]},{"type":"Button","props":{"y":29,"x":754,"width":180,"var":"btn_enter","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d5626","labelStroke":2,"labelSize":26,"labelPadding":"-4","labelColors":"#ffffff","labelBold":true,"height":60,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":11,"x":53,"skin":"tongyong_ui/game_ui/tongyong/general/tu_qd.png"}}]},{"type":"Button","props":{"y":30,"x":943,"width":180,"var":"btn_complete","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_2.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#7e2314","labelStroke":2,"labelSize":26,"labelPadding":"-4","labelColors":"#ffffff","labelBold":true,"height":60,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":11,"x":29,"width":122,"skin":"blackjack_ui/game_ui/ershiyidian/tu_xzwc.png","height":35}}]}]},{"type":"Box","props":{"y":645,"x":0,"width":1280,"var":"box_state1","height":60,"centerX":0,"bottom":15},"child":[{"type":"Button","props":{"y":29.5,"var":"btn_buy","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d5626","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"centerX":84,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":12,"x":37,"skin":"blackjack_ui/game_ui/ershiyidian/tu_mbx.png"}}]},{"type":"Button","props":{"y":29.5,"var":"btn_notbuy","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d5626","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"centerX":-130,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":12,"x":53,"skin":"blackjack_ui/game_ui/ershiyidian/tu_bm.png"}}]}]},{"type":"Box","props":{"x":640,"width":1280,"var":"box_state2","height":60,"centerX":0,"bottom":15,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":29,"x":942,"var":"btn_ask","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d5626","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":13,"x":54,"skin":"blackjack_ui/game_ui/ershiyidian/tu_yp.png"}}]},{"type":"Button","props":{"y":29,"x":725,"var":"btn_stop","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d5626","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":12,"x":54,"skin":"blackjack_ui/game_ui/ershiyidian/tu_tp.png"}}]},{"type":"Button","props":{"y":29,"x":509,"var":"btn_double","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d5626","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":11,"x":49,"skin":"blackjack_ui/game_ui/ershiyidian/tu_sb.png"}}]},{"type":"Button","props":{"y":29,"x":292,"var":"btn_part","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d5626","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":13,"x":54,"skin":"blackjack_ui/game_ui/ershiyidian/tu_fp.png"}}]}]},{"type":"Button","props":{"width":240,"var":"btn_continue","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d6426","labelStroke":2,"labelSize":26,"labelPadding":"-4","labelColors":"#ffffff","labelBold":true,"centerY":40,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":13,"x":59,"skin":"tongyong_ui/game_ui/tongyong/general/tu_jxyx.png"}}]},{"type":"Button","props":{"y":50,"x":876,"var":"btn_baodian","stateNum":1,"skin":"blackjack_ui/game_ui/ershiyidian/btn_baodian.png","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":22,"x":88,"width":333,"var":"text_info","text":"牌局号：1532315641561321231313 ","leading":6,"height":25,"fontSize":20,"color":"#dadada"}},{"type":"Text","props":{"y":47,"x":88,"width":324,"var":"text_roomtype","text":"试玩场：底注：1","leading":6,"height":25,"fontSize":20,"color":"#dadada"}},{"type":"TouXiangdutiao","props":{"y":339,"x":40,"var":"view_player2","runtime":"ui.ajqp.game_ui.tongyong.TouXiangdutiaoUI"}},{"type":"TouXiangdutiao","props":{"y":472,"x":260,"var":"view_player1","runtime":"ui.ajqp.game_ui.tongyong.TouXiangdutiaoUI"}},{"type":"TouXiangdutiao","props":{"y":472,"x":915,"var":"view_player4","runtime":"ui.ajqp.game_ui.tongyong.TouXiangdutiaoUI"}},{"type":"TouXiangdutiao","props":{"y":504,"x":590,"var":"view_player0","runtime":"ui.ajqp.game_ui.tongyong.TouXiangdutiaoUI"}},{"type":"TouXiangdutiao","props":{"y":339,"x":1138,"var":"view_player3","runtime":"ui.ajqp.game_ui.tongyong.TouXiangdutiaoUI"}},{"type":"Image","props":{"y":388,"x":157,"var":"img_pos2","skin":"blackjack_ui/game_ui/ershiyidian/tu_weizhi1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":520,"x":378,"var":"img_pos1","skin":"blackjack_ui/game_ui/ershiyidian/tu_weizhi1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":557,"x":707,"var":"img_pos0","skin":"blackjack_ui/game_ui/ershiyidian/tu_weizhi1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":520,"x":897,"var":"img_pos4","skin":"blackjack_ui/game_ui/ershiyidian/tu_weizhi1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":388,"x":1119,"var":"img_pos3","skin":"blackjack_ui/game_ui/ershiyidian/tu_weizhi1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":418,"x":140,"var":"img_baoxian2","skin":"blackjack_ui/game_ui/ershiyidian/tu_bao_.png"}},{"type":"Image","props":{"y":550,"x":361,"var":"img_baoxian1","skin":"blackjack_ui/game_ui/ershiyidian/tu_bao_.png"}},{"type":"Image","props":{"y":587,"x":690,"var":"img_baoxian0","skin":"blackjack_ui/game_ui/ershiyidian/tu_bao_.png"}},{"type":"Image","props":{"y":550,"x":880,"var":"img_baoxian4","skin":"blackjack_ui/game_ui/ershiyidian/tu_bao_.png"}},{"type":"Image","props":{"y":418,"x":1102,"var":"img_baoxian3","skin":"blackjack_ui/game_ui/ershiyidian/tu_bao_.png"}},{"type":"XiPai","props":{"y":243,"x":636,"var":"view_xipai","anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.tongyong.effect.XiPaiUI"}},{"type":"Image","props":{"y":335,"x":180,"var":"img_bao2","skin":"blackjack_ui/game_ui/ershiyidian/tu_bao_.png","skewX":-30,"scaleY":0.6,"scaleX":0.6,"rotation":30}},{"type":"Image","props":{"y":446,"x":399,"var":"img_bao1","skin":"blackjack_ui/game_ui/ershiyidian/tu_bao_.png","skewX":-23,"scaleY":0.6,"scaleX":0.6,"rotation":11}},{"type":"Image","props":{"y":469,"x":730,"var":"img_bao0","skin":"blackjack_ui/game_ui/ershiyidian/tu_bao_.png","scaleY":0.6,"scaleX":0.6,"rotation":0}},{"type":"Image","props":{"y":407,"x":977,"var":"img_bao4","skin":"blackjack_ui/game_ui/ershiyidian/tu_bao_.png","skewX":24,"scaleY":0.6,"scaleX":0.6,"rotation":-22}},{"type":"Image","props":{"y":276,"x":1150,"var":"img_bao3","skin":"blackjack_ui/game_ui/ershiyidian/tu_bao_.png","skewX":24,"scaleY":0.6,"scaleX":0.6,"rotation":-55}},{"type":"Box","props":{"y":259,"x":659,"width":141,"var":"box_bet","height":388},"child":[{"type":"Image","props":{"y":75,"x":63,"width":127,"skin":"blackjack_ui/game_ui/ershiyidian/hslider2.png","sizeGrid":"0,51,0,30","height":72,"anchorY":1,"anchorX":0.5},"child":[{"type":"Text","props":{"y":15,"x":7,"wordWrap":true,"width":114,"var":"text_bet","text":"131300","leading":6,"height":36,"fontSize":30,"color":"#dadada","align":"center"}}]},{"type":"Image","props":{"y":381,"x":63,"skin":"blackjack_ui/game_ui/ershiyidian/Vslider1.png","anchorY":1,"anchorX":0.5}},{"type":"VSlider","props":{"y":345,"x":48,"var":"hslider_bet","skin":"blackjack_ui/game_ui/ershiyidian/Vslider.png","sizeGrid":"0,0,0,0,1","scaleY":-1}}]}]},{"type":"Button","props":{"var":"btn_back","top":16,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_fh1.png","right":10,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"width":180,"var":"img_menu","top":0,"skin":"tongyong_ui/game_ui/tongyong/general/cd_1.png","sizeGrid":"20,20,20,20","left":10,"height":238,"anchorY":0},"child":[{"type":"Image","props":{"y":82,"x":11,"width":160,"skin":"tongyong_ui/game_ui/tongyong/general/cd_2.png"}},{"type":"Image","props":{"y":161,"x":11,"width":160,"skin":"tongyong_ui/game_ui/tongyong/general/cd_2.png"}},{"type":"Button","props":{"y":23,"x":14,"var":"btn_rule","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_gz.png"}},{"type":"Button","props":{"y":167,"x":14,"var":"btn_seeting","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_sz.png"}},{"type":"Button","props":{"y":100,"x":14,"var":"btn_record","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_zj.png"}}]},{"type":"Button","props":{"var":"btn_menu","top":16,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_cd.png","left":10,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":132,"x":1239,"var":"btn_qifu","top":16,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_qf.png","right":85,"anchorY":0.5,"anchorX":0.5}},{"type":"Effect_chongzhi","props":{"var":"btn_chongzhi","right":4,"bottom":3,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ershiyidian.component.Effect_chongzhiUI"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.ershiyidian.effect.HeiJieKeUI",ui.ajqp.game_ui.ershiyidian.effect.HeiJieKeUI);
			View.regComponent("ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI",ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI);
			View.regComponent("Text",laya.display.Text);
			View.regComponent("ui.ajqp.game_ui.ershiyidian.component.PaoPaoUI",ui.ajqp.game_ui.ershiyidian.component.PaoPaoUI);
			View.regComponent("ui.ajqp.game_ui.ershiyidian.component.PaoPao1UI",ui.ajqp.game_ui.ershiyidian.component.PaoPao1UI);
			View.regComponent("ui.ajqp.game_ui.ershiyidian.effect.BaoPaiUI",ui.ajqp.game_ui.ershiyidian.effect.BaoPaiUI);
			View.regComponent("ui.ajqp.game_ui.ershiyidian.PaiXeiUI",ui.ajqp.game_ui.ershiyidian.PaiXeiUI);
			View.regComponent("ui.ajqp.game_ui.tongyong.TouXiangdutiaoUI",ui.ajqp.game_ui.tongyong.TouXiangdutiaoUI);
			View.regComponent("ui.ajqp.game_ui.tongyong.effect.XiPaiUI",ui.ajqp.game_ui.tongyong.effect.XiPaiUI);
			View.regComponent("ui.ajqp.game_ui.ershiyidian.component.Effect_chongzhiUI",ui.ajqp.game_ui.ershiyidian.component.Effect_chongzhiUI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.ershiyidian.ErShiYiDianUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.ershiyidian {
    export class ErShiYiDian_BaoDianUI extends View {
		public panel_baodian:Laya.Panel;
		public btn_close:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":991,"height":603,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"width":919,"skin":"tongyong_ui/game_ui/tongyong/hud/game_popout_bg.png","sizeGrid":"90,40,60,40","height":572,"centerY":15,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":66,"skin":"blackjack_ui/game_ui/ershiyidian/tit_baodian.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Panel","props":{"y":173,"x":66,"width":864,"var":"panel_baodian","vScrollBarSkin":"tongyong_ui/game_ui/tongyong/dating/vscroll.png","height":378},"child":[{"type":"Image","props":{"y":2,"x":38,"width":819,"skin":"blackjack_ui/game_ui/ershiyidian/tu_baodian.png","height":1149}}]},{"type":"Image","props":{"y":143,"x":179,"width":744,"skin":"blackjack_ui/game_ui/ershiyidian/tu_baodian1.png","sizeGrid":"0,0,0,0","height":31}},{"type":"Image","props":{"y":108,"x":59,"width":118,"skin":"blackjack_ui/game_ui/ershiyidian/tu_dianshu.png","height":66}},{"type":"Image","props":{"y":175,"x":59,"width":44,"skin":"blackjack_ui/game_ui/ershiyidian/tu_baodian2.png","height":376}},{"type":"Image","props":{"y":108,"x":179,"width":744,"skin":"blackjack_ui/game_ui/ershiyidian/tu_baodian3.png","height":34}},{"type":"Button","props":{"y":73,"x":906,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/btn_gb.png","anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.ershiyidian.ErShiYiDian_BaoDianUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.ershiyidian {
    export class ErShiYiDian_GuiZeUI extends View {
		public btn_close:Laya.Button;
		public panel_rule:Laya.Panel;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":842,"height":531,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":8,"x":27,"skin":"tongyong_ui/game_ui/tongyong/hud/game_popout_bg.png"}},{"type":"Image","props":{"y":48,"x":432,"skin":"tongyong_ui/game_ui/tongyong/hud/tit_game_rule.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":9,"x":187,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bkbt.png"}},{"type":"Button","props":{"y":5,"x":730,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_gb.png"}},{"type":"Panel","props":{"y":76,"x":199,"width":602,"var":"panel_rule","height":418},"child":[{"type":"Image","props":{"y":-3,"x":-13,"skin":"blackjack_ui/game_ui/ershiyidian/guize_1.png"}}]},{"type":"Button","props":{"y":77,"x":32,"stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_wjjs.png","selected":true}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.ershiyidian.ErShiYiDian_GuiZeUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.ershiyidian {
    export class ErShiYiDian_HUDUI extends View {
		public view:ui.ajqp.game_ui.tongyong.HudUI;
		public box_right:Laya.Box;
		public img_room0:Laya.Box;
		public txt_least0:Laya.Clip;
		public txt_difen0:Laya.Clip;
		public img_room1:Laya.Box;
		public txt_least1:Laya.Clip;
		public txt_difen1:Laya.Clip;
		public img_room2:Laya.Box;
		public txt_least2:Laya.Clip;
		public txt_difen2:Laya.Clip;
		public img_room3:Laya.Box;
		public txt_difen3:Laya.Clip;
		public txt_least3:Laya.Clip;
		public btn_join:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"top":-1,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bj.png","right":-1,"left":-1,"bottom":-1}},{"type":"Hud","props":{"var":"view","top":0,"runtime":"ui.ajqp.game_ui.tongyong.HudUI","right":0,"left":0,"bottom":0}},{"type":"Box","props":{"width":1282,"top":-1,"skewY":0,"right":0,"mouseThrough":true,"left":2,"height":711,"bottom":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"width":1281,"var":"box_right","height":465,"centerY":20,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":207,"width":250,"var":"img_room0","right":986,"height":446,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"x":-2,"skin":"tongyong_ui/game_ui/tongyong/hud/difen_00.png"}},{"type":"Image","props":{"y":37,"x":17,"skin":"tongyong_ui/game_ui/tongyong/hud/difen_02_1.png"}},{"type":"SkeletonPlayer","props":{"y":152,"x":139,"url":"blackjack_ui/game_ui/ershiyidian/sk/eyd_0.sk"}},{"type":"Clip","props":{"y":389,"x":149,"var":"txt_least0","skin":"tongyong_ui/game_ui/tongyong/dating/clip_dizhu0.png","clipX":10}},{"type":"Clip","props":{"y":349,"x":150,"var":"txt_difen0","skin":"tongyong_ui/game_ui/tongyong/dating/clip_dizhu0.png","clipX":10}},{"type":"Label","props":{"y":345,"x":66,"width":64,"text":"底分：","height":25,"fontSize":24,"color":"#a9d6c1"}},{"type":"Label","props":{"y":386,"x":65,"width":64,"text":"准入：","height":25,"fontSize":24,"color":"#a9d6c1"}}]},{"type":"Box","props":{"y":207,"width":250,"var":"img_room1","right":674,"height":446,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/hud/difen_01.png"}},{"type":"Image","props":{"y":51,"x":22,"skin":"tongyong_ui/game_ui/tongyong/hud/difen_01_1.png"}},{"type":"SkeletonPlayer","props":{"y":151,"x":138,"url":"blackjack_ui/game_ui/ershiyidian/sk/eyd_1.sk"}},{"type":"Clip","props":{"y":391,"x":149,"var":"txt_least1","skin":"tongyong_ui/game_ui/tongyong/dating/clip_dizhu1.png","clipX":10}},{"type":"Clip","props":{"y":349,"x":149,"var":"txt_difen1","skin":"tongyong_ui/game_ui/tongyong/dating/clip_dizhu1.png","clipX":10}},{"type":"Label","props":{"y":345,"x":67,"width":64,"text":"底分：","height":25,"fontSize":24,"color":"#80adc8"}},{"type":"Label","props":{"y":386,"x":68,"width":64,"text":"准入：","height":25,"fontSize":24,"color":"#80adc8"}}]},{"type":"Box","props":{"y":207,"width":250,"var":"img_room2","right":362,"height":446,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":1,"x":-3,"skin":"tongyong_ui/game_ui/tongyong/hud/difen_02.png"}},{"type":"Image","props":{"y":4,"x":11,"skin":"blackjack_ui/game_ui/ershiyidian/difen_03_1.png"}},{"type":"SkeletonPlayer","props":{"y":152,"x":140,"url":"blackjack_ui/game_ui/ershiyidian/sk/eyd_2.sk"}},{"type":"Clip","props":{"y":370,"x":151,"var":"txt_least2","skin":"tongyong_ui/game_ui/tongyong/dating/clip_dizhu2.png","clipX":10}},{"type":"Clip","props":{"y":329,"x":151,"var":"txt_difen2","skin":"tongyong_ui/game_ui/tongyong/dating/clip_dizhu2.png","clipX":10}},{"type":"Label","props":{"y":326,"x":69,"width":64,"text":"底分：","height":25,"fontSize":24,"color":"#9d77aa"}},{"type":"Label","props":{"y":367,"x":70,"width":64,"text":"准入：","height":25,"fontSize":24,"color":"#9d77aa"}}]},{"type":"Box","props":{"y":207,"width":250,"var":"img_room3","right":50,"height":446,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":1,"x":-2,"skin":"tongyong_ui/game_ui/tongyong/hud/difen_03.png"}},{"type":"Image","props":{"skin":"blackjack_ui/game_ui/ershiyidian/difen_04_1.png"}},{"type":"SkeletonPlayer","props":{"y":152,"x":139,"url":"blackjack_ui/game_ui/ershiyidian/sk/eyd_3.sk"}},{"type":"Clip","props":{"y":349,"x":148,"var":"txt_difen3","skin":"tongyong_ui/game_ui/tongyong/dating/clip_dizhu3.png","clipX":10}},{"type":"Clip","props":{"y":390,"x":148,"var":"txt_least3","skin":"tongyong_ui/game_ui/tongyong/dating/clip_dizhu3.png","clipX":10}},{"type":"Label","props":{"y":345,"x":68,"width":64,"text":"底分：","height":25,"fontSize":24,"color":"#c19a81"}},{"type":"Label","props":{"y":387,"x":68,"width":64,"text":"准入：","height":25,"fontSize":24,"color":"#c19a81"}}]}]}]},{"type":"Image","props":{"top":9,"skin":"blackjack_ui/game_ui/ershiyidian/21d_title.png","scaleY":1.2,"scaleX":1.2,"centerX":99,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":668,"x":640,"var":"btn_join","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_ksjr.png","centerX":0,"bottom":10,"anchorY":0.5,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.tongyong.HudUI",ui.ajqp.game_ui.tongyong.HudUI);
			View.regComponent("SkeletonPlayer",laya.ani.bone.Skeleton);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.ershiyidian.ErShiYiDian_HUDUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.ershiyidian {
    export class PaiXeiUI extends View {
		public ani1:Laya.FrameAnimation;
		public ani2:Laya.FrameAnimation;
		public img_card:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":200,"height":200},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"blackjack_ui/game_ui/ershiyidian/tu_pai1.png"}},{"type":"Image","props":{"y":0,"x":0,"var":"img_card","skin":"blackjack_ui/game_ui/ershiyidian/tu_pai2.png"},"compId":3},{"type":"Image","props":{"y":48,"x":-33,"skin":"tongyong_ui/game_ui/tongyong/general/effect/fapai_3/dz10000.png","alpha":0},"compId":6},{"type":"Image","props":{"y":0,"x":0,"skin":"blackjack_ui/game_ui/ershiyidian/tu_pai3.png"}}],"animations":[{"nodes":[{"target":3,"keyframes":{"y":[{"value":-75,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":10}],"x":[{"value":40,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":10}]}}],"name":"ani1","id":1,"frameRate":24,"action":0},{"nodes":[{"target":6,"keyframes":{"skin":[{"value":"tongyong_ui/game_ui/tongyong/general/effect/fapai_3/dz10000.png","tweenMethod":"linearNone","tween":false,"target":6,"key":"skin","index":0},{"value":"tongyong_ui/game_ui/tongyong/general/effect/fapai_3/dz10000.png","tweenMethod":"linearNone","tween":false,"target":6,"label":null,"key":"skin","index":1},{"value":"tongyong_ui/game_ui/tongyong/general/effect/fapai_3/dz10001.png","tweenMethod":"linearNone","tween":false,"target":6,"key":"skin","index":5}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"alpha","index":1},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":5},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":8}]}}],"name":"ani2","id":3,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.ershiyidian.PaiXeiUI.uiView);
        }
    }
}
