const paneller = document.querySelectorAll(".panel");

paneller.forEach(panel => {
    panel.addEventListener('click', () =>{
        aktifiDurdur()
        panel.classList.add('active')
    })
});

function aktifiDurdur(){
    paneller.forEach(panel => {
panel.classList.remove('active')
    })
}