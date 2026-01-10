const celsius_temp=27;
//conversion
const change_to_fahrenheit=(celsius_temp *9/5) +32;
const change_to_kelvin=celsius_temp + 273.15;
console.log("given celcius temp=",celsius_temp);
console.log("after converting celsius temperature to farhrenheit the value is=", change_to_fahrenheit);
console.log("aftter converting celcius temperature to kelvin the value is=",change_to_kelvin);
//reverse conversion
const F_TO_C=((change_to_fahrenheit-32)*5)/9;
const K_TO_C=change_to_kelvin-273.15;
console.log("REVERSE F TO C=",Math.round(F_TO_C));
console.log("reverse K TO C=",K_TO_C);

