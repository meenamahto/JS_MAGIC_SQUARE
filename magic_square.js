let list=a=[[2,7,6],[9,5,1],[4,3,8]];
console.log("matrix is......")
var i=0;
while(i<list.length){
    var j=0,num="";
    while(j<list.length){
        num+=list[i][j]+" "
        j++
    }
    console.log(num)
    i++
}
var sumd1=0,sumd2=0,i=0;
while(i<list.length){
    var j=0;
    while(j<list.length){
        if(i==j){
            sumd1+=list[i][j]
        }
        if(i+j==2){
            sumd2+=list[j][i]
        }
        j++
    }
    i++
}
// console.log(sumd1,sumd2)
if(sumd1==sumd2){
    var count=0,count1=0,i=0;
    while(i<list.length){
        var j=0,sumc=0,sumr=0;
        while(j<list.length){
            sumr+=list[i][j]
            sumc+=list[j][i]
            j++
        }
        // console.log(sumr,sumc)
        i++
        if(sumd1==sumr && sumd1==sumc){
            count++
        }else{
            count1++
        }
    }
}
if (count==list.length && count1==0){
    console.log("It is a magic square....!")
}else{
    console.log("It is not a magic square....!")
}
