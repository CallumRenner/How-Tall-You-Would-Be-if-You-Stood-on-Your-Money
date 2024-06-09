document.getElementById('calculateButton').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('amount').value);
    const billType = parseFloat(document.getElementById('billType').value);
    const heightFeet = parseFloat(document.getElementById('heightFeet').value);
    const heightInches = parseFloat(document.getElementById('heightInches').value);
    const billThickness = 0.0043; // inches

    if (isNaN(amount) || isNaN(billType) || isNaN(heightFeet) || isNaN(heightInches)) {
        document.getElementById('output').textContent = 'Please enter a valid amount of money and height.';
        return;
    }

    const numberOfBills = Math.abs(amount) / billType;
    const heightInInches = numberOfBills * billThickness;
    const totalHeightInches = (heightFeet * 12) + heightInches + (amount > 0 ? heightInInches : -heightInInches);

    const totalHeightFeet = Math.floor(totalHeightInches / 12);
    const remainingInches = totalHeightInches % 12;

    document.getElementById('output').textContent = `You would be ${totalHeightFeet} feet and ${remainingInches.toFixed(2)} inches tall if you stood on your money.`;

    // Update the money stack height
    const moneyStackHeight = heightInInches * 10; // Scale for visual effect
    document.getElementById('moneyStack').style.height = `${moneyStackHeight}px`;
    document.getElementById('personFigure').style.bottom = `${moneyStackHeight}px`;

    // Update the ruler height
    updateRuler(totalHeightInches);
});

function updateRuler(heightInInches) {
    const ruler = document.getElementById('ruler');
    ruler.innerHTML = '';

    const heightInPixels = heightInInches * 10; // Scale for visual effect
    ruler.style.height = `${heightInPixels}px`;

    for (let i = 0; i <= heightInInches; i++) {
        if (i % 2 === 0) {
            const mark = document.createElement('div');
            mark.classList.add('ruler-mark');
            if (i % 12 === 0) {
                mark.classList.add('foot-mark');
                mark.textContent = `${i / 12}'`;
            } else {
                mark.classList.add('inch-mark');
                mark.textContent = `${i % 12}"`;
            }
            mark.style.bottom = `${i * 10}px`; // Scale for visual effect
            ruler.appendChild(mark);
        }
    }
}
