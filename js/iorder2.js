var app = angular.module("myapp",[]);
app.controller('myCtrlA', function($scope) {
	$scope.myorderlistA = [{
			'listnum': '151515151515',
			'listdate': '2017.04.09  18:06:06',
			'listseller': '爱果果水果店',
			'liststate': '已关闭',
			'datalist': [{
				'listimg': '../img/selfCenter/12.png',
				'listtype': '云南邵通苹果1',
				'listquantity': '6个装',
				'listmoney': '¥35.0x1'
			}, {
				'listimg': '../img/selfCenter/12.png',
				'listtype': '云南邵通苹果2',
				'listquantity': '6个装',
				'listmoney': '¥35.0x1'
			},{
				'listimg': '../img/selfCenter/12.png',
				'listtype': '云南邵通苹果3',
				'listquantity': '6个装',
				'listmoney': '¥35.0x1'
			},{
				'listimg': '../img/selfCenter/12.png',
				'listtype': '云南邵通苹果3',
				'listquantity': '6个装',
				'listmoney': '¥35.0x1'
			}],
			'listallm': '¥105.0',
			'listfreight': '¥8.0'
		},{
			'listnum': '151515151515',
			'listdate': '2017.04.09  18:06:06',
			'listseller': '爱果果水果店',
			'liststate': '待付款',	
			'datalist': [{
				'listimg': '../img/selfCenter/12.png',
				'listtype': '云南邵通苹果1',
				'listquantity': '6个装',
				'listmoney': '¥35.0x1'
			}, {
				'listimg': '../img/selfCenter/12.png',
				'listtype': '云南邵通苹果2',
				'listquantity': '6个装',
				'listmoney': '¥35.0x1'
			}],
			'listallm': '¥105.0',
			'listfreight': '¥8.0'
		},{
			'listnum': '151515151515',
			'listdate': '2017.04.09  18:06:06',
			'listseller': '爱果果水果店',
			'liststate': '待发货',
			'datalist': [{
				'listimg': '../img/selfCenter/12.png',
				'listtype': '云南邵通苹果1',
				'listquantity': '6个装',
				'listmoney': '¥35.0x1'
			}, {
				'listimg': '../img/selfCenter/12.png',
				'listtype': '云南邵通苹果2',
				'listquantity': '6个装',
				'listmoney': '¥35.0x1'
			}],
			'listallm': '¥105.0',
			'listfreight': '¥8.0'
		},{
			'listnum': '151515151515',
			'listdate': '2017.04.09  18:06:06',
			'listseller': '爱果果水果店',
			'liststate': '已发货',
			'datalist': [{
				'listimg': '../img/selfCenter/12.png',
				'listtype': '云南邵通苹果1',
				'listquantity': '6个装',
				'listmoney': '¥35.0x1'
			}, {
				'listimg': '../img/selfCenter/12.png',
				'listtype': '云南邵通苹果2',
				'listquantity': '6个装',
				'listmoney': '¥35.0x1'
			}],
			'listallm': '¥105.0',
			'listfreight': '¥8.0'
		},{
			'listnum': '151515151515',
			'listdate': '2017.04.09  18:06:06',
			'listseller': '爱果果水果店',
			'liststate': '已收货',
			'datalist': [{
				'listimg': '../img/selfCenter/12.png',
				'listtype': '云南邵通苹果1',
				'listquantity': '6个装',
				'listmoney': '¥35.0x1'
			}, {
				'listimg': '../img/selfCenter/12.png',
				'listtype': '云南邵通苹果2',
				'listquantity': '6个装',
				'listmoney': '¥35.0x1'
			}],
			'listallm': '¥105.0',
			'listfreight': '¥8.0'
		},{
			'listnum': '151515151515',
			'listdate': '2017.04.09  18:06:06',
			'listseller': '爱果果水果店',
			'liststate': '申请退款中',
			'datalist': [{
				'listimg': '../img/selfCenter/12.png',
				'listtype': '云南邵通苹果1',
				'listquantity': '6个装',
				'listmoney': '¥35.0x1'
			}, {
				'listimg': '../img/selfCenter/12.png',
				'listtype': '云南邵通苹果2',
				'listquantity': '6个装',
				'listmoney': '¥35.0x1'
			}],
			'listallm': '¥105.0',
			'listfreight': '¥8.0'
		},{
			'listnum': '151515151515',
			'listdate': '2017.04.09  18:06:06',
			'listseller': '爱果果水果店',
			'liststate': '退款中',
			'datalist': [{
				'listimg': '../img/selfCenter/12.png',
				'listtype': '云南邵通苹果1',
				'listquantity': '6个装',
				'listmoney': '¥35.0x1'
			}, {
				'listimg': '../img/selfCenter/12.png',
				'listtype': '云南邵通苹果2',
				'listquantity': '6个装',
				'listmoney': '¥35.0x1'
			}],
			'listallm': '¥105.0',
			'listfreight': '¥8.0'
		},{
			'listnum': '151515151515',
			'listdate': '2017.04.09  18:06:06',
			'listseller': '爱果果水果店',
			'liststate': '退款失败',
			'datalist': [{
				'listimg': '../img/selfCenter/12.png',
				'listtype': '云南邵通苹果1',
				'listquantity': '6个装',
				'listmoney': '¥35.0x1'
			}, {
				'listimg': '../img/selfCenter/12.png',
				'listtype': '云南邵通苹果2',
				'listquantity': '6个装',
				'listmoney': '¥35.0x1'
			}],
			'listallm': '¥105.0',
			'listfreight': '¥8.0'
		}
	];
	
	$scope.stuta = '';
	
	$scope.stutaFun = function(str){
		$scope.stuta = str;
	};
	
	$scope.morderdel=function(n){
		$scope.myorderlistA.splice(n, 1);
	}
	$scope.topl=function(){
		window.location.href='#/myorderpl';
	}
});