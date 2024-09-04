// String Object

const country = "Bangladesh"; //duble cotation
const city = 'Dhaka';  //single cotation
const distric = `dhaka`;  //Backtik
const thana = new String('Savar')  //khub kom bebohar hoye thake

// // check of type
console.log(typeof city);  //string type
console.log(typeof distric); //string type
console.log(typeof country);  //string typr

console.log(typeof thana);  //eta hobe object karon 

// Arry 
let num = [44, 43, 44, 65, 75, 96, 47];

console.log(n/um.length);  //arry er majhe koy ta element ase

console.log(num[2]);  //eta diye check kore je kon possition a ke ase
num[4]= 99;  //element change
console.log(num)  //output


// String Arry

let worker = ['hablu', 'babulu','tablu', 'kabulu','lablu', 'dabulu',]

console.log(worker);
console.log(typeof worker);
console.log(worker.length)
console.log(worker[0])

//Array is a miutable --> you can changa the array
// string is a immiutable --> not changable
let name ='ak a sh';

console.log(name.length);  // er majhe koyata okkhor ase ta bole dey
console.log(name[1]);  //eto number possition a ke ase ta bole dey
name[1]='k';     //eta arry er moto chabge kora jabe na    //change kora jabe kina / kintu ekhane kora jabe na
console.log(name); //print outuput
