

function flip()
{
	return Math.random() >= 0.5;
}


function randomNumber(n) {
	if (n > 1000000) {
		throw "Error limit to big"
	}
	
	arr = [];
	for(var i=0; i<n; i++) { 
		arr.push(i);
	}
	
	while( arr.length > 2) {
		arr = arr.filter(flip);
	}
	
	if (arr[0] >= 0)
		return arr[0];
	if (arr[1] >=0)
		return arr[1];	
	
	return 0;
}
