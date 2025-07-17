const animalImages = {
  caballo: "imagenes/caballo.jpg",
  perro: "imagenes/perro.jpg",
  gato: "imagenes/gato.jpg",
  pez: "imagenes/pez.jpg",
  tortuga: "imagenes/tortuga.jpg",
  caracol: "imagenes/caracol.jpg",
  cocodrilo: "imagenes/cocodrilo.jpg",
  loro: "imagenes/loro.jpg",
  conejo: "imagenes/conejo.jpg",
  oveja: "imagenes/oveja.jpg",
};

let conjuntoA = [];
let conjuntoB = [];

function addAnimal(conjunto) {
  const selector = document.getElementById('animalSelector');
  const animal = selector.value; 
  const imageSrc = animalImages[animal]; 

  if (conjunto === 'A' && !conjuntoA.includes(animal)) {
      conjuntoA.push(animal);
      addImageToContainer(animal, imageSrc, conjunto);
  } else if (conjunto === 'B' && !conjuntoB.includes(animal)) {
      conjuntoB.push(animal);
      addImageToContainer(animal, imageSrc, conjunto);
  }
}

function addImageToContainer(animal, imageSrc, conjunto) {
  const img = document.createElement('img');
  img.src = imageSrc;
  img.alt = animal;

  const contenedor = document.querySelector(`#conjunto${conjunto} .contenedor`);
  contenedor.appendChild(img);
  updateOperaciones(); 
}

function clearContainer(conjuntoId) {
  const container = document.getElementById(`conjunto${conjuntoId}`);
  if (container) {
      container.innerHTML = '';
  }
}

function updateOperaciones() {
  const union = [...new Set([...conjuntoA, ...conjuntoB])];
  const interseccion = conjuntoA.filter(animal => conjuntoB.includes(animal));
  const diferenciaA = conjuntoA.filter(animal => !conjuntoB.includes(animal));
  const diferenciaB = conjuntoB.filter(animal => !conjuntoA.includes(animal));

  document.getElementById('union').innerText = union.join(' - ');
  document.getElementById('interseccion').innerText = interseccion.join(' - ');
  document.getElementById('diferenciaA').innerText = diferenciaA.join(' - ');
  document.getElementById('diferenciaB').innerText = diferenciaB.join(' - ');
}