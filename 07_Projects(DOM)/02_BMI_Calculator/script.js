const form = document.querySelector("form");

// this usecase will give you empty value
// const height = parseInt(document.querySelector("#height").value);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value); // parseInt => to convert string value to int
  const weight = parseInt(document.querySelector("#weight").value); // parseInt => to convert string value to int
  const result = document.querySelector("#results");
  const resultGuide = document.querySelector("#resultguide");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // show the result
    result.innerHTML = `<span>${bmi}</span>`;

    if (bmi < 18.6) {
      resultGuide.innerHTML = `<span>Under Weight</span>`;
    } else if (bmi >= 18.8 && bmi > 24.9) {
      resultGuide.innerHTML = `<span>Normal range</span>`;
    } else if (bmi >= 24.9) {
      resultGuide.innerHTML = `<span>Overweight</span>`;
    } else {
      resultGuide = "";
    }
  }

  //
});
