document.getElementById("btn").addEventListener("click", marks)


function marks() {
    let life = document.getElementById("life").value;
    let abc = document.getElementById("abc").value;
    let titans = document.getElementById("titans").value;
    let memes = document.getElementById("memes").value;
    let jp = document.getElementById("jp").value;
    let fourK = document.getElementById("fourK").value;
   


   let Correct= 0
   let earning = 0
  
   
    
   if (life == 42) {
        document.getElementById("efil").innerHTML = "Correct"
        document.getElementById("efil").style.color = "green"
        Correct+1
        
       
        
    } else {
        document.getElementById("efil").innerHTML = "Incorrect"
        document.getElementById("efil").style.color = "red"
        } 
    if (abc == "a>c") {
        document.getElementById("cba").innerHTML = "Correct"
        document.getElementById("cba").style.color = "green"
        Correct+2
        
      
        
    } else {
        document.getElementById("cba").innerHTML = "Incorrect"
        document.getElementById("cba").style.color = "red"
    } 
    if (titans == "undefined") {
        document.getElementById("snatit").innerHTML = "Correct"
        document.getElementById("snatit").style.color = "green"
        Correct+3
        
      
      
        
    } else {
        document.getElementById("snatit").innerHTML = "Incorrect"
        document.getElementById("snatit").style.color = "red"
    } 
    if (memes == "gif") {
        document.getElementById("seem").innerHTML = "Correct"
        document.getElementById("seem").style.color = "green"
        Correct+4
        
        
        
       
    } else {
        document.getElementById("seem").innerHTML = "Incorrect"
        document.getElementById("seem").style.color = "red"
    } 
    if (jp == "yes") {
            document.getElementById("pj").innerHTML = "Correct"
            document.getElementById("pj").style.color = "green"
            Correct+5
        
           
           
          
        } else {
            document.getElementById("pj").innerHTML = "Incorrect"
            document.getElementById("pj").style.color = "red"
        }
     if (fourK == 2003) {
        document.getElementById("Kfour").innerHTML = "Correct"
        document.getElementById("Kfour").style.color = "green"
        Correct+6
  
      
    } else {
        document.getElementById("Kfour").innerHTML = "Incorrect"
        document.getElementById("Kfour").style.color = "red"
    }
document.getElementById("score").innerHTML =Correct;
let score = (Correct/6)*100
document.getElementById("status").innerHTML = earning;
let status = earning;


if (Correct== 0) {
    document.getElementById("find").src = "images/ this one.jpg";

} else if (Correct== 1) {
    document.getElementById("find").src = "images/one bitty boi.jpg";

} else if (Correct == 2) {
    document.getElementById("find").src = "images/one trumpy boi.jpg";


} else if (Correct == 3) {
    document.getElementById("find").src = "images/i hate dis boi.jpg";
}

else if (Correct == 4)  {
    document.getElementById("find").src = "images/one windows boi.jpg";
}
 else if( Correct== 5) {
     document.getElementById("find").src= "images/one bald boi.jpg";
 }

 else(Correct == 6)
     document.getElementById("find").src= "images/one krabby boi.jpg";
}
 







    


   



    


































