var solvePostfix = function(expression) {
        var resultStack = [];
        expression = expression.split(" ");
        for(var i = 0; i < expression.length; i++) {
            if(!isNaN(expression[i])) {
                resultStack.push(expression[i]);
            } else {
                var a = resultStack.pop();
                var b = resultStack.pop();
                if(expression[i] === "+") {
                    resultStack.push(parseInt(a) + parseInt(b));
                } else if(expression[i] === "-") {
                    resultStack.push(parseInt(b) - parseInt(a));
                } else if(expression[i] === "*") {
                    resultStack.push(parseInt(a) * parseInt(b));
                } else if(expression[i] === "/") {
                    resultStack.push(parseInt(b) / parseInt(a));
                } else if(expression[i] === "^") {
                    resultStack.push(Math.pow(parseInt(b), parseInt(a)));
                }
            }
        }
        if(resultStack.length > 1) {
            return "error";
        } else {
            return resultStack.pop();
        }
    }
