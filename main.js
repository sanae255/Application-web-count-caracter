let img_node=document.getElementsByClassName("img_node")[0]
let text=document.querySelector("textarea")
let logo=document.querySelector(".logo")
img_node.addEventListener("click",()=>{
    document.body.classList.toggle("body_node")
    text.classList.toggle("textarea_node")
    if(img_node.src=="file:///C:/Users/HP/Desktop/projet%20%20caractere_counter/img_darck.png"){
        img_node.src="img_node.png"
        logo.src="logo1.jpg"
    }else{
        img_node.src="img_darck.png"
        logo.src="logo2.jpg"
    }  
})
let cgt_caractere=0
let nbr_caractere=document.querySelector(".Total h2")
let cgt_Word=0
let nbr_Word=document.querySelector(".Word h2")
let cgt_Sentence=0
let nbr_Sentence=document.querySelector(".Sentence h2")
let space=document.querySelector(".space")
let cgt_space=0
let limit=document.querySelector(".limit")
text.addEventListener("keydown",(e)=>{
    cgt_caractere++
    console.log(space)
    if(e.key==" "){
        cgt_space++
    }
    space.addEventListener("click",()=>{
        cgt_caractere-cgt_space
    })
    if(e.key=="Backspace"){
        if(cgt_caractere>1){
            cgt_caractere-=2
                    
        }
    }
    nbr_caractere.textContent=cgt_caractere<10?"0"+cgt_caractere:cgt_caractere
    if(e.key==" "||e.key==","||e.key=="."){
        cgt_Word++
    }
    nbr_Word.textContent= cgt_Word<10?"0"+ cgt_Word: cgt_Word
    if(e.key=="."){
        cgt_Sentence++
    }
    nbr_Sentence.textContent=cgt_Sentence<10?"0"+cgt_Sentence:cgt_Sentence
})