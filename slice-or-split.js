// .slice(,);

// const part1 = name.slice(5,10);  //variable er name diye tar por.slice diye () 1st braket dite hobe tar majhe koto number index theke koto number porjonto dekhate cai seta bole dite hobe
// console.log(part1);

// const name = 'amar sonar bamgla';

// const part1 = name.slice(5,10);
// console.log(part1);


/**
 * 
 * .split();  // eta puro string take ekta array er vitor bosay dibe
 * .split('');  //etar kaj hocche protttek take alada lada vabe kore fele
 * .split(' ');  //eta jekhane jekhane space thakbe sekhane sekhane word word hisabe vag korbe
 * .split(',');    //eta kaj hocche , er por theke plit kora ba vag kora
 * .split('a/b/c/d/e/f/g')  //etar mane hocche ami kotation er majhe jei sobdo ta dibo seta hocche seta jei jayggay jaygay thakbe sekhan theke vag korbe
 * 
 */

// .split();
// const peragraph = 'amar sonar bangla ami tmy valobashi';
// const fullArray= peragraph.split();
// console.log(fullArray);  //output: [ 'amar sonar bangla ami tmy valobashi' ]


// ,split('');
// const peragraph = 'amader deshe hobe sei chele kobe';
// const singleValue = peragraph.split('');
// console.log(singleValue);

// // output: [
//   'a', 'm', 'a', 'd', 'e', 'r',
//   ' ', 'd', 'e', 's', 'h', 'e',
//   ' ', 'h', 'o', 'b', 'e', ' ',
//   's', 'e', 'i', ' ', 'c', 'h',
//   'e', 'l', 'e', ' ', 'k', 'o',
//   'b', 'e'


// .split(" ");

// const peragraph = 'prottek ta space theke alada korbe';
// const fullArray = peragraph.split(" ");
// console.log(fullArray); 

//  output: [ 'prottek', 'ta', 'space', 'theke', 'alada', 'korbe' ]


// .split(',');

const frined = "akash,bojlu,fojlu,tojlu dorjlu" ;
const name = frined.split(',');
console.log(name);

// output: [ 'akash', 'bojlu', 'fojlu', 'tojlu dorjlu' ]




// .split("a");

// const peragraph = 'amar porane jaha cay tmio jodi caw tmi o taha paba';
// const fullArray = peragraph.split("a");  // a er jaygay je kono sobdho diye ami split ba vag korte pari
// console.log(fullArray);

// output: [
//   '',              'm',
//   'r por',         'ne j',
//   'h',             ' c',
//   'y tmio jodi c', 'w tmi o t',
//   'h',             ' p',
//   'b',             ''
// ]


// 
