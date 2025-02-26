document.getElementById("withdraw-btn").addEventListener("click",function(event){
    event.preventDefault();
    const account=document.getElementById("account").value;
    const pin=getInputValueById("Pin");
    const amount=getInputValueById("Amount");
    
    if(account.length===11){
        if(pin===1234){
            if(amount>0){
                const mainBalance=getInnerTextValueById("main-balance");
                const sum=mainBalance-amount;
                setInnerTextValueById("main-balance",sum);
                alert("Money withdrawn successfully");
            }else{
                alert("Please enter a valid amount");
            }
        }else{
            alert("Please enter a valid pin number");
        }
    }
    else{
        alert("Please enter a valid account number");
    }
    
});