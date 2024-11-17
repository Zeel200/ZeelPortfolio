let isModalOpen = false
let contrastToggle = false
const scaleFactor = 1/20

function moveBackground(event) {
     const shapes = document.querySelectorAll(".shape")
     const x = event.clientX * scaleFactor
     const y = event.clientY * scaleFactor
     
     for (let i = 0; i < shapes.length; i++) {
          const isOdd = i % 2 !== 0
          const boolInt = isOdd ? -1 : 1
          shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
     }
}

function toggleContrast() {
     contrastToggle = !contrastToggle

     if (contrastToggle) {
     document.body.classList += " dark-theme"
     }

     else {
          document.body.classList.remove("dark-theme")
     }
}

function contact(event) {
     event.preventDefault();
     const loading = document.querySelector('.modal-overlay-loading')
     const success = document.querySelector('.modal-overlay-success')
     loading.classList += " modal-overlay-visible"
     emailjs
          .sendForm(
               'service_uddzo3n',
               'template_1mwowx7',
               event.target,
               '-0iCadj9ZE_Ar500e'
          ).then(() => {
               loading.classList.remove("modal-overlay-visible")
               success.classList += " modal-overlay-visible"
          }).catch(() => {
               loading.classList.remove("modal-overlay-visible")
               alert(
                    "The email service is temporarily unavailable. Please contact me directly at my email zeelp2026@gmail.com"
               )
          })
}

function toggleModal() {
     if (isModalOpen) {
          isModalOpen = false
          return document.body.classList.remove('modal-open')
     }
     isModalOpen = true
     document.body.classList += " modal-open"
}