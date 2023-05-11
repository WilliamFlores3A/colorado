const API_URL = 'http://localhost:3000/api/calcule'

const gender = document.getElementById("gender").value;
const height = document.getElementById("height").value;
const age = document.getElementById("age").value;

const payload = {
  gender: 'm',//M masculino F femenino todo minuscula
  height: 155, // dada en centimetros
  age: 25
}

const options = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(payload)
}

fetch(API_URL, options)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))
  
// Obtener los datos de la API
fetch(API_URL, options)
  .then(res => res.json())
  .then(data => {
    // Crear los elementos necesarios para la línea de tiempo
    const timeline = document.getElementById('timeline');
    const minimumWeightElement = document.createElement('div');
    const mediumWeightElement = document.createElement('div');
    const overWeightElement = document.createElement('div');
    const maximumWeightElement = document.createElement('div');

    // Asignar clases y estilos a los elementos
    minimumWeightElement.classList.add('weight', 'minimum');
    minimumWeightElement.style.left = '0%';
    mediumWeightElement.classList.add('weight', 'medium');
    mediumWeightElement.style.left = '25%';
    overWeightElement.classList.add('weight', 'over');
    overWeightElement.style.left = '50%';
    maximumWeightElement.classList.add('weight', 'maximum');
    maximumWeightElement.style.left = '75%';

    // Agregar los elementos a la línea de tiempo
    timeline.appendChild(minimumWeightElement);
    timeline.appendChild(mediumWeightElement);
    timeline.appendChild(overWeightElement);
    timeline.appendChild(maximumWeightElement);

    // Mostrar los resultados en la línea de tiempo
    minimumWeightElement.innerHTML = `<div class="weight-label">Bajo peso</div><div class="weight-value">${data.minimumWeight.toFixed(2)} kg</div>`;
    mediumWeightElement.innerHTML = `<div class="weight-label">Peso saludable</div><div class="weight-value">${data.medium.toFixed(2)} kg</div>`;
    overWeightElement.innerHTML = `<div class="weight-label">Sobrepeso</div><div class="weight-value">${data.overWeight.toFixed(2)} kg</div>`;
    maximumWeightElement.innerHTML = `<div class="weight-label">Obesidad</div><div class="weight-value">${data.maximumWeight.toFixed(2)} kg</div>`;
  })
  .catch(err => console.log(err));