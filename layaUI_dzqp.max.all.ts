
module ui.dzqp.game_ui.ershiyidian.component {
    export class PaoPaoUI extends View {
		public img_bg:Laya.Image;
		public txt_count:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":50,"height":32},"child":[{"type":"Image","props":{"y":15,"x":26,"var":"img_bg","skin":"blackjack_ui/game_ui/ershiyidian/bg_1.png","scaleX":-1,"anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":7,"x":7,"width":35,"var":"txt_count","text":"爆牌","leading":6,"height":20,"fontSize":16,"color":"#dadada","align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.dzqp.game_ui.ershiyidian.component.PaoPaoUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.ershiyidian.component {
    export class PaoPao1UI extends View {
		public img_bg:Laya.Image;
		public txt_count:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":50,"height":32},"child":[{"type":"Image","props":{"y":16,"x":25,"var":"img_bg","skin":"blackjack_ui/game_ui/ershiyidian/bg_1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":7,"x":7,"width":35,"var":"txt_count","text":"爆牌","leading":6,"height":20,"fontSize":16,"color":"#dadada","align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.dzqp.game_ui.ershiyidian.component.PaoPao1UI.uiView);
        }
    }
}

module ui.dzqp.game_ui.ershiyidian.component {
    export class TouXiangUI extends View {
		public img_head:Laya.Image;
		public img_txk:Laya.Image;
		public text_name:laya.display.Text;
		public text_money:laya.display.Text;
		public img_frame:Laya.Image;
		public img_mask:Laya.Image;
		public img_qifu:Laya.Image;
		public qifu_type:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":100,"height":138},"child":[{"type":"Box","props":{"y":1,"x":1},"child":[{"type":"Image","props":{"y":-7,"x":-5,"skin":"tongyong_ui/game_ui/tongyong/general/tu_txk1.png"}},{"type":"Image","props":{"y":63,"x":49,"var":"img_head","skin":"tongyong_ui/game_ui/tongyong/touxiang/head_0.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":14,"x":3,"var":"img_txk","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_v1.png","scaleY":0.95,"scaleX":0.95}},{"type":"Text","props":{"y":4,"x":-2,"wordWrap":true,"width":102,"var":"text_name","text":"玩家名字","leading":6,"height":17,"fontSize":16,"color":"#12093d","align":"center"}},{"type":"Text","props":{"y":108,"x":-7,"wordWrap":true,"width":110,"var":"text_money","text":"0","leading":6,"height":22,"fontSize":20,"color":"#b18dff","align":"center"}},{"type":"Image","props":{"y":0,"x":0,"var":"img_frame","skin":"tongyong_ui/game_ui/tongyong/general/tu_djs.png"},"child":[{"type":"Image","props":{"y":-3,"x":-3,"width":104,"var":"img_mask","renderType":"mask","height":142}}]},{"type":"Image","props":{"y":21,"x":69,"visible":false,"var":"img_qifu","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_qf.png"}},{"type":"Image","props":{"y":105,"x":50,"visible":false,"var":"qifu_type","skin":"tongyong_ui/game_ui/tongyong/qifu/f_cs2.png","scaleY":0.5,"scaleX":0.5,"anchorY":1,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.dzqp.game_ui.ershiyidian.component.TouXiangUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.ershiyidian.component {
    export class YingUI extends View {
		public ani1:Laya.FrameAnimation;
		public img_win:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":120,"height":120},"child":[{"type":"Image","props":{"var":"img_win","skin":"ui/game_ui/zhajinhua/tu_ying2.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"scaleY":[{"value":2,"tweenMethod":"backOut","tween":true,"target":2,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":10}],"scaleX":[{"value":2,"tweenMethod":"backOut","tween":true,"target":2,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":10}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.ershiyidian.component.YingUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.ershiyidian.effect {
    export class BaoPaiUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":210,"height":210},"child":[{"type":"Image","props":{"y":103,"x":104,"skin":"blackjack_ui/game_ui/ershiyidian/effect/20000.png","anchorY":0.5,"anchorX":0.5},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"skin":[{"value":"blackjack_ui/game_ui/ershiyidian/effect/20000.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":0},{"value":"blackjack_ui/game_ui/ershiyidian/effect/20001.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":1},{"value":"blackjack_ui/game_ui/ershiyidian/effect/20002.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":2},{"value":"blackjack_ui/game_ui/ershiyidian/effect/20003.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":3},{"value":"blackjack_ui/game_ui/ershiyidian/effect/20004.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":4},{"value":"blackjack_ui/game_ui/ershiyidian/effect/20005.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":5},{"value":"blackjack_ui/game_ui/ershiyidian/effect/20006.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":6},{"value":"blackjack_ui/game_ui/ershiyidian/effect/20007.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":7},{"value":"blackjack_ui/game_ui/ershiyidian/effect/20008.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":8},{"value":"blackjack_ui/game_ui/ershiyidian/effect/20009.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":9},{"value":"blackjack_ui/game_ui/ershiyidian/effect/20010.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":10},{"value":"blackjack_ui/game_ui/ershiyidian/effect/20011.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":11},{"value":"blackjack_ui/game_ui/ershiyidian/effect/20012.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":12},{"value":"blackjack_ui/game_ui/ershiyidian/effect/20013.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":13},{"value":"blackjack_ui/game_ui/ershiyidian/effect/20014.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":14},{"value":"blackjack_ui/game_ui/ershiyidian/effect/20015.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":15},{"value":"blackjack_ui/game_ui/ershiyidian/effect/20016.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":16},{"value":"blackjack_ui/game_ui/ershiyidian/effect/20017.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":17},{"value":"blackjack_ui/game_ui/ershiyidian/effect/20018.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":18},{"value":"blackjack_ui/game_ui/ershiyidian/effect/20019.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":19},{"value":"blackjack_ui/game_ui/ershiyidian/effect/20020.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":20},{"value":"blackjack_ui/game_ui/ershiyidian/effect/20021.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":21},{"value":"blackjack_ui/game_ui/ershiyidian/effect/20022.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":22},{"value":"blackjack_ui/game_ui/ershiyidian/effect/20023.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":23},{"value":"blackjack_ui/game_ui/ershiyidian/effect/20024.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":24},{"value":"blackjack_ui/game_ui/ershiyidian/effect/20025.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":25}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.ershiyidian.effect.BaoPaiUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.ershiyidian.effect {
    export class HeiJieKeUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":300,"height":200},"child":[{"type":"Image","props":{"skin":"blackjack_ui/game_ui/ershiyidian/effect/10000.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"x":[{"value":150,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":150,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":35}],"skin":[{"value":"blackjack_ui/game_ui/ershiyidian/effect/10000.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":0},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10001.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":1},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10002.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":2},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10003.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":3},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10004.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":4},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10005.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":5},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10006.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":6},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10007.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":7},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10008.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":8},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10009.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":9},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10010.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":10},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10011.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":11},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10012.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":12},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10013.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":13},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10014.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":14},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10015.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":15},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10016.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":16},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10017.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":17},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10018.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":18},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10019.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":19},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10020.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":20},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10021.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":21},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10022.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":22},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10023.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":23},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10024.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":24},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10025.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":25},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10026.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":26},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10027.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":27},{"value":"blackjack_ui/game_ui/ershiyidian/effect/10028.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":28}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.ershiyidian.effect.HeiJieKeUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.ershiyidian.effect {
    export class WuXiaoLongUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":300,"height":200},"child":[{"type":"Image","props":{"skin":"blackjack_ui/game_ui/ershiyidian/effect/30000.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"x":[{"value":150,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":150,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":35}],"skin":[{"value":"blackjack_ui/game_ui/ershiyidian/effect/30000.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":0},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30001.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":1},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30002.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":2},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30003.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":3},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30004.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":4},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30005.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":5},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30006.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":6},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30007.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":7},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30008.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":8},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30009.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":9},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30010.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":10},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30011.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":11},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30012.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":12},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30013.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":13},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30014.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":14},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30015.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":15},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30016.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":16},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30017.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":17},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30018.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":18},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30019.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":19},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30020.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":20},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30021.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":21},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30022.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":22},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30023.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":23},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30024.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":24},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30025.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":25},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30026.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":26},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30027.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":27},{"value":"blackjack_ui/game_ui/ershiyidian/effect/30028.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":28}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.ershiyidian.effect.WuXiaoLongUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.ershiyidian {
    export class ErShiYiDianUI extends View {
		public ani1:Laya.FrameAnimation;
		public box_view:Laya.Box;
		public img_double3:Laya.Image;
		public img_double2:Laya.Image;
		public img_double1:Laya.Image;
		public img_double0:Laya.Image;
		public img_double4:Laya.Image;
		public view_paixie:ui.dzqp.game_ui.ershiyidian.PaiXeiUI;
		public view_fapai:ui.dzqp.game_ui.tongyong.FaPai1UI;
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
		public view_hjk0:ui.dzqp.game_ui.ershiyidian.effect.HeiJieKeUI;
		public view_hjk1:ui.dzqp.game_ui.ershiyidian.effect.HeiJieKeUI;
		public view_hjk2:ui.dzqp.game_ui.ershiyidian.effect.HeiJieKeUI;
		public view_hjk3:ui.dzqp.game_ui.ershiyidian.effect.HeiJieKeUI;
		public view_hjk4:ui.dzqp.game_ui.ershiyidian.effect.HeiJieKeUI;
		public view_wxl0:ui.dzqp.game_ui.ershiyidian.effect.WuXiaoLongUI;
		public view_wxl1:ui.dzqp.game_ui.ershiyidian.effect.WuXiaoLongUI;
		public view_wxl2:ui.dzqp.game_ui.ershiyidian.effect.WuXiaoLongUI;
		public view_wxl3:ui.dzqp.game_ui.ershiyidian.effect.WuXiaoLongUI;
		public view_wxl4:ui.dzqp.game_ui.ershiyidian.effect.WuXiaoLongUI;
		public view_wxl0_0:ui.dzqp.game_ui.ershiyidian.effect.WuXiaoLongUI;
		public view_wxl0_1:ui.dzqp.game_ui.ershiyidian.effect.WuXiaoLongUI;
		public view_wxl1_0:ui.dzqp.game_ui.ershiyidian.effect.WuXiaoLongUI;
		public view_wxl1_1:ui.dzqp.game_ui.ershiyidian.effect.WuXiaoLongUI;
		public view_wxl2_0:ui.dzqp.game_ui.ershiyidian.effect.WuXiaoLongUI;
		public view_wxl2_1:ui.dzqp.game_ui.ershiyidian.effect.WuXiaoLongUI;
		public view_wxl3_0:ui.dzqp.game_ui.ershiyidian.effect.WuXiaoLongUI;
		public view_wxl3_1:ui.dzqp.game_ui.ershiyidian.effect.WuXiaoLongUI;
		public view_wxl4_0:ui.dzqp.game_ui.ershiyidian.effect.WuXiaoLongUI;
		public view_wxl4_1:ui.dzqp.game_ui.ershiyidian.effect.WuXiaoLongUI;
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
		public view_wxl5:ui.dzqp.game_ui.ershiyidian.effect.WuXiaoLongUI;
		public view_qipao5_0:ui.dzqp.game_ui.ershiyidian.component.PaoPaoUI;
		public view_hjk5:ui.dzqp.game_ui.ershiyidian.effect.HeiJieKeUI;
		public view_qipao2_1:ui.dzqp.game_ui.ershiyidian.component.PaoPao1UI;
		public view_qipao1_1:ui.dzqp.game_ui.ershiyidian.component.PaoPao1UI;
		public view_qipao0_1:ui.dzqp.game_ui.ershiyidian.component.PaoPao1UI;
		public view_qipao4_1:ui.dzqp.game_ui.ershiyidian.component.PaoPao1UI;
		public view_qipao3_1:ui.dzqp.game_ui.ershiyidian.component.PaoPao1UI;
		public view_qipao2_0:ui.dzqp.game_ui.ershiyidian.component.PaoPaoUI;
		public view_qipao1_0:ui.dzqp.game_ui.ershiyidian.component.PaoPaoUI;
		public view_qipao0_0:ui.dzqp.game_ui.ershiyidian.component.PaoPaoUI;
		public view_qipao4_0:ui.dzqp.game_ui.ershiyidian.component.PaoPaoUI;
		public view_qipao3_0:ui.dzqp.game_ui.ershiyidian.component.PaoPaoUI;
		public view_boom:ui.dzqp.game_ui.ershiyidian.effect.BaoPaiUI;
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
		public box_state0:Laya.Box;
		public btn_xuya:Laya.Button;
		public btn_max:Laya.Button;
		public btn_min:Laya.Button;
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
		public view_player2:ui.dzqp.game_ui.ershiyidian.component.TouXiangUI;
		public view_player1:ui.dzqp.game_ui.ershiyidian.component.TouXiangUI;
		public view_player4:ui.dzqp.game_ui.ershiyidian.component.TouXiangUI;
		public view_player0:ui.dzqp.game_ui.ershiyidian.component.TouXiangUI;
		public view_player3:ui.dzqp.game_ui.ershiyidian.component.TouXiangUI;
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
		public view_xipai:ui.dzqp.game_ui.tongyong.effect.XiPaiUI;
		public img_bao2:Laya.Image;
		public img_bao1:Laya.Image;
		public img_bao0:Laya.Image;
		public img_bao4:Laya.Image;
		public img_bao3:Laya.Image;
		public box_bet:Laya.Box;
		public text_bet:laya.display.Text;
		public hslider_bet:Laya.VSlider;
		public btn_back:Laya.Button;
		public btn_chongzhi:Laya.Button;
		public btn_menu:Laya.Button;
		public btn_qifu:Laya.Button;
		public img_menu:Laya.Image;
		public btn_rule:Laya.Button;
		public btn_seeting:Laya.Button;
		public btn_record:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":1280,"var":"box_view","height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"width":1280,"scaleY":1.05,"scaleX":1.05,"height":720,"centerY":10,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":212,"x":964,"var":"img_double3","skin":"blackjack_ui/game_ui/ershiyidian/tu_shuangbei.png","skewX":15,"scaleY":0.45,"scaleX":0.45,"rotation":-35}},{"type":"Image","props":{"y":204,"x":307,"var":"img_double2","skin":"blackjack_ui/game_ui/ershiyidian/tu_shuangbei.png","skewX":-15,"scaleY":0.45,"scaleX":0.45,"rotation":35}},{"type":"Image","props":{"y":276,"x":450,"var":"img_double1","skin":"blackjack_ui/game_ui/ershiyidian/tu_shuangbei.png","skewX":-16,"scaleY":0.45,"scaleX":0.45,"rotation":20}},{"type":"Image","props":{"y":308,"x":635,"var":"img_double0","skin":"blackjack_ui/game_ui/ershiyidian/tu_shuangbei.png","scaleY":0.45,"scaleX":0.45}},{"type":"Image","props":{"y":284,"x":813,"var":"img_double4","skin":"blackjack_ui/game_ui/ershiyidian/tu_shuangbei.png","skewX":16,"scaleY":0.45,"scaleX":0.45,"rotation":-20}},{"type":"Image","props":{"y":50,"width":315,"skin":"blackjack_ui/game_ui/ershiyidian/heguan_chair.png","height":109,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"PaiXei","props":{"y":71,"x":901,"var":"view_paixie","scaleY":0.7,"scaleX":0.7,"runtime":"ui.dzqp.game_ui.ershiyidian.PaiXeiUI"}},{"type":"FaPai1","props":{"y":144,"x":883,"var":"view_fapai","scaleY":0.68,"scaleX":0.68,"rotation":7,"runtime":"ui.dzqp.game_ui.tongyong.FaPai1UI"}},{"type":"Image","props":{"y":107.5,"var":"img_heguan","skin":"blackjack_ui/game_ui/ershiyidian/heguan.png","scaleY":1,"scaleX":1,"centerX":0,"anchorY":0.4,"anchorX":0.5}},{"type":"Image","props":{"y":779,"x":643,"skin":"blackjack_ui/game_ui/ershiyidian/chair_1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":604,"x":1174,"skin":"blackjack_ui/game_ui/ershiyidian/chair_2.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":714,"x":952,"width":250,"skin":"blackjack_ui/game_ui/ershiyidian/chair_2.png","height":374,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":714,"x":332,"skin":"blackjack_ui/game_ui/ershiyidian/chair_2.png","scaleX":-1,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":604,"x":102,"width":250,"skin":"blackjack_ui/game_ui/ershiyidian/chair_2.png","scaleX":-1,"height":374,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":274,"x":230,"var":"img_pool2","skin":"blackjack_ui/game_ui/ershiyidian/wei_1_1.png","scaleY":0.9,"scaleX":0.9,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":367,"x":400,"var":"img_pool1","skin":"blackjack_ui/game_ui/ershiyidian/wei_1_1.png","scaleY":0.9,"scaleX":0.9,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":407,"var":"img_pool0","skin":"blackjack_ui/game_ui/ershiyidian/wei_1_1.png","scaleY":0.9,"scaleX":0.9,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":372,"x":880,"var":"img_pool4","skin":"blackjack_ui/game_ui/ershiyidian/wei_1_1.png","scaleY":0.9,"scaleX":0.9,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":274,"x":1055,"var":"img_pool3","skin":"blackjack_ui/game_ui/ershiyidian/wei_1_1.png","scaleY":0.9,"scaleX":0.9,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":242,"x":115,"var":"img_chip2","skin":"blackjack_ui/game_ui/ershiyidian/chip_1.png"}},{"type":"Image","props":{"y":379,"x":278,"var":"img_chip1","skin":"blackjack_ui/game_ui/ershiyidian/chip_2.png"}},{"type":"Image","props":{"y":439,"x":517,"var":"img_chip0","skin":"blackjack_ui/game_ui/ershiyidian/chip_3.png"}},{"type":"Image","props":{"y":387,"x":842,"var":"img_chip4","skin":"blackjack_ui/game_ui/ershiyidian/chip_4.png"}},{"type":"Image","props":{"y":236,"x":1056,"var":"img_chip3","skin":"blackjack_ui/game_ui/ershiyidian/chip_5.png"}},{"type":"Image","props":{"y":231,"x":183,"var":"img_choose2","skin":"blackjack_ui/game_ui/ershiyidian/wei_1_2.png"},"child":[{"type":"Label","props":{"y":32,"x":19,"wordWrap":true,"width":58,"text":"请下注","leading":10,"height":23,"fontSize":18,"color":"#ffffff","align":"center"}}]},{"type":"Image","props":{"y":324,"x":353,"var":"img_choose1","skin":"blackjack_ui/game_ui/ershiyidian/wei_2_2.png"},"child":[{"type":"Label","props":{"y":30,"x":17,"wordWrap":true,"width":58,"text":"请下注","leading":10,"height":23,"fontSize":18,"color":"#ffffff","align":"center"}}]},{"type":"Image","props":{"y":366,"x":591,"var":"img_choose0","skin":"blackjack_ui/game_ui/ershiyidian/wei_3_2.png"},"child":[{"type":"Label","props":{"y":35,"x":21,"wordWrap":true,"width":58,"var":"txt_choose0","text":"请下注","leading":10,"height":23,"fontSize":18,"color":"#ffffff","align":"center"}}]},{"type":"Image","props":{"y":329,"x":832,"var":"img_choose4","skin":"blackjack_ui/game_ui/ershiyidian/wei_4_2.png"},"child":[{"type":"Label","props":{"y":33,"x":19,"wordWrap":true,"width":58,"text":"请下注","leading":10,"height":23,"fontSize":18,"color":"#ffffff","align":"center"}}]},{"type":"Image","props":{"y":232,"x":1006,"var":"img_choose3","skin":"blackjack_ui/game_ui/ershiyidian/wei_5_2.png"},"child":[{"type":"Label","props":{"y":33,"x":19,"wordWrap":true,"width":58,"text":"请下注","leading":10,"height":23,"fontSize":18,"color":"#ffffff","align":"center"}}]},{"type":"HeiJieKe","props":{"y":273,"x":490,"var":"view_hjk0","runtime":"ui.dzqp.game_ui.ershiyidian.effect.HeiJieKeUI"}},{"type":"HeiJieKe","props":{"y":191,"x":308,"var":"view_hjk1","rotation":20,"runtime":"ui.dzqp.game_ui.ershiyidian.effect.HeiJieKeUI"}},{"type":"HeiJieKe","props":{"y":81,"x":187,"var":"view_hjk2","rotation":35,"runtime":"ui.dzqp.game_ui.ershiyidian.effect.HeiJieKeUI"}},{"type":"HeiJieKe","props":{"y":250,"x":851,"var":"view_hjk3","rotation":-35,"runtime":"ui.dzqp.game_ui.ershiyidian.effect.HeiJieKeUI"}},{"type":"HeiJieKe","props":{"y":298,"x":691,"var":"view_hjk4","rotation":-20,"runtime":"ui.dzqp.game_ui.ershiyidian.effect.HeiJieKeUI"}},{"type":"WuXiaoLong","props":{"y":274,"x":490,"var":"view_wxl0","runtime":"ui.dzqp.game_ui.ershiyidian.effect.WuXiaoLongUI"}},{"type":"WuXiaoLong","props":{"y":193,"x":309,"var":"view_wxl1","rotation":20,"runtime":"ui.dzqp.game_ui.ershiyidian.effect.WuXiaoLongUI"}},{"type":"WuXiaoLong","props":{"y":83,"x":188,"var":"view_wxl2","rotation":35,"runtime":"ui.dzqp.game_ui.ershiyidian.effect.WuXiaoLongUI"}},{"type":"WuXiaoLong","props":{"y":252,"x":850,"var":"view_wxl3","rotation":-35,"runtime":"ui.dzqp.game_ui.ershiyidian.effect.WuXiaoLongUI"}},{"type":"WuXiaoLong","props":{"y":300,"x":690,"var":"view_wxl4","rotation":-20,"runtime":"ui.dzqp.game_ui.ershiyidian.effect.WuXiaoLongUI"}},{"type":"WuXiaoLong","props":{"y":281,"x":482,"var":"view_wxl0_0","scaleY":0.8,"scaleX":0.8,"rotation":0,"runtime":"ui.dzqp.game_ui.ershiyidian.effect.WuXiaoLongUI"}},{"type":"WuXiaoLong","props":{"y":282,"x":551,"var":"view_wxl0_1","scaleY":0.8,"scaleX":0.8,"rotation":0,"runtime":"ui.dzqp.game_ui.ershiyidian.effect.WuXiaoLongUI"}},{"type":"WuXiaoLong","props":{"y":190,"x":315,"var":"view_wxl1_0","scaleY":0.8,"scaleX":0.8,"rotation":25,"runtime":"ui.dzqp.game_ui.ershiyidian.effect.WuXiaoLongUI"}},{"type":"WuXiaoLong","props":{"y":227,"x":372,"var":"view_wxl1_1","scaleY":0.8,"scaleX":0.8,"rotation":20,"runtime":"ui.dzqp.game_ui.ershiyidian.effect.WuXiaoLongUI"}},{"type":"WuXiaoLong","props":{"y":84,"x":184,"var":"view_wxl2_0","scaleY":0.8,"scaleX":0.8,"rotation":35,"runtime":"ui.dzqp.game_ui.ershiyidian.effect.WuXiaoLongUI"}},{"type":"WuXiaoLong","props":{"y":133,"x":241,"var":"view_wxl2_1","scaleY":0.8,"scaleX":0.8,"rotation":35,"runtime":"ui.dzqp.game_ui.ershiyidian.effect.WuXiaoLongUI"}},{"type":"WuXiaoLong","props":{"y":270,"x":849,"var":"view_wxl3_0","scaleY":0.8,"scaleX":0.8,"rotation":-35,"runtime":"ui.dzqp.game_ui.ershiyidian.effect.WuXiaoLongUI"}},{"type":"WuXiaoLong","props":{"y":228,"x":902,"var":"view_wxl3_1","scaleY":0.8,"scaleX":0.8,"rotation":-35,"runtime":"ui.dzqp.game_ui.ershiyidian.effect.WuXiaoLongUI"}},{"type":"WuXiaoLong","props":{"y":309,"x":683,"var":"view_wxl4_0","scaleY":0.8,"scaleX":0.8,"rotation":-20,"runtime":"ui.dzqp.game_ui.ershiyidian.effect.WuXiaoLongUI"}},{"type":"WuXiaoLong","props":{"y":282,"x":749,"var":"view_wxl4_1","scaleY":0.8,"scaleX":0.8,"rotation":-20,"runtime":"ui.dzqp.game_ui.ershiyidian.effect.WuXiaoLongUI"}},{"type":"Box","props":{"y":432,"x":641,"var":"box_chip0","mouseThrough":true,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"width":122,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k2.png","sizeGrid":"0,20,0,20","scaleY":0.7,"scaleX":0.7,"height":36}},{"type":"Text","props":{"y":3,"wordWrap":true,"width":86,"var":"text_chip0","text":"500.00","leading":6,"height":20,"fontSize":18,"color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"y":394,"x":375,"var":"box_chip1","rotation":25,"mouseThrough":true,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"width":122,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k2.png","sizeGrid":"0,20,0,20","scaleY":0.7,"scaleX":0.7,"height":36}},{"type":"Text","props":{"y":3,"wordWrap":true,"width":86,"var":"text_chip1","text":"500.00","leading":6,"height":20,"fontSize":18,"color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"y":291,"x":204,"var":"box_chip2","rotation":45,"mouseThrough":true,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"width":122,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k2.png","sizeGrid":"0,20,0,20","scaleY":0.7,"scaleX":0.7,"height":36}},{"type":"Text","props":{"y":3,"wordWrap":true,"width":86,"var":"text_chip2","text":"500.00","leading":6,"height":20,"fontSize":18,"color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"y":396,"x":894,"var":"box_chip4","rotation":-20,"mouseThrough":true,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"width":122,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k2.png","sizeGrid":"0,20,0,20","scaleY":0.7,"scaleX":0.7,"height":36}},{"type":"Text","props":{"y":3,"wordWrap":true,"width":86,"var":"text_chip4","text":"500.00","leading":6,"height":20,"fontSize":18,"color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"y":292,"x":1071,"var":"box_chip3","rotation":-45,"mouseThrough":true,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"width":122,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k2.png","sizeGrid":"0,20,0,20","scaleY":0.7,"scaleX":0.7,"height":36}},{"type":"Text","props":{"y":3,"wordWrap":true,"width":86,"var":"text_chip3","text":"500.00","leading":6,"height":20,"fontSize":18,"color":"#ffffff","align":"center"}}]},{"type":"Label","props":{"y":460,"x":573,"wordWrap":true,"width":128,"var":"txt_name0","text":"玩家名字六字","leading":10,"height":14,"fontSize":14,"color":"#ccff00","align":"center"}},{"type":"Label","props":{"y":437,"x":858,"wordWrap":true,"width":128,"var":"txt_name4","text":"玩家名字六字","skewX":23,"rotation":-20,"leading":10,"height":16,"fontSize":14,"color":"#ccff00","align":"center"}},{"type":"Label","props":{"y":342,"x":1068,"wordWrap":true,"width":98,"var":"txt_name3","text":"玩家名字六字","skewX":30,"rotation":-50,"leading":10,"height":23,"fontSize":14,"color":"#ccff00","align":"center"}},{"type":"Label","props":{"y":394,"x":301,"wordWrap":true,"width":128,"var":"txt_name1","text":"玩家名字六字","skewX":-23,"rotation":20,"leading":10,"height":17,"fontSize":14,"color":"#ccff00","align":"center"}},{"type":"Label","props":{"y":257,"x":140,"wordWrap":true,"width":93,"var":"txt_name2","text":"玩家名字六字","skewX":-30,"rotation":50,"leading":10,"height":14,"fontSize":14,"color":"#ccff00","align":"center"}},{"type":"WuXiaoLong","props":{"y":140,"x":490,"var":"view_wxl5","runtime":"ui.dzqp.game_ui.ershiyidian.effect.WuXiaoLongUI"}},{"type":"PaoPao","props":{"y":248,"x":544,"var":"view_qipao5_0","runtime":"ui.dzqp.game_ui.ershiyidian.component.PaoPaoUI"}},{"type":"HeiJieKe","props":{"y":140,"x":490,"var":"view_hjk5","runtime":"ui.dzqp.game_ui.ershiyidian.effect.HeiJieKeUI"}},{"type":"PaoPao1","props":{"y":266,"x":283,"var":"view_qipao2_1","rotation":32,"runtime":"ui.dzqp.game_ui.ershiyidian.component.PaoPao1UI"}},{"type":"PaoPao1","props":{"y":355,"x":453,"var":"view_qipao1_1","rotation":17,"runtime":"ui.dzqp.game_ui.ershiyidian.component.PaoPao1UI"}},{"type":"PaoPao1","props":{"y":371,"x":687,"var":"view_qipao0_1","runtime":"ui.dzqp.game_ui.ershiyidian.component.PaoPao1UI"}},{"type":"PaoPao1","props":{"y":324,"x":902,"var":"view_qipao4_1","rotation":-27,"runtime":"ui.dzqp.game_ui.ershiyidian.component.PaoPao1UI"}},{"type":"PaoPao1","props":{"y":220,"x":1067,"var":"view_qipao3_1","rotation":-38,"runtime":"ui.dzqp.game_ui.ershiyidian.component.PaoPao1UI"}},{"type":"PaoPao","props":{"y":189,"x":185,"var":"view_qipao2_0","rotation":39,"runtime":"ui.dzqp.game_ui.ershiyidian.component.PaoPaoUI"}},{"type":"PaoPao","props":{"y":298,"x":333,"var":"view_qipao1_0","rotation":30,"runtime":"ui.dzqp.game_ui.ershiyidian.component.PaoPaoUI"}},{"type":"PaoPao","props":{"y":371,"x":544,"var":"view_qipao0_0","runtime":"ui.dzqp.game_ui.ershiyidian.component.PaoPaoUI"}},{"type":"PaoPao","props":{"y":372,"x":782,"var":"view_qipao4_0","rotation":-22,"runtime":"ui.dzqp.game_ui.ershiyidian.component.PaoPaoUI"}},{"type":"PaoPao","props":{"y":293,"x":960,"var":"view_qipao3_0","rotation":-30,"runtime":"ui.dzqp.game_ui.ershiyidian.component.PaoPaoUI"}},{"type":"BaoPai","props":{"y":230,"x":526,"var":"view_boom","runtime":"ui.dzqp.game_ui.ershiyidian.effect.BaoPaiUI"}},{"type":"Box","props":{"y":396,"x":642,"width":244,"var":"box_prompt0","height":46,"anchorY":1,"anchorX":0.5},"child":[{"type":"Image","props":{"y":45,"x":120.5,"width":241,"var":"img_prompt0","skin":"blackjack_ui/game_ui/ershiyidian/tu_qipuao.png","height":45,"anchorY":1,"anchorX":0.5}},{"type":"Text","props":{"y":5,"x":11.5,"width":219,"var":"txt_prompt0","text":"是否为您下注的x号位购买保险","leading":6,"height":23,"fontSize":15,"color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"y":365,"x":399,"width":263,"var":"box_prompt1","height":47,"anchorY":1,"anchorX":0.5},"child":[{"type":"Image","props":{"y":45,"x":133,"var":"img_prompt1","skin":"blackjack_ui/game_ui/ershiyidian/tu_qipuao.png","sizeGrid":"0,149,0,29","anchorY":1,"anchorX":0.5}},{"type":"Text","props":{"y":6,"width":257,"var":"txt_prompt1","text":"是否为您下注的x号位购买保险","leading":6,"height":23,"fontSize":15,"color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"y":273,"x":231,"width":260,"var":"box_prompt2","height":47,"anchorY":1,"anchorX":0.5},"child":[{"type":"Image","props":{"y":45,"x":129,"var":"img_prompt2","skin":"blackjack_ui/game_ui/ershiyidian/tu_qipuao.png","sizeGrid":"0,149,0,29","anchorY":1,"anchorX":0.5}},{"type":"Text","props":{"y":8,"x":28,"width":208,"var":"txt_prompt2","text":"是否为您下注的x号位购买保险","leading":6,"height":16,"fontSize":15,"color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"y":361,"x":878,"width":262,"var":"box_prompt4","height":44,"anchorY":1,"anchorX":0.5},"child":[{"type":"Image","props":{"y":45,"x":131,"var":"img_prompt4","skin":"blackjack_ui/game_ui/ershiyidian/tu_qipuao.png","sizeGrid":"0,149,0,29","anchorY":1,"anchorX":0.5}},{"type":"Text","props":{"y":5,"width":257,"var":"txt_prompt4","text":"是否为您下注的x号位购买保险","leading":6,"height":23,"fontSize":15,"color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"y":267,"x":1056,"width":287,"var":"box_prompt3","height":46,"anchorY":1,"anchorX":0.5},"child":[{"type":"Image","props":{"y":45,"x":140.5,"var":"img_prompt3","skin":"blackjack_ui/game_ui/ershiyidian/tu_qipuao.png","anchorY":1,"anchorX":0.5}},{"type":"Text","props":{"y":5,"x":31.5,"width":219,"var":"txt_prompt3","text":"是否为您下注的x号位购买保险","leading":6,"height":23,"fontSize":15,"color":"#ffffff","align":"center"}}]},{"type":"Image","props":{"y":191,"x":1001,"var":"img_double3_1","skin":"blackjack_ui/game_ui/ershiyidian/tu_shuangbei.png","skewX":15,"scaleY":0.36,"scaleX":0.36,"rotation":-35}},{"type":"Image","props":{"y":306,"x":789,"var":"img_double4_0","skin":"blackjack_ui/game_ui/ershiyidian/tu_shuangbei.png","skewX":16,"scaleY":0.36,"scaleX":0.36,"rotation":-25}},{"type":"Image","props":{"y":279,"x":856,"var":"img_double4_1","skin":"blackjack_ui/game_ui/ershiyidian/tu_shuangbei.png","skewX":16,"scaleY":0.36,"scaleX":0.36,"rotation":-25}},{"type":"Image","props":{"y":310,"x":593,"var":"img_double0_0","skin":"blackjack_ui/game_ui/ershiyidian/tu_shuangbei.png","scaleY":0.36,"scaleX":0.36}},{"type":"Image","props":{"y":310,"x":647,"var":"img_double0_1","skin":"blackjack_ui/game_ui/ershiyidian/tu_shuangbei.png","scaleY":0.365,"scaleX":0.36}},{"type":"Image","props":{"y":266,"x":408,"var":"img_double1_0","skin":"blackjack_ui/game_ui/ershiyidian/tu_shuangbei.png","skewX":-16,"scaleY":0.36,"scaleX":0.36,"rotation":25}},{"type":"Image","props":{"y":297,"x":462,"var":"img_double1_1","skin":"blackjack_ui/game_ui/ershiyidian/tu_shuangbei.png","skewX":-16,"scaleY":0.36,"scaleX":0.36,"rotation":25}},{"type":"Image","props":{"y":179,"x":258,"var":"img_double2_0","skin":"blackjack_ui/game_ui/ershiyidian/tu_shuangbei.png","skewX":-15,"scaleY":0.36,"scaleX":0.36,"rotation":35}},{"type":"Image","props":{"y":218,"x":317,"var":"img_double2_1","skin":"blackjack_ui/game_ui/ershiyidian/tu_shuangbei.png","skewX":-15,"scaleY":0.36,"scaleX":0.36,"rotation":35}},{"type":"Image","props":{"y":232,"x":947,"var":"img_double3_0","skin":"blackjack_ui/game_ui/ershiyidian/tu_shuangbei.png","skewX":15,"scaleY":0.36,"scaleX":0.36,"rotation":-35}}]},{"type":"Box","props":{"y":675,"x":640,"width":1280,"var":"box_state0","height":60,"centerX":0,"bottom":15,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":29.5,"x":942,"width":200,"var":"btn_xuya","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_2.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#7e2314","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"label":"续押","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":29.5,"x":509,"width":200,"var":"btn_max","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_6.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#000060","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"label":"最大注（000）","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":29.5,"x":292,"width":200,"var":"btn_min","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_6.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#000060","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"label":"最小注（000）","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":29.5,"x":725,"width":200,"var":"btn_bet","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"label":"下注","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":29.5,"x":725,"width":200,"var":"btn_enter","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"label":"确定","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":29.5,"x":942,"width":200,"var":"btn_complete","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_2.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#7e2314","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"label":"下注完成","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":645,"x":0,"width":1280,"var":"box_state1","height":60,"centerX":0,"bottom":15},"child":[{"type":"Button","props":{"y":29.5,"width":200,"var":"btn_buy","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"label":"买保险","centerX":84,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":29.5,"width":200,"var":"btn_notbuy","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"label":"不买","height":59,"centerX":-130,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":675,"x":640,"width":1280,"var":"box_state2","height":60,"centerX":0,"bottom":15,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":29.5,"x":942,"width":200,"var":"btn_ask","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"label":"要牌","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":29.5,"x":725,"width":200,"var":"btn_stop","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"label":"停牌","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":29.5,"x":509,"width":200,"var":"btn_double","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"label":"双倍","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":30.5,"x":292,"width":200,"var":"btn_part","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"label":"分牌","anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"width":240,"var":"btn_continue","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"label":"继续游戏","centerY":40,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":30,"x":876,"var":"btn_baodian","stateNum":1,"skin":"blackjack_ui/game_ui/ershiyidian/btn_baodian.png","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":22,"x":88,"width":333,"var":"text_info","text":"牌局号：1532315641561321231313 ","leading":6,"height":25,"fontSize":20,"color":"#dadada"}},{"type":"Text","props":{"y":47,"x":88,"width":324,"var":"text_roomtype","text":"试玩场：底注：1","leading":6,"height":25,"fontSize":20,"color":"#dadada"}},{"type":"TouXiang","props":{"y":339,"x":40,"var":"view_player2","runtime":"ui.dzqp.game_ui.ershiyidian.component.TouXiangUI"}},{"type":"TouXiang","props":{"y":472,"x":260,"var":"view_player1","runtime":"ui.dzqp.game_ui.ershiyidian.component.TouXiangUI"}},{"type":"TouXiang","props":{"y":472,"x":915,"var":"view_player4","runtime":"ui.dzqp.game_ui.ershiyidian.component.TouXiangUI"}},{"type":"TouXiang","props":{"y":504,"x":590,"var":"view_player0","runtime":"ui.dzqp.game_ui.ershiyidian.component.TouXiangUI"}},{"type":"TouXiang","props":{"y":339,"x":1138,"var":"view_player3","runtime":"ui.dzqp.game_ui.ershiyidian.component.TouXiangUI"}},{"type":"Image","props":{"y":388,"x":157,"var":"img_pos2","skin":"blackjack_ui/game_ui/ershiyidian/tu_weizhi1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":520,"x":378,"var":"img_pos1","skin":"blackjack_ui/game_ui/ershiyidian/tu_weizhi1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":557,"x":707,"var":"img_pos0","skin":"blackjack_ui/game_ui/ershiyidian/tu_weizhi1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":520,"x":897,"var":"img_pos4","skin":"blackjack_ui/game_ui/ershiyidian/tu_weizhi1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":388,"x":1119,"var":"img_pos3","skin":"blackjack_ui/game_ui/ershiyidian/tu_weizhi1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":418,"x":140,"var":"img_baoxian2","skin":"blackjack_ui/game_ui/ershiyidian/tu_bao_.png"}},{"type":"Image","props":{"y":550,"x":361,"var":"img_baoxian1","skin":"blackjack_ui/game_ui/ershiyidian/tu_bao_.png"}},{"type":"Image","props":{"y":587,"x":690,"var":"img_baoxian0","skin":"blackjack_ui/game_ui/ershiyidian/tu_bao_.png"}},{"type":"Image","props":{"y":550,"x":880,"var":"img_baoxian4","skin":"blackjack_ui/game_ui/ershiyidian/tu_bao_.png"}},{"type":"Image","props":{"y":418,"x":1102,"var":"img_baoxian3","skin":"blackjack_ui/game_ui/ershiyidian/tu_bao_.png"}},{"type":"XiPai","props":{"y":243,"x":636,"var":"view_xipai","anchorY":0.5,"anchorX":0.5,"runtime":"ui.dzqp.game_ui.tongyong.effect.XiPaiUI"}},{"type":"Image","props":{"y":335,"x":180,"var":"img_bao2","skin":"blackjack_ui/game_ui/ershiyidian/tu_bao_.png","skewX":-30,"scaleY":0.6,"scaleX":0.6,"rotation":30}},{"type":"Image","props":{"y":446,"x":399,"var":"img_bao1","skin":"blackjack_ui/game_ui/ershiyidian/tu_bao_.png","skewX":-23,"scaleY":0.6,"scaleX":0.6,"rotation":11}},{"type":"Image","props":{"y":469,"x":730,"var":"img_bao0","skin":"blackjack_ui/game_ui/ershiyidian/tu_bao_.png","scaleY":0.6,"scaleX":0.6,"rotation":0}},{"type":"Image","props":{"y":407,"x":977,"var":"img_bao4","skin":"blackjack_ui/game_ui/ershiyidian/tu_bao_.png","skewX":24,"scaleY":0.6,"scaleX":0.6,"rotation":-22}},{"type":"Image","props":{"y":276,"x":1150,"var":"img_bao3","skin":"blackjack_ui/game_ui/ershiyidian/tu_bao_.png","skewX":24,"scaleY":0.6,"scaleX":0.6,"rotation":-55}},{"type":"Box","props":{"y":259,"x":659,"width":141,"var":"box_bet","height":388},"child":[{"type":"Image","props":{"y":75,"x":63,"width":127,"skin":"blackjack_ui/game_ui/ershiyidian/hslider2.png","sizeGrid":"0,51,0,30","height":72,"anchorY":1,"anchorX":0.5},"child":[{"type":"Text","props":{"y":15,"x":7,"wordWrap":true,"width":114,"var":"text_bet","text":"131300","leading":6,"height":36,"fontSize":30,"color":"#dadada","align":"center"}}]},{"type":"Image","props":{"y":381,"x":63,"skin":"blackjack_ui/game_ui/ershiyidian/Vslider1.png","anchorY":1,"anchorX":0.5}},{"type":"VSlider","props":{"y":345,"x":48,"var":"hslider_bet","skin":"blackjack_ui/game_ui/ershiyidian/Vslider.png","sizeGrid":"0,0,0,0,1","scaleY":-1}}]}]},{"type":"Button","props":{"var":"btn_back","top":16,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_fh1.png","right":10,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"var":"btn_chongzhi","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_chongzhi.png","right":10,"bottom":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"var":"btn_menu","top":16,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_cd.png","left":10,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":52,"x":1159,"var":"btn_qifu","top":16,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_qf.png","right":85,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":0,"x":10,"width":180,"var":"img_menu","top":0,"skin":"tongyong_ui/game_ui/tongyong/general/cd_1.png","sizeGrid":"20,20,20,20","left":10,"height":238,"anchorY":0},"child":[{"type":"Image","props":{"y":82,"x":11,"width":160,"skin":"tongyong_ui/game_ui/tongyong/general/cd_2.png"}},{"type":"Image","props":{"y":161,"x":11,"width":160,"skin":"tongyong_ui/game_ui/tongyong/general/cd_2.png"}},{"type":"Button","props":{"y":23,"x":14,"var":"btn_rule","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_gz.png"}},{"type":"Button","props":{"y":167,"x":14,"var":"btn_seeting","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_sz.png"}},{"type":"Button","props":{"y":97,"x":14,"var":"btn_record","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_zj.png"}}]}],"animations":[{"nodes":[{"target":105,"keyframes":{"y":[{"value":28,"tweenMethod":"linearNone","tween":true,"target":105,"key":"y","index":0},{"value":28,"tweenMethod":"linearNone","tween":true,"target":105,"key":"y","index":1}],"skin":[{"value":"ui/game_ui/zhajinhua/effect/btn/00001.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":0},{"value":"ui/game_ui/zhajinhua/effect/btn/00002.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":1},{"value":"ui/game_ui/zhajinhua/effect/btn/00003.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":2},{"value":"ui/game_ui/zhajinhua/effect/btn/00004.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":3},{"value":"ui/game_ui/zhajinhua/effect/btn/00005.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":4},{"value":"ui/game_ui/zhajinhua/effect/btn/00006.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":5},{"value":"ui/game_ui/zhajinhua/effect/btn/00007.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":6},{"value":"ui/game_ui/zhajinhua/effect/btn/00008.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":7},{"value":"ui/game_ui/zhajinhua/effect/btn/00009.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":8},{"value":"ui/game_ui/zhajinhua/effect/btn/00010.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":9}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":105,"key":"alpha","index":0}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.dzqp.game_ui.ershiyidian.PaiXeiUI",ui.dzqp.game_ui.ershiyidian.PaiXeiUI);
			View.regComponent("ui.dzqp.game_ui.tongyong.FaPai1UI",ui.dzqp.game_ui.tongyong.FaPai1UI);
			View.regComponent("ui.dzqp.game_ui.ershiyidian.effect.HeiJieKeUI",ui.dzqp.game_ui.ershiyidian.effect.HeiJieKeUI);
			View.regComponent("ui.dzqp.game_ui.ershiyidian.effect.WuXiaoLongUI",ui.dzqp.game_ui.ershiyidian.effect.WuXiaoLongUI);
			View.regComponent("Text",laya.display.Text);
			View.regComponent("ui.dzqp.game_ui.ershiyidian.component.PaoPaoUI",ui.dzqp.game_ui.ershiyidian.component.PaoPaoUI);
			View.regComponent("ui.dzqp.game_ui.ershiyidian.component.PaoPao1UI",ui.dzqp.game_ui.ershiyidian.component.PaoPao1UI);
			View.regComponent("ui.dzqp.game_ui.ershiyidian.effect.BaoPaiUI",ui.dzqp.game_ui.ershiyidian.effect.BaoPaiUI);
			View.regComponent("ui.dzqp.game_ui.ershiyidian.component.TouXiangUI",ui.dzqp.game_ui.ershiyidian.component.TouXiangUI);
			View.regComponent("ui.dzqp.game_ui.tongyong.effect.XiPaiUI",ui.dzqp.game_ui.tongyong.effect.XiPaiUI);

            super.createChildren();
            this.createView(ui.dzqp.game_ui.ershiyidian.ErShiYiDianUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.ershiyidian {
    export class ErShiYiDian_BaoDianUI extends View {
		public panel_baodian:Laya.Panel;
		public btn_close:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":991,"height":603,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"width":987,"skin":"tongyong_ui/game_ui/tongyong/hud/game_popout_bg.png","sizeGrid":"90,40,60,40","height":596,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":38,"x":498,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bkbt.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":39,"skin":"blackjack_ui/game_ui/ershiyidian/tit_baodian.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Panel","props":{"y":152,"x":69,"width":892,"var":"panel_baodian","vScrollBarSkin":"tongyong_ui/game_ui/tongyong/dating/vscroll.png","height":392},"child":[{"type":"Image","props":{"y":2,"x":2,"skin":"blackjack_ui/game_ui/ershiyidian/tu_baodian.jpg","height":1186}}]},{"type":"Image","props":{"y":119,"x":153,"skin":"blackjack_ui/game_ui/ershiyidian/tu_baodian1.jpg"}},{"type":"Image","props":{"y":81,"x":24,"skin":"blackjack_ui/game_ui/ershiyidian/tu_dianshu.png"}},{"type":"Image","props":{"y":153,"x":24,"skin":"blackjack_ui/game_ui/ershiyidian/tu_baodian2.jpg"}},{"type":"Image","props":{"y":81,"x":153,"skin":"blackjack_ui/game_ui/ershiyidian/tu_baodian3.jpg"}},{"type":"Button","props":{"y":41,"x":936,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/btn_gb.png","anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.ershiyidian.ErShiYiDian_BaoDianUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.ershiyidian {
    export class ErShiYiDian_GuiZeUI extends View {
		public btn_close:Laya.Button;
		public panel_rule:Laya.Panel;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"x":30,"width":787,"height":531,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":266,"x":394,"width":793,"skin":"tongyong_ui/game_ui/tongyong/hud/game_popout_bg.png","height":531,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":37,"x":394,"skin":"tongyong_ui/game_ui/tongyong/hud/tit_game_rule.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":35,"x":392,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bkbt.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":38,"x":743,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Panel","props":{"y":76,"x":23,"width":734,"var":"panel_rule","height":403},"child":[{"type":"Image","props":{"y":-1,"x":-6,"skin":"blackjack_ui/game_ui/ershiyidian/guize_1.png","height":1000}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.ershiyidian.ErShiYiDian_GuiZeUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.ershiyidian {
    export class ErShiYiDian_HUDUI extends View {
		public view_hud:ui.dzqp.game_ui.tongyong.HudUI;
		public box_right:Laya.Box;
		public img_room0:Laya.Image;
		public lab_least0:Laya.Label;
		public lab_money0:Laya.Label;
		public img_room1:Laya.Image;
		public lab_least1:Laya.Label;
		public lab_money1:Laya.Label;
		public img_room2:Laya.Image;
		public lab_least2:Laya.Label;
		public lab_money2:Laya.Label;
		public img_room3:Laya.Image;
		public lab_least3:Laya.Label;
		public lab_money3:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"top":-1,"skin":"blackjack_ui/game_ui/ershiyidian/zjh.jpg","right":-1,"left":-1,"bottom":-1}},{"type":"Image","props":{"y":30,"x":20,"skin":"blackjack_ui/game_ui/ershiyidian/zjh_rw1.png","bottom":0}},{"type":"Hud","props":{"var":"view_hud","top":0,"runtime":"ui.dzqp.game_ui.tongyong.HudUI","right":0,"left":0,"bottom":0}},{"type":"Box","props":{"y":30,"x":30,"width":910,"top":0,"right":0,"mouseThrough":true,"bottom":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"width":900,"var":"box_right","right":0,"height":465,"centerY":20,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":112,"var":"img_room0","skin":"tongyong_ui/game_ui/tongyong/hud/difen_00.png","right":610,"name":"item0","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":59,"x":133,"wordWrap":true,"width":140,"var":"lab_least0","text":"底分：00","leading":6,"height":31,"fontSize":24,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":105,"x":133,"wordWrap":true,"width":196,"var":"lab_money0","text":"准入：00","leading":6,"height":31,"fontSize":26,"color":"#122452","anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Image","props":{"y":352,"var":"img_room1","skin":"tongyong_ui/game_ui/tongyong/hud/difen_01.png","right":610,"name":"item1","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":58,"x":133,"wordWrap":true,"width":140,"var":"lab_least1","text":"底分：00","leading":6,"height":31,"fontSize":24,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":103,"x":133,"wordWrap":true,"width":196,"var":"lab_money1","text":"准入：00","leading":6,"height":31,"fontSize":26,"color":"#361147","anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Image","props":{"y":232,"var":"img_room2","skin":"tongyong_ui/game_ui/tongyong/hud/difen_02.png","right":330,"name":"item2","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":131,"x":134,"skin":"blackjack_ui/game_ui/ershiyidian/difen_03_1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":298,"x":135,"wordWrap":true,"width":140,"var":"lab_least2","text":"底分：00","leading":6,"height":31,"fontSize":24,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":343,"x":135,"wordWrap":true,"width":196,"var":"lab_money2","text":"准入：00","leading":6,"height":31,"fontSize":26,"color":"#0a4121","anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Image","props":{"y":232,"var":"img_room3","skin":"tongyong_ui/game_ui/tongyong/hud/difen_03.png","right":50,"name":"item3","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":131,"x":135,"skin":"blackjack_ui/game_ui/ershiyidian/difen_04_1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":298,"x":136,"wordWrap":true,"width":140,"var":"lab_least3","text":"底分：00","leading":6,"height":31,"fontSize":24,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":343,"x":137,"wordWrap":true,"width":196,"var":"lab_money3","text":"准入：00","leading":6,"height":31,"fontSize":26,"color":"#5d360d","anchorY":0.5,"anchorX":0.5,"align":"center"}}]}]}]},{"type":"Image","props":{"top":20,"skin":"blackjack_ui/game_ui/ershiyidian/21d_title.png","scaleY":1.2,"scaleX":1.2,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.dzqp.game_ui.tongyong.HudUI",ui.dzqp.game_ui.tongyong.HudUI);

            super.createChildren();
            this.createView(ui.dzqp.game_ui.ershiyidian.ErShiYiDian_HUDUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.ershiyidian {
    export class PaiXeiUI extends View {
		public ani1:Laya.FrameAnimation;
		public img_card:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":166,"height":156},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"blackjack_ui/game_ui/ershiyidian/tu_pai1.png"}},{"type":"Image","props":{"y":0,"x":0,"var":"img_card","skin":"blackjack_ui/game_ui/ershiyidian/tu_pai2.png"},"compId":3},{"type":"Image","props":{"y":0,"x":0,"skin":"blackjack_ui/game_ui/ershiyidian/tu_pai3.png"}}],"animations":[{"nodes":[{"target":3,"keyframes":{"y":[{"value":-75,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":10}],"x":[{"value":40,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":10}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.ershiyidian.PaiXeiUI.uiView);
        }
    }
}
