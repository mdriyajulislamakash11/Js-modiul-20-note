// Uppper Cace
// or
// lowercase

const school = 'Uttora Model School And Collage';
console.log(school);
console.log(school.toUpperCase());
console.log(school.toLowerCase());  
// toLowerCase() হল JavaScript-এর একটি বিল্ট-ইন মেথড, যা কোনো স্ট্রিংকে ছোট হাতের অক্ষরে রূপান্তর করে। এখানে () ব্র্যাকেটগুলো ব্যবহার করা হয় কারণ এটি একটি ফাংশন বা মেথড। যখন কোনো ফাংশন বা মেথডকে কল করা হয়, তখন তার সাথে () ব্যবহার করতে হয়।

// IF Else diye .toUpperCase(); or .toLowerCase(); code kora holo 

const subject = 'English';
const Book = 'english';

if(subject.toLowerCase === Book.toLowerCase){  //rta diye 2 tak  true kore dilam 
    console.log('porikkhay valo number pabo');
}else{
    console.log('porikkha valo hoy nai');
}


// trim(); method
// er kaj hocche jodi ami kono string likhi ar tar suru te space cole ase. jmn: let name = "  akash" ba "akash   "; tokhon: trim(); bebohar korle cai setar age space thakuk ba sese seta Codition dile jmn condition korte cai ta korte parbo    jmn nicher code  


let drink = 'water';
let liquit = 'water';
 
if(drink.trim() === liquit.trim()){
    console.log('donak theke amk free dibe');
}else{
    console.log('amk pani kine khete hobe');
}