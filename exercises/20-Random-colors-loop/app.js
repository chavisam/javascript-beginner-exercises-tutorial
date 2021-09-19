function getColor(colorNumber)
{
	//make sure parameter is a number and not a string by converting the value to int:
	colorNumber = parseInt(colorNumber);
	switch(colorNumber){
		case 1: return "red"; 
				break;
		case 2: return "yellow"; 
				break;
		case 3: return "blue"; 
				break;
		case 4: return "green"; 
				break;
		default: return "black"; 
				 break;
	}
}

function getAllStudentColors(number){
	
	//your loop here
	number = parseInt(number)
	for(let i = 0 ; i < number ; i++){

		var Randomnumber = Math.floor(Math.random()*4)

		if(Randomnumber == 0){console.log()}
		else console.log(getColor(Randomnumber))

	}
	//var exampleColor = getColor(1);
}

//call the function below with the number of students in the class and print on the console
getAllStudentColors(10);

