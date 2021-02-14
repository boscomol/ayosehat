// Button ScrollToTop
const scrollToTop = document.querySelector('#scrollToTop');

scrollToTop.addEventListener('click', function() {
    window.scrollTo(0, 0);
})
// Scrolling
window.addEventListener('scroll', function() {
    let btnScrollToTop = document.querySelector('#scrollToTop');
    let windowPosition = window.ScrollY > 0;

    btnScrollToTop.classList.toggle('scrollToTop-active', windowPosition);
})

