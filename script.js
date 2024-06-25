let flightTimes = [null, null, null]; // Stores the last 3 flight times

function addFlightTime() {
    const inputTime = parseFloat(document.getElementById('inputTime').value);
    if (!isNaN(inputTime) && inputTime > 0) {
        // Shift the flight times
        flightTimes[2] = flightTimes[1];
        flightTimes[1] = flightTimes[0];
        flightTimes[0] = inputTime;
        updateFlightTimesDisplay();
        document.getElementById('inputTime').value = '';
    } else {
        alert('Please enter a valid flight time.');
    }
}

function updateFlightTimesDisplay() {
    document.getElementById('lastFlight').textContent = flightTimes[0] !== null ? flightTimes[0].toFixed(2) + 'x' : 'N/A';
    document.getElementById('secondFlight').textContent = flightTimes[1] !== null ? flightTimes[1].toFixed(2) + 'x' : 'N/A';
    document.getElementById('thirdFlight').textContent = flightTimes[2] !== null ? flightTimes[2].toFixed(2) + 'x' : 'N/A';
}

function calculateNextFlightTime() {
    if (flightTimes.some(time => time === null)) {
        alert('Please enter at least 3 flight times.');
        return;
    }

    const weights = [3, 2, 1]; // Giving more recent times higher weights
    const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
    const weightedSum = flightTimes.reduce((sum, time, index) => sum + (time * weights[index]), 0);
    const predictedTime = weightedSum / totalWeight;

    document.getElementById('predictedTime').textContent = predictedTime.toFixed(2) + 'x';
}