var xmlhttp = new XMLHttpRequest(); //gets content of json file
xmlhttp.onreadystatechange = function() { //do this function when a certain criteria is met
  if (this.readyState == 4 && this.status == 200) { //"this" refers to the function we are calling; 4 is ready; 200 is ok
    var mydata = JSON.parse(this.responseText); //the json file that we get will be saved as mydata
    
    document.getElementById('nameOne').innerHTML = mydata.dish[0].name;
    document.getElementById('priceOne').innerHTML = mydata.dish[0].price;
    
    document.getElementById('nameTwo').innerHTML = mydata.dish[1].name;
    document.getElementById('priceTwo').innerHTML = mydata.dish[1].price;
  
    document.getElementById('nameThree').innerHTML = mydata.dish[2].name;
    document.getElementById('priceThree').innerHTML = mydata.dish[2].price;
  
    document.getElementById('nameFour').innerHTML = mydata.dish[3].name;
    document.getElementById('priceFour').innerHTML = mydata.dish[3].price;
  
    document.getElementById('nameFive').innerHTML = mydata.dish[4].name;
    document.getElementById('priceFive').innerHTML = mydata.dish[4].price;
  
    document.getElementById('nameSix').innerHTML = mydata.dish[5].name;
    document.getElementById('priceSix').innerHTML = mydata.dish[5].price;
  }
};
xmlhttp.open("GET","restaurant.json",true); //get and open the json file
xmlhttp.send(); //send the file to the server

//Local Storage------------------------------------------------------------------------------------------------------------------------------------------------------------------
localStorage.clear();
localStorage.setItem("runningTotal", 0);
localStorage.setItem("tax", 0);
localStorage.setItem("total", 0);

localStorage.setItem("boughtOne", false);
localStorage.setItem("boughtTwo", false);
localStorage.setItem("boughtThree", false);
localStorage.setItem("boughtFour", false);
localStorage.setItem("boughtFive", false);
localStorage.setItem("boughtSix", false);
//Global variables----------------------------------------------------------------------------------------------------------------------------------------------------------------
var qtyOfOne = 0;
var qtyOfTwo = 0;
var qtyOfThree = 0;
var qtyOfFour = 0;
var qtyOfFive = 0;
var qtyOfSix = 0;

var amountOne = 0;
var amountTwo = 0;
var amountThree = 0;
var amountFour = 0;
var amountFive = 0;
var amountSix = 0;

//Calculate and display costs-----------------------------------------------------------------------------------------------------------------------------------------------------
function dishOne() {
  var qty = document.getElementById('selOne').value; //takes user input
  var basePrice = document.getElementById('priceOne').innerHTML; //get price of item
  
  localStorage.setItem("boughtOne", true); //tells me user bought this dish
  
  //save user's qty to local storage
  var addMe = +qty + qtyOfOne;
  qtyOfOne = addMe;
  localStorage.setItem("storeQtyOfOne", qtyOfOne);

  //subtotal
  var orderThis = qty * basePrice; //cost of ordered item
      //save amount to localStorage
      var addMeHere = +orderThis + amountOne;
      amountOne = addMeHere;
      localStorage.setItem("amountOne", amountOne.toFixed(2));
  var getRunningTotal = Number(localStorage.getItem("runningTotal")); //get runningTotal from localStorage
  var newRunningTotal = (getRunningTotal + orderThis).toFixed(2); //calculate subtotal
  localStorage.setItem("runningTotal", newRunningTotal); //save subtotal into localStorage
  document.getElementById('showSubtotal').innerHTML = newRunningTotal; //display subtotal
  
  //tax
  var calcTax = (newRunningTotal * 0.04712).toFixed(2); //find pure tax
  localStorage.setItem("tax", calcTax); //save tax to localStorage
  document.getElementById('showTax').innerHTML = calcTax; //display tax
  
  //total
  var newTotal = (Number(newRunningTotal) + Number(calcTax)).toFixed(2); //calculate total
  localStorage.setItem("total", newTotal); //save total to localStorage
  document.getElementById('showTotal').innerHTML = newTotal; //display total
}

