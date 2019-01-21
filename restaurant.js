var xmlhttp = new XMLHttpRequest(); //display json
xmlhttp.onreadystatechange = function() { //do this function when a certain criteria is met
  if (this.readyState == 4 && this.status == 200) { //"this" refers to the function we are calling; 4 is ready; 200 is ok
    var mydata = JSON.parse(this.responseText); //the json file that we get will be saved as mydata
    window.alert(mydata.food[3].price); //this line is how you call things
  }
};
xmlhttp.open("GET","restaurant.json",true); //get and open the json file
xmlhttp.send(); //send the file to the server