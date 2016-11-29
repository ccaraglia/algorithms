// return an array where each position is the frequency of each face on n throws

var dice = function(throws){
    var arrayT = [0,0,0,0,0,0,0]

    for (var i = 0; i < throws; i++){


        arrayT[Math.ceil(Math.random()*6)]+=1

    }
return arrayT
}
log(dice(100))
