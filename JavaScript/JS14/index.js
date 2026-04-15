const newElement = document.createElement("h2");
newElement.textContent = "Strike is Coming";
newElement.id = "second";

//select element
const element = document.getElementById("first");
element.after(newElement);
// element.before(newElement);

const newElement2 = document.createElement("h3");
newElement2.textContent = "Diwali is Coming Soon";
newElement2.id = "third";
// newElement2.className="diwali";
// newElement2.className="holi";
newElement2.classList.add("diwali");
newElement2.classList.add("holi");
// newElement2.classList.remove("diwali");

newElement2.style.backgroundColor = "brown";
newElement2.style.fontSize = "30px";
element.before(newElement2);

newElement2.setAttribute("hello", "ji");

console.log(newElement2.getAttribute("hello"));

// before aftter

// const list=document.createElement("li");
// list.textContent="Milk";

// const list2=document.createElement("li");
// list2.textContent="BuffaloMilk";

// const list3=document.createElement("li");
// list3.textContent="Halwa";

// const list4=document.createElement("li");
// list4.textContent="Momos";

// //select
// const unorderElement =document.getElementById("listing");

// unorderElement.append(list,list2);
// unorderElement.prepend(list3);
// // list.after(list4);

// unorderElement.children[1].after(list4);

const arr = ["Milk", "Halwa", "Paneer", "Tofu", "Tea"];

const unorderElement = document.getElementById("listing");
// const fragment = document.createDocumentFragment();

// for (let food of arr) {
//   const list = document.createElement("li");
//   list.textContent = food;
//   fragment.append(list);
// }

// unorderElement.append(fragment);

//How to delete/remove sommething

const s1=document.getElementById("first");
s1.remove();



const tempDiv =document.createElement("div");

for(let food of arr){
  const li= document.createElement("li");
  li.textContent=food;
  tempDiv.append(li);
}
unorderElement.append(...tempDiv.children);