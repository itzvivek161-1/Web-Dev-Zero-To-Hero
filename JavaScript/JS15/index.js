// function handleClick(){
//     const element =document.getElementById("first");
//     element.textContent="Strike Is Coming";
// }

// const element = document.getElementById("first");
// element.onclick=function handleClick(){
//     element.textContent="Strike is Coming";
// }

// element.onclick=function handleClick(){
//     element.textContent="I am The Best";
// }
// we do not prfer this beacuse it overwrite;

// element.addEventListener('dblclick',()=>{
//      element.textContent="Strike is Coming";
// })

// element.addEventListener('dblclick',()=>{
//      element.style.backgroundColor="pink";
// })

// element.addEventListener('click',()=>{
//      element.textContent="I am  the Best";
// })


// const child=document.getElementById("child1");
// child1.addEventListener('click',()=>{
//     child.textContent="I am Clicked";
// })


const parent= document.getElementById("parent");
// console.log(parent.children);

function handleClick(e){
    e.target.textContent="I am clicked";
    parent.removeEventListener('click',handleClick);

}



parent.addEventListener('click',handleClick);



// for(let child of  parent.children){
//     // console.log(child);
    
//     child.addEventListener('click',()=>{
//         child.textContent="I am Clicked";
//     })
// }

// const grandparent=document.getElementById("grandparent");
// grandparent.addEventListener('click',(e)=>{
//     console.log(e.target);
    
//     // console.log("Grandparent is clicked");
    
// })


// const parent=document.getElementById("parent");
// parent.addEventListener('click',(e)=>{
//     //  console.log(e);
    
//     // console.log("parent is clicked");
    
// })


// const child=document.getElementById("child");
// child.addEventListener('click',(e)=>{
//     //  console.log(e);
//     //  e.stopPropagation();
    
//     // console.log("child is clicked");
    
// })

//PHASE
// 1.Capture Phase=>True
// 2.Target Phase
// 3.Bunling Phase=>By default false hi hota h

//capture phase on hai:Top se down aaoge:Us time pe event ko triggeer kr dia jayega
//capture phse off hai:Down to Top jaoge(Bubbling Phase):Us time pe event ko triggeer kr dia jayega