/**
* 21点-宝典
*/
module gameblackjack.page {
	export class BlackjackBaoDianPage extends game.gui.base.Page {
		private _viewUI: ui.ajqp.game_ui.ershiyidian.ErShiYiDian_BaoDianUI;

		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._isNeedBlack = true;
			this._isClickBlack = true;
			this._asset = [
				Path_game_blackjack.atlas_game_ui + "ershiyidian.atlas",
				PathGameTongyong.atlas_game_ui_tongyong+ "hud.atlas",
			];
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView('game_ui.ershiyidian.ErShiYiDian_BaoDianUI');
			this.addChild(this._viewUI);
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();

			this._viewUI.panel_baodian.vScrollBarSkin = "";
			this._viewUI.panel_baodian.vScrollBar.autoHide = true;
			this._viewUI.panel_baodian.vScrollBar.elasticDistance = 100;
		}

		public close(): void {

			super.close();
		}
	}
}