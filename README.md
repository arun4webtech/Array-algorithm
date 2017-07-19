# Array-algorithm
algorithms and comfortable api in array object

#Example - insertion sort

        var arr = [3,1,2,5,7,6];
                console.log(arr) => [3, 1, 2, 5, 7, 6]
        arr.insertSort();
                console.log(arr) => [1, 2, 3, 5, 6, 7]
                
        var arr = ["bala","daya","arun","zahir","ashik"]
        arr.insertSort();
                console.log(arr) => ["arun", "ashik", "bala", "daya", "zahir"]


#Example - insert on index value

        var arr = [3,1,2,5,7,6];
                console.log(arr) => [3, 1, 2, 5, 7, 6]
        Array.insert(index,value)
        arr.insert(3,4)
                console.log(arr) => [3, 1, 2, 4, 5, 7, 6]

#Example - delete index value

        var arr = [3,1,2,5,7,6];
                console.log(arr) => [3, 1, 2, 5, 7, 6]
        Array.delete(index)
        arr.delete(3)
                console.log(arr) => [3, 1, 2, 7, 6]
    
#Example - binary Search

        var arr = [1,2,3,4,8,15,16,56];
        Array.binSearch(index)
        var index = arr.binSearch(3)
                console.log(index) => 2
