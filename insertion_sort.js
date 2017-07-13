Array.prototype.insert = function(index,item){this.splice(index,0,item);}
Array.prototype.delete = function(index){this.splice(index,1);}
Array.prototype.insertSort = function(){
	for(let i=1;i<=this.length;i++)
		for(let j=0;j<i;j++)
			if(this[i] < this[j])
			{
				this.insert(j,this[i])
				this.delete(i+1,1)
			}
	return this;
}
