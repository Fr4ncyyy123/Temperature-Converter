Celsius = document.querySelector("#Celsius");
Farenheit = document.querySelector("#Farenheit");
Kelvin = document.querySelector("#Kelvin");
NoValues = document.querySelector(".NoValuesP");
clean = document.querySelector(".cleanP");
inputs = document.querySelectorAll("input");
inputs.forEach(input => {
    input.addEventListener("input", (e) => {
        if (!(Celsius.value != "" && Farenheit.value == "" && Kelvin.value == ""))
        {
            if (!(Celsius.value == "" && Farenheit.value != "" && Kelvin.value == ""))
            {
                if (!(Celsius.value == "" && Farenheit.value == "" && Kelvin.value != ""))
                {
                    input.disabled = true;
                }
            }
        }
    })
});
function Converti()
{
    inputs.forEach(input => {
        input.disabled = true;
    });
    if (Celsius.value != "")
        {
            Farenheit.value = (parseFloat(Celsius.value) * 1.8 + 32).toFixed(2);
            Kelvin.value = (parseFloat(Celsius.value) + 273.15).toFixed(2);
            NoValues.style.display = "none";
            clean.style.display = "none";
        }
    else if (Farenheit.value != "")
        {
            Celsius.value = ((parseFloat(Farenheit.value) - 32) / 1.8).toFixed(2);
            Kelvin.value = (parseFloat(Celsius.value) + 273.15).toFixed(2);
            NoValues.style.display = "none";
            clean.style.display = "none";
        }
    else if (Kelvin.value != "")
        {
            Celsius.value = (parseFloat(Kelvin.value) - 273.15).toFixed(2);
            Farenheit.value = ((parseFloat(Celsius.value) * 1.8) + 32).toFixed(2);
            NoValues.style.display = "none";
            clean.style.display = "none";
        }
    else if (Celsius.value == "" && Farenheit.value == "" && Kelvin.value == "")
    {
        NoValues.style.display = "block";
        clean.style.display = "none";
    }
}
function Clean()
{
    clean.style.display = "block";
    NoValues.style.display = "none";
    Celsius.value = "";
    Farenheit.value = "";
    Kelvin.value = "";
    inputs.forEach(input => {
        input.disabled = false;
    });
}