angular
	.module("headerModule", [])
	.run(function($state,$location){
		if($location.$$path === "/" ){
			$state.go("pro")
		}
	})
	.directive("header", function($state,$location) {
		return {
			restrict: 'E',
			replace: true,
			scope: {},
			template: `
				<div class="header-nav">
          <img class="header-logo" src="./images/tmpdir--17_3_6_15_06_11.gif" alt="王小天的个人主页" />
					<ul class="header-ul">
						<li ng-click="ctab(1)" ui-sref="pro" ng-class={"selected":current=="pro"}>个人简历</li>
						<li ng-click="ctab(2)" ui-sref="prd" ng-class={"selected":current=="prd"}>作品展示</li>
						<li ng-click="ctab(3)" ui-sref="con" ng-class={"selected":current=="con"}>联系 TA</li>
					</ul>
				</div>
			`,
			link:function(scope){
				var hash = $location.$$path;
				console.log(hash);
				if(hash === '/'){
					scope.current = "pro"
				}else{
					hash = hash.split("/")[1];
					scope.arr = ["pro","prd","con"]
					scope.current = hash,
					scope.ctab = function(num){
						scope.current = scope.arr[num-1];
					}
				}
			}
		}
	})
