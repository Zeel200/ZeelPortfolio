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

let isModalOpen = false
function toggleModal() {
     if (isModalOpen) {
          isModalOpen = false
          return document.body.classList.remove('modal-open')
     }
     isModalOpen = true
     document.body.classList += " modal-open"
}