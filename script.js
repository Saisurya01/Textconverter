function reverseString(){
    const inputvalue= document.getElementById("inputvalue").value;
    let reversed='';
    for(let i=inputvalue.length-1;i>=0;i--){
        reversed+=inputvalue[i];
    }
    document.getElementById("output").textContent=reversed;
}