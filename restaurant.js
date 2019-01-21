var xmlhttp = new XMLHttpRequest(); //gets content of json file
xmlhttp.onreadystatechange = function() { //do this function when a certain criteria is met
  if (this.readyState == 4 && this.status == 200) { //"this" refers to the function we are calling; 4 is ready; 200 is ok
    var mydata = JSON.parse(this.responseText); //the json file that we get will be saved as mydata
    
    document.getElementById('nameOne').innerHTML = mydata.food[0].name;
    document.getElementById('descripOne').innerHTML = mydata.food[0].desc;
    document.getElementById('priceOne').innerHTML = "$" + mydata.food[0].price;
    
    document.getElementById('nameTwo').innerHTML = mydata.food[1].name;
    document.getElementById('descripTwo').innerHTML = mydata.food[1].desc;
    document.getElementById('priceTwo').innerHTML = "$" + mydata.food[1].price;
  }
};
xmlhttp.open("GET","restaurant.json",true); //get and open the json file
xmlhttp.send(); //send the file to the server

//Display running total of cost-----------------------------------------------------------------------------------------------------------------------------------------------------
var runningTotal = 0;

function orderOne() {
  var amount = document.getElementById('inputOne').value;
  var basePrice = document.getElementById('priceOne').innerHTML;
  if (amount >= 0) {
    var orderThis = amount * basePrice;
    document.getElementById('subtotal').innerHTML = orderThis;
  }
  else {
    window.alert("Error. The entered value must be positive whole number.");
  }
}