/*Exercise closely resembles 11 - consider introducing another concept here? */

function getRandomInt()
{
	var randomNumber = Math.random();
	var result = Math.floor(randomNumber * 10);
	return result;
}


console.log(getRandomInt());