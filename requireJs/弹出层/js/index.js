/**
 * Created by asus on 2018/4/18.
 */
requirejs.config({
    paths:{
        jquery:'jquery-2.1.4'
    }
});

require(["jquery","dialog"],function($,Dialog){
    $("#open").on("click",function(){
       // var setting = {
       //     width:400,
       //     height:300,
       //     title:"登陆",
       //     content:"login.html"
       // };
       // dialog.open(setting);
    var setting ={
        width:200,
        height:400,
        title:"啦啦啦",
        content:"login.html"
    };
    var dialog = new Dialog(setting);
    dialog.open();

    });
});


