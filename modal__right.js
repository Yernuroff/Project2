// var modal = document.getElementById("modal");
// var modalBackground = document.getElementById("modalBackground");

// function showModal() {
//   modal.style.display = "block";
//   modalBackground.style.display = "block";
// }


// function closeModal() {
//   modal.style.display = "none";
//   modalBackground.style.display = "none";
// }


// modalBackground.onclick = function() {
//   closeModal();
// }


document.addEventListener("DOMContentLoaded", function() {
  var modal = document.getElementById("modal");
  var modalBackground = document.getElementById("modalBackground");

  // Функция для отображения модального окна
  function showModal() {
      modal.style.display = "block";
      modalBackground.style.display = "block";
  }

  // Отображение модального окна при загрузке страницы
  showModal();
});
