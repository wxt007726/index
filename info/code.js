angular
	.module("codeModule", [])
	.directive("code", function($state,$location) {
		return {
			restrict: 'E',
			replace: true,
			scope: {},
			template: `
				<div >
          code
				</div>
			`
		}
	})
