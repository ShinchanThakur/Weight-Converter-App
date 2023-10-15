const lbsInput = document.getElementById('lbsInput');
lbsInput.addEventListener('input', convertWeight);

function convertWeight(e) {
    const lbs = e.target.value;
    const gramsOutput = document.getElementById('gramsOutput');
    const kgOutput = document.getElementById('kgOutput');
    const ozOutput = document.getElementById('ozOutput');

    gramsOutput.innerHTML = lbs / 0.0022046;
    kgOutput.innerHTML = lbs / 2.2046;
    ozOutput.innerHTML = lbs * 16;
}