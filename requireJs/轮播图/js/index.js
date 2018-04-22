/**
 * Created by asus on 2018/4/22.
 */
// requirejs.config({
//     path:{
//         jquery:'jquery-2.1.4'
//
//     }
// });
define(["jquery"],function($){
    function Index(setting){
        this.$container= $('<div class="container"></div>');
        this.$tabs = $('<ul class="tabs"></ul>');
        this.$img =  $('<div class="img"></div>');
        this.$btn = $('<div class="btn"></div>');
        this.$prev = $('<span class="prev">&lt;</span>');
        this.$next = $('<span class="next">&gt;</span>');
        this.defaultSetting = {
            selector:document.body,
            img : [],
            speed:500,
            btnStyle: "square",
            arrowPos:"bottom"
        };
        $.extend(this.defaultSetting, setting);
    }
    Index.prototype.init = function(){
        this.$container.append(this.$tabs).append(this.$img).append(this.$btn);
        this.$btn.append(this.$prev).append(this.$next);
        for(var i=0; i<this.defaultSetting.img.length;i++){
            var $li = $("<li></li>").html(i+1);
            this.$tabs.append($li);

            var $imgs = $("<img />").attr("src",this.defaultSetting.img[i]);
            this.$img.append($imgs)
        }
        if(this.defaultSetting.btnStyle == "circle"){
            $("li", this.$tabs).html("").css({
                borderRadius:"50%"
            })
        }



        $("img", this.$img).eq(0).addClass("selected");
        $("li", this.$tabs).eq(0).addClass("selected");

        $(this.defaultSetting.selector).append(this.$container);

        var nowIndex = 0;
        $("li", this.$tabs).on("mouseover", function(e){
            nowIndex = $(e.target).index();
            changImg.call(this);
        }.bind(this));
        this.$prev.on("click", function(){
            nowIndex--;
            if(nowIndex == -1){
                nowIndex= this.defaultSetting.img.length-1;
            }
            changImg.call(this);
        }.bind(this));
        this.$next.on("click", function(){
            nowIndex++;
            if(nowIndex == this.defaultSetting.img.length){
                nowIndex = 0;
            }
            changImg.call(this);
        }.bind(this));

        this.$container.hover(function(){
            clearInterval(timer);
        },function(){
            timer = setInterval(function(){
                this.$next.trigger("click");
            }.bind(this), this.defaultSetting.speed);
        }.bind(this));

        var timer = setInterval(function(){
            this.$next.trigger("click");
        }.bind(this), this.defaultSetting.speed);




        function changImg(){
            $("Li",this.$tabs).eq(nowIndex).addClass("selected").siblings().removeClass("selected");
            $("img", this.$img).eq(nowIndex).addClass("selected").siblings().removeClass("selected");
        }
    };

    return Index;
});