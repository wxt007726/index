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
					<div >
            <h1>还在开发中………………</h1>
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
