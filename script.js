//Descripción general: Este codigo gestiona dos conjuntos de animales y realiza operaciones
//entre ellos Unión, Intersección, Diferencia

//El objeto "animalImages" guarda los nombres de sus animales y sus imagenes
//Sirve para saber que imagen va mostrar cuando selecciona un animal
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

//Crea dos grupos "conjuntoA", "conjuntoB" donde se guardan los animales que van agregando a cada grupo
let conjuntoA = [];
let conjuntoB = [];

//La función "addAnimal(conjunto)" se utiliza para agregar un animal a uno de los dos grupos 
//(Conjunto A y B) en un programa interactivo. También se asegura de que no se repitan 
//los animales dentro de un mismo grupo y muestra la imagen del animal correspondiente en l pantalla.
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

//Coloca la imagen del animal en la página web dentro de los conjuntos A o B 
//y actualiza las operaciones matemáticas entre los conjuntos para que se
//pueda ver los cambios en tiempo real
function addImageToContainer(animal, imageSrc, conjunto) {
  const img = document.createElement('img');
  img.src = imageSrc;
  img.alt = animal;

  const contenedor = document.querySelector(`#conjunto${conjunto} .contenedor`);
  contenedor.appendChild(img);
  Operaciones(); 
}

//Calcula y muestra operaciones de conjuntos (unión, intersección y diferencias) 
//entre el conjunto A y B. Una vez calculadas las operaciones, 
//actualiza el contenido de elementos en la página web y da a conocer los resultados.
function Operaciones() {
  const union = [...new Set([...conjuntoA, ...conjuntoB])]; // Union: Combina todos los elementos de los conjuntos A y B, eliminando duplicados mediante un "Set"
  const interseccion = conjuntoA.filter(animal => conjuntoB.includes(animal)); // Interseccion: Encuentra los elementos comunes entre los conjuntos A y B
  const diferenciaA = conjuntoA.filter(animal => !conjuntoB.includes(animal)); // DiferenciaA: Pone los elementos del conjunto A pero no en B
  const diferenciaB = conjuntoB.filter(animal => !conjuntoA.includes(animal)); // DiferenciaB: Pone los elementos del conjunto B pero no en A
  
  document.getElementById('union').innerText = union.join(' - ');
  document.getElementById('interseccion').innerText = interseccion.join(' - ');
  document.getElementById('diferenciaA').innerText = diferenciaA.join(' - ');
  document.getElementById('diferenciaB').innerText = diferenciaB.join(' - ');
  }