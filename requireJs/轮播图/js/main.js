/**
 * Created by asus on 2018/4/22.
 */
// requirejs.config({
//     path:{
//         jquery:'jquery-2.1.4'
//
//     }
// });
require(["jquery","index"], function($,Index){
    var setting = {
        selector: "#picture",
        img : ["img/one.png","img/two.png","img/three.png","img/four.png"],
        speed:500,
        btnStyle: "square",
        arrowPos:"bottom"


    };
    var index  = new Index(setting);
    index.init();

    var setting2 = {
        selector: "#picture2",
        img : ["img/two.png","img/three.png","img/four.png"],
        speed:1000,
        btnStyle: "circle",
        arrowPos:"center"
    };

    var index2 = new Index(setting2);
    index2.init();

    var setting3 = {
        selector: "#picture2",
        img : ["img/two.png","img/three.png","img/four.png"],
        speed:500,
        btnStyle: "square",
        arrowPos:"bottom"
    };

    var index3 = new Index(setting3);
    index3.init();
});