const yourTemp = prompt('Please type the temperature you would like to convert');

const yourTempScale = prompt('Please tell us the scale you are currently using. Celsius or Fahrenheit?');

// console.log(yourTemp);
// console.log(yourTempScale);

let h3_OfMain = document.getElementById('tempHeading');

function tempConversionfunc (TempInt, TempScale) {

    const celToFahr = Math.round(TempInt * 5/9) + 32;
    const FahrToCel = Number(((TempInt - 32) * 5/9).toFixed(0));

    if (TempScale == "Celsius" || TempScale == "celsius" || TempScale == "c") {
        
        h3_OfMain.innerHTML = (`${celToFahr} &degF`);
        console.log(celToFahr);

        //Check if Temp Conversion outputting correctly
        // console.log(`${TempInt} Celsius is ${celToFahr} Fahrenheit`);

    } else if (TempScale == "Fahrenheit" || TempScale == "fahrenheit" || TempScale == "f") {

        h3_OfMain.innerHTML = (`${FahrToCel} &degC`);
        console.log(FahrToCel);

        //Check if Temp Conversion outputting correctly
        // console.log(`${TempInt} Fahrenheit is ${FahrToCel} Celsius`);
    } else {
        console.log('Nothing was entered!');
    }

    h3_OfMain.addEventListener('click', () => {

        if (TempScale == "Fahrenheit" || TempScale == "fahrenheit" || TempScale == "f") {
            h3_OfMain.innerHTML = (`${yourTemp} &degF`);
        }
        else {
            h3_OfMain.innerHTML = (`${yourTemp} &degC`);
        }
    })

}


tempConversionfunc(yourTemp, yourTempScale);