var budgetModule = (function(){
  var x = 23;
  var add = function(a){
    return x + a;
  }
  return{
    publicTest: function(b){
      return add(b);
    }
  }
})();
//Function la IIFE nen se imidiately execution va return ve object budgetModule voi' property laf publicTest

var UIModule = (function(){

})()

var controller = (function(budgetController,UIController){
  var z = budgetController.publicTest(5);
  return{
    anotherPublic : function(){
      console.log(z);
    }
  }
})(budgetModule,UIModule);