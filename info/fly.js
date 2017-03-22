angular
	.module("flyModule", [])
	.directive("fly", function($state) {
		return {
			restrict: 'AE',
			replace: true,
			scope: {},
			template: `
				<div class="fly-cvs">
          <canvas id="cvs"  width="320" height="568" style="background-color:#ccc;overflow: hidden"></canvas>
          <canvas id="cvs1"  width="320" height="568" style="overflow: hidden"></canvas>
          <div class = "fly-myself" id="fly-myself"></div>
          <div class="fly-start" ng-show="data.hid"><button class="fly-btn" ng-click="hide()">{{data.text}}</button></div>
				</div>
				`,
        link:function(scpoe){
          scpoe.data = {
            text:"开始游戏",
            sscre:0,
            hid:true,
            speed:1,
            dX:0,
            dY:0
          }
          scpoe.hide = function(){
            scpoe.data.hid = false;
            bgmove(speed);
          }
          var myown = document.getElementById('fly-myself');
          var bgimg = new Image();
          var myfly2 = new Image();
          var myfly1 = new Image();
          var myfly3 = new Image();
          var bullet = new Image();
          bgimg.src="./images/fly/background_1.png";
          myfly2.src="./images/fly/enemy2_fly_1.png";
          myfly1.src="./images/fly/enemy1_fly_1.png";
          myfly3.src="./images/fly/enemy3_fly_1.png";
          bullet.src="./images/fly/bullet1.png";
          var ctx = cvs.getContext("2d");
          var ctx1 = cvs1.getContext("2d");
          //让背景图动起来
          var timer;
          var timer1;
          var bgh = 0;
          var flyh = 0;
          var speed = scpoe.data.speed;
          typeof speed;
          function bgmove(speed){
            timer = setInterval(function(num){
              bgh += speed;
              ctx.drawImage(bgimg,0,bgh,320,568);
              ctx.drawImage(bgimg,0,bgh-568,320,568);
              if(bgh === 568){
                bgh = 0
              }
            },16.67)
          }
            //鼠标移动

            cvs1.onmouseenter = function(e){
              scpoe.data.dX = e.clientX-150;
              scpoe.data.dY = e.clientY-120;
              ctx1.drawImage(myfly3,150,flyh-50,46,60);


              timer = setInterval(function(num){
                ctx1.clearRect(0,flyh-150,110,164)
                flyh += 0.5;
                ctx1.drawImage(myfly2,0,flyh-150,110,164);
                if(flyh === 568+150){
                  flyh = 0
                }
              },25)

              cvs1.onmousemove = (e)=>{
                myown.style.left = e.clientX-180 + 'px';
                myown.style.top = e.clientY-100 + 'px';
                scpoe.data.dX = e.clientX-150;
                scpoe.data.dY = e.clientY-120;
              }
            }
        }
		}
	})
