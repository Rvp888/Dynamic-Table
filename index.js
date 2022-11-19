
const userForm = document.querySelector('#user_form');
const nameInput = document.querySelector('#name_input');
const emailInput = document.querySelector('#email_input');
const numberInput = document.querySelector('#number_input');
const submit = document.querySelector('#submit');
const message1 = document.querySelector('.message1');
const message2 = document.querySelector('.message2');
const detailsTable = document.querySelector('.details_table');

userForm.addEventListener('submit',(event)=>{
    event.preventDefault();
})

submit.addEventListener('click',updateDetails);

function updateDetails(){
    
    if(nameInput.value == "" || emailInput.value == "" || numberInput.value == ""){
        message1.innerText = "Empty Input Field(s)";
        setTimeout(()=>{
            message1.innerText = "";
        },2000);
    }
    else{
        const newRow = document.createElement('tr');
        const name = document.createElement('td');
        const email = document.createElement('td');
        const phone = document.createElement('td');
        const deleteBtn = document.createElement('td');

        deleteBtn.classList.add('delete');

        name.innerText = nameInput.value;
        email.innerText = emailInput.value;
        phone.innerText = numberInput.value;
        deleteBtn.innerText = 'Remove';

        newRow.appendChild(name);
        newRow.appendChild(email);
        newRow.appendChild(phone);
        newRow.appendChild(deleteBtn);

        detailsTable.appendChild(newRow);

        nameInput.value = "", emailInput.value = "", numberInput.value = "";

        deleteBtn.addEventListener('click',() => {
            newRow.remove();
            message2.innerText = "Item deleted Successfully!";
            setTimeout(()=>{
                message2.innerText = "";
            },2000);
        })
    }

}