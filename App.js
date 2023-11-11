const observer = new IntersectionObserver((entries)=>{
    console.log(entries);
    entries.forEach((entry)=>{
        entry.target.classList.toggle('show', entry.isIntersecting)
    })
},
{
    threshold: 0.5,
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe(el));
