/**
* 21点 
*/
module gameblackjack.data {
	export class BlackjackData extends gamecomponent.object.PlayingPuKeCard {
		public _cardCount: number = 0;
		private _bankerCard: any = [610, 200, 15]	//庄家的牌的位置，x,y,间距
		private _posTemp: any = {	//牌的位置角度
			10: [[610, 350, 0], [625, 350, 0], [640, 350, 0], [655, 350, 0], [670, 350, 0]],
			20: [[407, 307, 20], [422, 313, 20], [436, 318, 20], [452, 324, 20], [466, 329, 20]],
			30: [[253, 222, 35], [265, 231, 35], [277, 239, 35], [289, 247, 35], [301, 255, 35]],
			40: [[987, 257, -35], [1000, 247, -35], [1012, 238, -35], [1025, 229, -35], [1037, 220, -35]],
			50: [[812, 330, -20], [827, 325, -20], [842, 320, -20], [856, 315, -20], [871, 310, -20]],
		};
		private _posTempPart: any = {	//分牌后的位置角度
			10: [[585, 335, 0], [600, 335, 0], [615, 335, 0], [592, 362, 0], [607, 362, 0]],
			11: [[665, 335, 0], [680, 335, 0], [695, 335, 0], [672, 362, 0], [687, 362, 0]],
			20: [[406, 299, 25], [416, 304, 25], [427, 309, 25], [400, 315, 25], [410, 320, 25]],
			21: [[474, 329, 25], [484, 334, 25], [495, 339, 25], [468, 345, 25], [478, 350, 25]],
			30: [[244, 212, 35], [253, 218, 35], [263, 225, 35], [235, 226, 35], [244, 233, 35]],
			31: [[298, 251, 35], [307, 257, 35], [317, 264, 35], [289, 265, 35], [298, 272, 35]],
			40: [[966, 264, -35], [976, 257, -35], [987, 249, -35], [983, 272, -35], [996, 263, -35]],
			41: [[1024, 222, -35], [1034, 215, -35], [1045, 207, -35], [1041, 230, -35], [1054, 221, -35]],
			50: [[785, 338, -25], [796, 333, -25], [807, 328, -25], [801, 349, -25], [812, 344, -25]],
			51: [[853, 308, -25], [864, 303, -25], [874, 298, -25], [870, 318, -25], [881, 313, -25]],
		};
		private _posSkew: any = {	//倾斜度
			0: [0],
			1: [-16],
			2: [-15],
			3: [15],
			4: [16],
		}
		private _mainPlayerIndex: number;
		public _ownerIdx: number;	//牌的归属座位
		public _cardIdx: number;	//第几张牌
		public _isPart: boolean = false; //分牌

		constructor() {
			super();
		}

		public Init(v: number) {
			//8副牌
			if (v < 0 || v > 52 * 8) {
				throw "PlayingCard v < 0 || v > 52 * 8," + v
			}
			this._val = v - 1;
			this.Analyze();
		}

		protected Analyze(): void {
			let val = this._val % 52;
			this._card_val = val % 13 + 1;
			this._card_color = Math.floor(val / 13);
			if (this._card_val > 10)
				this._cardCount = 10;
			else
				this._cardCount = this._card_val;
		}

		//获取牌点数
		get cardCount() {
			return this._cardCount;
		}

		myOwner(v: Unit, index: number, seat: number, cardIdx: number, isPart: boolean) {
			this.owner = v;
			this.size = 0.2;
			this._mainPlayerIndex = index;
			this.scaleX = -1;
			this._ownerIdx = seat;
			this._cardIdx = cardIdx;
			this._isPart = isPart;
			this.time_interval = 200;
		}

