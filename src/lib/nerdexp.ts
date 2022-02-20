import { generateExpression } from "math-expression-generator";


export const isInputExpComputable = (exp: string) => {
    var tokenList1 = [];
    var tokenList2 = [];
    var token = "";
    var op = "";
    for (var i = 0; i < exp.length; ++i) {
        if ((exp[i]=='+')||(exp[i]=='-')||(exp[i]=='*')||(exp[i]=='/')||(exp[i]=='=')) {
            tokenList1.push(token);
            token = "";
            op = exp[i];
            if(op != "=")
            tokenList1.push(op);
        } else {
            token += exp[i];
        }
    }
    tokenList2.push(token);
    var comExp = eval(tokenList1.join(" "));

    if(comExp == tokenList2)
      return true
    else
      return false
}

export const isWinningExp = (exp: string) => {
  return esolution === exp
}

export const getProblem = () => {
  // January 1, 2022 Game Epoch
  const epochMs = new Date('January 1, 2022 00:00:00').valueOf()
  const now = Date.now()
  const msInDay = 1 //86400000
  const index = Math.floor((now - epochMs) / msInDay)
  const nextday = (index + 1) * msInDay + epochMs

    var restr  = ''
    while(restr.length != 8){
    const expression = generateExpression({
    target : Math.floor(Math.random() * (99 - 10 + 1) + 10),
    length: 2,
   });
   var expLen = (expression[0].toString()).length + 1 + (expression[2].toString()).length;
   const result = eval(expression.join(" "));

    restr = expression[0].toString() + expression[1] + expression[2].toString() + "=" + result.toString();

}
  return {
    esolution : restr,
    solutionIndex: index,
    tomorrow: nextday,
  }
}

export const { esolution, solutionIndex, tomorrow } = getProblem()
