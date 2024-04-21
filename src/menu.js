export function menuLoad() {
    const content = document.querySelector('#content');
    const menuContainer = document.createElement('div');

    content.innerHTML = '';
    for(let menuItem = 0; menuItem < 3; menuItem++) {
        const itemContainer = document.createElement('div');
        const title = document.createElement('h3');
        const imgHolder = document.createElement('div');
        const description = document.createElement('p');

        if(menuItem === 0) {
            const menuTitle = document.createElement('h2');

            menuTitle.innerText = 'MENU';
            menuTitle.classList.add('menu-title');
            menuContainer.appendChild(menuTitle);
        }; 

        title.innerText = `Item ${menuItem + 1}`;
        description.innerText = 'Really Really good food...';
        menuContainer.classList.add('menu-container');
        itemContainer.classList.add('menu-item');
        title.classList.add('item-title');
        imgHolder.classList.add('item-img');
        description.classList.add('item-description');

        itemContainer.appendChild(title);
        itemContainer.appendChild(imgHolder);
        itemContainer.appendChild(description);
        menuContainer.appendChild(itemContainer);
        content.appendChild(menuContainer);
    };
}