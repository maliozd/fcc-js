// Only change code below this line
// class Thermostat {
//   constructor(fahrenheitTemp){
//     this.fahrenheit = fahrenheitTemp
    
//   }
//   get temperature(){
//     return (5/9 * (fahrenheit - 32))
//   }
//   set temperature(celciusTemp){
//     this.fahrenheit = (celciusTemp * 9.0) / 5 + 32;
//   }
// }
class Thermostat {
  constructor(fahrenheit) {
    this.fahrenheit = fahrenheit;
  }
  
  get temperature() {
    return (5 / 9) * (this.fahrenheit - 32);
  }
  
  set temperature(celsius) {
    this.fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // setting in fahrenheit scale
let temp = thermos.temperature; // 24.44 in celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in celsius