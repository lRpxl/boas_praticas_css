document.querySelectorAll('.produto').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.produto').forEach(prod => {
            prod.classList.remove('em-destaque');
        });
        item.classList.add('em-destaque')
    })
})