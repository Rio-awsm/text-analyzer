console.log("Welcome")
uppercase.addEventListener("click", ()=>{
    console.log("uppercase")
    inpText.value = inpText.value.toUpperCase()
})

lowercase.addEventListener("click", ()=>{
    console.log("lowercase")
    inpText.value = inpText.value.toLowerCase()
})

inpText.addEventListener("input",()=>{
    charCount.innerText = inpText.value.length
    wordCount.innerText = inpText.value.trim().split(" ").length
})