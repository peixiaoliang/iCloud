
todo=[
     {
         id:1,
         title:'新列表1',
         color:"#C96FE2",
         list:[
             {
                 content:"123",
                 date:"12123",
                 done:true

             },{
                 content:"111111111111111",
                 date:"12123",
                 done:false

             },
             {
                 content:"111111111111111",
                 date:"12123",
                 done:false

             }
         ]
     }
 ]
 var iCloud=angular.module("app",[]);
 iCloud.controller('todo',function ($scope) {
     $scope.todo=todo;
     $scope.color=["#C96FE2","#6DDC31","#41ADFA","#F2CB00","#9F845D","#F62368","#F89600"];
     $scope.id=0;
     $scope.index=0;
     $scope.add=function () {
         $scope.ids=$scope.todo[$scope.todo.length-1].id+1;
         $scope.todo.push({
             id:$scope.ids,
             title:"新列表"+$scope.ids,
             color:$scope.color[$scope.todo.length%7],
             list:[]

         })
         $scope.index=$scope.todo.length-1;
         getNum();
     }
     getNum();
     function getNum(){
         $scope.doneNum=0;
         angular.forEach($scope.todo[$scope.index].list,function(o,i){
             if(o.done==true){
                 $scope.doneNum++;
             }

         })
     }

     //过滤数据
     $scope.done=function(val,index,arr){
         return val.done==true;
     }
     $scope.doing=function(val,index,arr){
         return val.done==false;
     }
     $scope.select=function(i){
         $scope.index=i;
         $scope.flag=true;
         $scope.f=false;

     }
     
     $scope.flag=true;
     //新增新列表
     $scope.addList=function () {
         $scope.todo[$scope.index].list.push({
             content:"",
             date:new Date().getTime(),
             done:false

         })
     }
     $scope.changeDone=function (obj,status) {
         obj.done = status;
         getNum();
     }
         // $scope.todo[$scope.index].list[i].done=status;
         /*
         * $watch 监视视图更新 要监视的属性
         * $apply 通知视图更新*/
         $scope.$watch( 'index',function(){
             getNum();
         })
         $scope.$watch( 'todo',function(){
             getNum();
         },true)
     
     $scope.gerColor=function(){
         $scope.f=!$scope.f;
         $scope.fontColor=$scope.todo[$scope.index].color;
         $scope.fontVal=$scope.todo[$scope.index].titles;
     }
     $scope.gest=function(i) {
         $scope.fontColor=$scope.color[i];

     }
     $scope.finish=function(){
         $scope.todo[$scope.index].color=$scope.fontColor;
         $scope.todo[$scope.index].titles= $scope.title;
     }
     $scope.delete = function(i) {
         $scope.f=false;
        $scope.todo.splice(i,1)
     };

 })

