Array.prototype.binSearch = function( val, arr=this, start=0, end = arr.length-1, side = "N")
{
	var temp = Math.round((end-start)/2)
	temp = temp?temp:1

	if(side === "N")
		mid = temp;
	else if(side === "L")
		mid = mid-temp;
	else if(side === "R")
		mid = mid+temp;
		
	if( arr[mid] == val )
		return mid
	if( arr[mid] < val )
	{
		return this.binSearch(val,arr,mid+1,end,"R")
	}
	if( arr[mid] > val )
	{
		return this.binSearch(val,arr,start,mid-1,"L")
	}
	return -1
}
