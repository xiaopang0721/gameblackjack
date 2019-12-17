/**
* 21点 
*/
module gameblackjack.page {
	export class BlackjackPageDef extends game.gui.page.PageDef {
		static GAME_NAME: string;
		//21点场次界面
		static PAGE_BLACKJACK: string = "1";
		//21点游戏界面
		static PAGE_BLACKJACK_MAP: string = "2";
		//21点宝典界面
		static PAGE_BLACKJACK_BAODIAN: string = "3";
		//21点规则界面
		static PAGE_BLACKJACK_RULE: string = "101";

		static myinit(str: string) {
			super.myinit(str);
			BlackjackClip.init();
			PageDef._pageClassMap[BlackjackPageDef.PAGE_BLACKJACK] = BlackjackPage;
			PageDef._pageClassMap[BlackjackPageDef.PAGE_BLACKJACK_MAP] = BlackjackMapPage;
			PageDef._pageClassMap[BlackjackPageDef.PAGE_BLACKJACK_RULE] = BlackjackRulePage;
			PageDef._pageClassMap[BlackjackPageDef.PAGE_BLACKJACK_BAODIAN] = BlackjackBaoDianPage;


			this["__needLoadAsset"] = [
				DatingPath.atlas_dating_ui + "qifu.atlas",
				Path_game_blackjack.atlas_game_ui + "ershiyidian.atlas",
				Path_game_blackjack.atlas_game_ui_blackjack_effect + "baopai.atlas",
				Path_game_blackjack.atlas_game_ui_blackjack_effect + "baoxianbiaopshi.atlas",
				Path_game_blackjack.atlas_game_ui_blackjack_effect + "heijieke.atlas",
				Path_game_blackjack.atlas_game_ui_blackjack_effect + "qpk.atlas",
				Path_game_blackjack.atlas_game_ui_blackjack_effect + "wuxiaolong.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "nyl.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "chongzhi.atlas",
				PathGameTongyong.atlas_game_ui_tongyong_general + "anniu.atlas",
				PathGameTongyong.atlas_game_ui_tongyong_general_effect + "fapai_3.atlas",
				PathGameTongyong.atlas_game_ui_tongyong_general_effect + "xipai.atlas",
				PathGameTongyong.atlas_game_ui_tongyong_general_effect + "anniug.atlas",

				Path.custom_atlas_scene + 'card.atlas',
				Path.custom_atlas_scene + 'chip.atlas',
				Path.map + 'pz_blackjack.png',
				Path.map_far + 'bg_blackjack.jpg',
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