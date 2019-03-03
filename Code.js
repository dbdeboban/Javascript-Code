var theInput = "";
process.stdin.resume();
process.stdin.setEncoding("ascii");
process.stdin.on("data", function (input) {
    theInput += input;
});
                 
process.stdin.on("end", function(){
    var inputArray;
    var n;
    var k;
    var result = 0;
    
    //Get N and K
    n = theInput.split(" ")[0];
    k = (theInput.split(" ")[1]).split("\n")[0];
    inputArray = theInput.split("\n")[1].split(" ");
    
    //Sort inputArray in ascending order
    inputArray.sort(function(a, b){
        if(a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        } else {
            return 0;
        }
    });
    
    //Count by comparing adjacent elements
    for(var x = 0; x < n - 1; x++) {
        if(inputArray[x + 1] - inputArray[x] == k) {
            result++;
        }
    }
    
    //Return the result
    process.stdout.write(result);
    
});