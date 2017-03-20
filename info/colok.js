angular
	.module("colokModule", [])
	.directive("colok", function($state,$location) {
		return {
			restrict: 'E',
			replace: true,
			scope: {},
			template: `
				<div >
          123
				</div>
			`
		}
	})
