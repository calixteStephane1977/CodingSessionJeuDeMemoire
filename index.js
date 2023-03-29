const body =document.querySelector('body');
console.log(body);

// const array_pics={
//         goku:" ./img/goku.png ",
//         gon:" ./img/gon.png ",
//         happy:" ./imghappy.png ",
//         luffy:" ./img/luffy.png ",
//         naruto:" ./img/naruto.png ",
//         shinichi:" ./img/shinichi.png "

// };
const array_pics=[

    " ./img/goku.png ",
    " ./img/gon.png ",
    " ./imghappy.png ",
    " ./img/luffy.png ",
    " ./img/naruto.png ",
    " ./img/shinichi.png "
]

;
console.log(array_pics);


const container ={
    container:document.createElement("div")
}

const newDiv = {
    card_1:document.createElement('div'),
    card_2:document.createElement('div'),
    card_3:document.createElement('div'),
    card_4:document.createElement('div'),
    card_5:document.createElement('div'),
    card_6:document.createElement('div'),
    card_7:document.createElement('div'),
    card_8:document.createElement('div'),
    card_9:document.createElement('div'),
    card_10:document.createElement('div'),
    card_11:document.createElement('div'),
    card_12:document.createElement('div'),
}
for (const [key,value] of Object.entries(newDiv)) {
    console.log(value);
    value.setAttribute("id",key)
    value.setAttribute("class","card")

    // value.innerHTML=`<img src=${array_pics.goku} alt="">`
    // value.innerHTML=`<img src=${array_pics.gon} alt="">`
    // value.innerHTML=`<img src=${array_pics.luffy} alt="">`
    // value.innerHTML=`<img src=${array_pics.happy} alt="">`
    // value.innerHTML=`<img src=${array_pics.naruto} alt="">`
    // value.innerHTML=`<img src=${array_pics.shinichi} alt="">`
    container.container.appendChild(value)
}   
// =============================container
container.container.setAttribute("class",'main_container');
body.appendChild(container.container);
const cardImgs = document.querySelectorAll('.card');
console.log(cardImgs)
// =======================================pics
     for (let i = 0; i < array_pics.length; i++) {
        const element = array_pics[i];
        console.log(element);
     }

let change = window.addEventListener("click", imageChange);

function imageChange(e){
    console.log(e)
//    const  card =document.querySelectorAll(".card") 
    // const targ=e.srcElement.className;
    const targ = e.srcElement.id;
    console.log(targ);
    if (targ =="card_1") {
        targ.classList.add('.cardChange');
        
    }

// cardImgs.style.background = "blue";  
}
imageChange();


// cardImgs.forEach(cardImg => {
//     cardImg.addEventListener("click", imageChange, {once : true});
// })
function displayImage(){

}

displayImage()