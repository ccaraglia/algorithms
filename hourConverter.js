var ora ='20:23 am'

var convertOre = function(str){

    var ore = str.split(':')[0]

    var minuti = str.split(':')[1].split(' ')[0]

    var amPM = str.split(':')[1].split(' ')[1]

 //   log('ore>>>>' + amPM)
    if (ore === '12' && amPM === 'am'){return 0 + ':' + minuti}
    if (ore === '12' && amPM === 'pm'){return ore + ':' + minuti}
    if (amPM === 'am') return  ore + ':' + minuti
    if (amPM === 'pm') return parseInt(ore)+12 + ':' + minuti

}

log(convertOre(ora))