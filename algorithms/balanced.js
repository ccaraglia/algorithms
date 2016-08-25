var parentheses='((())){}()()(())))'


var isBalanced = function(string){
var open = '([{'
var closed = ')]}'
var stack = []
if (string.length % 2 !== 0){return false}
for (var i = 0; i < string.length; i++){
    if (string[i] === open[0] || string[i] === open[1]  || string[i] === open[2]){
 stack.push(string[i])
    }

   log(stack)

    if (string[i] === closed[0] || string[i] === closed[1]  || string[i] === closed[2]){


       if (open[closed.indexOf(string[i])] === stack[stack.length-1] ) {
        log(open[closed.indexOf(string[i])])
        log(stack[stack.length-1])
        stack.pop(string[i])
    }else{
        return false
}
    }
}


    return(stack.length === 0)
}

log(isBalanced(parentheses))