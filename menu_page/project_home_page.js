// script.js
window.onscroll = function() {
    var header = document.querySelector('.header');
    
    if (window.scrollY > 100) {
        header.classList.add('scrolled'); // إضافة الخلفية البنية
    } else {
        header.classList.remove('scrolled'); // إزالة الخلفية البنية
    }
};
