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

    if (amount > 0) {
        document.getElementById('output').textContent = `You would be ${totalHeightFeet} feet and ${remainingInches.toFixed(2)} inches tall if you stood on your money.`;
    } else {
        document.getElementById('output').textContent = `You would be ${totalHeightFeet} feet and ${remainingInches.toFixed(2)} inches tall if you stood on your money.`;
    }
});
