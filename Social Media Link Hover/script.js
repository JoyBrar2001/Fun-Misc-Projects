const links = document.querySelectorAll('.link');

links.forEach((link) => {
    const text = link.querySelector('.text');
    let letters = text.textContent;
    let letterArray = letters.split('');
    text.innerHTML = '';

    letterArray.filter((char) => char !== ' ').forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.transitionDelay = `${index * 0.05}s`;
        text.appendChild(span);
    });

    link.addEventListener('mouseenter', () => {
        text.querySelectorAll('span').forEach((span) => {
            span.style.opacity = 1;
            span.style.transform = 'translateY(0)';
        });
    });
    
    link.addEventListener('mouseleave', () => {
        text.querySelectorAll('span').forEach((span) => {
            span.style.opacity = 0;
            span.style.transform = 'translateY(100%)';
        });
    });
});