// Пока нет функциональности JS для игр, добавьте её здесь
//JS для описания - при наведении мышкой открывается подробное описание

const gameDescriptions = document.querySelectorAll('.game-description');

gameDescriptions.forEach(description => {
  // Store the original short description
  const originalDescription = description.textContent; 

  description.addEventListener('mouseover', () => {
    description.textContent = description.parentNode.dataset.fullDescription;
  });

  description.addEventListener('mouseout', () => {
    description.textContent = originalDescription;
  });
});
