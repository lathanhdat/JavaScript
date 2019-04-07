function game(){
  var score = Math.random() *10;
  console.log(score >= 5);
}
game();

//We want to hide the score to outside. Create a new scope hide it from global scope

(function(){
  var score = Math.random() *10;
  console.log(score >= 5);
})(); 
//Neu khong xai IIFE thi JS se hieu la function decleration without a name => throw an error
//=> make it believe it's a statement not decleration by adding (). and aditional () to make it
//excute

(function(godluck){
  var score = Math.random() *10;
  console.log(score >= 5 -godluck);
})(5); 