//Here we create prototype property
var personProto = 
{
  calAge : function ()
  {
    console.log(2018-this.year);    
  }
}

var john = Object.create(personProto); //Create empty object - having prototype from personProto
john.name = 'John';
john.year = 1990;
john.job = 'teacher';

var jane = Object.create(personProto,
{
  name: {value : 'Jane'},
  year:{value : 1993},
  job:{value : 'designer'}
});

//Cach tao object nay se thuan tien hon khi prototype phuc tap. object tao ra ke thua truc tiep prototype