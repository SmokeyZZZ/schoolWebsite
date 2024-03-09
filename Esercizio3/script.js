let posizioneTesoroH;
let posizioneTesoroC;
let vettoreH = new Array(25);
let vettoreC = new Array(25);
let positions = [];
let isManTurn = true; 
let vinto = false;

function resettaVettore(){
for(let i = 0 ;i<25 ; i++)
    {
        vettoreH[i] = "vuoto";
        vettoreC[i] = "vuoto";
        positions.push(i);
    }
    vettoreH[posizioneTesoro = Math.floor(Math.random()*24)] = "tesoro";
    do
    {
        posizioneTesoroC=prompt("inserisci la posizione del tesoro del computer 1-25") -1;
    }while(posizioneTesoroC<0&& posizioneTesoroC>24)
    vettoreC[posizioneTesoroC] = "tesoro";
}
function reset()
{
    
    for(let i = 0 ;i<25 ; i++)
    {
        document.getElementById(i).src  = "img/vuoto.jpg"
        document.getElementById(i+25).src  = "img/vuoto.jpg"
    }
    positions= [];
    vinto = false;
    resettaVettore();

}
resettaVettore();
function cpuMove()
{
    let position;
        do
        {
            position = Math.floor(Math.random()*positions.length);
        }while(positions.indexOf(position)==-1)
        
        if(vettoreC[position]=="vuoto")
        {
            document.getElementById(position+25).src = "img/missed.png";
        }
        else if(vettoreC[position] == "tesoro")
        {
            document.getElementById(position+25).src = "img/tesoro.jpeg";
            setTimeout(() => {
                alert("IL COMPUTER HA VINTO ); "); 
            }, 500);
               
        }
        positions.splice(positions.indexOf(position),1);
        isManTurn = true;
        document.getElementById("turno").innerHTML = "UOMO";
}
function CheckWin(id)
{
    
    if(vettoreH[id]!=null && !vinto)
    {
        if(isManTurn)
        {

                if(vettoreH[id]=="vuoto")
                {
                    document.getElementById(id).src = "img/missed.png";
                    vettoreH[id]=null;
                }
                else if(vettoreH[id] == "tesoro")
                {
                    document.getElementById(id).src = "img/tesoro.jpeg";
                    setTimeout(() => {
                        alert("HAI VINTO");   
                    }, 500);
                    vinto = true;
                    return;
                }    
                document.getElementById("turno").innerHTML = "CPU";
                isManTurn = false;
            
        }
        setTimeout(()=>{cpuMove()},300);
        
    }
}
