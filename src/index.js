const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};
function decode(expr) { 
    let result = '';
    let curentResult = '';
    for(let i = 0; i < expr.length; i++)
    {
        if(i % 10 == 0 && i != 0)
        {
            if(curentResult != '') result += MORSE_TABLE[`${curentResult}`];
            else result += ' ';
            curentResult = '';
        }

        if(`${expr[i]}${expr[i+1]}` == '10')    
        {
            curentResult +='.';
            i++;   
        }
        
        else if(`${expr[i]}${expr[i+1]}` == '11') 
        {
            curentResult +='-';
            i++;  
        }
    }
    if(curentResult != '') result += MORSE_TABLE[`${curentResult}`];
        else result += ' ';
        
    return result;
}

module.exports = {
    decode
}