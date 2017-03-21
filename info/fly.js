angular
	.module("flyModule", [])
	.directive("fly", function($state) {
		return {
			restrict: 'AE',
			replace: true,
			scope: {},
			template: `
				<div >
          <canvas id="cvs" width="600" height="600" style="background-color:#ccc"></canvas>
				</div>
				`,
		}
	})
