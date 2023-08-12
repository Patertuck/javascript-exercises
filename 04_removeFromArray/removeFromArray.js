const removeFromArray = function(array, ...numbersToRemove) {
    for (var numberToRemove of numbersToRemove){
        while(array.indexOf(numberToRemove) != -1 ){
            array.splice(array.indexOf(numberToRemove), 1);
        }
    }
    
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
