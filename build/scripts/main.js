const weightInput = document.querySelector('.weight-input');
const planetNameOptn = document.querySelector('.planet-name-optn');
const calcBtn = document.querySelector('.calc-btn');
const planetName = document.querySelector('.planet-name');
const planetImg = document.querySelector('.planet-image');
const weightOnPlanet = document.querySelector('.weight-on-planet');

const planets = {
    none: 0,
    mercury: 3.7,
    venus: 8.87,
    earth: 9.8,
    mars: 3.71,
    jupiter: 24.79,
    saturn: 10.44,
    uranus: 8.69,
    neptune: 11.15,
    pluto: 0.62 
};

const calculate = () => {
    let calculationResult;
    let weightInputVal = weightInput.value;
    let planetNameOptnVal = planetNameOptn.value;
    if (weightInputVal > 0 && planetNameOptnVal) {
        planetName.textContent = `This is planet ${planetNameOptn.value.toUpperCase()}`;
        weightInputVal = Number(weightInputVal);
        calculationResult = weightInputVal * planets[planetNameOptnVal];
        weightOnPlanet.textContent = `The weight on this planet is ${calculationResult.toFixed(2)}kg`
    } else {
        console.warn('Input values before calculating result...')
    }
}

calcBtn.addEventListener('click', calculate)