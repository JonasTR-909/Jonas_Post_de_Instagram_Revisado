// Selección de elementos del DOM
const feedbackCount = document.getElementById('feedbackCount');
const imageButton = document.getElementById('imageButton');
const likeButton = document.getElementById('likeButton');
const heartIcon = document.querySelector('.heart-back-icon');
const likeIcon = document.querySelector('.like-back-icon');

// Convierte texto en número, eliminando comas o puntos
let count = parseInt(feedbackCount.textContent.replace(/,./g, ''), 10);

// Función: Incrementa (duplicando) el contador de likes y actualiza el texto 
function incrementLikes() {
    count *= 2;
    feedbackCount.textContent = count.toLocaleString();
}

// Función GENÉRICA para ambos iconos (heart / like): Muestra el ícono temporalmente
function showIcon(iconElement, duration) {
    iconElement.classList.add('show'); // agrega la clase 'show' para editar en CSS
    setTimeout(() => iconElement.classList.remove('show'), 250);
}

// Función: Manejo del clic en la imagen
function handleImageClick() {
    showIcon(heartIcon, 400); // Muestra el ícono
    incrementLikes(); // Incrementa contador
}

// Función: Manejo del clic en el botón "like"
function handleLikeClick() {
    showIcon(likeIcon, 250); // Muestra ícono sólido
    incrementLikes(); // Incrementa contador
}

// Eventos: Asigna las funciones a los elementos
imageButton.addEventListener('click', handleImageClick);
likeButton.addEventListener('click', handleLikeClick);

















// // Incrementa el contador de likes
// const feedbackCount = document.getElementById('feedbackCount');
// let count = parseInt(feedbackCount.textContent.replace(/,/g, ''), 10); // Convierte texto en número

// function incrementLikes() {
//     count *= 2; // Aumenta el contador
//     feedbackCount.textContent = count.toLocaleString(); // Actualiza el texto del contador
// }


// // Click en imagen --> muestra icono (heart solid) transparente 
// function showHeart() {
//     const heartIcon = document.querySelector('.heart-back-icon'); // Selecciona el ícono
//     heartIcon.classList.add('show'); // Muestra el ícono agregando la clase "show"
//     setTimeout(() => heartIcon.classList.remove('show'), 400); // Lo oculta después de 400ms
// }

// // Click en imagen (agrega un EVENTO) --> Suma likes
// const imageButton = document.getElementById('imageButton');
// imageButton.addEventListener('click', () => {
//     showHeart(); // Muestra el ícono transparente al hacer clic en la foto
//     incrementLikes(); // Incrementa el contador
// });


//     // ClicK en botón "like" --> Rellena el ícono (heart solid)
// function showLike() {
//     const likeIcon = document.querySelector('.like-back-icon'); // Selecciona el ícono
//     likeIcon.classList.add('show'); // Muestra el ícono agregando la clase "show"
//     setTimeout(() => likeIcon.classList.remove('show'), 400); // Lo oculta después de 400ms
// }

// // Click sobre el icono (agrega un EVENTO) --> Suma likes
// const likeButton = document.getElementById('likeButton');
// likeButton.addEventListener('click', () => {
//     showLike(); // Muestra el ícono sólido al hacer clic en el botón "like"
//     incrementLikes(); // Incrementa el contador
// });












//     // Obtener elementos del DOM
// const imageButton = document.getElementById('imageButton');
// const likeButton = document.getElementById('likeButton');
// const feedbackCount = document.getElementById('feedbackCount');

// // Convertir texto en número
// let count = parseInt(feedbackCount.textContent.replace(/,/g, ''), 10);



// // Función para mostrar el ícono al hacer clic en la foto
// function showHeart() {
//     const heartIcon = document.querySelector('.heart-back-icon'); // Selecciona el ícono
//     heartIcon.classList.add('show'); // Muestra el ícono agregando la clase "show"
//     setTimeout(() => heartIcon.classList.remove('show'), 400); // Lo oculta después de 400ms
// }

// // Agregar eventos a los botones
// imageButton.addEventListener('click', () => {
//     showHeart(); // Muestra el ícono transparente al hacer clic en la foto
//     incrementLikes(); // Incrementa el contador
// });



//     // Función para mostrar el ícono al hacer clic en el botón "like"
// function showLike() {
//     const likeIcon = document.querySelector('.like-back-icon'); // Selecciona el ícono
//     likeIcon.classList.add('show'); // Muestra el ícono agregando la clase "show"
//     setTimeout(() => likeIcon.classList.remove('show'), 400); // Lo oculta después de 400ms
// }

// likeButton.addEventListener('click', () => {
//     showLike(); // Muestra el ícono sólido al hacer clic en el botón "like"
//     incrementLikes(); // Incrementa el contador
// });



//     // Función para incrementar el contador de likes
//     function incrementLikes() {
//         count *= 2; // Aumenta el contador
//         feedbackCount.textContent = count.toLocaleString(); // Actualiza el texto del contador
//     }