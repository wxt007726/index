angular
	.module("codeModule", [])
	.directive("code", function($state,$location) {
		return {
			restrict: 'E',
			replace: true,
			scope: {},
			template: `
				<div >
					<canvas width="80" height="30" id="cvs" style="background-color:#CCC;vertical-align: middle"></canvas>
					<span style="font-size:14px;color:blue">看不清楚，点击图片换一张</span>
				</div>
				`,
			link:function(scope){
				var ctx = cvs.getContext("2d");
				ctx.font = "20px Georgia";
				var code = drawCode();
				cvs.onclick = function() {
						code = drawCode();
						console.log(code)
				}
				function drawCode() {
						ctx.clearRect(0, 0, 80, 30);
						var str = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ真心真意前程似锦善始善终一帆风顺王小天";
						var code = "";
						for (var i = 0; i < 4; i++) {
								ctx.beginPath();
								ctx.strokeStyle = "rgb(" + getRandom(255) + ", " + getRandom(255) + ", " + getRandom(255) + ")";
								ctx.moveTo(getRandom(80), getRandom(30));
								ctx.lineTo(getRandom(80), getRandom(30));
								ctx.stroke();
						}

						for (var i = 0; i < 4; i++) {
								ctx.beginPath();
								ctx.font = "20px Georgia";
								ctx.strokeStyle = "rgb(" + getRandom(255) + ", " + getRandom(255) + ", " + getRandom(255) + ")";
								var strCode = str.charAt(getRandom(str.length));
								code += strCode;
								ctx.strokeText(strCode, i * 20, 20);
						}
						return code;
				}

				function getRandom(num) {
						return ~~(Math.random() * num);
				}

			}
		}
	})
