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

        // for (const [key,value] of Object.entries(newDiv)) {
        // // console.log(value);
        // value.setAttribute("id",counter++)
        // value.setAttribute("class","card")
        // container.container.appendChild(value)

        // }    
        })
     
    }
    constructor()
    
 
const cards = document.querySelectorAll('.card');
    const containerB=document.querySelector('.main_container')
    console.log(containerB);
    // ====================================================

    function display_pics(e){
        // console.log(e)
       
        for (let i = 0; i < pics_name.length; i++) {
            const element = pics_name[i];
            containerB.innerHTML = array_pics.map((p) =>
            
            ` 
                   <div class="card">
                        <img src=${p} alt="">

                   </div>
            
            
            `
            
            
            
            ).join("") 
        }
       
            
    
          
    }
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




// };
// addCards()




