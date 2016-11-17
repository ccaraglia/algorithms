//give a date as mm-dd-yyyy ad find the day
// (centuryOff + yearOff + monthOff + dayOff) %7
var centuryOff = function(str){


var year = str.split('-')[2]
var step1 = (Math.floor(year/100))
var step2 = step1 + (4 - step1 % 4)
var step3 = step2 - 1

var cenOff = (step3 - step1)*2
//log(cenOff)
var monthsOff = [0,3,3,6,1,4,6,2,5,0,3,5]
var days = ['sun', 'mon', 'tue', 'wed', 'thur', 'fri', 'sat']

var elDia = cenOff + Math.floor((year % 100+(year % 100)/4))%7 + monthsOff[str.split('-')[0]-1] + str.split('-')[1] % 7


var dia = days[elDia%7]
return dia
}

log(centuryOff('11-16-1900'))



log(1986%100)