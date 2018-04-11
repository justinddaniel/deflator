import React, { Component } from 'react';

class GoalHelp extends Component {
	
	calculateGoals = event => {
	    event.preventDefault();
	    debugger;
	    var weight = +event.target.weight.value
	    var height = +event.target.height.value
	    var activity = +event.target.activitylevel.value
	    var BMI = (weight / (height * height)) * 703;
	    let suggestedBMI;
	    if (BMI > 25) {
	    	suggestedBMI = 25;
	    }
	    else if (BMI < 19) {
	    	suggestedBMI = 19;
	    }

	    else if (BMI <= 25 && BMI >= 19 ) {
	    	suggestedBMI = BMI;
	    }
	    var suggestedWeight = Math.round(suggestedBMI * height * height / 703);

	    let suggestedWeeklyTarget;

	    var weightLoss = weight - suggestedWeight

	    if (weightLoss > 20) {
	    	suggestedWeeklyTarget = "lose 0.5 pounds";
	    }
	    else if (weightLoss <= 20 && weightLoss > 0) {
	    	suggestedWeeklyTarget = "lose 1 pound";
	    }

	    else if (weightLoss < 0) {
	    	suggestedWeeklyTarget = "gain 0.5 pounds";
	    }
	    else {
	    	suggestedWeeklyTarget = "invalid entries. Make sure you entered numbers for all entries, and 0, 1, 2, or 3 for activity.";
	    }
	    if (typeof suggestedBMI === 'number' && activity >= 0 && activity <= 3) {
	    	let suggestedCalories;

	    }
	  }

  render() {

  	return (
  	<div className='goalhelp'>
		<h2>If you are concerned about your body weight we have the following recommendations: </h2>
		<ul>
			<li>You might be overweight if your body mass index is over 25 and one of the following are true:
				you are having trouble fitting in your old clothes, you frequently feel fatigued or have trouble
				doing physical activities, are prediabtic or have high blood pressure.</li>
			<li>This app can help you track your goals and lose weight. We recommend a diet and exercise program that 
				helps you lose weight at a rate not more than 1 pound a week and not more than 50 pounds in a year. If you 
				feel you need to lose more weight more rapidly please consult a medical doctor. </li>
			<li>We advocate gradual weight loss because studies show you are more likely to stay healthy, enjoy your diet, and 
				prevent regaining weight if you lose weight gradually.</li>
			<li>Fill out the form below for some suggestions about a weight goal, weekly weight loss target, and calorie allotment.</li>
		</ul><br></br>

		<form onSubmit={this.calculateGoals}>
			<label htmlFor="weight"> Your Weight (lbs): </label>
			<input
				type="number"
				name="weight"
				placeholder="weight"
			/><br></br>

			<label htmlFor="height"> Your Height (inches): </label>
			<input
				type="number"
				name="height"
				placeholder="height"
			/><br></br>

			<label htmlFor="activitylevel"> Your Activity Level (0-3): </label>
			<input
				type="number"
				name="activitylevel"
				placeholder="Activity Level; 3 is highest."
			/><br></br><br></br>

			<span id="calculatedweightgoal">Suggested Weight Goal*:</span><br></br><br></br>

			<span id="weeklytargetsuggest">Suggested Weekly Weight Loss**:</span><br></br><br></br>

			<span id="calorietargetsuggest">Suggested Calorie Allotment***:</span><br></br><br></br>

			<button>Click for recommendations</button>

			</form>

	</div>)
  }

}
          
export default GoalHelp;