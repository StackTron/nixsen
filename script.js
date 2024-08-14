// Этот файл может быть использован для добавления интерактивности
document.querySelectorAll('.game-button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Вы нажали кнопку играть!');
    });
});