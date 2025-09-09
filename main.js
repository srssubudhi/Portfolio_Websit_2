
document.addEventListener('DOMContentLoaded', function () {
    const phoneElement = document.querySelector('.contact-info li:has(.fa-phone)');
    const emailElement = document.querySelector('.contact-info li:has(.fa-envelope)');
    const copyOnClick = (element) => {
        if (!element) return;
        element.style.cursor = 'pointer';

        element.addEventListener('click', () => {
            const textToCopy = element.textContent.trim();
            const originalHTML = element.innerHTML;
            navigator.clipboard.writeText(textToCopy)
                .then(() => {
                    element.innerHTML = 'Copied!';
                    element.style.color = '#27ae60';
                    setTimeout(() => {
                        element.innerHTML = originalHTML;
                        element.style.color = '';
                    }, 1500);
                })
                .catch(err => {
                    console.error('Failed to copy text: ', err);
                });
        });
    };
    copyOnClick(phoneElement);
    copyOnClick(emailElement);

});
