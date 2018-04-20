/**
 * Created by asus on 2018/4/18.
 */
define(function(arr){
    function isArray(){
        if(arr.constructor == Array && arr instanceof Array){
            return true;

        }else{
            return false;
        }
    }
    return isArray;
});