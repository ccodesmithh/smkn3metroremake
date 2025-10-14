const btnCtn1 = document.getElementById('btnCtn1')
const btnCtn2 = document.getElementById('btnCtn2')
const btnCtn3 = document.getElementById('btnCtn3')
const btnCtn4 = document.getElementById('btnCtn4')
const btnCtn5 = document.getElementById('btnCtn5')
const btnCtn6 = document.getElementById('btnCtn6')
btnCtn2.style.backgroundColor = '#00a86b'
btnCtn2.style.color = '#ffff'

const allContent = document.querySelectorAll('content-card')

const content1 = document.getElementById('RPL')
const content2 = document.getElementById('TKL')
const content3 = document.getElementById('TKJ')
const content4 = document.getElementById('DKV')
const content5 = document.getElementById('umum')

const buttons = [btnCtn1, btnCtn2, btnCtn3, btnCtn4, btnCtn5 , btnCtn6];
const Jurusan = [content1, content2, content3, content4 , content5];

Jurusan.forEach(el=>{
        el.style.marginTop = ""
    })

const contentContainers = document.querySelectorAll('.content-card-container');

btnCtn1.addEventListener('click', function () {
    Jurusan.forEach(el=>{
        el.style.marginTop = "2.5rem"
    })
     content1.style.marginTop = ""
    buttons.forEach(el=>{
         el.style.backgroundColor = ''
         el.style.color = ''
    })
    btnCtn1.style.backgroundColor = '#00a86b'
    btnCtn1.style.color = '#ffff'
    // Tampilkan semua container
    content1.style.display = 'grid'
    content2.style.display = 'grid'
    content3.style.display = 'grid'
    content4.style.display = 'grid'
    content5.style.display = 'grid'

    // Sembunyikan animasi dulu (reset)
    const allCards = document.querySelectorAll('.content-card');
    allCards.forEach(card => {
        card.classList.remove('active');
    });

    // Tambahkan animasi dengan sedikit delay
    setTimeout(() => {
        allCards.forEach(card => {
            card.classList.add('active');
        });
    }, 10);
});
btnCtn2.addEventListener('click', function () {
    Jurusan.forEach(el=>{
        el.style.marginTop = ""
    })
    
    buttons.forEach(el=>{
         el.style.backgroundColor = ''
         el.style.color = ''
    })
    btnCtn2.style.backgroundColor = '#00a86b'
    btnCtn2.style.color = '#ffff'
    // Tampilkan semua container
    content1.style.display = 'grid'
    content2.style.display = 'none'
    content3.style.display = 'none'
    content4.style.display = 'none'
    content5.style.display = 'none'

    // Sembunyikan animasi dulu (reset)
    const allCards = document.querySelectorAll('.content-card');
    allCards.forEach(card => {
        card.classList.remove('active');
    });

    // Tambahkan animasi dengan sedikit delay
    setTimeout(() => {
        allCards.forEach(card => {
            card.classList.add('active');
        });
    }, 10);
});
btnCtn3.addEventListener('click', function () {
    Jurusan.forEach(el=>{
        el.style.marginTop = ""
    })
    
    buttons.forEach(el=>{
         el.style.backgroundColor = ''
         el.style.color = ''
    })
    btnCtn3.style.backgroundColor = '#00a86b'
    btnCtn3.style.color = '#ffff'
    // Tampilkan semua container
    content1.style.display = 'none'
    content2.style.display = 'grid'
    content3.style.display = 'none'
    content4.style.display = 'none'
    content5.style.display = 'none'

    // Sembunyikan animasi dulu (reset)
    const allCards = document.querySelectorAll('.content-card');
    allCards.forEach(card => {
        card.classList.remove('active');
    });

    // Tambahkan animasi dengan sedikit delay
    setTimeout(() => {
        allCards.forEach(card => {
            card.classList.add('active');
        });
    }, 10);
});
btnCtn4.addEventListener('click', function () {
    Jurusan.forEach(el=>{
        el.style.marginTop = ""
    })
    
    buttons.forEach(el=>{
         el.style.backgroundColor = ''
         el.style.color = ''
    })
    btnCtn4.style.backgroundColor = '#00a86b'
    btnCtn4.style.color = '#ffff'
    // Tampilkan semua container
    content1.style.display = 'none'
    content2.style.display = 'none'
    content3.style.display = 'grid'
    content4.style.display = 'none'
    content5.style.display = 'none'

    // Sembunyikan animasi dulu (reset)
    const allCards = document.querySelectorAll('.content-card');
    allCards.forEach(card => {
        card.classList.remove('active');
    });

    // Tambahkan animasi dengan sedikit delay
    setTimeout(() => {
        allCards.forEach(card => {
            card.classList.add('active');
        });
    }, 10);
});
btnCtn5.addEventListener('click', function () {
    buttons.forEach(el=>{
         el.style.backgroundColor = ''
         el.style.color = ''
    })
    btnCtn5.style.backgroundColor = '#00a86b'
    btnCtn5.style.color = '#ffff'
    // Tampilkan semua container
    content1.style.display = 'none'
    content2.style.display = 'none'
    content3.style.display = 'none'
    content4.style.display = 'grid'
    content5.style.display = 'none'

    // Sembunyikan animasi dulu (reset)
    const allCards = document.querySelectorAll('.content-card');
    allCards.forEach(card => {
        card.classList.remove('active');
    });

    // Tambahkan animasi dengan sedikit delay
    setTimeout(() => {
        allCards.forEach(card => {
            card.classList.add('active');
        });
    }, 10);
});
btnCtn6.addEventListener('click', function () {
    buttons.forEach(el=>{
         el.style.backgroundColor = ''
         el.style.color = ''
    })
    btnCtn6.style.backgroundColor = '#00a86b'
    btnCtn6.style.color = '#ffff'
    // Tampilkan semua container
    content1.style.display = 'none'
    content2.style.display = 'none'
    content3.style.display = 'none'
    content4.style.display = 'none'
    content5.style.display = 'grid'

    // Sembunyikan animasi dulu (reset)
    const allCards = document.querySelectorAll('.content-card');
    allCards.forEach(card => {
        card.classList.remove('active');
    });

    // Tambahkan animasi dengan sedikit delay
    setTimeout(() => {
        allCards.forEach(card => {
            card.classList.add('active');
        });
    }, 10);
});
