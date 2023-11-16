const pwd = document.getElementById('pwd_gener') ,
    bloc_pwd = document.getElementsByClassName('pwd'),
    pwd_length = document.getElementById('pwd_length'),
    upp_letters = document.getElementById('upp'),
    low_letters = document.getElementById('low'),
    symbols = document.getElementById('symbols'),
    numbers = document.getElementById('numbers'),
    message = document.getElementById('messg'),
    error_mssg = document.getElementById('errmssg'),
    generate = document.getElementById('gener'),
    upperletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerletters = "abcdefghijklmnopqrstuvwxyz",
    num = "0123456789",
    symb = "~!@#$%^&*()_+=|";



function PwdLength(){
    return new Promise((resolve, reject) => {     // blur est un évènement asynchrone d'où l'obligation d'utiliser une promesse avec resolve pour 
        pwd_length.addEventListener('blur',function(){         // le succés et reject en cas d'erreur 
            var res = pwd_length.value;
        
            if(res > 1)
            {
                resolve(res); 
            } else{
                reject(new Error('Pwd Length less than 2 , retry'));
            }
         }) 
    })
  
}

function verif_pwd(){
    
    
    PwdLength().then(() => {
         console.log('valid password length');
         error_mssg.style.display = 'none';
    }).catch((error) => {             
        error_mssg.style.display = 'block';
        console.error(error.message);
        verif_pwd();
    });
} 
    verif_pwd();


function UppLetters(){
   if(upp_letters.checked)
    return true ;
      return false;
 }

function LowLetters(){
    if(low_letters.checked)
        return true ;
     return false;
}

function Symbols_Check(){
    if(symbols.checked)
        return true ;
      return false ;
}

function Num_Check(){
    if(numbers.checked)
        return true ;
     return false;
}  
   
   

function getLowerLetter(){
    return lowerletters[Math.floor(Math.random()* lowerletters.length)];
  
}

function getUpperLetter(){
    return upperletters[Math.floor(Math.random()*upperletters.length)];
}

function getNumber(){
    return num[Math.floor(Math.random()*num.length)];
}

function getSymbol(){
    return symb[Math.floor(Math.random()*symb.length)];
}

function generateChar(){
    let array_string = [];
    if(UppLetters())
    array_string.push(getUpperLetter());
    if(LowLetters())
    array_string.push(getLowerLetter());
    if(Num_Check())
    array_string.push(getNumber());
    if(Symbols_Check())
    array_string.push(getSymbol());
    if(array_string.length === 0 ) return "";
    return array_string[Math.floor(Math.random()*array_string.length)];
        
 }

function generatePWD(){
    const PWD_length = pwd_length.value ; 
    let password = "";
    for(let i=0;i<PWD_length; i++){
        const char = generateChar();
        password += char;
    }
    pwd.innerText = password ;
}

