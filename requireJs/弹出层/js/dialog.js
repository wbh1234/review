
/**
 * Created by asus on 2018/4/18.
 */
requirejs.config({
    paths:{
        jquery:'jquery-2.1.4'
    }
});


define(["jquery"],function($){
    function Dialog(setting){
        this.$container = $('<div class="dialog-container"></div>');
        this.$mask = $('<div class="dialog-mask"></div>');
        this.$main = $('<div class="dialog-main"></div>');
        this.$title = $('<div class="dialog-title"></div>');
        this.$item = $('<div class="dialog-title-item">弹出层</div>');
        this.$close = $('<div class="dialog-title-close">[X]</div>');
        this.$content = $('<div class="dialog-content"></div>');
        this.defaultSetting = {
            width:500,
            height:300,
            title:"弹出层",
            content:"login.html"
        };
        $.extend(this.defaultSetting, setting);
    }
    Dialog.prototype.open = function(){
        this.$container.append(this.$mask).append(this.$main);
        this.$main.append(this.$title).append(this.$content);
        this.$title.append(this.$item).append(this.$close);
                $("body").append(this.$container);

                this.$item.html(this.defaultSetting.title);
                this.$main.css({
                    width: this.defaultSetting.width,
                    height:this.defaultSetting.height,
                    marginTop:-this.defaultSetting.height/2,
                    marginLeft:-this.defaultSetting.width/2
                });
                if(this.defaultSetting.content.indexOf(".html") != -1){
                    this.$content.html(this.defaultSetting.content);
                }else{
                    this.$content.html(this.defaultSetting.content);
                }
                this.$close.on("click", function(){
                    this.close();
                }.bind(this));
    };
    Dialog.prototype.close = function(){
        this.$container.remove();
    };
    return Dialog;


    // return{
    //     open:function(setting){
    //         var defaultSetting ={
    //             width:500,
    //             height:300,
    //             title:"弹出层",
    //             content:""
    //         };
    //         $.extend(defaultSetting,setting);
    //
    //         var html = '<div class="dialog-container">'+
    //             '<div class="dialog-mask"></div>'+
    //             '<div class="dialog-main">'+
    //             '<div class="dialog-title">'+
    //             '<div class="dialog-title-item">弹出层</div>'+
    //             '<div class="dialog-title-close">[X]</div>'+
    //             '</div>'+
    //             '<div class="dialog-content"></div>'+
    //             '</div>';
    //         $("body").append(html);
    //
    //         $(".dialog-main").css({
    //             width: defaultSetting.width,
    //             height:defaultSetting.height,
    //             marginTop:-defaultSetting.height/2,
    //             marginLeft:-defaultSetting.width/2
    //
    //         })
    //         if(defaultSetting.content.indexOf(".html") != -1){
    //             $(".dialog-content").load(defaultSetting.content);
    //         }else{
    //             $(".dialog-content").html(defaultSetting.content);
    //         }
    //         $(".dialog-title-close").on("click",function(){
    //             $(this).parents(".dialog-container").remove();
    //         });
    //
    //
    //
    //
    //
    //     }
    // }
});