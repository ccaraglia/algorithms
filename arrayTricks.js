var array1 = [2,3,3,5]
var array2 = [4,1,1,2,2,3,3,3,1,4,5,10]


//find max in an array

var findMax = function(arr){
    var max = 0
    var maxLoc = 0
    for (var i = 0; i < arr.length; i++){
    if (arr[i] > arr[i+1]){
        maxLoc = arr[i]
        }else{
        maxLoc = arr[i+1]
        }
    if (maxLoc > max){ max = maxLoc }
    }
    return max
}
log(findMax(array2))


//find the only different number in an array, using XOR method

var arrayAgain = [3, 2,8,15, 5, 2, 1, 5, 3, 1, 8]

var findAlone2 = function(arr){
var num = 0
for(var i = 0; i< arr.length; i++){
    num = num ^ arr[i]
  //  log(num)
}
    return num

}
