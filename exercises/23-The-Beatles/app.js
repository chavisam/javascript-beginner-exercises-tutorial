
var letItBe = 'let it be, '
var wisper = 'whisper words of wisdom, '
var there = 'there will be an answer, '


function sing(){

    var y = 1;
    var t = 1;
    var answer = '';

    for (let i=0 ; i<13 ; i++)
    {

        if(y<5 && t<5){
             answer = answer + letItBe
             y++;
             t++;
        }else {answer = answer + wisper;
           break;
        }
     
    }

    y=1;
    t=1;

    for (let i=0 ; i<6 ; i++)
    {

        if(y<6 && t<6){
            answer = answer + letItBe;
             y++;
             t++;
        }else { answer = answer + there + 'let it be';
           
        }
     
    }
    return answer
}

console.log(sing())