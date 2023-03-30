const cardImgs = document.querySelectorAll('.card');
const body =document.querySelector('body');
const con = document.getElementsByTagName('article');
console.log(con);
// console.log(body);
// ====================================
    
// const array_pics = [
//         " ./img/goku.png ",   
//         " ./img/gon.png " ,
//          " ./img/happy.png " ,
//         " ./img/luffy.png " ,
//          " ./img/naruto.png " ,
//          " ./img/shinichi.png " 
//         ];
let array_pics = [
        " ./img/goku.png ",   
        " ./img/gon.png " ,
         " ./img/happy.png " ,
        " ./img/luffy.png " ,
         " ./img/naruto.png " ,
         " ./img/shinichi.png ", 
        " ./img/goku.png ",   
        " ./img/gon.png " ,
         " ./img/happy.png " ,
        " ./img/luffy.png " ,
         " ./img/naruto.png " ,
         " ./img/shinichi.png " 
        ];
// let array_pics = [
//         { pic:"goku"},   
//         { pic:"gon"} ,
//         { pic:"happy"} ,
//         { pic:"luffy"} ,
//         { pic:"naruto"} ,
//         { pic:"shinichi"}, 
//         // { pic:goku.png},   
//         // { pic:gon} ,
//         // { pic:happy} ,
//         // { pic:luffy} ,
//         // { pic:naruto} ,
//         // { pic:shinichi} 
//         ];
        console.log(array_pics)
 


        // ====================================
        const pics_name=[
            "goku",
            "gon",
            "happy",
            "luffy",
            "naruto",
            "shinichi",
            "goku_2",
            "gon_2",
            "happy_2",
            "luffy_2",
            "naruto_2",
            "shinichi_2"

        ]

    ;

// =======================================container
    const container ={
    container:document.createElement("article")
    }

    container.container.setAttribute("class",'main_container');
    body.appendChild(container.container);
// =================================================
        function constructor(){
            pics_name.forEach((pic)=>{
            // console.log(pic);



        const newDiv = {
        card:document.createElement('div'),
        


        }

        for (const [key,value] of Object.entries(newDiv)) {
        // console.log(value);
        value.setAttribute("id","")
        value.setAttribute("class","card")
        container.container.appendChild(value)

        }    
        })
     
    }
    constructor()
    
 
    const cards= document.querySelectorAll('.card');
    // console.log(cards);
//     function display_pics(e){
//         // console.log(e)
    
       
//        cards.forEach((card) => {
        
//             card.innerHTML = array_pics.map(pic =>
           
                
//             `
//                         <img src=${pic}></img>
    
    
//             `   
            
//             )
//             })
// }
// display_pics();

    let element=[]
    console.log(element);
for (let i = 0; i <cards.length; i++) {
    // console.log(cards[i]);
    element.push(cards[i]);
    // console.log(element);
    
    
}

const random = Math.floor(Math.random()*array_pics.length);
console.log(array_pics[random]);
async function addCards(){

    element[0].innerHTML+= Math.floor(Math.random()*array_pics.length);
    console.log(array_pics[random]);` 
    
                        <img src=${array_pics[random]}></img>
        
        
        `
    element[1].innerHTML+=` 
    
                        <img src=${array_pics[1]}></img>
        
        
        `
    element[2].innerHTML+=` 
    
                        <img src=${array_pics[2]}></img>
        
        
        `
    element[3].innerHTML+=` 
    
                        <img src=${array_pics[3]}></img>
        
        
        `
    element[4].innerHTML+=` 
    
                        <img src=${array_pics[4]}></img>
        
        
        `
    element[5].innerHTML+=` 
    
                        <img src=${array_pics[5]}></img>
        
        
        `
    element[6].innerHTML+=` 
    
                        <img src=${array_pics[6]}></img>
        
        
        `
    element[7].innerHTML+=` 
    
                        <img src=${array_pics[7]}></img>
        
        
        `
    element[8].innerHTML+=` 
    
                        <img src=${array_pics[8]}></img>
        
        
        `
    element[9].innerHTML+= 
    
    ` 
    
                        <img src=${array_pics[9]}></img>
        
        
        `
    element[10].innerHTML+=await ` 
    
                        <img src=${array_pics[10]}></img>
        
        
        `
    element[11].innerHTML+= 
    ` 
    
                        <img src=${array_pics[11]}></img>
        
        
    `
    
    // element[12].innerHTML+=` 
    
    //                     <img src=${array_pics[11]}></img>
        
        
    //     `
};
addCards()

// function randomCards(){
//     for(let i = 0; i < cards.length; i++){
//         cards[i].Math.random();
//     }
// }
// randomCards();

// function randomCards(){

//     for(let i = 0; i < array_pics.length; i++){
//         console.log(array_pics[i]);
//         // cards[i].src= array_pics[i] ;

//     } 
// }
// randomCards();


// function randomize(array_pics){
//     let  i;
//     let j;
//     let tmp;
//     for(i = array_pics.length-1;i>0;i--){
//         j=math.floor(math.random()* (i+1));
//         tmp=array_pics[i];
//         array_pics[i]=array_pics[j];
//         array_pics[j]=tmp
//     }
//     return array_pics;
// }
// array_pics.Math.random(8)
// function randomMain(){
//     let x = Math.floor((Math.random()*12));
//     console.log(x);
//     for(let i = 0; i < cards.length; i++){
//         cards[i].x;
//     }
//     // if(window.location.reload){
       
//     // }
    
// }
// randomMain();

