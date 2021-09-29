function  averageMinMax(array){
    
    const array = [-42, 0, 42]
    const array = [30, 20, 100]
    const array = [-23, -4, -12]
    
    array.sort() 
    console.log(array.join(", ")) 
    
    
    array.sort((a,b) => a-b) /
    console.log(array.join(", ")) 
    
    const min = array[0]
    const max = array[array.length-1]
    console.log(`Minimum: ${min}, Maximum: ${max}`) 

}
    
    
    
    