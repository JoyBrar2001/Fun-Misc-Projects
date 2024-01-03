const texts = document.querySelectorAll('.text');

texts.forEach((text) => {
    const letters = text.innerHTML;
    const letterArray = letters.split('');
    console.log(typeof letters);
    console.log(letterArray);
});