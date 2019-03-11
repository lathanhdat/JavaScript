var Question = function(ques,anser,coreAns)
{
    this.ques = ques;
    this.anser = anser;
    this.coreAns = coreAns;
}

Question.prototype.printQues = function()
{
    console.log(this.ques);
    for(var i = 0 ; i < this.anser.length; i ++)
    {
        console.log(i + ': ' + this.anser[i]);
    }
}

q1 = new Question('Am i know you ?', ['Yes','No'], 'Yes');
q2 = new Question('Is this boring ?', ['Yes','No','No Idea'], 'No Idea');

var quesArray = [q1,q2];
n = Math.floor(Math.random() * quesArray.length);

console.log(quesArray[n].printQues());