		fapai() {
			//庄家牌的位置直接写死
			let posX: number;
			let posY: number;
			let rotate: number;
			if (this._ownerIdx == 60) {
				posX = this._bankerCard[0] + this._cardIdx * this._bankerCard[2];
				posY = this._bankerCard[1];
				rotate = 0;
				this.skew_x = 0;
			} else {
				let temp = this._posTemp;
				if (this._isPart) {
					temp = this._posTempPart;
				}
				let index = (this._ownerIdx - this._mainPlayerIndex * 10 + 50) % 50 + 10;
				posX = temp[index][this._cardIdx][0];
				posY = temp[index][this._cardIdx][1];
				let idx = (Math.floor(this._ownerIdx / 10) - this._mainPlayerIndex + 5) % 5
				rotate = temp[index][this._cardIdx][2] * Math.PI / 180;
				this.skew_x = this._posSkew[idx][0] * Math.PI / 180;
			}
			if (!this.targe_pos) {
				this.targe_pos = new Vector2();
			}
			// this.isFinalPos = false;
			this.targe_pos.x = posX;
			this.targe_pos.y = posY;
			let size: number = 0.45;
			if (this._isPart)
				size = size * 0.8;
			if (!this.pos) return;
			Laya.Tween.clearAll(this.pos);
			Laya.Tween.clearAll(this);
			Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, this.time_interval, null, Handler.create(this, this.fanpai));
			Laya.Tween.to(this, { size: size, rotateAngle: 4 * Math.PI + rotate }, this.time_interval);
		}

		//分牌
		fenpai() {
			let index = (this._ownerIdx - this._mainPlayerIndex * 10 + 50) % 50 + 10;
			let posX = this._posTempPart[index][this._cardIdx][0];
			let posY = this._posTempPart[index][this._cardIdx][1];
			let idx = (Math.floor(this._ownerIdx / 10) - this._mainPlayerIndex + 5) % 5
			this.skew_x = this._posSkew[idx][0] * Math.PI / 180;
			this.rotateAngle = this._posTempPart[index][this._cardIdx][2] * Math.PI / 180;
			if (!this.targe_pos) {
				this.targe_pos = new Vector2();
			}
			// this.isFinalPos = false;
			this.targe_pos.x = posX;
			this.targe_pos.y = posY;
			this.size = 0.45;
			if (this._isPart)
				this.size = this.size * 0.8;
			this.time_interval = 400;
			if(!this.pos) return;
			Laya.Tween.clearAll(this.pos);
			Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, this.time_interval);
		}

		//重连发牌
		refapai(isFan: boolean) {
			//庄家牌的位置直接写死
			let posX: number;
			let posY: number;
			if (this._ownerIdx == 60) {
				posX = this._bankerCard[0] + this._cardIdx * this._bankerCard[2];
				posY = this._bankerCard[1];
				this.skew_x = 0;
				this.rotateAngle = 4 * Math.PI;
			} else {
				let temp = this._posTemp;
				if (this._isPart) {
					temp = this._posTempPart;
				}
				let index = (this._ownerIdx - this._mainPlayerIndex * 10 + 50) % 50 + 10;
				posX = temp[index][this._cardIdx][0];
				posY = temp[index][this._cardIdx][1];
				let idx = (Math.floor(this._ownerIdx / 10) - this._mainPlayerIndex + 5) % 5
				this.skew_x = this._posSkew[idx][0] * Math.PI / 180;
				this.rotateAngle = temp[index][this._cardIdx][2] * Math.PI / 180 + 4 * Math.PI;
			}
			this.pos.x = posX;
			this.pos.y = posY;
			this.size = 0.45;
			if (this._isPart)
				this.size = this.size * 0.8;
			if (isFan)
				this.fanpaiOne();
			this.fanpai();
			super.fapai();
		}

		//翻牌
		fanpai() {
			//庄家第二张牌不翻开
			if (this._ownerIdx == 60 && this._cardIdx == 2) {
				return;
			}
			super.fanpai();
		}

		fanpaiOne() {
			if (this._ownerIdx != 60) return;
			if (this._cardIdx != 2) return;
			super.fanpai();
		}
	}
}