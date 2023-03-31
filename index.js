const cardImgs = document.querySelectorAll('.card');
const body =document.querySelector('body');
const con = document.getElementsByTagName('article');
console.log(con);
// console.log(body);
// ====================================
const btn = document.createElement("input");
btn.setAttribute("type", "button")
btn.setAttribute("id", "begin")
btn.setAttribute("value","commencer")
body.appendChild(btn)


btn.addEventListener("click", random_click)

// let array_pics = [
// { pic:" ./img/goku.png "},   
// { pic:" ./img/gon.png " },
// { pic:" ./img/happy.png "},
// { pic:" ./img/luffy.png "},
// { pic:" ./img/naruto.png "},
// { pic:" ./img/shinichi.png "}, 
// { pic:" ./img/gon.png "   },
// { pic:" ./img/happy.png "} ,
// { pic:" ./img/luffy.png "} ,
// { pic:" ./img/naruto.png " },
// { pic:" ./img/shinichi.png " }

// ];
const array_pics = [
            " ./img/goku.png ",   
            " ./img/gon.png " ,
             " ./img/happy.png " ,
            " ./img/luffy.png " ,
             " ./img/naruto.png " ,
             " ./img/shinichi.png " 
];
console.log(array_pics);
            let x=[]
            function random_click() {
                let randomArray_pics=[]
                console.log(randomArray_pics);
                for (let i = 0; i < array_pics.length; i++) {
                    const element = array_pics[i];
                     x = Math.floor((Math.random() *12) + 1);
                    console.log(x);
                

                }
  
        // for (const r of (array_pics)) {
        // //   randomArray_pics = r.Math
        //     [r].forEach(element => {
        //         console.log(element);
        //         // console.log(element.floor(Math.random() * array_pics.length));
                
        //         // console.log("test");
        //     });
        // }
            // console.log(random);
                display_pics()
    
              }
    counter = 0
    
    function compter() {
        counter++
    }
    compter()
        
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
        value.setAttribute("id",counter++)
        value.setAttribute("class","card")
        container.container.appendChild(value)

        }    
        })
     
    }
    constructor()
    
 
    const cards= document.querySelectorAll('.card');
    // console.log(cards);
    // ====================================================
    function display_pics(e){
        // console.log(e)
       
       
        cards.forEach((card => {
            
            card.innerHTML = array_pics.map((pic)=>
            console.log(pic)

            `
                        <img src=${
                Object.entries(pic)
                        }>
                        
                        </img>
    
            `   
            
            )
            })
        )}
// display_pics();

    let element=[]
    console.log(element);
    for (let i = 0; i <cards.length; i++) {
    // console.log(cards[i]);
             let random_cards=cards[i]
    element.push(random_cards);
    // console.log(element);
    
    
}


// console.log(array_pics);
// function addCards(){


    
//     element[0].innerHTML= 
//         ` 
 
//                         <img src=${array_pics[0].pic}></img>
        
        
//         `
//     element[1].innerHTML=` 
    
//                         <img src=${array_pics[1].pic}></img>
        
        
//         `
//     element[2].innerHTML=` 
    
//                         <img src=${array_pics[2].pic}></img>
        
        
//         `
//     element[3].innerHTML=` 
    
//                         <img src=${array_pics[3].pic}></img>
        
        
//         `
//     element[4].innerHTML=` 
    
//                         <img src=${array_pics[4].pic}></img>
        
        
//         `
//     element[5].innerHTML=` 

//                         <img src=${array_pics[5].pic}></img>
        
        
//         `
//     element[6].innerHTML=` 
    
//                         <img src=${array_pics[6].pic}></img>
        
        
//         `
//     element[7].innerHTML=` 
    
//                         <img src=${array_pics[7].pic}></img>
        
        
//         `
//     element[8].innerHTML=` 
    
//                         <img src=${array_pics[8].pic}></img>
        
        
//         `
//     element[9].innerHTML= 
    
//     ` 
    
//                         <img src=${array_pics[9].pic}></img>
        
        
//         `
//     element[10].innerHTML=` 
    
//                         <img src=${array_pics[10].pic}></img>
        
        
//         `
//     element[11].innerHTML= 
//     ` 
    
//                         <img src=${array_pics[11].pic}></img>
        
        
//     `

// };
// addCards()

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

