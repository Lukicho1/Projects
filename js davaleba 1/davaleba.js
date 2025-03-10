 let age = Number(prompt("ასაკი")); 
 switch (true) {
     case (age < 6):
         console.log("u are still a kid.");
         break;
    
     case (age >= 6 && age <= 18):
         console.log("go to school.");
         break;
    
     case (age > 18 && age <= 22):
         console.log("don't fail any more classes in university.");
        break;
    
     default:
         let studying = confirm("continiue studying?");
         console.log(studying ? "u are student." : "ur not studying.");
 }







