const startButton = document.querySelector('.start-button');

startButton.addEventListener('click', () => {
    // Display a basic menu
    const menu = document.createElement('div');
    menu.innerHTML = `
        <ul>
            <li>Programs</li>
            <li>Documents</li>
            <li>Pictures</li>
        </ul>
    `;
    menu.style.position = 'absolute';
    menu.style.top = '40px';
    menu.style.left = '0';
    menu.style.background = '#fff';
    menu.style.padding = '10px';
    menu.style.border = '1px solid #ddd';
    document.body.appendChild(menu);
});