function dishTwo() {
  var qty = document.getElementById('selTwo').value; //takes user input
  var basePrice = document.getElementById('priceTwo').innerHTML; //get price of item
  
  localStorage.setItem("boughtTwo", true); //tells me user bought this dish
  
  //save user's qty to local storage
  var addMe = +qty + qtyOfTwo;
  qtyOfTwo = addMe;
  localStorage.setItem("storeQtyOfTwo", qtyOfTwo);

  //subtotal
  var orderThis = qty * basePrice; //cost of ordered item
      //save amount to localStorage
      var addMeHere = +orderThis + amountTwo;
      amountTwo = addMeHere;
      localStorage.setItem("amountTwo", amountTwo.toFixed(2));
  var getRunningTotal = Number(localStorage.getItem("runningTotal")); //get runningTotal from localStorage
  var newRunningTotal = (getRunningTotal + orderThis).toFixed(2); //calculate subtotal
  localStorage.setItem("runningTotal", newRunningTotal); //save subtotal into localStorage
  document.getElementById('showSubtotal').innerHTML = newRunningTotal; //display subtotal
  
  //tax
  var calcTax = (newRunningTotal * 0.04712).toFixed(2); //find pure tax
  localStorage.setItem("tax", calcTax); //save tax to localStorage
  document.getElementById('showTax').innerHTML = calcTax; //display tax
  
  //total
  var newTotal = (Number(newRunningTotal) + Number(calcTax)).toFixed(2); //calculate total
  localStorage.setItem("total", newTotal); //save total to localStorage
  document.getElementById('showTotal').innerHTML = newTotal; //display total
}

function dishThree() {
  var qty = document.getElementById('selThree').value; //takes user input
  var basePrice = document.getElementById('priceThree').innerHTML; //get price of item
  
  localStorage.setItem("boughtThree", true); //tells me user bought this dish
  
  //save user's qty to local storage
  var addMe = +qty + qtyOfThree;
  qtyOfThree = addMe;
  localStorage.setItem("storeQtyOfThree", qtyOfThree);

  //subtotal
  var orderThis = qty * basePrice; //cost of ordered item
      //save amount to localStorage
      var addMeHere = +orderThis + amountThree;
      amountThree = addMeHere;
      localStorage.setItem("amountThree", amountThree.toFixed(2));
  var getRunningTotal = Number(localStorage.getItem("runningTotal")); //get runningTotal from localStorage
  var newRunningTotal = (getRunningTotal + orderThis).toFixed(2); //calculate subtotal
  localStorage.setItem("runningTotal", newRunningTotal); //save subtotal into localStorage
  document.getElementById('showSubtotal').innerHTML = newRunningTotal; //display subtotal
  
  //tax
  var calcTax = (newRunningTotal * 0.04712).toFixed(2); //find pure tax
  localStorage.setItem("tax", calcTax); //save tax to localStorage
  document.getElementById('showTax').innerHTML = calcTax; //display tax
  
  //total
  var newTotal = (Number(newRunningTotal) + Number(calcTax)).toFixed(2); //calculate total
  localStorage.setItem("total", newTotal); //save total to localStorage
  document.getElementById('showTotal').innerHTML = newTotal; //display total
}

function dishFour() {
  var qty = document.getElementById('selFour').value; //takes user input
  var basePrice = document.getElementById('priceFour').innerHTML; //get price of item
  
  localStorage.setItem("boughtFour", true); //tells me user bought this dish
  
  //save user's qty to local storage
  var addMe = +qty + qtyOfFour;
  qtyOfFour = addMe;
  localStorage.setItem("storeQtyOfFour", qtyOfFour);

  //subtotal
  var orderThis = qty * basePrice; //cost of ordered item
      //save amount to localStorage
      var addMeHere = +orderThis + amountFour;
      amountFour = addMeHere;
      localStorage.setItem("amountFour", amountFour.toFixed(2));
  var getRunningTotal = Number(localStorage.getItem("runningTotal")); //get runningTotal from localStorage
  var newRunningTotal = (getRunningTotal + orderThis).toFixed(2); //calculate subtotal
  localStorage.setItem("runningTotal", newRunningTotal); //save subtotal into localStorage
  document.getElementById('showSubtotal').innerHTML = newRunningTotal; //display subtotal
  
  //tax
  var calcTax = (newRunningTotal * 0.04712).toFixed(2); //find pure tax
  localStorage.setItem("tax", calcTax); //save tax to localStorage
  document.getElementById('showTax').innerHTML = calcTax; //display tax
  
  //total
  var newTotal = (Number(newRunningTotal) + Number(calcTax)).toFixed(2); //calculate total
  localStorage.setItem("total", newTotal); //save total to localStorage
  document.getElementById('showTotal').innerHTML = newTotal; //display total
}

