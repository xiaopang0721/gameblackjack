/**
* 21点 
*/
module gameblackjack.page {
	export class BlackjackPageDef extends game.gui.page.PageDef {
		static GAME_NAME: string;
		//21点界面
		static PAGE_BLACKJACK: string = "1";
		static PAGE_BLACKJACK_MAP: string = "2";
		static PAGE_BLACKJACK_RULE: string = "101";
		static PAGE_BLACKJACK_BAODIAN: string = "7";

		static myinit(str: string) {
			super.myinit(str);
			BlackjackClip.init();
			PageDef._pageClassMap[BlackjackPageDef.PAGE_BLACKJACK] = BlackjackPage;
			PageDef._pageClassMap[BlackjackPageDef.PAGE_BLACKJACK_MAP] = BlackjackMapPage;
			PageDef._pageClassMap[BlackjackPageDef.PAGE_BLACKJACK_RULE] = BlackjackRulePage;
			PageDef._pageClassMap[BlackjackPageDef.PAGE_BLACKJACK_BAODIAN] = BlackjackBaoDianPage;


			this["__needLoadAsset"] = [
				PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
				Path_game_blackjack.atlas_game_ui + "ershiyidian.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
				DatingPath.atlas_dating_ui + "qifu.atlas",
				Path_game_blackjack.atlas_game_ui + "ershiyidian/effect.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "general/effect/fapai_3.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "general/effect/xipai.atlas",
				Path.custom_atlas_scene + 'card.atlas',
				Path.custom_atlas_scene + 'chip.atlas',
				PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "logo.atlas",
				Path.map + 'pz_blackjack.png',
				Path.map_far + 'bg_blackjack.jpg',
				Path_game_blackjack.ui_blackjack + "sk/eyd_0.png",
				Path_game_blackjack.ui_blackjack + "sk/eyd_1.png",
				Path_game_blackjack.ui_blackjack + "sk/eyd_2.png",
				Path_game_blackjack.ui_blackjack + "sk/eyd_3.png",
			]

			if (WebConfig.needMusicPreload) {
				this["__needLoadAsset"] = this["__needLoadAsset"].concat([

					Path_game_blackjack.music_blackjack + "black_bgm.mp3",
					Path_game_blackjack.music_blackjack + "baopai.mp3",
					Path_game_blackjack.music_blackjack + "chouma.mp3",
					Path_game_blackjack.music_blackjack + "kais.mp3",
					Path_game_blackjack.music_blackjack + "tesupai.mp3",

				])
			}
		}
	}
}