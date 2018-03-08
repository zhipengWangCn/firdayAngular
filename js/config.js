var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'first.html'
	}).when('/tongcheng', {
		templateUrl: 'city.html'
	}).when('/freshbaozhang', {
		templateUrl: 'firiday.html'
	}).when('/jifenshangcheng', {
		templateUrl: 'integral.html'
	}).when('/forgetpass', {
		templateUrl: 'zhaopassword.html'
	}).when('/fridayDetail', {
		templateUrl: 'FridayDetail.html'
	}).when('/jifenDetail', {
		templateUrl: 'jifenDetail.html'
	}).when('/gouwuche', {
		templateUrl: 'gouwuche.html'
	}).when('/gouwucheweikong', {
		templateUrl: 'gouwucheweikong.html'
	}).when('/zfcg', {
		templateUrl: 'zfcg.html'
	}).when('/jifendingdan', {
		templateUrl: 'jifendingdan.html'
	}).when('/sjia', {
		templateUrl: 'sjia.html'
	}).when('/orderMessHas', {
		templateUrl: 'orderMess-hasaddr.html'
	}).when('/placeOrder', {
		templateUrl: 'placeOrder.html'
	}).when('/loginAlert', {
		templateUrl: 'loginAlert.html'
	}).when('/orderMessNo', {
		templateUrl: 'orderMess-noaddr.html'
	}).when('/spfl', {
		templateUrl: 'spfl.html'
	}).when('/ssjg', {
		templateUrl: 'searchResult.html'
	}).when('/aboutFiriday', {
		templateUrl: 'aboutRiriday.html'
	}).when('/daohang', {
		templateUrl: 'special.html'
	}).when('/Recharge', {
		templateUrl: 'Recharge.html'
	}).when('/first', {
		templateUrl: 'first.html'
	})
	
	 // 重定向, 如果访问的资源不存在, 则执行
    $routeProvider.otherwise({   		
        redirectTo:'/'
    });
});

