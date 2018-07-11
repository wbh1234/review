/**
 * Created by asus on 2018/7/10.
 */


var oOne= document.getElementById("one");
var oTwo= document.getElementById("two");
var oThree= document.getElementById("three");

var leftSettingArrow = document.getElementById("leftSettingArrow");
var leftLineArrow= document.getElementById("leftLineArrow");
var oSettingList = document.getElementById("settingList");
var oLeftLineList = document.getElementById("leftLineList");

oOne.onmouseover = function(){
    oOne.style.color="green";
    oOne.style.borderLeft="solid 2px green";
};
oOne.onmouseout = function(){
    oOne.style.color="black";
    oOne.style.borderLeft="solid 2px white";

};
oTwo.onmouseover = function(){
    oTwo.style.color="green";
    oTwo.style.borderLeft="solid 2px green";
};
oTwo.onmouseout = function(){
    oTwo.style.color="black";
    oTwo.style.borderLeft="solid 2px white";

};
oThree.onmouseover = function(){
    oThree.style.color="green";
    oThree.style.borderLeft="solid 2px green";
};
oThree.onmouseout = function(){
    oThree.style.color="black";
    oThree.style.borderLeft="solid 2px white";

};


leftSettingArrow.onclick=function () {


    var val = oSettingList.style.display;
    if(val == 'none'){
        oSettingList.style.display = 'block';
    }else{
        oSettingList.style.display = 'none';
    }

};
leftLineArrow.onclick=function(){
    var val1 =oLeftLineList.style.display;
    if(val1 == 'none'){
        oLeftLineList.style.display = 'block';
    }else{
        oLeftLineList.style.display = 'none';
    }

};












