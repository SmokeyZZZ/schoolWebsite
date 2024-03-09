let posizioneTesoro;
let vettore = new Array(25);

function resettaVettore(){
for(let i = 0 ;i<25 ; i++)
    {
        vettore[i] = "vuoto";
    }
    vettore[posizioneTesoro = Math.floor(Math.random()*24)] = "tesoro";
}
function reset()
{
    
    for(let i = 0 ;i<25 ; i++)
    {
       
        document.getElementById(i).src  = "img/vuoto.jpg"
    }
    resettaVettore();

}
resettaVettore();
console.log(vettore)
function CheckWin( id )
{
    if(vettore[id]=="vuoto")
    {
        document.getElementById(id).src = "img/missed.png";
    }
    else if(vettore[id] == "tesoro")
    {
        document.getElementById(id).src = "img/tesoro.jpeg";
        alert("HAI VINTO");    
        
    }
    
}
