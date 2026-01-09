//Create celsiusToFahrenheit function 
const celsiusToFahrenheit=(temp_in_celcius)=> farhrenheit=(9/5) *temp_in_celcius + 32;
     console.log(celsiusToFahrenheit(27));

//  Create fahrenheitToCelsius function 
const fahrenheitToCelsius=(temp_in_fahrenheit)=> celcius=(temp_in_fahrenheit-32)*5/9;
console.log(fahrenheitToCelsius(100));

//Create celsiusToKelvin function 
const celsiusToKelvin=(temp_in_celcius)=>kelvin=273.15+temp_in_celcius;
console.log(celsiusToFahrenheit());

//  Create a universal converter that takes value, fromUnit, toUnit 
const converter=(value,from_unit,to_unit)=>{
    let celcius; // saare from_unit ko celcius(common) me lete aao pehle
    if (from_unit===to_unit) 
        return value;
    else if (from_unit==="c")
        celcius=value;
    else if(from_unit==="F")
        celcius=(value-32)*5/9;
    else
        celcius=value-273.15;
    if(to_unit==="F")
        return (9/5)*celcius+32;
    else(to_unit==="k")
        return 273.15+celcius;
}
console.log(converter(27,"k","F"));



        
        

        

  

     
