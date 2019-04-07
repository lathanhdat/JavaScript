function interviewQuestion(job)
{
    if (job === 'designer')
    {
        return function(name)
        {
            console.log(name + ', pls explain what UX design is?');
        }
    }
    else if (job === 'teacher')
    {
        return function(name)
        {
            console.log(name + ', what subject do you teach?');
        }
    }
    else
    {
        return function(name)
        {
            console.log('Hello ' + name + ' what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
//teacherQuestion is now be function(name) {console.log(name + ', what subject do you teach?');}
teacherQuestion('John');

var designerQuestion = interviewQuestion('designer');
designerQuestion('Jane');

interviewQuestion('teacher')('Mars');