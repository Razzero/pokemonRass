
async function fetchName(){
  try {
    let pokemonName = document.getElementById("name").value.toLowerCase();
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    
    if(!res.ok){
      throw new Error("Mama mo Fetch");
    }
    
    const data = await res.json();
    const imgSprites = data.sprites.front_default;
    const pokeName = data.name;
    const pokeHeight = data.height;
    const pokeId = data.id;
    const sAbility = data.abilities[0].ability.name;
    const cAbility = data.abilities[1].ability.name;
    console.log(data)
    const image = document.getElementById("image");
    const name = document.getElementById("pakename");
    
    image.src = imgSprites;
    name.innerText = 
    "Name: " + pokeName.charAt(0).toUpperCase() + pokeName.slice(1) + "\n" + 
    "Height: " + pokeHeight + "\n" +
    "Special Ability: " + sAbility.charAt(0).toUpperCase() + sAbility.slice(1) + "\n" +
    "Common Ability: " + cAbility.charAt(0).toUpperCase() + cAbility.slice(1) + "\n";
    image.style.opacity = "1";
    name.style.opacity = "1";
  }
  catch(error){
    console.error(error)
    name.innerText = "lol"
    image.style.opacity = "1";
    name.style.opacity = "1";
  }
}

function next(){
  
}