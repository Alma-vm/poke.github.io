
const pokeData = document.querySelector(".pokeData")
const scard = document.querySelector("#scard");
// const pokeData = document.getElementById(".pokeData");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
const pagination = document.querySelector(".pagination");


let offset = 1;
let limit = 8;

previous.addEventListener('click',() => {
    if (offset != 1){
        offset -= 9;
        
    poksf(offset, limit);
    }
})

next.addEventListener('click',() => {
    offset +=9;
   
    poksf(offset, limit);
})

function pokef(id) { 
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then ((data) =>{
        mostrarpoke(data); 
    });    
}

function poksf(offset, limit){
    
    for (let i=offset; i<= offset + limit; i++){
        pokef(i);
    }
}

function mostrarpoke(poke){
    
    
    const inf =document.createElement("div");
    inf.classList.add("poke-cont");

    const spriteCont= document.createElement("div");
    spriteCont.classList.add("img-cont");

    const sprite = document.createElement("img");
    sprite.src=poke.sprites.front_default;

    spriteCont.appendChild(sprite);

    const number = document.createElement("p");
    number.textContent = `#${poke.id.toString().padStart(3,0)}`;

    const name = document.createElement("p");
    name.classList.add("name");
    name.textContent = poke.name

    inf.appendChild(spriteCont);
    inf.appendChild(number);
    inf.appendChild(name);  

    const perfilcont = document.createElement("div");
    perfilcont.classList.add("perfil-cont");

    const perfilB = document.createElement("div");
    perfilB.classList.add("poke-block-b");
    perfilB.appendChild(statcaract(poke.stats));
   
    perfilcont.appendChild(perfilB); 
    inf.appendChild(perfilcont);   

    pokeData.appendChild(inf);
    } 

    function statcaract(stats) {
        const statsContainer = document.createElement("div");
        statsContainer.classList.add("stats-container");
      
        for (let i = 0; i < 3; i++) {
          const stat = stats[i];
      
          const statPercent = stat.base_stat;
          const statContainer = document.createElement("stat-container");
          statContainer.classList.add("stat-container");
      
          const statName = document.createElement("p");
          statName.textContent = stat.stat.name;
      
          const progress = document.createElement("div");
          progress.classList.add("progress");
      
          const statb = document.createElement("div");
          statb.style.width = statPercent;
      
          statb.textContent = stat.base_stat;
      
          progress.appendChild(statb);
          statContainer.appendChild(statName);
          statContainer.appendChild(progress);
      
          statsContainer.appendChild(statContainer);
        }
      
        return statsContainer;
      }

 poksf(offset,limit);

