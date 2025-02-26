function getInputValueById(id){
    const value=document.getElementById(id).value;
    const convertedValue=parseFloat(value);
    return convertedValue;
}
function getInnerTextValueById(id){
    const value=document.getElementById(id).innerText;
    const convertedValue=parseFloat(value);
    return convertedValue;
}
function setInnerTextValueById(id,value){
    document.getElementById(id).innerText=value;
}