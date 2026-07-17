function calculateProtein() {
    const weight = parseFloat(document.getElementById('protein-weight').value);
    const goal = document.getElementById('protein-goal').value;
    
    if (weight > 0) {
        let minProtein = 0;
        let maxProtein = 0;
        
        if (goal === 'maintain') {
            minProtein = weight * 0.8;
            maxProtein = weight * 1.0;
        } else if (goal === 'build') {
            minProtein = weight * 1.6;
            maxProtein = weight * 2.2;
        } else if (goal === 'lose') {
            minProtein = weight * 1.2;
            maxProtein = weight * 1.6;
        }
        
        const resultBox = document.getElementById('protein-result');
        resultBox.innerHTML = `
            <h3 class="text-primary">Daily Protein Target:</h3>
            <p style="font-size: 1.5rem; font-weight: bold; margin: 10px 0;">${minProtein.toFixed(0)}g - ${maxProtein.toFixed(0)}g</p>
            <p style="font-size: 0.9rem; margin-top: 10px;" class="text-light">Spread your protein intake evenly throughout your meals for optimal absorption.</p>
        `;
        resultBox.classList.add('active');
    }
}
