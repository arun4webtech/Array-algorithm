Array.prototype.rotateNthtime = function(nTime)
{
	var returnArray = [];
	
	if( nTime === 0 )
		return this;
	else if( nTime > this.length )
	{
		nTime = nTime % this.length;
	}
	
	for(var A=0;A<this.length;A++)
	{
		if( nTime+A < this.length )
		{
			if ( nTime+A < 0 )
				returnArray.push(this[this.length + (nTime+A)]);
			else
				returnArray.push(this[nTime + A]);
		}
		else
		{
			returnArray.push(this[(nTime - this.length) + A]);
		}
	}
	for(var A=0;A<this.length;A++)
	{
		this[A] = returnArray[A];
	}
	//return returnArray;
	return this;
}
