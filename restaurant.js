var xmlhttp = new XMLHttpRequest(); //gets content of json file
xmlhttp.onreadystatechange = function() { //do this function when a certain criteria is met
  if (this.readyState == 4 && this.status == 200) { //"this" refers to the function we are calling; 4 is ready; 200 is ok
    var mydata = JSON.parse(this.responseText); //the json file that we get will be saved as mydata
    
    document.getElementById('nameOne').innerHTML = mydata.food[0].name;
    document.getElementById('descripOne').innerHTML = mydata.food[0].desc;
    document.getElementById('priceOne').innerHTML = mydata.food[0].price;
    
    document.getElementById('nameTwo').innerHTML = mydata.food[1].name;
    document.getElementById('descripTwo').innerHTML = mydata.food[1].desc;
    document.getElementById('priceTwo').innerHTML = mydata.food[1].price;
  }
};
xmlhttp.open("GET","restaurant.json",true); //get and open the json file
xmlhttp.send(); //send the file to the server

//Local Storage------------------------------------------------------------------------------------------------------------------------------------------------------------------
localStorage.clear();
localStorage.setItem("runningTotal", 0);
localStorage.setItem("tax", 0);
localStorage.setItem("total", 0);

//Calculate and display costs-----------------------------------------------------------------------------------------------------------------------------------------------------
function dishOne() {
  var qty = document.getElementById('inputOne').value; //takes user input
  document.getElementById('inputOne').value = ""; //clear input box
  var basePrice = document.getElementById('priceOne').innerHTML; //get price of item
  
  if (qty >= 0) { //verify user's input
    //subtotal
    var orderThis = qty * basePrice; //cost of ordered item
    //var orderThis = qty * 2; //cost of ordered item
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
  var qty = document.getElementById('inputTwo').value; //takes user input
  document.getElementById('inputTwo').value = ""; //clear input box
  var basePrice = document.getElementById('priceTwo').innerHTML; //get price of item
  
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