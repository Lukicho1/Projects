let editText = (txt) => {
    txt = txt.trim(); 

    let changed = false;
    if (txt.includes("oldword")) { 
        txt = txt.replace("oldword", "newword");
        changed = true;
    }

    if (changed) {
        txt += " ამოცვლილია"; 
    }

  

    return txt;
};


let userInput = prompt("Enter text:");
alert(editText(userInput));