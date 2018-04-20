/**
 * Created by asus on 2018/4/18.
 */
define(["isarray"],function(isArray){
    function sort(arr){
        if(isArray(arr)){
            return arr.sort(function(a,b){
                return  a - b;
            });
        }else{
            return "传入的不是数组";
        }
    }
    return sort;
});