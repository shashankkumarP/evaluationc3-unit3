// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let wal = localStorage.getItem("amount");
let moviee = JSON.parse(localStorage.getItem("movie"));
let a = (amount)=>{
    document.getElementById("wallet").innerText=null;
    document.getElementById("wallet").innerText= amount;
}
a(wal);



   
    

let p1 = document.createElement("p");
p1.innerText=moviee.Title;

let im = document.createElement("img");
im.src = moviee.Poster;
im.style.width="250px";
im.style.height= "250px";
document.getElementById("movie").append(p1,im);
    
    
    


let mysub = ()=>{
    let n = document.getElementById("number_of_seat").value;
    let bal = wal;
    if(n*100<=bal){
        alert("Booking Successful!");
        let abc = wal-(n*100);
        localStorage.setItem("amount",abc);
        let aaa = localStorage.getItem("amount");
        a(aaa);
    }
    else{
        alert("Insufficient Balance !")
    }
}

