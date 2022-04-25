// Store the wallet amount to your local storage with key "amount"

let amount = localStorage.getItem("amount") || 0;


const addToWallet = ()=>{
    let m = document.getElementById("amount").value;
    let b = localStorage.getItem("amount");

    
    let a = Number(b) +Number(m);
   
    localStorage.setItem("amount",a);
   
   
    am(a);
}
let am = (a)=>{
    document.getElementById("wallet").innerText=null;
    document.getElementById("wallet").innerText= a;
}
am(amount);



