import React from "react";
function Result({secretNum, term})
{



    let result;

if(term) 
    {
    if(term > secretNum)
        {

result = 'Higher than number you have to GUESS !';
}

else if(term < secretNum)
    {

result = 'Lower than number you have to GUESS !';
    }


    else if(term == secretNum)
        {

result = 'You Guessed it correct !';
   }
   else{

result = 'Please enter an VALID INPUT - a number !';
}
    }

return (

<h3>You Guessed : {result}</h3>
);


}

export default Result;



