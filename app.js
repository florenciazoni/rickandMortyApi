const cards= document.getElementById('card-dinamicas')
const template= document.getElementById('template-card').content
const fragment= document.createDocumentFragment()

document.addEventListener("DOMContentLoaded", (e) => {
    
   fechData()

  });
  const fechData = async()=>{
/* console.log('obteniendo datos') */



try{
    loadingData(true)
    const res = await fetch("https://rickandmortyapi.com/api/character")
    const data = await res.json()
    console.log(data)
    pintarCard(data)

} catch(error){

}finally{   // se ejecuta si osi 

    loadingData(false)
}

}

const pintarCard = (data) =>{
    /* console.log(data) */
    data.results.forEach(item => {
        const clone = template.cloneNode(true)
        clone.querySelector('h5').textContent= item.name
        clone.querySelector('p').textContent= item.species
        clone.querySelector('img').setAttribute('src', item.image)
        fragment.appendChild(clone)
    });
   cards.appendChild(fragment)
}
  
  const loadingData = (estado)=>{
    const loading= document.querySelector('#loading')
   
    if(estado){
        loading.classList.remove('d-none')
    }else{
      loading.classList.add('d-none')

    }
  }