let input1 = document.getElementById("inputarea"); 
let output = document.getElementById("outputarea");
let encryptButton = document.getElementById("button1");
let decryptButton = document.getElementById("button2");
let clearText = document.getElementById("button3");
let copyButton = document.getElementById("copy");
const encryptCode = {
     
    A:")", B:"(",C:"*" , D:"&" , E:"^", F:"%",G:"$",  H:"#" , I:"@" , J:"!" , K:"~" , L:"`" ,M:"}" ,N:"{" ,O:"]" ,P:"[" ,Q:"'" ,R:":" ,S:";" ,T:"?" ,U:"/" ,V:">" ,W:"<" ,X:"." ,Y:"," ,Z:"|",
    " ":"_" 
}

encryptButton.onclick= ()  => {
   
    let outputCode = [];
    let input = input1.value.toUpperCase();

    for (let index = 0; index < input.length; index++) {
    const encryptElement = input[index];
     for (const key in encryptCode){

        if (key === encryptElement) {
            outputCode.push(encryptCode[key])
            
        }
     }
  }
   
    outputCode.toString();
   output.value = outputCode.join("-");
    
}

decryptButton.onclick = ()=>{
    
    
    let outputCode = [];
    let decryptCode = input1.value.split("-");
   
    
    for (let index = 0; index < decryptCode.length; index++) {
        const decryptElement = decryptCode[index];
      
        
        for (const key2 in encryptCode) {
            if (encryptCode[key2]=== decryptElement) {
                outputCode.push(key2);
               
                
            }
            
        }
        
    }
    outputCode.toString();
   output.value = outputCode.join("");
  


}

clearText.onclick = function clearTextClicked() {
    input1.value = [];
    output.value = [];
    
  } 

  copyButton.onclick = function copy() {
    output.select();
    output.setSelectionRange(0,99999);
    navigator.clipboard.writeText(output.value)
    
    
  }
  
  
