function calculateBMI() {
    const weight = parseFloat(document.getElementById('bmi-weight').value);
    const height = parseFloat(document.getElementById('bmi-height').value) / 100; // convert cm to m
    
    if (weight > 0 && height > 0) {
        const bmi = (weight / (height * height)).toFixed(1);
        let category = '';
        let color = '';
        
        if (bmi < 18.5) {
            category = 'Underweight';
            color = '#ff9800';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal weight';
            color = 'var(--primary-green)';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Overweight';
            color = '#ff9800';
        } else {
            category = 'Obese';
            color = '#f44336';
        }
        
        const resultBox = document.getElementById('bmi-result');
        resultBox.innerHTML = `
            <h3 style="color: ${color};">Your BMI: ${bmi}</h3>
            <p>Category: <strong>${category}</strong></p>
            <p style="font-size: 0.9rem; margin-top: 10px;" class="text-light">Disclaimer: BMI is a useful screening tool but does not diagnose body fatness or health. Contact us for a detailed assessment.</p>
        `;
        resultBox.classList.add('active');
    }
}
