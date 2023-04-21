console.log("Welcome")
uppercase.addEventListener("click", ()=>{
    console.log("uppercase")
    inpText.value = inpText.value.toUpperCase()
})

lowercase.addEventListener("click", ()=>{
    console.log("lowercase")
    inpText.value = inpText.value.toLowerCase()
})

removeSpace.addEventListener("click", ()=>{
    console.log("Removing Extra Spaces")
    inpText.value = inpText.value.replaceAll(/\s+/g," ").trim();
})

removeLines.addEventListener("click", ()=>{
    console.log("Removing Extra New Lines")
    inpText.value = inpText.value.replaceAll(/\n+/g,"\n").trim();
})

inpText.addEventListener("input",()=>{
    charCount.innerText = inpText.value.length
    wordCount.innerText = inpText.value.trim().split(" ").length
})

