function calculateWater() {
    const weight = parseFloat(document.getElementById('water-weight').value);
    const activity = document.getElementById('water-activity').value;
    
    if (weight > 0) {
        // Base: ~33ml per kg of body weight
        let waterLiters = weight * 0.033;
        
        // Add for activity
        if (activity === 'medium') {
            waterLiters += 0.5; // add 500ml
        } else if (activity === 'high') {
            waterLiters += 1.0; // add 1L
        }
        
        const resultBox = document.getElementById('water-result');
        resultBox.innerHTML = `
            <h3 class="text-primary">Estimated Daily Water Intake:</h3>
            <p style="font-size: 1.5rem; font-weight: bold; margin: 10px 0;">${waterLiters.toFixed(1)} Liters</p>
            <p>Approximately ${(waterLiters * 4).toFixed(0)} glasses (250ml each)</p>
            <p style="font-size: 0.9rem; margin-top: 10px;" class="text-light">Remember to drink more if you are sweating heavily or in hot weather.</p>
        `;
        resultBox.classList.add('active');
    }
}
