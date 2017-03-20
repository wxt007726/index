angular.module("app", ["ui.router","headerModule","infoModule","colokModule","codeModule"])
	//将$stateProvider和$urlRouterProvider注入到myApp中
	.config(function($stateProvider, $urlRouterProvider) {
		//设置路由默认的路径
		$urlRouterProvider.when("", "/pro");
		$stateProvider
			.state("pro", {
				url: "/pro",
				template: "<pro></pro>"
			})
			.state("con", {
				url: "/con",
				template: "<con></con>"
			})
			.state("prd", {
				url: "/prd",
				template: "<prd></prd>"
			})
			.state("prd.colok", {
				url: "/colok",
				template: "<colok></colok>"
			})
			.state("prd.code", {
				url: "/code",
				template: "<code></code>"
			})
	});
