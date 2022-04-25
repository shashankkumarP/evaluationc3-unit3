// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let id;
let amount = localStorage.getItem("amount");
let a = (amount)=>{
    document.getElementById("wallet").innerText=null;
    document.getElementById("wallet").innerText= amount;
}
a(amount);

const ft= async () => {
    try{
        let qr = document.getElementById("search").value;
        let url = `https://www.omdbapi.com/?i=tt3896198&apikey=ed004b4f&s=${qr}`;
        let res = await fetch(url);
        let data = await res.json();
        let data1 = data.Search;
        console.log(data1);
        append(data1);
    } catch(err){
        console.log("err",err);
    }
}

let append = (data)=>{
    let ac = document.getElementById("movies");
    ac.innerHTML=null;
    data.forEach(({Title,Poster,Type,Year,imdbID})=>{
        let div1 = document.createElement("div");
        let im = document.createElement("img");
        im.src = Poster;
        im.style.width="100%";
        im.style.height= "50%";
        let p1 = document.createElement("p");
        p1.innerHTML= Title;
        let btn = document.createElement("button");
        btn.innerText = "Book Now";
        btn.setAttribute("class","book_now");
        btn.addEventListener("click",()=>{
            my1(Poster,Title,Type,Year,imdbID);
        })
        div1.append(im,p1,btn);
        ac.append(div1);
    })
}

const debounce = (ft,delay) =>{
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(()=>{
        ft();
    },delay)
}

class br{
    constructor(Poster,Title,Type,Year,imdbID){
        this.Title = Title;
        this.Poster = Poster;
        this.Type = Type;
        this.Year =Year;
        this.imdbID = imdbID;
    }
}

let my1 = (Poster,Title,Type,Year,imdbID) =>{
    let obj = new br(Poster,Title,Type,Year,imdbID)
    
    
    localStorage.setItem("movie",JSON.stringify(obj));
    window.location.href="./checkout.html";
}
