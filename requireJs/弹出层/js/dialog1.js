
/**
 * Created by asus on 2018/4/18.
 */
requirejs.config({
    paths:{
        jquery:'jquery-2.1.4'
    }
});


define(["jquery"],function($){
    return{
        open:function(setting){
            var defaultSetting ={
                width:500,
                height:300,
                title:"弹出层",
                content:""
            };
            $.extend(defaultSetting,setting);

            var html = '<div class="dialog-container">'+
                '<div class="dialog-mask"></div>'+
                '<div class="dialog-main">'+
                '<div class="dialog-title">'+
                '<div class="dialog-title-item">弹出层</div>'+
                '<div class="dialog-title-close">[X]</div>'+
                '</div>'+
                '<div class="dialog-content"></div>'+
                '</div>';
            $("body").append(html);

            $(".dialog-main").css({
                width: defaultSetting.width,
                height:defaultSetting.height,
                marginTop:-defaultSetting.height/2,
                marginLeft:-defaultSetting.width/2

            });
            if(defaultSetting.content.indexOf(".html") != -1){
                $(".dialog-content").load(defaultSetting.content);
            }else{
                $(".dialog-content").html(defaultSetting.content);
            }
            $(".dialog-title-close").on("click",function(){
                $(this).parents(".dialog-container").remove();
            });





        }
    }
});