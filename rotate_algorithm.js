function rotateNthtime(array,nTime)
{
	var returnArray = [];
	
	if( nTime === 0 )
		return array;
	else if( nTime > array.length )
	{
		nTime = nTime % array.length;
	}
	
	for(var A=0;A<array.length;A++)
	{
		if( nTime+A < array.length )
		{
			if ( nTime+A < 0 )
				returnArray.push(array[array.length + (nTime+A)]);
			else
				returnArray.push(array[nTime + A]);			
		}
		else
		{
			returnArray.push(array[(nTime - array.length) + A]);
		}
	}
	return returnArray;	
}
