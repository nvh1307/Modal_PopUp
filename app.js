var modalOpen = document.querySelector('.open-modal-btn')
var modal = document.querySelector('.modal')
var closeIcon = document.querySelector('.modal-header i')
var closeBtn = document.querySelector('.modal-footer button')

function toggleModal(){
    modal.classList.toggle('hiden')
}

modalOpen.addEventListener('click',toggleModal)
closeIcon.addEventListener('click',toggleModal)
closeBtn.addEventListener('click',toggleModal)
modal.addEventListener('click',function(e){
    if(e.target == e.currentTarget){
        toggleModal()
    }
})
