// 
// 
// 

function contact(event) {
     event.preventDefault();
     emailJs
          .sendForm(
               'service_uddzo3n',
               'template_1mwowx7',
               event.target,
               '-0iCadj9ZE_Ar500e'
          ).then(() => {
               console.log('this worked')
          })
}