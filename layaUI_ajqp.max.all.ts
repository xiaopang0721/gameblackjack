
module ui.ajqp.game_ui.ershiyidian.component {
    export class BaoPaiUI extends View {
		public img_bg:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":55,"height":36},"child":[{"type":"Image","props":{"var":"img_bg","skin":"blackjack_ui/game_ui/ershiyidian/bg_5_1.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.ershiyidian.component.BaoPaiUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.ershiyidian.component {
    export class BaoPai1UI extends View {
		public img_bg:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":55,"height":36},"child":[{"type":"Image","props":{"var":"img_bg","skin":"blackjack_ui/game_ui/ershiyidian/bg_5.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.ershiyidian.component.BaoPai1UI.uiView);
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
    export class Effect_yqpUI extends View {
		public ani1:Laya.FrameAnimation;
		public opt_type:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":120,"height":70},"child":[{"type":"Box","props":{"y":63,"x":92,"width":120,"scaleY":1,"scaleX":1,"height":70,"anchorY":0.9,"anchorX":0.78},"compId":4,"child":[{"type":"Image","props":{"width":104,"skin":"tongyong_ui/game_ui/tongyong/general/effect/qp/tu_cz.png","sizeGrid":"0,20,0,20","height":62,"centerY":0,"centerX":0}},{"type":"Image","props":{"y":35,"x":60,"var":"opt_type","skin":"blackjack_ui/game_ui/ershiyidian/effect/qpk/tu_t1.png","anchorY":0.5,"anchorX":0.5}}]}],"animations":[{"nodes":[{"target":4,"keyframes":{"y":[{"value":61,"tweenMethod":"linearNone","tween":false,"target":4,"key":"y","index":0},{"value":55,"tweenMethod":"linearNone","tween":true,"target":4,"key":"y","index":5},{"value":55,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"y","index":6},{"value":45,"tweenMethod":"linearNone","tween":true,"target":4,"key":"y","index":15},{"value":35,"tweenMethod":"linearNone","tween":true,"target":4,"key":"y","index":27}],"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":5},{"value":1,"tweenMethod":"linearNone","tween":false,"target":4,"label":null,"key":"scaleY","index":6},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"scaleY","index":27}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":5},{"value":1,"tweenMethod":"linearNone","tween":false,"target":4,"label":null,"key":"scaleX","index":6},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"scaleX","index":27}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.ershiyidian.component.Effect_yqpUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.ershiyidian.component {
    export class Effect_zqpUI extends View {
		public ani1:Laya.FrameAnimation;
		public opt_type:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":120,"height":70},"child":[{"type":"Box","props":{"y":70,"x":23,"width":120,"scaleY":1,"scaleX":1,"height":70,"anchorY":1,"anchorX":0.2},"compId":4,"child":[{"type":"Image","props":{"width":104,"skin":"tongyong_ui/game_ui/tongyong/general/effect/qp/tu_cz.png","sizeGrid":"0,20,0,20","scaleX":-1,"height":62,"centerY":0,"centerX":0}},{"type":"Image","props":{"y":38,"var":"opt_type","skin":"blackjack_ui/game_ui/ershiyidian/effect/qpk/tu_t7.png","centerX":1,"anchorY":0.5,"anchorX":0.5}}]}],"animations":[{"nodes":[{"target":4,"keyframes":{"y":[{"value":61,"tweenMethod":"linearNone","tween":false,"target":4,"key":"y","index":0},{"value":55,"tweenMethod":"linearNone","tween":false,"target":4,"label":null,"key":"y","index":5},{"value":55,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"y","index":6},{"value":45,"tweenMethod":"linearNone","tween":true,"target":4,"key":"y","index":15},{"value":35,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"y","index":27}],"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":false,"target":4,"key":"scaleY","index":5},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":27}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":false,"target":4,"key":"scaleX","index":5},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":27}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.ershiyidian.component.Effect_zqpUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.ershiyidian.component {
    export class PaiXeiUI extends View {
		public ani1:Laya.FrameAnimation;
		public ani2:Laya.FrameAnimation;
		public img_card:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":200,"height":200},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"blackjack_ui/game_ui/ershiyidian/tu_pai1.png"}},{"type":"Image","props":{"y":0,"x":0,"var":"img_card","skin":"blackjack_ui/game_ui/ershiyidian/tu_pai2.png"},"compId":3},{"type":"Image","props":{"y":48,"x":-33,"skin":"tongyong_ui/game_ui/tongyong/general/effect/fapai_3/dz10000.png","alpha":0},"compId":6},{"type":"Image","props":{"y":0,"x":0,"skin":"blackjack_ui/game_ui/ershiyidian/tu_pai3.png"}}],"animations":[{"nodes":[{"target":3,"keyframes":{"y":[{"value":-75,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":10}],"x":[{"value":40,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":10}]}}],"name":"ani1","id":1,"frameRate":24,"action":0},{"nodes":[{"target":6,"keyframes":{"skin":[{"value":"tongyong_ui/game_ui/tongyong/general/effect/fapai_3/dz10000.png","tweenMethod":"linearNone","tween":false,"target":6,"key":"skin","index":0},{"value":"tongyong_ui/game_ui/tongyong/general/effect/fapai_3/dz10000.png","tweenMethod":"linearNone","tween":false,"target":6,"label":null,"key":"skin","index":1},{"value":"tongyong_ui/game_ui/tongyong/general/effect/fapai_3/dz10001.png","tweenMethod":"linearNone","tween":false,"target":6,"key":"skin","index":5}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"alpha","index":1},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":5},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":8}]}}],"name":"ani2","id":3,"frameRate":24,"action":0}]};
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

        public static  uiView:any ={"type":"View","props":{"width":55,"height":36},"child":[{"type":"Image","props":{"var":"img_bg","skin":"blackjack_ui/game_ui/ershiyidian/bg_1.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":13,"x":11,"width":35,"var":"txt_count","text":"爆牌","leading":6,"height":20,"fontSize":16,"color":"#dadada","align":"center"}}]};
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

        public static  uiView:any ={"type":"View","props":{"width":55,"height":36},"child":[{"type":"Image","props":{"var":"img_bg","skin":"blackjack_ui/game_ui/ershiyidian/bg_1.png","scaleX":-1,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":13,"x":11,"width":35,"var":"txt_count","text":"爆牌","leading":6,"height":20,"fontSize":16,"color":"#dadada","align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.ershiyidian.component.PaoPao1UI.uiView);
        }
    }
}

module ui.ajqp.game_ui.ershiyidian.component {
    export class QingxiazhuUI extends View {
		public txt_bet:Laya.Label;
		public ani_yuan:ui.ajqp.game_ui.ershiyidian.effect.Effect_lkUI;
		public ani_kuang:ui.ajqp.game_ui.ershiyidian.effect.Effect_lkhxUI;

        public static  uiView:any ={"type":"View","props":{"width":92,"height":80},"child":[{"type":"Label","props":{"y":40,"x":46,"wordWrap":true,"width":58,"var":"txt_bet","leading":10,"height":23,"fontSize":18,"color":"#ffffff","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Effect_lk","props":{"y":4,"x":10,"var":"ani_yuan","blendMode":"lighter","runtime":"ui.ajqp.game_ui.ershiyidian.effect.Effect_lkUI"}},{"type":"Effect_lkhx","props":{"y":-2,"x":4,"var":"ani_kuang","runtime":"ui.ajqp.game_ui.ershiyidian.effect.Effect_lkhxUI"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.ershiyidian.effect.Effect_lkUI",ui.ajqp.game_ui.ershiyidian.effect.Effect_lkUI);
			View.regComponent("ui.ajqp.game_ui.ershiyidian.effect.Effect_lkhxUI",ui.ajqp.game_ui.ershiyidian.effect.Effect_lkhxUI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.ershiyidian.component.QingxiazhuUI.uiView);
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

        public static  uiView:any ={"type":"View","props":{"width":104,"height":146},"child":[{"type":"Image","props":{"y":146,"x":53,"skin":"blackjack_ui/game_ui/ershiyidian/effect/baopai/tu_bust.png","scaleY":1.5,"scaleX":1.5,"anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":3},{"type":"Image","props":{"y":134,"x":53,"skin":"blackjack_ui/game_ui/ershiyidian/effect/baopai/tu_busts.png","scaleY":1.5,"scaleX":1.5,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":6},{"type":"Image","props":{"y":133,"x":51,"skin":"blackjack_ui/game_ui/ershiyidian/effect/baopai/10008.png","scaleY":1.5,"scaleX":1.5,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":5}],"animations":[{"nodes":[{"target":3,"keyframes":{"scaleY":[{"value":2.5,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":0},{"value":3,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleY","index":1},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":4},{"value":1.6,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":8},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":12}],"scaleX":[{"value":2.5,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":0},{"value":3,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleX","index":1},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":4},{"value":1.6,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":8},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":12}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":4}]}},{"target":5,"keyframes":{"skin":[{"value":"blackjack_ui/game_ui/ershiyidian/effect/baopai/10001.png","tweenMethod":"linearNone","tween":false,"target":5,"key":"skin","index":0},{"value":"blackjack_ui/game_ui/ershiyidian/effect/baopai/10001.png","tweenMethod":"linearNone","tween":false,"target":5,"label":null,"key":"skin","index":4},{"value":"blackjack_ui/game_ui/ershiyidian/effect/baopai/10002.png","tweenMethod":"linearNone","tween":false,"target":5,"key":"skin","index":5},{"value":"blackjack_ui/game_ui/ershiyidian/effect/baopai/10003.png","tweenMethod":"linearNone","tween":false,"target":5,"key":"skin","index":6},{"value":"blackjack_ui/game_ui/ershiyidian/effect/baopai/10004.png","tweenMethod":"linearNone","tween":false,"target":5,"key":"skin","index":8},{"value":"blackjack_ui/game_ui/ershiyidian/effect/baopai/10005.png","tweenMethod":"linearNone","tween":false,"target":5,"key":"skin","index":10},{"value":"blackjack_ui/game_ui/ershiyidian/effect/baopai/10006.png","tweenMethod":"linearNone","tween":false,"target":5,"key":"skin","index":12},{"value":"blackjack_ui/game_ui/ershiyidian/effect/baopai/10007.png","tweenMethod":"linearNone","tween":false,"target":5,"key":"skin","index":14},{"value":"blackjack_ui/game_ui/ershiyidian/effect/baopai/10008.png","tweenMethod":"linearNone","tween":false,"target":5,"key":"skin","index":16}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":5,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":3},{"value":1,"tweenMethod":"linearNone","tween":false,"target":5,"key":"alpha","index":4},{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":18}]}},{"target":6,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":6,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":17},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":18},{"value":0.6,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":27},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":34}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.ershiyidian.effect.BaoPaiUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.ershiyidian.effect {
    export class Effect_baoxianUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":200,"height":150},"child":[{"type":"Image","props":{"skin":"blackjack_ui/game_ui/ershiyidian/tu_bao_.png","centerY":0,"centerX":0,"alpha":1},"compId":2},{"type":"Image","props":{"skin":"blackjack_ui/game_ui/ershiyidian/tu_guang01.png","scaleY":1,"scaleX":0,"centerY":0,"centerX":0,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":3}],"animations":[{"nodes":[{"target":3,"keyframes":{"scaleY":[{"value":0.1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":0},{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":3},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":5}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":0},{"value":0.92,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":3},{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":5},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":8}],"alpha":[{"value":0.3,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":3},{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":5},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":8}]}},{"target":2,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":5},{"value":1,"tweenMethod":"linearNone","tween":false,"target":2,"key":"alpha","index":6},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":8}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.ershiyidian.effect.Effect_baoxianUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.ershiyidian.effect {
    export class Effect_bxbsUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":100,"height":100},"child":[{"type":"Image","props":{"skin":"blackjack_ui/game_ui/ershiyidian/effect/baoxianbiaoshi/10009.png"},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"skin":[{"value":"blackjack_ui/game_ui/ershiyidian/effect/baoxianbiaoshi/10000.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":0},{"value":"blackjack_ui/game_ui/ershiyidian/effect/baoxianbiaoshi/10001.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":2},{"value":"blackjack_ui/game_ui/ershiyidian/effect/baoxianbiaoshi/10002.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":4},{"value":"blackjack_ui/game_ui/ershiyidian/effect/baoxianbiaoshi/10003.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":6},{"value":"blackjack_ui/game_ui/ershiyidian/effect/baoxianbiaoshi/10004.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":8},{"value":"blackjack_ui/game_ui/ershiyidian/effect/baoxianbiaoshi/10005.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":10},{"value":"blackjack_ui/game_ui/ershiyidian/effect/baoxianbiaoshi/10006.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":12},{"value":"blackjack_ui/game_ui/ershiyidian/effect/baoxianbiaoshi/10007.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":14},{"value":"blackjack_ui/game_ui/ershiyidian/effect/baoxianbiaoshi/10008.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":16},{"value":"blackjack_ui/game_ui/ershiyidian/effect/baoxianbiaoshi/10009.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":18}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.ershiyidian.effect.Effect_bxbsUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.ershiyidian.effect {
    export class Effect_lkUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":72,"height":72},"child":[{"type":"Image","props":{"y":36,"x":36,"skin":"blackjack_ui/game_ui/ershiyidian/tu_lk.png","anchorY":0.5,"anchorX":0.5},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":20}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.ershiyidian.effect.Effect_lkUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.ershiyidian.effect {
    export class Effect_lkhxUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":84,"height":84},"child":[{"type":"Box","props":{"y":42,"x":42,"width":84,"height":84,"anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":4,"child":[{"type":"Image","props":{"y":42,"x":42,"skin":"blackjack_ui/game_ui/ershiyidian/wei_3_2.png","anchorY":0.5,"anchorX":0.5,"alpha":1}}]}],"animations":[{"nodes":[{"target":4,"keyframes":{"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":25},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":50}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.ershiyidian.effect.Effect_lkhxUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.ershiyidian.effect {
    export class HeiJieKeUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":104,"height":146},"child":[{"type":"Image","props":{"y":146,"x":49,"skin":"blackjack_ui/game_ui/ershiyidian/effect/heijieke/tu_21dian.png","anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":3},{"type":"Image","props":{"y":137,"x":52,"skin":"blackjack_ui/game_ui/ershiyidian/effect/heijieke/tu_21dcm.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":4},{"type":"Image","props":{"y":137,"x":52,"skin":"blackjack_ui/game_ui/ershiyidian/effect/heijieke/tu_gq.png","scaleY":0.92,"scaleX":0.92,"rotation":-360,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":5}],"animations":[{"nodes":[{"target":4,"keyframes":{"scaleY":[{"value":2,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":0},{"value":0.95,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":3},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":7}],"scaleX":[{"value":2,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":0},{"value":0.95,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":3},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":7}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":3},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"alpha","index":21},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":34}]}},{"target":5,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":5,"key":"rotation","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"label":null,"key":"rotation","index":7},{"value":-360,"tweenMethod":"linearNone","tween":true,"target":5,"key":"rotation","index":34}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":6},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":7},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"label":null,"key":"alpha","index":21},{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":34}]}},{"target":3,"keyframes":{"y":[{"value":146,"tweenMethod":"linearNone","tween":false,"target":3,"key":"y","index":0},{"value":170,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":7},{"value":146,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"y","index":19}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":3,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":7},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":19}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
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

        public static  uiView:any ={"type":"View","props":{"width":104,"height":146},"child":[{"type":"Image","props":{"y":142,"x":49,"skin":"blackjack_ui/game_ui/ershiyidian/effect/wuxiaolong/tu_wxl.png","anchorY":0.5,"anchorX":0.5},"compId":6},{"type":"Image","props":{"y":120,"x":50,"skin":"blackjack_ui/game_ui/ershiyidian/effect/wuxiaolong/10001.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":7}],"animations":[{"nodes":[{"target":6,"keyframes":{"scaleY":[{"value":2.5,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":3},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":7}],"scaleX":[{"value":2.5,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":3},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":7}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":0},{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":3},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":5}]}},{"target":7,"keyframes":{"skin":[{"value":"blackjack_ui/game_ui/ershiyidian/effect/wuxiaolong/10001.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":0},{"value":"blackjack_ui/game_ui/ershiyidian/effect/wuxiaolong/10001.png","tweenMethod":"linearNone","tween":false,"target":7,"label":null,"key":"skin","index":5},{"value":"blackjack_ui/game_ui/ershiyidian/effect/wuxiaolong/10002.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":7},{"value":"blackjack_ui/game_ui/ershiyidian/effect/wuxiaolong/10003.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":9},{"value":"blackjack_ui/game_ui/ershiyidian/effect/wuxiaolong/10004.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":11},{"value":"blackjack_ui/game_ui/ershiyidian/effect/wuxiaolong/10005.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":13},{"value":"blackjack_ui/game_ui/ershiyidian/effect/wuxiaolong/10006.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":15},{"value":"blackjack_ui/game_ui/ershiyidian/effect/wuxiaolong/10007.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":17},{"value":"blackjack_ui/game_ui/ershiyidian/effect/wuxiaolong/10008.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":19},{"value":"blackjack_ui/game_ui/ershiyidian/effect/wuxiaolong/10009.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":21}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":0},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":34}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":0},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":34}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":7,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":false,"target":7,"key":"alpha","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":24},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":34}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
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
		public img_choose2:ui.ajqp.game_ui.ershiyidian.component.QingxiazhuUI;
		public img_choose1:ui.ajqp.game_ui.ershiyidian.component.QingxiazhuUI;
		public img_choose0:ui.ajqp.game_ui.ershiyidian.component.QingxiazhuUI;
		public img_choose4:ui.ajqp.game_ui.ershiyidian.component.QingxiazhuUI;
		public img_choose3:ui.ajqp.game_ui.ershiyidian.component.QingxiazhuUI;
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
		public view_boom0_0:ui.ajqp.game_ui.ershiyidian.effect.BaoPaiUI;
		public view_boom0_1:ui.ajqp.game_ui.ershiyidian.effect.BaoPaiUI;
		public view_boom1_0:ui.ajqp.game_ui.ershiyidian.effect.BaoPaiUI;
		public view_boom1_1:ui.ajqp.game_ui.ershiyidian.effect.BaoPaiUI;
		public view_boom2_0:ui.ajqp.game_ui.ershiyidian.effect.BaoPaiUI;
		public view_boom2_1:ui.ajqp.game_ui.ershiyidian.effect.BaoPaiUI;
		public view_boom3_0:ui.ajqp.game_ui.ershiyidian.effect.BaoPaiUI;
		public view_boom3_1:ui.ajqp.game_ui.ershiyidian.effect.BaoPaiUI;
		public view_boom4_0:ui.ajqp.game_ui.ershiyidian.effect.BaoPaiUI;
		public view_boom4_1:ui.ajqp.game_ui.ershiyidian.effect.BaoPaiUI;
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
		public view_baopai5_0:ui.ajqp.game_ui.ershiyidian.component.BaoPaiUI;
		public view_baopai1_0:ui.ajqp.game_ui.ershiyidian.component.BaoPaiUI;
		public view_baopai1_1:ui.ajqp.game_ui.ershiyidian.component.BaoPai1UI;
		public view_baopai2_1:ui.ajqp.game_ui.ershiyidian.component.BaoPai1UI;
		public view_baopai2_0:ui.ajqp.game_ui.ershiyidian.component.BaoPaiUI;
		public view_baopai0_1:ui.ajqp.game_ui.ershiyidian.component.BaoPai1UI;
		public view_baopai0_0:ui.ajqp.game_ui.ershiyidian.component.BaoPaiUI;
		public view_baopai4_0:ui.ajqp.game_ui.ershiyidian.component.BaoPaiUI;
		public view_baopai4_1:ui.ajqp.game_ui.ershiyidian.component.BaoPai1UI;
		public view_baopai3_0:ui.ajqp.game_ui.ershiyidian.component.BaoPaiUI;
		public view_baopai3_1:ui.ajqp.game_ui.ershiyidian.component.BaoPai1UI;
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
		public view_boom0:ui.ajqp.game_ui.ershiyidian.effect.BaoPaiUI;
		public view_boom4:ui.ajqp.game_ui.ershiyidian.effect.BaoPaiUI;
		public view_boom3:ui.ajqp.game_ui.ershiyidian.effect.BaoPaiUI;
		public view_boom1:ui.ajqp.game_ui.ershiyidian.effect.BaoPaiUI;
		public view_boom2:ui.ajqp.game_ui.ershiyidian.effect.BaoPaiUI;
		public view_boom5:ui.ajqp.game_ui.ershiyidian.effect.BaoPaiUI;
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
		public btn_complete:Laya.Button;
		public btn_max:Laya.Button;
		public clip_max:Laya.Clip;
		public btn_min:Laya.Button;
		public clip_min:Laya.Clip;
		public btn_bet:Laya.Button;
		public btn_enter:Laya.Button;
		public box_state1:Laya.Box;
		public btn_buy:Laya.Button;
		public btn_notbuy:Laya.Button;
		public box_state2:Laya.Box;
		public btn_ask:Laya.Button;
		public btn_stop:Laya.Button;
		public btn_double:Laya.Button;
		public btn_part:Laya.Button;
		public view_player2:ui.ajqp.game_ui.tongyong.TouXiang21dianUI;
		public view_player1:ui.ajqp.game_ui.tongyong.TouXiang21dianUI;
		public view_player4:ui.ajqp.game_ui.tongyong.TouXiang21dianUI;
		public view_player0:ui.ajqp.game_ui.tongyong.TouXiang21dianUI;
		public view_player3:ui.ajqp.game_ui.tongyong.TouXiang21dianUI;
		public view_xipai:ui.ajqp.game_ui.tongyong.effect.XiPaiUI;
		public img_bao2:ui.ajqp.game_ui.ershiyidian.effect.Effect_bxbsUI;
		public img_bao3:ui.ajqp.game_ui.ershiyidian.effect.Effect_bxbsUI;
		public img_bao1:ui.ajqp.game_ui.ershiyidian.effect.Effect_bxbsUI;
		public img_bao0:ui.ajqp.game_ui.ershiyidian.effect.Effect_bxbsUI;
		public img_bao4:ui.ajqp.game_ui.ershiyidian.effect.Effect_bxbsUI;
		public box_bet:Laya.Box;
		public text_bet:laya.display.Text;
		public hslider_bet:Laya.VSlider;
		public ani_baoxian:ui.ajqp.game_ui.ershiyidian.effect.Effect_baoxianUI;
		public box_opt4:ui.ajqp.game_ui.ershiyidian.component.Effect_yqpUI;
		public box_opt3:ui.ajqp.game_ui.ershiyidian.component.Effect_yqpUI;
		public box_opt2:ui.ajqp.game_ui.ershiyidian.component.Effect_zqpUI;
		public box_opt1:ui.ajqp.game_ui.ershiyidian.component.Effect_zqpUI;
		public box_opt0:ui.ajqp.game_ui.ershiyidian.component.Effect_zqpUI;
		public img_point:Laya.Image;
		public btn_continue:Laya.Button;
		public box_room_left:Laya.Image;
		public text_info:laya.display.Text;
		public txt_roomtype:laya.display.Text;
		public box_top_left:Laya.Box;
		public btn_baodian:Laya.Button;
		public btn_menu:Laya.Button;
		public img_menu:Laya.Image;
		public btn_rule:Laya.Button;
		public btn_record:Laya.Button;
		public btn_seeting:Laya.Button;
		public box_top_right:Laya.Box;
		public btn_back:Laya.Button;
		public btn_qifu:Laya.Button;
		public box_bottom_right:Laya.Box;
		public btn_chongzhi:ui.ajqp.game_ui.tongyong.effect.ChongzhiUI;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":1280,"var":"box_view","height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"width":1280,"scaleY":1.05,"scaleX":1.05,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":220,"x":964,"var":"img_double3","skin":"blackjack_ui/game_ui/ershiyidian/tu_shuangbei.png","skewX":15,"scaleY":0.43,"scaleX":0.43,"rotation":-35}},{"type":"Image","props":{"y":210,"x":307,"var":"img_double2","skin":"blackjack_ui/game_ui/ershiyidian/tu_shuangbei.png","skewX":-15,"scaleY":0.42,"scaleX":0.42,"rotation":35}},{"type":"Image","props":{"y":290,"x":450,"var":"img_double1","skin":"blackjack_ui/game_ui/ershiyidian/tu_shuangbei.png","skewX":-16,"scaleY":0.43,"scaleX":0.43,"rotation":20}},{"type":"Image","props":{"y":308,"x":635,"var":"img_double0","skin":"blackjack_ui/game_ui/ershiyidian/tu_shuangbei.png","scaleY":0.43,"scaleX":0.43}},{"type":"Image","props":{"y":290,"x":813,"var":"img_double4","skin":"blackjack_ui/game_ui/ershiyidian/tu_shuangbei.png","skewX":16,"scaleY":0.43,"scaleX":0.43,"rotation":-20}},{"type":"Image","props":{"y":50,"width":315,"skin":"blackjack_ui/game_ui/ershiyidian/heguan_chair.png","height":109,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":107.5,"var":"img_heguan","skin":"blackjack_ui/game_ui/ershiyidian/heguan.png","scaleY":1,"scaleX":1,"centerX":0,"anchorY":0.4,"anchorX":0.5}},{"type":"Image","props":{"y":779,"x":643,"skin":"blackjack_ui/game_ui/ershiyidian/chair_1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":604,"x":1174,"skin":"blackjack_ui/game_ui/ershiyidian/chair_2.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":714,"x":952,"width":250,"skin":"blackjack_ui/game_ui/ershiyidian/chair_2.png","height":374,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":714,"x":332,"skin":"blackjack_ui/game_ui/ershiyidian/chair_2.png","scaleX":-1,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":604,"x":102,"width":250,"skin":"blackjack_ui/game_ui/ershiyidian/chair_2.png","scaleX":-1,"height":374,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":274,"x":230,"var":"img_pool2","skin":"blackjack_ui/game_ui/ershiyidian/wei_1_1.png","scaleY":0.9,"scaleX":0.9,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":367,"x":400,"var":"img_pool1","skin":"blackjack_ui/game_ui/ershiyidian/wei_1_1.png","scaleY":0.9,"scaleX":0.9,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":407,"var":"img_pool0","skin":"blackjack_ui/game_ui/ershiyidian/wei_1_1.png","scaleY":0.9,"scaleX":0.9,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":372,"x":880,"var":"img_pool4","skin":"blackjack_ui/game_ui/ershiyidian/wei_1_1.png","scaleY":0.9,"scaleX":0.9,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":274,"x":1055,"var":"img_pool3","skin":"blackjack_ui/game_ui/ershiyidian/wei_1_1.png","scaleY":0.9,"scaleX":0.9,"anchorY":0.5,"anchorX":0.5}},{"type":"Qingxiazhu","props":{"y":274,"x":233,"var":"img_choose2","scaleY":0.95,"scaleX":0.95,"rotation":45,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ershiyidian.component.QingxiazhuUI"}},{"type":"Qingxiazhu","props":{"y":368,"x":404,"var":"img_choose1","scaleY":0.95,"scaleX":0.95,"rotation":20,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ershiyidian.component.QingxiazhuUI"}},{"type":"Qingxiazhu","props":{"y":408,"x":641,"var":"img_choose0","scaleY":0.95,"scaleX":0.95,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ershiyidian.component.QingxiazhuUI"}},{"type":"Qingxiazhu","props":{"y":374,"x":879,"var":"img_choose4","scaleY":0.95,"scaleX":0.95,"rotation":-20,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ershiyidian.component.QingxiazhuUI"}},{"type":"Qingxiazhu","props":{"y":277,"x":1053,"var":"img_choose3","scaleY":0.95,"scaleX":0.95,"rotation":-45,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ershiyidian.component.QingxiazhuUI"}},{"type":"HeiJieKe","props":{"y":324,"x":634,"var":"view_hjk0","scaleY":0.6,"scaleX":0.6,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.HeiJieKeUI"}},{"type":"HeiJieKe","props":{"y":296,"x":435,"var":"view_hjk1","scaleY":0.6,"scaleX":0.6,"rotation":25,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.HeiJieKeUI"}},{"type":"HeiJieKe","props":{"y":215,"x":286,"var":"view_hjk2","scaleY":0.6,"scaleX":0.6,"rotation":40,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.HeiJieKeUI"}},{"type":"HeiJieKe","props":{"y":221,"x":988,"var":"view_hjk3","scaleY":0.6,"scaleX":0.6,"rotation":-40,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.HeiJieKeUI"}},{"type":"HeiJieKe","props":{"y":307,"x":836,"var":"view_hjk4","scaleY":0.6,"scaleX":0.6,"rotation":-25,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.HeiJieKeUI"}},{"type":"WuXiaoLong","props":{"y":318,"x":640,"var":"view_wxl0","scaleY":0.7,"scaleX":0.7,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI"}},{"type":"WuXiaoLong","props":{"y":288,"x":447,"var":"view_wxl1","scaleY":0.7,"scaleX":0.7,"rotation":25,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI"}},{"type":"WuXiaoLong","props":{"y":212,"x":292,"var":"view_wxl2","scaleY":0.7,"scaleX":0.7,"rotation":40,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI"}},{"type":"WuXiaoLong","props":{"y":209,"x":991,"var":"view_wxl3","scaleY":0.7,"scaleX":0.7,"rotation":-40,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI"}},{"type":"WuXiaoLong","props":{"y":297,"x":841,"var":"view_wxl4","scaleY":0.7,"scaleX":0.7,"rotation":-25,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI"}},{"type":"WuXiaoLong","props":{"y":342,"x":600,"var":"view_wxl0_0","scaleY":0.5,"scaleX":0.5,"rotation":0,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI"}},{"type":"WuXiaoLong","props":{"y":343,"x":681,"var":"view_wxl0_1","scaleY":0.5,"scaleX":0.5,"rotation":0,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI"}},{"type":"WuXiaoLong","props":{"y":295,"x":412,"var":"view_wxl1_0","scaleY":0.54,"scaleX":0.5,"rotation":30,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI"}},{"type":"WuXiaoLong","props":{"y":333,"x":474,"var":"view_wxl1_1","scaleY":0.5,"scaleX":0.5,"rotation":28,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI"}},{"type":"WuXiaoLong","props":{"y":211,"x":255,"var":"view_wxl2_0","scaleY":0.5,"scaleX":0.5,"rotation":40,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI"}},{"type":"WuXiaoLong","props":{"y":256,"x":310,"var":"view_wxl2_1","scaleY":0.5,"scaleX":0.5,"rotation":40,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI"}},{"type":"WuXiaoLong","props":{"y":258,"x":976,"var":"view_wxl3_0","scaleY":0.5,"scaleX":0.5,"rotation":-40,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI"}},{"type":"WuXiaoLong","props":{"y":213,"x":1028,"var":"view_wxl3_1","scaleY":0.5,"scaleX":0.5,"rotation":-40,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI"}},{"type":"WuXiaoLong","props":{"y":337,"x":808,"var":"view_wxl4_0","scaleY":0.5,"scaleX":0.5,"rotation":-29,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI"}},{"type":"WuXiaoLong","props":{"y":303,"x":867,"var":"view_wxl4_1","scaleY":0.5,"scaleX":0.5,"rotation":-30,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI"}},{"type":"BaoPai","props":{"y":343,"x":600,"var":"view_boom0_0","scaleY":0.5,"scaleX":0.5,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.BaoPaiUI"}},{"type":"BaoPai","props":{"y":344,"x":681,"var":"view_boom0_1","scaleY":0.5,"scaleX":0.5,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.BaoPaiUI"}},{"type":"BaoPai","props":{"y":296,"x":410,"var":"view_boom1_0","scaleY":0.5,"scaleX":0.5,"rotation":30,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.BaoPaiUI"}},{"type":"BaoPai","props":{"y":333,"x":474,"var":"view_boom1_1","scaleY":0.5,"scaleX":0.5,"rotation":28,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.BaoPaiUI"}},{"type":"BaoPai","props":{"y":211,"x":254,"var":"view_boom2_0","scaleY":0.5,"scaleX":0.5,"rotation":40,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.BaoPaiUI"}},{"type":"BaoPai","props":{"y":257,"x":311,"var":"view_boom2_1","scaleY":0.5,"scaleX":0.5,"rotation":40,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.BaoPaiUI"}},{"type":"BaoPai","props":{"y":260,"x":976,"var":"view_boom3_0","scaleY":0.5,"scaleX":0.5,"rotation":-40,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.BaoPaiUI"}},{"type":"BaoPai","props":{"y":214,"x":1028,"var":"view_boom3_1","scaleY":0.5,"scaleX":0.5,"rotation":-40,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.BaoPaiUI"}},{"type":"BaoPai","props":{"y":337,"x":809,"var":"view_boom4_0","scaleY":0.5,"scaleX":0.5,"rotation":-29,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.BaoPaiUI"}},{"type":"BaoPai","props":{"y":304,"x":866,"var":"view_boom4_1","scaleY":0.5,"scaleX":0.5,"rotation":-30,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.BaoPaiUI"}},{"type":"Box","props":{"y":476,"x":641,"var":"box_chip0","mouseThrough":true,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":11,"x":20,"width":122,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k2.png","sizeGrid":"0,20,0,20","scaleY":0.7,"scaleX":0.7,"height":36}},{"type":"Text","props":{"y":14,"x":37,"wordWrap":true,"width":86,"var":"text_chip0","valign":"middle","text":"500.00","leading":6,"height":18,"fontSize":18,"color":"#ffffff","align":"left"}},{"type":"Image","props":{"y":18,"x":26,"width":37,"skin":"tongyong_ui/game_ui/tongyong/dating/icon_money1.png","height":37,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":445,"x":378,"var":"box_chip1","rotation":20,"mouseThrough":true,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":12,"x":12,"width":122,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k2.png","sizeGrid":"0,20,0,20","scaleY":0.7,"scaleX":0.7,"height":36}},{"type":"Text","props":{"y":15,"x":30,"wordWrap":true,"width":86,"var":"text_chip1","valign":"middle","text":"500.00","leading":6,"height":18,"fontSize":18,"color":"#ffffff","align":"left"}},{"type":"Image","props":{"y":18,"x":18,"width":37,"skin":"tongyong_ui/game_ui/tongyong/dating/icon_money1.png","height":37,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":334,"x":173,"width":99,"var":"box_chip2","rotation":45,"mouseThrough":true,"height":48,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":9,"x":10,"width":122,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k2.png","sizeGrid":"0,20,0,20","scaleY":0.7,"scaleX":0.7,"height":36}},{"type":"Text","props":{"y":12,"x":27,"wordWrap":true,"width":86,"var":"text_chip2","valign":"middle","text":"500.00","leading":6,"height":18,"fontSize":18,"color":"#ffffff","align":"left"}},{"type":"Image","props":{"y":16,"x":16,"width":37,"skin":"tongyong_ui/game_ui/tongyong/dating/icon_money1.png","height":37,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":436,"x":913,"width":99,"var":"box_chip4","rotation":-25,"mouseThrough":true,"height":48,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":12,"x":12,"width":122,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k2.png","sizeGrid":"0,20,0,20","scaleY":0.7,"scaleX":0.7,"height":36}},{"type":"Text","props":{"y":14,"x":30,"wordWrap":true,"width":86,"var":"text_chip4","valign":"middle","text":"500.00","leading":6,"height":18,"fontSize":18,"color":"#ffffff","align":"left"}},{"type":"Image","props":{"y":18,"x":20,"width":37,"skin":"tongyong_ui/game_ui/tongyong/dating/icon_money1.png","height":37,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":325,"x":1113,"var":"box_chip3","rotation":-45,"mouseThrough":true,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":18,"x":10,"width":122,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k2.png","sizeGrid":"0,20,0,20","scaleY":0.7,"scaleX":0.7,"height":36}},{"type":"Text","props":{"y":21,"x":28,"wordWrap":true,"width":86,"var":"text_chip3","valign":"middle","text":"500.00","leading":6,"height":18,"fontSize":18,"color":"#ffffff","align":"left"}},{"type":"Image","props":{"y":24,"x":18,"width":37,"skin":"tongyong_ui/game_ui/tongyong/dating/icon_money1.png","height":37,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Label","props":{"y":441,"x":575,"wordWrap":true,"width":128,"visible":false,"var":"txt_name0","text":"玩家名字六字","leading":10,"height":14,"fontSize":14,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":436,"x":839,"wordWrap":true,"width":128,"var":"txt_name4","text":"玩家名字六字","rotation":-25,"leading":10,"height":16,"fontSize":14,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":340,"x":1046,"wordWrap":true,"width":98,"var":"txt_name3","text":"玩家名字六字","skewX":0,"rotation":-45,"leading":10,"height":23,"fontSize":14,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":384,"x":325,"wordWrap":true,"width":128,"var":"txt_name1","text":"玩家名字六字","rotation":20,"leading":10,"height":17,"fontSize":14,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":274,"x":168,"wordWrap":true,"width":93,"var":"txt_name2","text":"玩家名字六字","skewX":-2,"rotation":45,"leading":10,"height":14,"fontSize":14,"color":"#ffffff","align":"center"}},{"type":"WuXiaoLong","props":{"y":195,"x":640,"var":"view_wxl5","scaleY":0.7,"scaleX":0.7,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI"}},{"type":"PaoPao","props":{"y":227,"x":544,"var":"view_qipao5_0","runtime":"ui.ajqp.game_ui.ershiyidian.component.PaoPaoUI"}},{"type":"HeiJieKe","props":{"y":197,"x":633,"var":"view_hjk5","scaleY":0.6,"scaleX":0.6,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.HeiJieKeUI"}},{"type":"BaoPai","props":{"y":227,"x":544,"var":"view_baopai5_0","runtime":"ui.ajqp.game_ui.ershiyidian.component.BaoPaiUI"}},{"type":"BaoPai","props":{"y":299,"x":333,"var":"view_baopai1_0","rotation":30,"runtime":"ui.ajqp.game_ui.ershiyidian.component.BaoPaiUI"}},{"type":"BaoPai1","props":{"y":356,"x":453,"var":"view_baopai1_1","rotation":17,"runtime":"ui.ajqp.game_ui.ershiyidian.component.BaoPai1UI"}},{"type":"BaoPai1","props":{"y":266,"x":283,"var":"view_baopai2_1","rotation":32,"runtime":"ui.ajqp.game_ui.ershiyidian.component.BaoPai1UI"}},{"type":"BaoPai","props":{"y":190,"x":185,"var":"view_baopai2_0","rotation":39,"runtime":"ui.ajqp.game_ui.ershiyidian.component.BaoPaiUI"}},{"type":"BaoPai1","props":{"y":372,"x":687,"var":"view_baopai0_1","runtime":"ui.ajqp.game_ui.ershiyidian.component.BaoPai1UI"}},{"type":"BaoPai","props":{"y":372,"x":544,"var":"view_baopai0_0","runtime":"ui.ajqp.game_ui.ershiyidian.component.BaoPaiUI"}},{"type":"BaoPai","props":{"y":373,"x":783,"var":"view_baopai4_0","rotation":-22,"runtime":"ui.ajqp.game_ui.ershiyidian.component.BaoPaiUI"}},{"type":"BaoPai1","props":{"y":325,"x":902,"var":"view_baopai4_1","rotation":-27,"runtime":"ui.ajqp.game_ui.ershiyidian.component.BaoPai1UI"}},{"type":"BaoPai","props":{"y":294,"x":961,"var":"view_baopai3_0","rotation":-30,"runtime":"ui.ajqp.game_ui.ershiyidian.component.BaoPaiUI"}},{"type":"BaoPai1","props":{"y":221,"x":1068,"var":"view_baopai3_1","rotation":-38,"runtime":"ui.ajqp.game_ui.ershiyidian.component.BaoPai1UI"}},{"type":"PaoPao1","props":{"y":266,"x":283,"var":"view_qipao2_1","rotation":32,"runtime":"ui.ajqp.game_ui.ershiyidian.component.PaoPao1UI"}},{"type":"PaoPao1","props":{"y":355,"x":453,"var":"view_qipao1_1","rotation":17,"runtime":"ui.ajqp.game_ui.ershiyidian.component.PaoPao1UI"}},{"type":"PaoPao1","props":{"y":371,"x":687,"var":"view_qipao0_1","runtime":"ui.ajqp.game_ui.ershiyidian.component.PaoPao1UI"}},{"type":"PaoPao1","props":{"y":324,"x":902,"var":"view_qipao4_1","rotation":-27,"runtime":"ui.ajqp.game_ui.ershiyidian.component.PaoPao1UI"}},{"type":"PaoPao1","props":{"y":220,"x":1067,"var":"view_qipao3_1","rotation":-38,"runtime":"ui.ajqp.game_ui.ershiyidian.component.PaoPao1UI"}},{"type":"PaoPao","props":{"y":189,"x":185,"var":"view_qipao2_0","rotation":39,"runtime":"ui.ajqp.game_ui.ershiyidian.component.PaoPaoUI"}},{"type":"PaoPao","props":{"y":298,"x":333,"var":"view_qipao1_0","rotation":30,"runtime":"ui.ajqp.game_ui.ershiyidian.component.PaoPaoUI"}},{"type":"PaoPao","props":{"y":371,"x":544,"var":"view_qipao0_0","runtime":"ui.ajqp.game_ui.ershiyidian.component.PaoPaoUI"}},{"type":"PaoPao","props":{"y":372,"x":782,"var":"view_qipao4_0","rotation":-22,"runtime":"ui.ajqp.game_ui.ershiyidian.component.PaoPaoUI"}},{"type":"PaoPao","props":{"y":293,"x":960,"var":"view_qipao3_0","rotation":-30,"runtime":"ui.ajqp.game_ui.ershiyidian.component.PaoPaoUI"}},{"type":"BaoPai","props":{"y":317,"x":641,"var":"view_boom0","scaleY":0.7,"scaleX":0.7,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.BaoPaiUI"}},{"type":"BaoPai","props":{"y":297,"x":841,"var":"view_boom4","scaleY":0.7,"scaleX":0.7,"rotation":-25,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.BaoPaiUI"}},{"type":"BaoPai","props":{"y":209,"x":991,"var":"view_boom3","scaleY":0.7,"scaleX":0.7,"rotation":-40,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.BaoPaiUI"}},{"type":"BaoPai","props":{"y":288,"x":447,"var":"view_boom1","scaleY":0.7,"scaleX":0.7,"rotation":25,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.BaoPaiUI"}},{"type":"BaoPai","props":{"y":212,"x":292,"var":"view_boom2","scaleY":0.7,"scaleX":0.7,"rotation":40,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.BaoPaiUI"}},{"type":"BaoPai","props":{"y":203,"x":640,"var":"view_boom5","scaleY":0.7,"scaleX":0.7,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.BaoPaiUI"}},{"type":"Box","props":{"y":396,"x":642,"width":244,"var":"box_prompt0","height":46,"anchorY":1,"anchorX":0.5},"child":[{"type":"Image","props":{"y":45,"x":120.5,"width":241,"var":"img_prompt0","skin":"blackjack_ui/game_ui/ershiyidian/tu_qipuao.png","height":45,"anchorY":1,"anchorX":0.5}},{"type":"Text","props":{"y":5,"x":11.5,"width":219,"var":"txt_prompt0","text":"是否为您下注的x号位购买保险","leading":6,"height":23,"fontSize":15,"color":"#4e3509","bold":true,"align":"center"}}]},{"type":"Box","props":{"y":365,"x":399,"width":263,"var":"box_prompt1","height":47,"anchorY":1,"anchorX":0.5},"child":[{"type":"Image","props":{"y":45,"x":133,"width":241,"var":"img_prompt1","skin":"blackjack_ui/game_ui/ershiyidian/tu_qipuao.png","sizeGrid":"0,30,0,30","height":45,"anchorY":1,"anchorX":0.5}},{"type":"Text","props":{"y":6,"width":257,"var":"txt_prompt1","text":"是否为您下注的x号位购买保险","leading":6,"height":23,"fontSize":15,"color":"#4e3509","bold":true,"align":"center"}}]},{"type":"Box","props":{"y":273,"x":231,"width":260,"var":"box_prompt2","height":47,"anchorY":1,"anchorX":0.5},"child":[{"type":"Image","props":{"y":45,"x":129,"width":241,"var":"img_prompt2","skin":"blackjack_ui/game_ui/ershiyidian/tu_qipuao.png","sizeGrid":"0,30,0,30","height":45,"anchorY":1,"anchorX":0.5}},{"type":"Text","props":{"y":7,"x":22,"width":208,"var":"txt_prompt2","text":"是否为您下注的x号位购买保险","leading":6,"height":16,"fontSize":15,"color":"#4e3509","bold":true,"align":"center"}}]},{"type":"Box","props":{"y":361,"x":878,"width":262,"var":"box_prompt4","height":44,"anchorY":1,"anchorX":0.5},"child":[{"type":"Image","props":{"y":45,"x":131,"width":241,"var":"img_prompt4","skin":"blackjack_ui/game_ui/ershiyidian/tu_qipuao.png","sizeGrid":"0,30,0,30","height":45,"anchorY":1,"anchorX":0.5}},{"type":"Text","props":{"y":5,"width":257,"var":"txt_prompt4","text":"是否为您下注的x号位购买保险","leading":6,"height":23,"fontSize":15,"color":"#4e3509","bold":true,"align":"center"}}]},{"type":"Box","props":{"y":267,"x":1056,"width":287,"var":"box_prompt3","height":46,"anchorY":1,"anchorX":0.5},"child":[{"type":"Image","props":{"y":45,"x":140.5,"width":241,"var":"img_prompt3","skin":"blackjack_ui/game_ui/ershiyidian/tu_qipuao.png","sizeGrid":"0,30,0,30","height":45,"anchorY":1,"anchorX":0.5}},{"type":"Text","props":{"y":5,"x":31.5,"width":219,"var":"txt_prompt3","text":"是否为您下注的x号位购买保险","leading":6,"height":23,"fontSize":15,"color":"#4e3509","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":191,"x":1001,"var":"img_double3_1","skin":"blackjack_ui/game_ui/ershiyidian/tu_shuangbei.png","skewX":15,"scaleY":0.36,"scaleX":0.36,"rotation":-35}},{"type":"Image","props":{"y":306,"x":789,"var":"img_double4_0","skin":"blackjack_ui/game_ui/ershiyidian/tu_shuangbei.png","skewX":16,"scaleY":0.36,"scaleX":0.36,"rotation":-25}},{"type":"Image","props":{"y":279,"x":856,"var":"img_double4_1","skin":"blackjack_ui/game_ui/ershiyidian/tu_shuangbei.png","skewX":16,"scaleY":0.36,"scaleX":0.36,"rotation":-25}},{"type":"Image","props":{"y":310,"x":593,"var":"img_double0_0","skin":"blackjack_ui/game_ui/ershiyidian/tu_shuangbei.png","scaleY":0.36,"scaleX":0.36}},{"type":"Image","props":{"y":310,"x":647,"var":"img_double0_1","skin":"blackjack_ui/game_ui/ershiyidian/tu_shuangbei.png","scaleY":0.365,"scaleX":0.36}},{"type":"Image","props":{"y":266,"x":408,"var":"img_double1_0","skin":"blackjack_ui/game_ui/ershiyidian/tu_shuangbei.png","skewX":-16,"scaleY":0.36,"scaleX":0.36,"rotation":25}},{"type":"Image","props":{"y":297,"x":462,"var":"img_double1_1","skin":"blackjack_ui/game_ui/ershiyidian/tu_shuangbei.png","skewX":-16,"scaleY":0.36,"scaleX":0.36,"rotation":25}},{"type":"Image","props":{"y":179,"x":258,"var":"img_double2_0","skin":"blackjack_ui/game_ui/ershiyidian/tu_shuangbei.png","skewX":-15,"scaleY":0.36,"scaleX":0.36,"rotation":35}},{"type":"Image","props":{"y":218,"x":317,"var":"img_double2_1","skin":"blackjack_ui/game_ui/ershiyidian/tu_shuangbei.png","skewX":-15,"scaleY":0.36,"scaleX":0.36,"rotation":35}},{"type":"Image","props":{"y":232,"x":947,"var":"img_double3_0","skin":"blackjack_ui/game_ui/ershiyidian/tu_shuangbei.png","skewX":15,"scaleY":0.36,"scaleX":0.36,"rotation":-35}},{"type":"PaiXei","props":{"y":63,"x":861,"var":"view_paixie","runtime":"ui.ajqp.game_ui.ershiyidian.PaiXeiUI"}}]},{"type":"Box","props":{"width":1280,"var":"box_state0","height":60,"centerX":0,"bottom":15,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":36,"x":765,"width":200,"var":"btn_xuya","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_5.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#7e2314","labelStroke":2,"labelSize":26,"labelPadding":"-4","labelColors":"#ffffff","labelBold":true,"height":80,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"blackjack_ui/game_ui/ershiyidian/tu_xy.png","centerY":-6,"centerX":0}}]},{"type":"Button","props":{"y":36,"x":765,"width":200,"var":"btn_complete","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_3.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#7e2314","labelStroke":2,"labelSize":26,"labelPadding":"-4","labelColors":"#ffffff","labelBold":true,"height":80,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"blackjack_ui/game_ui/ershiyidian/tu_xzwc.png","centerY":-6,"centerX":0}}]},{"type":"Button","props":{"y":36,"x":515,"width":200,"var":"btn_max","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_6.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#000060","labelStroke":2,"labelSize":26,"labelPadding":"-6","labelColors":"#fbd9ff","labelBold":true,"height":80,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"width":177,"height":28,"centerY":-6,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Clip","props":{"var":"clip_max","skin":"blackjack_ui/game_ui/ershiyidian/clip_zd0-9.png","index":0,"clipX":11,"centerY":0,"centerX":0}}]}]},{"type":"Button","props":{"y":36,"x":314,"width":200,"var":"btn_min","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_6.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#000060","labelStroke":2,"labelSize":26,"labelPadding":"-6","labelColors":"#fbd9ff","labelBold":true,"height":80,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"width":177,"height":28,"centerY":-6,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Clip","props":{"var":"clip_min","skin":"blackjack_ui/game_ui/ershiyidian/clip_zd0-9.png","index":0,"clipX":11,"centerY":0,"centerX":0}}]}]},{"type":"Button","props":{"y":36,"x":966,"width":200,"var":"btn_bet","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_3.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d5126","labelStroke":2,"labelSize":26,"labelPadding":"-4","labelColors":"#ffffff","labelBold":true,"height":80,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"blackjack_ui/game_ui/ershiyidian/tu_xz.png","centerY":-6,"centerX":0}}]},{"type":"Button","props":{"y":36,"x":966,"width":200,"var":"btn_enter","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_3.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d5626","labelStroke":2,"labelSize":26,"labelPadding":"-4","labelColors":"#ffffff","labelBold":true,"height":80,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"blackjack_ui/game_ui/ershiyidian/tu_qd.png","centerY":-6,"centerX":0}}]}]},{"type":"Box","props":{"width":1280,"var":"box_state1","height":60,"centerX":0,"bottom":15},"child":[{"type":"Button","props":{"y":36,"width":200,"var":"btn_buy","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_3.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d5626","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"centerX":126,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":18,"x":57,"skin":"blackjack_ui/game_ui/ershiyidian/tu_mbx.png"}}]},{"type":"Button","props":{"y":36,"width":200,"var":"btn_notbuy","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_5.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d5626","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"centerX":-126,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":16,"x":58,"skin":"blackjack_ui/game_ui/ershiyidian/tu_bm.png"}}]}]},{"type":"Box","props":{"width":1280,"var":"box_state2","height":60,"centerX":0,"bottom":15,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":36,"x":966,"width":200,"var":"btn_ask","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_3.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d5626","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"height":80,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"blackjack_ui/game_ui/ershiyidian/tu_yp.png","centerY":-6,"centerX":0}}]},{"type":"Button","props":{"y":36,"x":766,"width":200,"var":"btn_stop","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_5.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d5626","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"height":80,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"blackjack_ui/game_ui/ershiyidian/tu_tp.png","centerY":-6,"centerX":0}}]},{"type":"Button","props":{"y":36,"x":515,"width":200,"var":"btn_double","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_4.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d5626","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"height":80,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"blackjack_ui/game_ui/ershiyidian/tu_sb.png","centerY":-6,"centerX":0}}]},{"type":"Button","props":{"y":36,"x":315,"width":200,"var":"btn_part","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_4.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d5626","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"height":80,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"blackjack_ui/game_ui/ershiyidian/tu_fp.png","centerY":-6,"centerX":0}}]}]},{"type":"TouXiang21dian","props":{"y":339,"x":40,"var":"view_player2","runtime":"ui.ajqp.game_ui.tongyong.TouXiang21dianUI"}},{"type":"TouXiang21dian","props":{"y":472,"x":260,"var":"view_player1","runtime":"ui.ajqp.game_ui.tongyong.TouXiang21dianUI"}},{"type":"TouXiang21dian","props":{"y":472,"x":915,"var":"view_player4","runtime":"ui.ajqp.game_ui.tongyong.TouXiang21dianUI"}},{"type":"TouXiang21dian","props":{"y":504,"x":590,"var":"view_player0","runtime":"ui.ajqp.game_ui.tongyong.TouXiang21dianUI"}},{"type":"TouXiang21dian","props":{"y":339,"x":1138,"var":"view_player3","runtime":"ui.ajqp.game_ui.tongyong.TouXiang21dianUI"}},{"type":"XiPai","props":{"y":243,"x":636,"var":"view_xipai","anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.tongyong.effect.XiPaiUI"}},{"type":"Effect_bxbs","props":{"y":348,"x":214,"var":"img_bao2","scaleY":0.6,"scaleX":0.6,"rotation":45,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.Effect_bxbsUI"}},{"type":"Effect_bxbs","props":{"y":269,"x":1107,"var":"img_bao3","scaleY":0.6,"scaleX":0.6,"rotation":-45,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.Effect_bxbsUI"}},{"type":"Effect_bxbs","props":{"y":438,"x":421,"var":"img_bao1","scaleY":0.6,"scaleX":0.6,"rotation":20,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.Effect_bxbsUI"}},{"type":"Effect_bxbs","props":{"y":457,"x":698,"var":"img_bao0","scaleY":0.6,"scaleX":0.6,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.Effect_bxbsUI"}},{"type":"Effect_bxbs","props":{"y":394,"x":965,"var":"img_bao4","scaleY":0.6,"scaleX":0.6,"rotation":-25,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ershiyidian.effect.Effect_bxbsUI"}},{"type":"Box","props":{"y":261,"x":901,"width":141,"var":"box_bet","height":388},"child":[{"type":"Image","props":{"y":75,"x":63,"width":127,"skin":"blackjack_ui/game_ui/ershiyidian/hslider2.png","sizeGrid":"0,51,0,30","height":72,"anchorY":1,"anchorX":0.5},"child":[{"type":"Text","props":{"y":15,"x":7,"wordWrap":true,"width":114,"var":"text_bet","text":"131300","leading":6,"height":36,"fontSize":30,"color":"#dadada","align":"center"}}]},{"type":"Image","props":{"y":381,"x":63,"skin":"blackjack_ui/game_ui/ershiyidian/Vslider1.png","anchorY":1,"anchorX":0.5}},{"type":"VSlider","props":{"y":345,"x":48,"var":"hslider_bet","skin":"blackjack_ui/game_ui/ershiyidian/Vslider.png","sizeGrid":"0,0,0,0,1","scaleY":-1}}]},{"type":"Effect_baoxian","props":{"y":321,"x":542,"var":"ani_baoxian","runtime":"ui.ajqp.game_ui.ershiyidian.effect.Effect_baoxianUI"}},{"type":"Effect_yqp","props":{"y":476,"x":801,"var":"box_opt4","runtime":"ui.ajqp.game_ui.ershiyidian.component.Effect_yqpUI"}},{"type":"Effect_yqp","props":{"y":350,"x":1021,"var":"box_opt3","runtime":"ui.ajqp.game_ui.ershiyidian.component.Effect_yqpUI"}},{"type":"Effect_zqp","props":{"y":348,"x":139,"var":"box_opt2","runtime":"ui.ajqp.game_ui.ershiyidian.component.Effect_zqpUI"}},{"type":"Effect_zqp","props":{"y":476,"x":359,"var":"box_opt1","runtime":"ui.ajqp.game_ui.ershiyidian.component.Effect_zqpUI"}},{"type":"Effect_zqp","props":{"y":503,"x":692,"var":"box_opt0","runtime":"ui.ajqp.game_ui.ershiyidian.component.Effect_zqpUI"}},{"type":"Image","props":{"y":223,"x":637,"var":"img_point","skin":"blackjack_ui/game_ui/ershiyidian/tu_zx.png","scaleY":-1,"scaleX":0.4,"rotation":-126,"anchorX":1}},{"type":"Button","props":{"width":240,"var":"btn_continue","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_1.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d6426","labelStroke":2,"labelSize":26,"labelPadding":"-4","labelColors":"#ffffff","labelBold":true,"centerY":40,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":18,"x":58,"skin":"tongyong_ui/game_ui/tongyong/general/tu_jxyx.png"}}]}]},{"type":"Image","props":{"width":360,"var":"box_room_left","top":-1,"skin":"tongyong_ui/game_ui/tongyong/general/tu_pjhd.png","sizeGrid":"0,10,0,10","left":115,"height":39},"child":[{"type":"Text","props":{"y":8,"x":0,"width":360,"var":"text_info","valign":"middle","text":"牌局号：123456789012345678900004","leading":6,"height":24,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":41,"x":6,"width":247,"var":"txt_roomtype","valign":"middle","text":"试玩场:底注:1000","leading":6,"height":25,"fontSize":20,"color":"#dadada","align":"left"}}]},{"type":"Box","props":{"x":70,"width":112,"var":"box_top_left","top":0,"mouseThrough":true,"left":14,"height":337,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":137,"x":44,"var":"btn_baodian","stateNum":1,"skin":"blackjack_ui/game_ui/ershiyidian/btn_baodian.png","left":28,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":53,"x":53,"var":"btn_menu","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_cd.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":84,"x":56,"var":"img_menu","skin":"tongyong_ui/game_ui/tongyong/general/anniu/cd_1.png","sizeGrid":"40,30,40,30","anchorY":0,"anchorX":0.5},"child":[{"type":"Button","props":{"y":55,"x":56,"var":"btn_rule","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_gz.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":136,"x":56,"var":"btn_record","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_zj.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":217,"x":56,"var":"btn_seeting","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_sz.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":94,"x":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/cd_2.png"}},{"type":"Image","props":{"y":175,"x":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/cd_2.png"}}]}]},{"type":"Box","props":{"width":178,"var":"box_top_right","top":16,"right":28,"height":76,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":38,"x":140.5,"var":"btn_back","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_fh1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":35,"x":42.5,"var":"btn_qifu","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_qf.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"width":121,"var":"box_bottom_right","right":12,"height":125,"bottom":0},"child":[{"type":"Chongzhi","props":{"y":63,"x":61,"var":"btn_chongzhi","scaleY":0.85,"scaleX":0.85,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.tongyong.effect.ChongzhiUI"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.ershiyidian.component.QingxiazhuUI",ui.ajqp.game_ui.ershiyidian.component.QingxiazhuUI);
			View.regComponent("ui.ajqp.game_ui.tongyong.effect.ChongzhiUI",ui.ajqp.game_ui.tongyong.effect.ChongzhiUI);
			View.regComponent("ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI",ui.ajqp.game_ui.ershiyidian.effect.WuXiaoLongUI);
			View.regComponent("ui.ajqp.game_ui.ershiyidian.effect.BaoPaiUI",ui.ajqp.game_ui.ershiyidian.effect.BaoPaiUI);
			View.regComponent("Text",laya.display.Text);
			View.regComponent("ui.ajqp.game_ui.ershiyidian.component.PaoPaoUI",ui.ajqp.game_ui.ershiyidian.component.PaoPaoUI);
			View.regComponent("ui.ajqp.game_ui.ershiyidian.component.BaoPaiUI",ui.ajqp.game_ui.ershiyidian.component.BaoPaiUI);
			View.regComponent("ui.ajqp.game_ui.ershiyidian.component.BaoPai1UI",ui.ajqp.game_ui.ershiyidian.component.BaoPai1UI);
			View.regComponent("ui.ajqp.game_ui.ershiyidian.effect.HeiJieKeUI",ui.ajqp.game_ui.ershiyidian.effect.HeiJieKeUI);
			View.regComponent("ui.ajqp.game_ui.ershiyidian.PaiXeiUI",ui.ajqp.game_ui.ershiyidian.PaiXeiUI);
			View.regComponent("ui.ajqp.game_ui.tongyong.TouXiang21dianUI",ui.ajqp.game_ui.tongyong.TouXiang21dianUI);
			View.regComponent("ui.ajqp.game_ui.tongyong.effect.XiPaiUI",ui.ajqp.game_ui.tongyong.effect.XiPaiUI);
			View.regComponent("ui.ajqp.game_ui.ershiyidian.effect.Effect_bxbsUI",ui.ajqp.game_ui.ershiyidian.effect.Effect_bxbsUI);
			View.regComponent("ui.ajqp.game_ui.ershiyidian.effect.Effect_baoxianUI",ui.ajqp.game_ui.ershiyidian.effect.Effect_baoxianUI);
			View.regComponent("ui.ajqp.game_ui.ershiyidian.component.Effect_yqpUI",ui.ajqp.game_ui.ershiyidian.component.Effect_yqpUI);
			View.regComponent("ui.ajqp.game_ui.ershiyidian.component.Effect_zqpUI",ui.ajqp.game_ui.ershiyidian.component.Effect_zqpUI);
			View.regComponent("ui.ajqp.game_ui.ershiyidian.component.PaoPao1UI",ui.ajqp.game_ui.ershiyidian.component.PaoPao1UI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.ershiyidian.ErShiYiDianUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.ershiyidian {
    export class ErShiYiDian_BaoDianUI extends View {
		public panel_baodian:Laya.Panel;
		public btn_close:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":110,"width":816,"height":504,"centerX":0},"child":[{"type":"ZhongKuang0","props":{"y":-110,"x":-232,"centerX":0,"runtime":"ui.ajqp.game_ui.tongyong.effect.ZhongKuang0UI"}},{"type":"Image","props":{"y":29,"x":408,"skin":"blackjack_ui/game_ui/ershiyidian/tit_baodian.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Panel","props":{"y":55,"x":1,"width":817,"var":"panel_baodian","vScrollBarSkin":"tongyong_ui/game_ui/tongyong/dating/vscroll.png","height":449},"child":[{"type":"Image","props":{"y":60,"x":32,"width":783,"skin":"blackjack_ui/game_ui/ershiyidian/tu_baodian.png"}},{"type":"Image","props":{"y":60,"x":32,"width":783,"skin":"blackjack_ui/game_ui/ershiyidian/tu_zz.png","sizeGrid":"0,22,23,0","renderType":"mask","height":395}}]},{"type":"Image","props":{"y":115,"x":0,"width":32,"skin":"blackjack_ui/game_ui/ershiyidian/tu_baodian2.png","sizeGrid":"75,0,294,28","height":389}},{"type":"Image","props":{"y":84,"x":104,"width":712,"skin":"blackjack_ui/game_ui/ershiyidian/tu_baodian1.png","sizeGrid":"0,0,0,0"}},{"type":"Image","props":{"y":53,"x":104,"width":712,"skin":"blackjack_ui/game_ui/ershiyidian/tu_baodian3.png"}},{"type":"Image","props":{"y":53,"x":0,"skin":"blackjack_ui/game_ui/ershiyidian/tu_dianshu.png"}},{"type":"Button","props":{"y":12,"x":803,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_gb.png","anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.tongyong.effect.ZhongKuang0UI",ui.ajqp.game_ui.tongyong.effect.ZhongKuang0UI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.ershiyidian.ErShiYiDian_BaoDianUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.ershiyidian {
    export class ErShiYiDian_GuiZeUI extends View {
		public panel_rule:Laya.Panel;
		public btn_close:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720,"centerY":0,"centerX":0},"child":[{"type":"Box","props":{"y":110,"x":232,"width":816,"height":504,"centerX":0},"child":[{"type":"ZhongKuang","props":{"y":-110,"x":-232,"centerX":0,"runtime":"ui.ajqp.game_ui.tongyong.effect.ZhongKuangUI"}},{"type":"Image","props":{"y":29,"x":408,"skin":"tongyong_ui/game_ui/tongyong/hud/tit_game_rule.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":55,"x":3,"stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_wjjs.png","selected":true}},{"type":"Panel","props":{"y":54,"x":170,"width":647,"var":"panel_rule","height":450},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"blackjack_ui/game_ui/ershiyidian/guize_1.png","height":1536}}]},{"type":"Button","props":{"y":12,"x":803,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_gb.png","anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.tongyong.effect.ZhongKuangUI",ui.ajqp.game_ui.tongyong.effect.ZhongKuangUI);

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
		public txt_difen0:Laya.Label;
		public txt_least0:Laya.Label;
		public img_room1:Laya.Box;
		public txt_difen1:Laya.Label;
		public txt_least1:Laya.Label;
		public img_room2:Laya.Box;
		public txt_difen2:Laya.Label;
		public txt_least2:Laya.Label;
		public img_room3:Laya.Box;
		public txt_difen3:Laya.Label;
		public txt_least3:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"top":-1,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bj.png","right":-1,"left":-1,"bottom":-1}},{"type":"Hud","props":{"var":"view","top":0,"runtime":"ui.ajqp.game_ui.tongyong.HudUI","right":0,"left":0,"bottom":0}},{"type":"Box","props":{"y":206,"width":1233,"var":"box_right","height":300,"centerX":0},"child":[{"type":"Box","props":{"y":0,"x":0,"width":300,"var":"img_room0","height":300},"child":[{"type":"Button","props":{"y":0,"x":0,"stateNum":1,"skin":"blackjack_ui/game_ui/ershiyidian/btn_cjc.png"}},{"type":"Image","props":{"y":246,"x":104,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_zr.png"}},{"type":"Image","props":{"y":220,"x":103,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_df.png"}},{"type":"Label","props":{"y":220,"x":155,"width":54,"var":"txt_difen0","height":22,"fontSize":22,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":246,"x":155,"width":54,"var":"txt_least0","valign":"middle","height":22,"fontSize":22,"color":"#ffffff","align":"left"}}]},{"type":"Box","props":{"y":0,"x":311,"width":300,"var":"img_room1","height":300},"child":[{"type":"Button","props":{"y":0,"x":0,"stateNum":1,"skin":"blackjack_ui/game_ui/ershiyidian/btn_xzc.png"}},{"type":"Image","props":{"y":246,"x":104,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_zr.png"}},{"type":"Image","props":{"y":220,"x":103,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_df.png"}},{"type":"Label","props":{"y":220,"x":155,"width":54,"var":"txt_difen1","height":22,"fontSize":22,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":246,"x":155,"width":54,"var":"txt_least1","height":22,"fontSize":22,"color":"#ffffff","align":"left"}}]},{"type":"Box","props":{"y":0,"x":622,"width":300,"var":"img_room2","height":300},"child":[{"type":"Button","props":{"y":0,"x":0,"stateNum":1,"skin":"blackjack_ui/game_ui/ershiyidian/btn_lbc.png"}},{"type":"Label","props":{"y":220,"x":155,"width":54,"var":"txt_difen2","height":22,"fontSize":22,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":246,"x":155,"width":54,"var":"txt_least2","height":22,"fontSize":22,"color":"#ffffff","align":"left"}},{"type":"Image","props":{"y":246,"x":104,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_zr.png"}},{"type":"Image","props":{"y":220,"x":103,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_df.png"}}]},{"type":"Box","props":{"y":0,"x":933,"width":300,"var":"img_room3","height":300},"child":[{"type":"Button","props":{"y":0,"x":0,"stateNum":1,"skin":"blackjack_ui/game_ui/ershiyidian/btn_fhc.png"}},{"type":"Image","props":{"y":246,"x":104,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_zr.png"}},{"type":"Image","props":{"y":220,"x":103,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_df.png"}},{"type":"Label","props":{"y":220,"x":155,"width":54,"var":"txt_difen3","height":22,"fontSize":22,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":246,"x":155,"width":54,"var":"txt_least3","height":22,"fontSize":22,"color":"#ffffff","align":"left"}}]}]},{"type":"Image","props":{"skin":"blackjack_ui/game_ui/ershiyidian/21d_title.png","left":152,"bottom":33,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":21,"x":165,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/di.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":18,"x":-29,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/di.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/hud/tu_wrzx.png","right":30,"bottom":33}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.tongyong.HudUI",ui.ajqp.game_ui.tongyong.HudUI);

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

        public static  uiView:any ={"type":"View","props":{"width":200,"height":200},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"blackjack_ui/game_ui/ershiyidian/tu_pai1.png"}},{"type":"Image","props":{"y":0,"x":0,"var":"img_card","skin":"blackjack_ui/game_ui/ershiyidian/tu_pai2.png"},"compId":3},{"type":"Image","props":{"y":48,"x":-33,"skin":"tongyong_ui/game_ui/tongyong/general/effect/fapai_3/dz10000.png","alpha":0},"compId":6},{"type":"Image","props":{"y":0,"x":0,"skin":"blackjack_ui/game_ui/ershiyidian/tu_pai3.png"}}],"animations":[{"nodes":[{"target":3,"keyframes":{"y":[{"value":-75,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":10}],"x":[{"value":40,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":10}]}}],"name":"ani1","id":1,"frameRate":24,"action":0},{"nodes":[{"target":6,"keyframes":{"skin":[{"value":"tongyong_ui/game_ui/tongyong/general/effect/fapai_3/dz10000.png","tweenMethod":"linearNone","tween":false,"target":6,"key":"skin","index":0},{"value":"tongyong_ui/game_ui/tongyong/general/effect/fapai_3/dz10000.png","tweenMethod":"linearNone","tween":false,"target":6,"label":null,"key":"skin","index":1},{"value":"tongyong_ui/game_ui/tongyong/general/effect/fapai_3/dz10001.png","tweenMethod":"linearNone","tween":false,"target":6,"key":"skin","index":3}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"alpha","index":1},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":3},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":5}]}}],"name":"ani2","id":3,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.ershiyidian.PaiXeiUI.uiView);
        }
    }
}
