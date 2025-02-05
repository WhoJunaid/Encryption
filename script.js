let textArea = document.getElementById("textarea");
let button1= document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let output = document.getElementById("outputarea");
let copyButton = document.getElementById("copy");
let clearText = document.getElementById("button3");
let inputPassword = document.getElementById("inputPassword6");
let submitButton = document.getElementById("submitbutton");
let message = document.getElementById("message");

function getInput() {
  var input = textArea.value;
  
  
};


const encryptCode = [
  " " , "A" , "B" ,"C" ,"D","E","F","G","H","I","J","K","L","M","N","O","P" , "Q" , "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
 ];



 var finalEncryption = []

  function encrypt () {
    
    var input = textArea.value;
    const encryptText = [...input]
    
    // console.log(encryptText);
    
    
    
      
    
      for (let index = 0; index < encryptText.length; index++) {
       var elementTextBefore = encryptText[index];
       
        
        


         for (let index = 0; index < encryptCode.length; index++) {
          
       var elementEncrypt = encryptCode[index];
      //  console.log(elementTextBefore);
       
        const elementText = elementTextBefore.toUpperCase()
      // console.log(elementText )
       
         
       if (elementText === elementEncrypt) {
       var encryptNumber = encryptCode.indexOf(elementText);
      //  console.log(encryptNumber);
       finalEncryption.push(encryptNumber);
        
    
       var encrypted = finalEncryption.toString()
         var encrypted2 = finalEncryption.join("-");
        // textinner.innerHTML = (finalEncryption)
        output.value = encrypted2
    } 
       
        
      
       
     
     }

     
        

      
      }


   
  //  console.log(output.value);
  //  console.log(encrypted2);
  
  }
button1.onclick = function Clicked1() {
    // console.log("clicked1");
    finalEncryption = []
   getInput();
   encrypt();
   
   
   


    ;
    
    
}

button2.onclick = function Clicked2() {
    console.log("clicked2");
    finalDecryption = []
    decryption();

    
    
}

copyButton.onclick = function copy() {
  output.select();
  output.setSelectionRange(0,99999);
  navigator.clipboard.writeText(output.value)


  // console.log("copy");
  
  
}
let encryptMore = "Ayesha"
function decryption() {
  var input = textArea.value;
  // console.log(input);
  const decryptText = input.split("-")
  // console.log(decryptText);

  for (let index = 0; index < decryptText.length; index++) {
    const decryptElement = decryptText[index];
    // console.log(decryptElement);
    

    for (let index = 0; index < encryptCode.length; index++) {
      const encryptCodeCharacter2 = encryptCode[index];
      let encryptCodeIndex = encryptCode.indexOf(encryptCodeCharacter2);
      // console.log(encryptCodeIndex);
      
      
      

      if (decryptElement==encryptCodeIndex) {
        // console.log(`found `+  decryptElement);
        let finalText  = encryptCode.at(index = decryptElement);
        finalDecryption.push(finalText)
        

        
      }
         


      
 var decrypted = finalDecryption.toString()
   var decrypted2 = finalDecryption.join("");
  
  output.value = decrypted2
      
    }
  
  
  }

   
   
  
  
};

clearText.onclick = function clearTextClicked() {
  // console.log("clear text");
  textArea.value = [];
  output.value = [];
  
} 


// function checkPassword() {
  
//  }
// submitButton.onclick = function submitClicked() {

//  if (inputPassword.value === encryptMore ) {
   
//     message.innerText = 

// "I really loved her, more than words could ever express. I might tell people that I’m okay, that I’ve moved on, but deep down, I know that’s not entirely true. Some days are easier than others, but there are moments when the memories come rushing back, and I feel the weight of everything we shared. Life has a way of moving forward, whether we’re ready or not, so I try to smile, to find happiness in the little things.So, be happy with what u have. 💕❤️"


    
//   }else{
   
//     message.innerText = "umm....its not right but life is good bro..Be happy"
//   }
  
 
 
  
// } 


  
  
  
