const repeatString = function(word, times) {
    var result = '';

        if (times < 0){return 'ERROR';}
    for (let i = 0; i < times; i++){
        result += word;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
