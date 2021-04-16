//     MOVIMENTO      
const card = document.querySelector(".card");
const container = document.querySelector(".container");

//    ITENS

const title = document.querySelector('.title');
const gungnir = document.querySelector('.gungnir img');
const compra = document.querySelector('.compra button');
const pattern = document.querySelector('.pattern');
const description = document.querySelector('.info h3');

//      EVENTO DE MOVIMENTO     

container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});


//     ANIMAÇÃO INDO
container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';

    //    PopOut

    title.style.transform = "translateZ(150px)";
    gungnir.style.transform = "translateZ(200px) rotateZ(15deg)";
    compra.style.transform = "translateZ(75px)";
    pattern.style.transform = "translateZ(75px)";
    description.style.transform = "translateZ(100px)";

});



//     ANIMAÇÃO VOLTANDO
container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';

    //   PopBack
    title.style.transform = "translateZ(0px)";
    gungnir.style.transform = "translateZ(0px) rotateZ(0deg)";
    compra.style.transform = "translateZ(0px)";
    pattern.style.transform = "translateZ(0px)";
    description.style.transform = "translateZ(0px)";


});