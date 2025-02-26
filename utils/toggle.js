document.getElementById("cashout-section").style.display="none";


document.getElementById("add-money-card").addEventListener("click",function(){
    handleToggle("add-money-section","block");
    handleToggle("cashout-section","none");
});

document.getElementById("cashout-card").addEventListener("click",function(){
    handleToggle("cashout-section","block");
    handleToggle("add-money-section","none");
});


function handleToggle(id,status){
 document.getElementById(id).style.display=status;
}