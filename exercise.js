

function generatePlan() {
    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const goal = document.getElementById('goal').value;
    const quantity = document.getElementById('quantity').value;
    const days = document.getElementById('days').value;

    if (!age || !weight || !height || !goal || !quantity || !days) {
        alert('Please fill out all fields.');
        return;
    }

    let planMessage = `<h2>Your 1-Week Exercise Plan</h2>`;
    const exercisePlan = [];

    if (goal === 'gain') {
        exercisePlan.push('Day 1: Strength Training - Upper Body');
        exercisePlan.push('Day 2: Rest Day');
        exercisePlan.push('Day 3: Strength Training - Lower Body');
        exercisePlan.push('Day 4: Cardio - Light Jogging');
        exercisePlan.push('Day 5: Strength Training - Full Body');
        exercisePlan.push('Day 6: Active Recovery - Yoga or Stretching');
        exercisePlan.push('Day 7: Rest Day');
    } else if (goal === 'loss') {
        exercisePlan.push('Day 1: Cardio - Running');
        exercisePlan.push('Day 2: HIIT Workout');
        exercisePlan.push('Day 3: Strength Training - Full Body');
        exercisePlan.push('Day 4: Cardio - Cycling');
        exercisePlan.push('Day 5: Rest Day');
        exercisePlan.push('Day 6: Cardio - Swimming');
        exercisePlan.push('Day 7: Yoga or Light Stretching');
    } else {
        exercisePlan.push('Day 1: Moderate Cardio - Walking');
        exercisePlan.push('Day 2: Light Strength Training');
        exercisePlan.push('Day 3: Rest Day');
        exercisePlan.push('Day 4: Cardio - Jogging');
        exercisePlan.push('Day 5: Light Strength Training');
        exercisePlan.push('Day 6: Yoga or Stretching');
        exercisePlan.push('Day 7: Rest Day');
    }

    planMessage += `<p>Based on your goal to <strong>${goal}</strong> weight by <strong>${quantity} kg</strong> in <strong>${days} days</strong>, here's a suggested exercise plan:</p>`;
    planMessage += '<ul>';
    exercisePlan.forEach((activity, index) => {
        planMessage += `<li>${activity}</li>`;
    });
    planMessage += '</ul>';

    document.getElementById('planOutput').innerHTML = planMessage;
    document.getElementById('planOutput').style.display = 'block';
}

