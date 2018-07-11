/*
* @Author: web1804gz
* @Date:   2018-07-10 15:59:14
* @Last Modified by:   web1804gz
* @Last Modified time: 2018-07-11 11:36:41
*/
//创建app应用模块
//依赖控制器模块，在依赖中写上控制器模块名称
var yike = angular.module("yike",["Controller","ngRoute"]);

/*
  run方法在模块创建完成之后，会直接执行
 */
yike.run(["$rootScope",function($rootScope){
    //给头部的a标签绑定单击事件，点击可以实现侧边显示的显示或隐藏
    //给collapse类定义值，通过这个值决定collapse 是否有效
    $rootScope.collapsed = false;
    $rootScope.toggle = function(){
    	//alert("toggle");
    	//取反
    	$rootScope.collapsed = !$rootScope.collapsed;
    	//显示或隐藏导航栏标题内容
    	//获取导航栏中所有的dd
    	var dds = document.querySelectorAll("dd");
    	//遍历每一个dd，给每一个dd修改样式，实现隐藏显示的效果
    	//显示时translate的值为0，而此时，collapsed值为true
    	if ($rootScope.collapsed) {
    		//此时显示
    		for(var i = 0; i < dds.length; i++){
    			dds[i].style.transitionDuration = (i + 1) * 0.15 + 's';
			    dds[i].style.transitionProperty = 'all';
			    dds[i].style.transitionDelay = '0.2s';
			    dds[i].style.transitionTimingFunction = 'ease-out';
			    dds[i].style.transform = 'translate(0)';
    		};
    	}else{
    		for(var i = 0; i < dds.length; i++){
    			dds[i].style.transitionDuration = (dds.length - i + 1) * 0.05 + 's';
			    dds[i].style.transitionProperty = 'all';
			    dds[i].style.transitionDelay = '';
			    dds[i].style.transitionTimingFunction = 'ease-out';
			    dds[i].style.transform = 'translate(-100%)';
    		};
    	};
    };
}]);
yike.config(["$locationProvider",function($locationProvider){
    $locationProvider.hashPrefix("");
}]);
//配置路由
yike.config(["$routeProvider",function($routeProvider){
    $routeProvider.when("/",{
        redirectTo:"/index"
    }).when("/index",{
        templateUrl:"./views/list.html",
        controller:"indexCtrl"
    }).when("/older",{
        templateUrl:"./views/older.html",
        controller:"olderCtrl"
    }).when("/author",{
        templateUrl:"./views/author.html",
        controller:"authorCtrl"
    })
}])