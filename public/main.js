
// for clicking on the edit button 

let forms = document.querySelectorAll('.forms');
let editBtn = document.querySelectorAll('.editBtn');


for (let i = 0; i < forms.length; i++) {
    editBtn[i].addEventListener('click', () => {

        if (forms[i].style.display == 'inline-block') {
            forms[i].style.display = 'none';
            editBtn[i].innerHTML = 'Edit';
        } else {
            forms[i].style.display = 'inline-block';
            editBtn[i].innerHTML = 'Cancel';
        }



    })





}
