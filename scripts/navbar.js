let hidden = true;
let firstTimeCLicking = true;
let hamIcon ; 
function showOrHideList()
{
    let navlist  = document.getElementById("navlist-mobile");
    let hamburger = document.getElementById("hamburger");
    if(firstTimeCLicking)
    {
        hamIcon = hamburger.innerHTML;
        firstTimeCLicking = false;
    }
    if(hidden)
    {
        
        navlist.style.display = "block";
        hamburger.innerHTML = "x";
        hidden = false;
        
    }
    else
    {
        navlist.style.display = "none";
        hamburger.innerHTML = hamIcon;
        hidden = true;
    }
}