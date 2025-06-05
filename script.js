
function convertToCapital(){
const mystring= document.getElementById("inputvalue").value;
const mycapitals= mystring.toUpperCase();

    document.getElementById("result").textContent = mycapitals;
}


function firstcapital(mango){
     return mango.charAt(0).toUpperCase() + mango.slice(1).toLowerCase();
}
function StringTofirstupper(){
     const mystring1 = document.getElementById("inputvalue1").value;
    const mycapitals1 = firstcapital(mystring1);
    document.getElementById("result1").textContent = mycapitals1;
}

function firstcapital1(word){
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
function convertToCapitalall(){
    const mystring2 = document.getElementById("inputvalue2").value;
    const words = mystring2.split(" ");
    const capitalizedWords = words.map(firstcapital1);
    const result = capitalizedWords.join(" ");
    document.getElementById("result2").textContent = result;
}