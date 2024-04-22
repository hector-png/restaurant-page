export function aboutLoad() {
    const content = document.querySelector('#content');
    content.innerHTML = '';
    for(let containers = 0; containers < 2; containers++) {
        const container = document.createElement('div');
        const header = document.createElement('h2');

        if(containers === 0) {
           const contactPhone = document.createElement('p');
           const contactEmail = document.createElement('p');

           header.innerText = 'Contact';
           contactPhone.innerText = 'phone: 4949-494-4949';
           contactEmail.innerText = 'email: sodasopa@service.com';

           header.classList.add('contact-title');
           container.classList.add ('contact-info');
           contactPhone.classList.add('contact-phone');
           contactEmail.classList.add('contact-email');

           container.appendChild(header);
           container.appendChild(contactPhone);
           container.appendChild(contactEmail);
           content.appendChild(container);
        } else {
            const mapPlaceholder = document.createElement('div');
            const addressTitle = document.createElement('span');

            addressTitle.innerText = 'Address:';
            header.appendChild(addressTitle);
            //Fix below code
            header.innerContent = `food district 4349 Keith st, KN, 30030`;
            mapPlaceholder.innerText = 'cool looking map...';

            header.classList.add('address');
            addressTitle.classList.add('address-title');
            mapPlaceholder.classList.add('map-placeholder');
            container.classList.add('address-info');

            container.appendChild(header);
            container.appendChild(mapPlaceholder);

            content.appendChild(container);
        };
    };
};