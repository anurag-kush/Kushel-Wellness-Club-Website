function calculateCalorie() {
    const age = parseInt(document.getElementById('cal-age').value);
    const genderInput = document.querySelector('input[name="cal-gender"]:checked');
    const weight = parseFloat(document.getElementById('cal-weight').value);
    const height = parseFloat(document.getElementById('cal-height').value);
    const activity = parseFloat(document.getElementById('cal-activity').value);
    
    if (age > 0 && genderInput && weight > 0 && height > 0) {
        const gender = genderInput.value;
        let bmr = 0;
        
        // Mifflin-St Jeor Equation
        if (gender === 'male') {
            bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
        } else {
            bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
        }
        
        const tdee = bmr * activity;
        
        const resultBox = document.getElementById('calorie-result');
        resultBox.innerHTML = `
            <h3 class="text-primary">Estimated Daily Calories:</h3>
            <p style="font-size: 1.5rem; font-weight: bold; margin: 10px 0;">${tdee.toFixed(0)} kcal / day</p>
            <p class="mb-2">This is your Total Daily Energy Expenditure (TDEE) to maintain your current weight.</p>
            <ul style="font-size: 0.9rem;" class="text-light">
                <li>To lose weight: Aim for ~${(tdee - 500).toFixed(0)} kcal</li>
                <li>To gain weight: Aim for ~${(tdee + 500).toFixed(0)} kcal</li>
            </ul>
        `;
        resultBox.classList.add('active');
    }
}
