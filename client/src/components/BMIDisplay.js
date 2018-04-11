import React, { Component } from 'react';

class BMIDisplay extends Component {
	
	calculateBodyMassIndex = event => {
	    event.preventDefault();
	    var weight = +event.target.weight.value
	    var height = +event.target.height.value
	    if (typeof weight === 'number' && typeof height === 'number') {
	    	var BMI = (weight / (height * height)) * 703;
	    	var BMIrounded = Math.round(BMI*10)/10;
	    	document.getElementById('calculatedBMI').innerHTML = `Calculated BMI: ${BMIrounded}`
	    }
	    else {
	    	document.getElementById('calculatedBMI').innerHTML = "Invalid entry. Enter only numbers for weight and height."
	    }
	  }

  render() {

  	return (
  	<div className='bmidisplay'>
		<h2>To calculate your BMI enter weight in pounds and height in inches, then press the calculate button.</h2>

		<form onSubmit={this.calculateBodyMassIndex}>
			<label htmlFor="weight"> Weight (lbs): </label>
			<input
				type="number"
				name="weight"
				placeholder="weight"
			/><br></br>

			<label htmlFor="height"> Height (inches): </label>
			<input
				type="number"
				name="height"
				placeholder="height"
			/><br></br>

			<span id="calculatedBMI">Calculated BMI:</span><br></br>

			<button>Calculate BMI</button>

			</form>

	</div>)
  }

}
          
export default BMIDisplay;