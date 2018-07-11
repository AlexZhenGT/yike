//创建一个独立的控制其模块
//该模块专门用于创建多个控制器
angular.module("Controller",[])
.controller("navsCtrl",["$scope",function($scope){
    $scope.navs = [
      {"refer":"#/index","icon" : "icon-home","text":"今日一刻"},
      {"refer":"#/older","icon" : "icon-file-empty","text":"往期内容"},
      {"refer":"#/author","icon" : "icon-pencil","text":"热门作者"},
      {"refer":"#/category","icon" : "icon-menu","text":"栏目浏览"},
      {"refer":"#/favourite","icon" : "icon-heart","text":"我的喜欢"},
      {"refer":"#/settings","icon" : "icon-cog","text":"设置"}
    ];
}])
//创建index的控制器indexCtrl
.controller("indexCtrl",["$scope","$rootScope","$http","$filter",function($scope,$rootScope,$http,$filter){
    //num位0，第一个导航栏选中
    $rootScope.num = 0; 
    $rootScope.title = "今日一刻";
    //加载图片刚开始时是处于显示状态
    $rootScope.isShow = true;
    //获取当前时间
    var today = new Date();
    var time = $filter("date")(today,"yyyy-M-d");
    //发送请求，获取服务器上的数据
    $http({
        url:"./API/index.php",
        method:"get",
        params:{time:time}
    }).then(function(result){
    	//console.log(result.data.posts);
    	//绑定数据传递给视图
    	$scope.posts = result.data.posts;
    	$rootScope.isShow = false;
    })
}])
.controller("olderCtrl",["$scope","$rootScope","$http","$filter",function($scope,$rootScope,$http,$filter){
	$rootScope.num = 1;
	$rootScope.title = "往期内容";
	$rootScope.isShow = true;
    //获取当前时间
    var today = new Date();
    var time = $filter("date")(today-1*24*60*60*1000,"yyyy-M-d");
    //发送请求，获取服务器上的数据
    $http({
        url:"./API/older.php",
        method:"get",
        params:{time:time}
    }).then(function(result){
    	console.log(result);
    	//绑定数据传递给视图
    	$scope.posts = result.data.posts;
    	$rootScope.isShow = false;
    })
}])
.controller("authorCtrl",["$scope","$rootScope","$http",function($scope,$rootScope,$http){
	$rootScope.num = 2;
	$rootScope.title = "热门作者";
	$rootScope.isShow = true;
	$http({
		url:"./API/author.php"
	}).then(function(result){
		var newResult = angular.fromJson(result);
		$scope.allAuthors = angular.fromJson(newResult.data[0]).authors;
		$scope.recAuthors = angular.fromJson(newResult.data[1]).authors;
		$rootScope.isShow = false;
	})
}])