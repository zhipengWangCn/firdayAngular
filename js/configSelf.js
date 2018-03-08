var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider) {
	$routeProvider.when('/iAccount', {
		templateUrl: 'iAccount.html'
	}).when('/iMessage', {
		templateUrl: 'iMessage.html'
	}).when('/find', {
		templateUrl: 'find-hide.html'
	}).when('/ifankui', {
		templateUrl: 'ifankui.html'
	}).when('/look', {
		templateUrl: 'look.html'
	}).when('/icollect', {
		templateUrl: 'icollect.html'
	}).when('/iorder', {
		templateUrl: 'iorder3.html'
	}).when('/iscore', {
		templateUrl: 'iscore.html'
	}).when('/scoreOrder', {
		templateUrl: 'scoreOrder.html'
	}).when('/changePassword', {
		templateUrl: 'changePassword.html'
	}).when('/iziliao', {
		templateUrl: 'iaccziliao.html'
	}).when('/duihuan', {
		templateUrl: 'duihuan.html'
	}).when('/zhangdan', {
		templateUrl: 'zhangdan.html'
	}).when('/iqianbao', {
		templateUrl: 'iqianbao.html'
	}).when('/ddpingjia', {
		templateUrl: 'pingjia.html'
	}).when('/iaddr', {
		templateUrl: 'idizhiguanli.html'
	}).when('/iaccziliao', {
		templateUrl: 'iaccziliao.html'
	}).when('/changePhone1', {
		templateUrl: 'changePhone1.html'
	}).when('/changePhone2', {
		templateUrl: 'changePhone2.html'
	}).when('/changePhone3', {
		templateUrl: 'changePhone3.html'
	}).when('/tjxdz', {
		templateUrl: 'tjxdz.html'
	}).when('/orderDetail', {
		templateUrl: 'orderDetail.html'
	}).when('/scoreDetail', {
		templateUrl: 'scoreDetail.html'
	});


 // 重定向, 如果访问的资源不存在, 则执行
    $routeProvider.otherwise({   		
        templateUrl: 'scoreDetail.html'
    });
});







