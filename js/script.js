// sticky top affect 

window.addEventListener('scroll', function(){
    let header = document.querySelector('header');

        header.classList.toggle('scroll-active', window.scrollY > 0)
    
})

