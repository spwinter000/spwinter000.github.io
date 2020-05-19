
//validating numbers in form
function validate(){

    let carbs = parseInt(document.getElementById("carbs").value);
    let bloodsugar = parseInt(document.getElementById("bloodsugar").value);
    
    //make sure numbers are being entered.
    if(isNaN(carbs || bloodsugar)){
        document.getElementById('solution').innerHTML = "Please enter values above.";
    }

    //validation for > 300 BG...to see bolus enter zero carbs...may need tooltip for that instruction.
    
    if(bloodsugar > 300 && carbs > 0){
        document.getElementById('solution').innerHTML = "Blood sugar over 300. Consider bolusing and waiting 15 minutes before eating.";
    }
    
    if (bloodsugar > 400 && carbs > 0) {
        document.getElementById('solution').innerHTML = "Blood sugar over 300. Consider bolusing and waiting 15 minutes before eating.";
    }
    
    if(bloodsugar < 30){
        document.getElementById('solution').innerHTML = "Blood sugar under 30. Eat and monitor blood sugar closely.";
    }

    //validation for too many carbs
    if (carbs > 130){
        document.getElementById('solution').innerHTML = "That's probably too many carbs...consider eating less.";
    }

    //for high BG and carbs
    if (carbs > 130 && bloodsugar > 300){
        document.getElementById('solution').innerHTML = "Blood sugar over 300. Bolus for blood sugar only. Also don't eat so much.";
    }


}

// document.getElementById("calculate").onclick = function() {
//     validate();
  
//   };


//getting bolus
function getBolus() {

    //set values and convert to ints since they come in as strings..
    let low_threshold = parseInt(document.getElementById("low_threshold").value); 
    let high_threshold = parseInt(document.getElementById("high_threshold").value); 
    let carbs_per_unit = parseInt(document.getElementById("carbs_per_unit").value); 

    let carbs = parseInt(document.getElementById("carbs").value);
    let bloodsugar = parseInt(document.getElementById("bloodsugar").value);



    //set units
    carbs = (carbs / carbs_per_unit);

    //set adjusts
    let low_adjust = (((low_threshold - bloodsugar)/4))*(0.1);
    let high_adjust = ((bloodsugar - high_threshold)/4)*(0.1);
    
    let bolus = 0;


    //deploy correction if possible
    if (bloodsugar < low_threshold)

        bolus = carbs - low_adjust //+ 0.5;

    else if (bloodsugar > high_threshold) 
            
        bolus = carbs + high_adjust;
    
    else 

        bolus = carbs;

    document.getElementById('solution').innerHTML = "Bolus: " + bolus.toFixed(1) + " Units";

}

//calculate
 document.getElementById("calculate").onclick = function() {
    getBolus();
  
  }; 
