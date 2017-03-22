angular
	.module("infoModule", [])
	.directive("info", function($state) {
		return {
			restrict: 'AE',
			replace: true,
			scope: {},
			template: `
					<div ui-view></div>
			`
		}
	})
  .directive("pro", function($state) {
		return {
			restrict: 'AE',
			replace: true,
			scope: {},
			template: `
					<div class="pro-img">
            <img src="./images/wxtjianli.png" alt="王小天的个人简历" />
          </div>
			`
		}
	})
  .directive("con", function($state) {
		return {
			restrict: 'AE',
			replace: true,
			scope: {},
			template: `
					<div style="margin-left:100px">
            <h1>使用微信扫一扫</h1>
						<img src="./images/二维码(1).png" alt="使用微信扫一扫" style="display: inline-block;vertical-align: middle"/>
						<span><b>邮箱：</b>13880605025@163.com</span><br/>
						<span><b>继续完善中…………</b></span>
          </div>
			`
		}
	})
  .directive("prd", function($state,$location) {
    return {
      restrict: 'AE',
      replace: true,
      scope: {},
      template:`
      <div class="prd-ul">
        <ul>
          <li ui-sref="prd.colok">时钟</li>
					<li ui-sref="prd.code">验证码</li>
					<li ui-sref="prd.fly">飞机大战</li>
          <li >你画我猜</li>
        </ul>
        <div ui-view class="prd-div"></div>
      </div>
      `,
      link:function(){
        $state.go("prd.colok")
        console.log($location.$$url);
      }
    }
  })
