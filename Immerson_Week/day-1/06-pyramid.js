function pyramid(size){
    for (var i = 1; i < size + 1; i += 2) {
        console.log(' '.repeat(Math.floor((size - i) / 2)) + '#'.repeat(i))
    }


    //or

    // for(let i=1; i<= size; i++){
    //     let spaceBetween = ' '.repeat(size-i);
    //     let pyramidBlock = '#'. repeat(i*2 -1)
     
    //     console.log(spaceBetween + pyramidBlock + spaceBetween);
    //   }
}

pyramid(9)
pyramid(1)
pyramid(5)