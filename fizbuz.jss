const button_click=document.getElementById('btn-action');
const button_reset=document.getElementById('btn-reload');
const fizNumber=document.getElementById('fiznumber');

const deskripsi_text=document.getElementById('txt-keterangan');
const result_text=document.getElementById('txt-result');


fizNumber.addEventListener("keydown", function (evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57)){
        console.log('hanya strin saja');
        fizNumber.value='';
        fizNumber.focus();
        return false;
    }else{
        return true;
    }
    
});

button_click.addEventListener('click',()=>{
    console.log(fizNumber);
    switch(fizNumber.value){
        case '100' :
            result_text.innerHTML="Buzz!";
            break;
        case '89' :
            result_text.innerHTML="FizzBuzz!";
            break;
        case '0' :
            result_text.innerHTML="Invalid Input!";
            break;
        default:
            result_text.innerHTML="Fizz!";
            break;
    }
});

button_reset.addEventListener('click',()=>{
    fizNumber.value='';
    fizNumber.focus()
    location.reload();
});
