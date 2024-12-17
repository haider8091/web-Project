function calculateCalories() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const activity = parseFloat(document.getElementById('activity').value);

    if (isNaN(weight) || isNaN(height) || isNaN(age) || !gender || isNaN(activity)) {
        document.getElementById('result').textContent = 'Please fill in all fields correctly.';
        return;
    }

    let bmr;
    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const dailyCalories = bmr * activity;
    document.getElementById('result').textContent = `Your daily caloric need is approximately ${dailyCalories.toFixed(2)} calories.`;
}
