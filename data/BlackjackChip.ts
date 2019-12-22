/**
* 21点-筹码 
*/
module gameblackjack.data {
	export class BlackjackChip extends gamecomponent.object.PlayingChip {
		constructor() {
			super();
		}
		private _unitPos = { //玩家位置
			0: [630, 480],
			1: [340, 430],
			2: [130, 300],
			3: [1130, 300],
			4: [920, 430],
		}
		private _chipTargePos = {	//筹码位置
			10: [642, 415],
			20: [395, 370],
			30: [215, 265],
			40: [1075, 275],
			50: [895, 375],
		};
		private _chipTargePosPart = {	//筹码位置
			10: [620, 415],
			11: [660, 415],
			20: [373, 360],
			21: [409, 375],
			30: [195, 260],
			31: [230, 282],
			40: [1060, 285],
			41: [1090, 263],
			50: [878, 385],
			51: [911, 370],
		};
		private _chipPos = {	//保险筹码位置
			0: [640, 268],
			1: [500, 249],
			2: [420, 215],
			3: [860, 215],
			4: [780, 249],
		};
		private _chipType = [[10, 0], [25, 1], [55, 2], [70, 3], [85, 4], [100, 5]];	//筹码类型
		private _bankerChipPos = [640, 140];	//庄家筹码位置

		public _posIndex: number;	//筹码位置
		private _isPart: boolean;	//是不是分牌过
		private _ownerIdx: number;	//谁丢的筹码
		private _mainIdx: number;	//主精灵ID
		private _optType: number;	//怎么获得筹码的
		private _chipIdx: number;	//筹码ID
		setData(optType: number, posId: number, mainIdx: number, index: number, isPart: boolean, ownerIdx: number, val: number) {
			this.size = 0.33;
			this._chipIdx = index;
			this._posIndex = posId;
			this.sortScore = -index - 5;
			this._isPart = isPart;
			this._ownerIdx = ownerIdx;
			this._mainIdx = mainIdx;
			this._optType = optType;
			this._val = "t";
			this.rotateAngle = 0;
			let type;
			for (let i = 0; i < this._chipType.length; i++) {
				if (val <= this._chipType[i][0]) {
					type = this._chipType[i][1];
					break;
				}
			}
			this._type = type;
		}

		//发筹码
		sendChip() {
			let idx = (this._ownerIdx - this._mainIdx + 5) % 5;
			this.pos = new Vector2(this._unitPos[idx][0], this._unitPos[idx][1]);
			let temp = this._chipTargePos;
			if (this._isPart) {
				temp = this._chipTargePosPart;
			}
			let index = (this._posIndex - this._mainIdx * 10 + 50) % 50 + 10;
			let posX = temp[index][0];
			let posY = temp[index][1] - this._chipIdx * 2;
			if (!this.targe_pos) {
				this.targe_pos = new Vector2();
			}
			this.targe_pos.x = posX;
			this.targe_pos.y = posY;
			super.sendChip();
		}

		//发保险筹码
		sendinsuranceChip() {
			let index = (this._posIndex - this._mainIdx + 5) % 5;
			let posX = this._chipPos[index][0];
			let posY = this._chipPos[index][1] - this._chipIdx * 2;
			let idx = (this._ownerIdx - this._mainIdx + 5) % 5;
			this.pos = new Vector2(this._unitPos[idx][0], this._unitPos[idx][1]);
			if (!this.targe_pos) {
				this.targe_pos = new Vector2();
			}
			// this.isFinalPos = false;
			this.targe_pos.x = posX;
			this.targe_pos.y = posY;
			if(!this.pos) return;
			super.sendChip();
		}

		//分牌移动筹码
		moveChip(index: number) {
			if (!this.targe_pos) {
				this.targe_pos = new Vector2();
			}
			this.isFinalPos = false;
			let idx = (index - this._mainIdx * 10 + 50) % 50 + 10;
			this.targe_pos.x = this._chipTargePosPart[idx][0];
			this.targe_pos.y = this._chipTargePosPart[idx][1]  - this._chipIdx * 2;
			if(!this.pos) return;
			Laya.Tween.clearAll(this.pos);
			Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, 500, Laya.Ease.circInOut);
		}

		//结算的时候飘筹码
		loseFlyChip(posId: number, game: Game) {
			if (posId != this._posIndex) return;
			if (!this.targe_pos) {
				this.targe_pos = new Vector2();
			}
			this.isFinalPos = false;
			this.targe_pos.x = this._bankerChipPos[0];
			this.targe_pos.y = this._bankerChipPos[1];
			if(!this.pos) return;
			super.flyChipBase(600, game);
		}
		winFlyChip(posId: number, isPart: boolean, game: Game) {
			if (posId != this._posIndex) return;
			if (!this.targe_pos) {
				this.targe_pos = new Vector2();
			}
			this.isFinalPos = false;
			this.pos = new Vector2(this._bankerChipPos[0], this._bankerChipPos[1]);
			let temp = this._chipTargePos;
			if (isPart) {
				temp = this._chipTargePosPart;
			}
			let idx = (posId - this._mainIdx * 10 + 50) % 50 + 10;
			this.targe_pos.x = temp[idx][0];
			this.targe_pos.y = temp[idx][1]  - this._chipIdx * 2;
			if(!this.pos) return;
			super.flyChipBase(600, game);
		}
		flyAllChip(posId: number, ownerIdx: number, game: Game) {
			if (posId != this._posIndex) return;
			if (!this.targe_pos) {
				this.targe_pos = new Vector2();
			}
			this.isFinalPos = false;
			let idx = (this._ownerIdx - this._mainIdx + 5) % 5;
			this.targe_pos.x = this._unitPos[idx][0];
			this.targe_pos.y = this._unitPos[idx][1];
			if(!this.pos) return;
			super.flyChipBase(600, game);
		}
		//保险飘筹码
		loseBaoXianChip(game: Game) {
			if (!this.targe_pos) {
				this.targe_pos = new Vector2();
			}
			this.isFinalPos = false;
			this.targe_pos.x = this._bankerChipPos[0];
			this.targe_pos.y = this._bankerChipPos[1];
			if(!this.pos) return;
			super.flyChipBase(700, game);
		}
		sendHjkChip(game: Game) {
			let index = (this._posIndex - this._mainIdx + 5) % 5;
			let posX = this._chipPos[index][0];
			let posY = this._chipPos[index][1]  - this._chipIdx * 2;
			let idx = (this._ownerIdx - this._mainIdx + 5) % 5;
			this.pos = new Vector2(this._bankerChipPos[0], this._bankerChipPos[1]);
			if (!this.targe_pos) {
				this.targe_pos = new Vector2();
			}
			this.isFinalPos = false;
			this.targe_pos.x = posX;
			this.targe_pos.y = posY;
			if(!this.pos) return;
			super.flyChipBase(600, game);
		}

		//隐藏筹码
		setvisible() {
			this.visible = false;
		}

		//画筹码，断线重连用
		drawChip() {
			let temp = this._chipTargePos;
			if (this._isPart) {
				temp = this._chipTargePosPart;
			}
			let index = (this._posIndex - this._mainIdx * 10 + 50) % 50 + 10;
			let posX = temp[index][0];
			let posY = temp[index][1];
			this.pos = new Vector2(posX, posY);
		}
	}
}