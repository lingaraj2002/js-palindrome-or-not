let a =prompt ("enter the number");
    var c=a;
    let r=0;
    while(a>0){
        b=a%10;
        a=(a-b)/10;
        r=r*10+b;
    }
    if(c==r){
        document.write("palindrome");
    }
    else{
        document.write("not a palindrome");
    }