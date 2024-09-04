let multiple = {
    name: 'akash',
    age:47,
    address: 'savar',
    uniq:{
        color:'red',
        favorite:{
            food: ['akash', 'samiul', 'jahid', 'ashik'],
            drink:'speed'
        }
    }
}
// console.log(multiple);
// console.log(multiple.name)  //output: akash

// //Nested
// console.log(multiple.uniq.favorite.drink);  //output: speed
// multiple.uniq.drink= 'akash khabe';
// console.log(multiple.uniq.drink);  //output: akash khabe

// Array nested orbect
multiple.uniq.favorite.food[0] = 'onek rokhom khabar ase'
console.log(multiple.uniq.favorite.food[0])

