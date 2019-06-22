
var budgetModule = (function(input){
  var Expense = function (id,des,val){
    this.id = id,
    this.description = des,
    this.value = val
  };
  var Income = function (id,des,val){
    this.id = id,
    this.description = des,
    this.value = val
  };

  var data = {
    allItems:{
      exp:[],
      inc:[]
    },
    totals: {
      exp : 0,
      inc : 0
    },
    budget: 0,
    percentage : -1
  };

  return  {
    addItem : function(type,des,val){
      var newItem,ID;
      if(data.allItems[type].lengh > 0){
        ID = data.allItems[type][data.allItems[type].lengh-1].id +1;
      }
      else{
        ID = 0;
      }
      
      if(type === 'inc'){
        newItem = new Income(ID,des,val);
        data.totals.inc += val;
      }
      else{
        newItem = new Expense(ID,des,val);
        data.totals.exp += val;
      }
      data.allItems[type].push(newItem);
      return newItem;
    },
    calculateBudget : function(){
      data.budget = (data.totals.inc - data.totals.exp);
      if(data.totals.inc > 0){
        data.percentage = Math.round((data.totals.exp/data.totals.inc)*100);
      }
      else{
        data.percentage = -1;
      }
    },
    data : data
  }


})();


var UIModule = (function(){
  var DOMstrings = {
    inputType : '.add__type',
    inputValue : '.add__value',
    inputDescription : '.add__description',
    inputButton : '.add__btn',
    incomeContainer : '.income__list',
    expenseContainer : '.expenses__list',
    budgetLabel : '.budget__value',
    budgetIncom : '.budget__income--value',
    budgetExpenses: '.budget__expenses--value',
    budgetIncomPercent:'.budget__income--percentage',
    budgetExpensesPercent:'.budget__expenses--percentage',
    container:'.container__clearfix'
  }
  return {
    getInput : function(){
      return {
        type : document.querySelector(DOMstrings.inputType).value,
        value : parseFloat(document.querySelector(DOMstrings.inputValue).value),
        description : document.querySelector(DOMstrings.inputDescription).value,
      }
    },
    addListItem: function(obj,type){
      var html,newhtml,element;
      //Create HTML string
      if(type === 'inc'){
        element = DOMstrings.incomeContainer;
        html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div>\
        <div class="right clearfix"><div class="item__value">%value%</div>\
        <div class="item__delete"><button class="item__delete--btn">\
        <i class="ion-ios-close-outline"></i></button></div></div></div>'
      }
      else if(type ==='exp'){
        element = DOMstrings.expenseContainer;
        html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div>\
        <div class="right clearfix"><div class="item__value">%value%</div>\
        <div class="item__percentage">21%</div><div class="item__delete">\
        <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
      }

      //Replace HTML string
      newhtml = html.replace('%id%',obj.id);
      newhtml = newhtml.replace('%description%',obj.description);
      newhtml = newhtml.replace('%value%',obj.value);

      //Add html
      document.querySelector(element).insertAdjacentHTML('beforeend',newhtml);
    },
    clearField : function(){
      var fields = document.querySelectorAll(DOMstrings.inputDescription + ',' + DOMstrings.inputValue);
      fields.forEach(function(field){
        field.value = '';
      })
    },
    displayBudget: function(obj){
      document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
      document.querySelector(DOMstrings.budgetIncom).textContent = obj.totals.inc;
      document.querySelector(DOMstrings.budgetExpenses).textContent = obj.totals.exp;
      if(obj.percentage >0){
        document.querySelector(DOMstrings.budgetExpensesPercent).textContent = obj.percentage + '%';
      }
      else{
        document.querySelector(DOMstrings.budgetExpensesPercent).textContent = '---';
      }

    },
    getDOMstrings : function(){
      return DOMstrings;
    }
  }
})()

var controller = (function(budgetController,UIController){
  /*Get Element*/
  var DOM = UIController.getDOMstrings();

  /*Add event listener*/
  var setupEventListener = function(){
    /*For input button*/
    document.querySelector(DOM.inputButton).addEventListener('click',addItem);

    /*For enter key*/
    document.addEventListener('keypress',(e)=>{
      if(e.keyCode === 13 || e.which === 13){  //Older browser use which instead of keyCode
        addItem();
      } 
    });

    /*For delete button*/
    document.querySelector(DOM.container).addEventListener('click',ctrlDeleteItem)
  };

  /*Function to update UI*/
  var updateBudget = function(){
    budgetController.calculateBudget();
    UIController.displayBudget(budgetController.data);
  }

  /*Function to add new item*/
  var addItem = function(){
    var input , newItem;
    //Get input data
    input = UIModule.getInput();
    if(input.description !== '' && !isNaN(input.value) && input.value > 0){
      //Add item to budget controller
      newItem = budgetController.addItem(input.type,input.description,input.value);

      //Add item to UI
      UIController.addListItem(newItem,input.type);
      UIController.clearField();
      updateBudget();
    }
  }

  /*Function to delete item*/
  var ctrlDeleteItem = function(event){
    var itemID = event.target.parentNode.parentNode.parentNode.id
    if(itemID){
      var splitID = itemID.split('-');
      var type = splitID[0];
      var ID = splitID[1];
    }
  }

  return {
    init : function(){
      setupEventListener();
      UIController.displayBudget(budgetController.data);
    }
  }
  
})(budgetModule,UIModule);

controller.init();