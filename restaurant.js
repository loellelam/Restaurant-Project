var xmlhttp = new XMLHttpRequest(); //gets content of json file
xmlhttp.onreadystatechange = function() { //do this function when a certain criteria is met
  if (this.readyState == 4 && this.status == 200) { //"this" refers to the function we are calling; 4 is ready; 200 is ok
    var mydata = JSON.parse(this.responseText); //the json file that we get will be saved as mydata
    
    document.getElementById('nameOne').innerHTML = mydata.dish[0].name;
    //document.getElementById('descripOne').innerHTML = mydata.dish[0].desc;
    document.getElementById('priceOne').innerHTML = mydata.dish[0].price;
    
    document.getElementById('nameTwo').innerHTML = mydata.dish[1].name;
    //document.getElementById('descripTwo').innerHTML = mydata.dish[1].desc;
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
var qtyOfZero = 0;
var qtyOfOne = 0;
var qtyOfTwo = 0;
var qtyOfThree = 0;
var qtyOfFour = 0;
var qtyOfFive = 0;

var amountOne = 0;
var amountTwo = 0;
var amountThree = 0;
var amountFour = 0;
var amountFive = 0;
var amountSix = 0;
//Calculate and display costs-----------------------------------------------------------------------------------------------------------------------------------------------------
function dishOne() {
  var qty = document.getElementById('inputOne').value; //takes user input
  document.getElementById('inputOne').value = ""; //clear input box
  var basePrice = document.getElementById('priceOne').innerHTML; //get price of item
  
  //PREVENT USER FROM ENTERING DECIMAL BY LISTENING FOR IT (decimal key is 46; use keypress) (or use if (thing == "-") || (thing == "."))
  //also listen for minus 
  if (qty > 0) { //verify user's input
    localStorage.setItem("boughtOne", true); //tells me user bought this dish
    
    //save user's qty to local storage
    var addMe = +qty + qtyOfZero;
    qtyOfZero = addMe;
    localStorage.setItem("storeQtyOfOne", qtyOfZero);

    //subtotal
    var orderThis = qty * basePrice; //cost of ordered item
        //save amount to localStorage
        var addMeHere = +orderThis + amountOne;
        amountOne = addMeHere;
        localStorage.setItem("amountOne", amountOne);
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
  else {
    window.alert("Error. Value must be a positive whole number.");
  }
}

function dishTwo() {
  localStorage.setItem("boughtTwo", true); //tells me user bought this dish

  var qty = document.getElementById('inputTwo').value; //takes user input
  document.getElementById('inputTwo').value = ""; //clear input box
  var basePrice = document.getElementById('priceTwo').innerHTML; //get price of item

  //save user's qty to local storage
  var addMe = +qty + +qtyOfOne;
  localStorage.setItem("storeQtyOf1", addMe);
  //save total price of item to localStorage
  
  if (qty >= 0) { //verify user's input
    //subtotal
    var orderThis = qty * basePrice; //cost of ordered item
    //var orderThis = qty * 1; //cost of ordered item
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
  else {
    window.alert("Error. Value must be a positive whole number.");
  }
}

//Proceed to checkout-----------------------------------------------------------------------------------------------------------------------------------------------------------
function checkout() {
  location.href="restaurantPg2.html";
}