document.getElementById("login-btn").addEventListener("click",function(event){
    event.preventDefault();
    const accountNumber=document.getElementById("account-number").value;
    const pinNumber=getInputValueById("pin-number");
    
    if(accountNumber.length===11){
       if(pinNumber===1234){
           window.location.href="main.html";
       }else{
           alert("Please enter a valid pin number");
       }
    }
    else{
        alert("Please enter a valid account number");
    }
    
});