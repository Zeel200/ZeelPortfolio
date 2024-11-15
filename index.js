function contact(event) {
     event.preventDefault();
     const loading = document.querySelector('.modal-overlay-loading')
     const success = document.querySelector('.modal-overlay-success')

     emailJs
          .sendForm(
               'service_uddzo3n',
               'template_1mwowx7',
               event.target,
               '-0iCadj9ZE_Ar500e'
          ).then(() => {
               // throw new Error("error")
               loading.classList.remove("modal-overlay-visible")
               success.classList += " modal-overlay-visible"
          }).catch(() => {
               loading.classList.remove("modal-overlay-visible")
               alert(
                    "The email service is temporarily unavailable. Please contact me directly at my email zeelp2026@gmail.com"
               )
          })

     loading.classList += " modal-overlay-visible"
     setTimeout(() => {

          console.log('it worked 1')
     }, 1000);
}