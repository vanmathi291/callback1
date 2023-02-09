console.log("one");
setTimeout(function cbt(){
    console.log("CB setTimeout");
},4000);
fetch("https://restcountries.com/v3.1/all")
.then(function cbF(){
    console.log("CB restcountries");
});
console.log("two");


setTimeout(()=>{
    console.log(1);
    setTimeout(()=>{
        console.log(2);
        setTimeout(()=>{
            console.log(3);
            setTimeout(()=>{
                console.log(4);
                setTimeout(()=>{
                    console.log(5);
                },2000)
            },1000)
        },700)
    },3000)
},2000)