var Question = function (ques,ans,corans){
  this.ques = ques;
  this.ans = ans;
  this.corans = corans;
}

Question.prototype.printQuestion = function(){
  console.log(this.ques);
  this.ans.forEach((ans)=>{console.log(ans)})
}

var checkQuestion = function(ques,ans){
  if(ques.corans == ans) {
    var userScore  = keepScore(true);
    console.log(`Correct! Your score is ${userScore}.`);
  }
  else {
    var userScore  = keepScore(false);
    console.log(`Sorry, wrong! Your score is ${userScore} now.`);
  }
  console.log('-----------------------')
}

var score = function(){
  var sc = 0;
  return function(correction){
    if(correction) sc++;
    return sc;
  }
}

var keepScore = score();

var gameStart = function(){
  var userAns;
  var randques;
  while(1){
    randques = Math.round(Math.random()*(ques.length-1))
    ques[randques].printQuestion();
    userAns= prompt('What\'s your answer:');
    if(userAns === 'quit') {
      return console.log('Good bye!');
    }
    checkQuestion(ques[randques],userAns);
  }
}


var ques1 = new Question('1.How old is me',['1: 30.','2: 23.'],2)
var ques2 = new Question('2.How far is it',['1: 35.','2: 53.','3: Too Far.'],3)
var ques3 = new Question('3.What name is Tom',['1: Tom.','2: Not Tom.','3: Still Tom.'],3)
var ques = [ques1,ques2,ques3];
gameStart();
