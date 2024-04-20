import { initialPageLoad } from './home';
import { menuLoad } from './menu';
import { aboutLoad } from './about';
import './style.css';

initialPageLoad();

(function tabSwitch() {
    const navButtons = document.querySelectorAll('nav > button');

    const handleClick = (e) => {
        const buttonClicked = e.target.id;
        switch(buttonClicked) {
            case 'menu': menuLoad();
            break;
            case 'about': aboutLoad();
            break;
            case 'home': initialPageLoad();
            break;
        };
    };
    
    const init = () => navButtons.forEach(button => {
        button.addEventListener('click', handleClick);
    });

    init();
})();