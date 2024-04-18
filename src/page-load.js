export function initialPageLoad() {
    const content = document.querySelector('#content');
    const heroContainer = document.createElement('div');
    const heroImg = document.createElement('div');
    const heroTextContainer = document.createElement('div');

    const heroHeader = document.createElement('h2');
    const heroParagraph = document.createElement('p');

    heroContainer.classList.add('hero');
    heroImg.classList.add('hero-img');
    heroTextContainer.classList.add('hero-text-container');

    heroHeader.innerText = 'Try our newest dish!';
    heroParagraph.innerText = 'cas vnsej najaovnw nqejfqe kjfnqiwe nqiweniq  iqnw jdsn jvqnwejfnwejqnfie nei i minima ullam tempora velit laboriosam. Autem excepturi ducimus error. Iste molestiae dicta eligendi perspiciatis.';

    heroContainer.appendChild(heroImg);
    heroContainer.appendChild(heroTextContainer);
    heroTextContainer.appendChild(heroHeader);
    heroTextContainer.appendChild(heroParagraph);
    content.appendChild(heroContainer);
}