function dishFive() {
  var qty = document.getElementById('selFive').value; //takes user input
  var basePrice = document.getElementById('priceFive').innerHTML; //get price of item
  
  localStorage.setItem("boughtFive", true); //tells me user bought this dish
  
  //save user's qty to local storage
  var addMe = +qty + qtyOfFive;
  qtyOfFive = addMe;
  localStorage.setItem("storeQtyOfFive", qtyOfFive);

  //subtotal
  var orderThis = qty * basePrice; //cost of ordered item
      //save amount to localStorage
      var addMeHere = +orderThis + amountFive;
      amountFive = addMeHere;
      localStorage.setItem("amountFive", amountFive.toFixed(2));
  var getRunningTotal = Number(localStorage.getItem("runningTotal")); //get runningTotal from localStorage
  var newRunningTotal = (getRunningTotal + orderThis).toFixed(2); //calculate subtotal
  localStorage.setItem("runningTotal", newRunningTotal); //save subtotal into localStorage
  document.getElementById('showSubtotal').innerHTML = newRunningTotal; //display subtotal
  
  //tax
  var calcTax = (newRunningTotal * 0.04712).toFixed(2); //find pure tax
  localStorage.setItem("tax", calcTax); //save tax to localStorage
  document.getElementById('showTax').innerHTML = calcTax; //display tax
  
  //total
  var newTotal = (Number(newRunningTotal) + Number(calcTax)).toFixed(2); //calculate total
  localStorage.setItem("total", newTotal); //save total to localStorage
  document.getElementById('showTotal').innerHTML = newTotal; //display total
}

function dishSix() {
  var qty = document.getElementById('selSix').value; //takes user input
  var basePrice = document.getElementById('priceSix').innerHTML; //get price of item
  
  localStorage.setItem("boughtSix", true); //tells me user bought this dish
  
  //save user's qty to local storage
  var addMe = +qty + qtyOfSix;
  qtyOfSix = addMe;
  localStorage.setItem("storeQtyOfSix", qtyOfSix);

  //subtotal
  var orderThis = qty * basePrice; //cost of ordered item
      //save amount to localStorage
      var addMeHere = +orderThis + amountSix;
      amountSix = addMeHere;
      localStorage.setItem("amountSix", amountSix.toFixed(2));
  var getRunningTotal = Number(localStorage.getItem("runningTotal")); //get runningTotal from localStorage
  var newRunningTotal = (getRunningTotal + orderThis).toFixed(2); //calculate subtotal
  localStorage.setItem("runningTotal", newRunningTotal); //save subtotal into localStorage
  document.getElementById('showSubtotal').innerHTML = newRunningTotal; //display subtotal
  
  //tax
  var calcTax = (newRunningTotal * 0.04712).toFixed(2); //find pure tax
  localStorage.setItem("tax", calcTax); //save tax to localStorage
  document.getElementById('showTax').innerHTML = calcTax; //display tax
  
  //total
  var newTotal = (Number(newRunningTotal) + Number(calcTax)).toFixed(2); //calculate total
  localStorage.setItem("total", newTotal); //save total to localStorage
  document.getElementById('showTotal').innerHTML = newTotal; //display total
}

//Proceed to checkout-----------------------------------------------------------------------------------------------------------------------------------------------------------
function checkout() {
  location.href="restaurantPg2.html";
}

//Check if JSON file has been updated------------------------------------------------------------------------------------------------------------------------------------------
var previous = null;
var current = null;
setInterval(function () {
  $.getJSON("restaurant.json", function (json) {
    current = JSON.stringify(json);
    if (previous && current && previous !== current) {
      location.reload();
    }
    previous = current;
  });
},2000);