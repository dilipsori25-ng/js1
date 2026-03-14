window.onload = ()=>{
    document.querySelector('.calculate').onclick = CalculateTip;
}

function CalculateTip() {
    let amount=document.querySelector('#bill').value;
    let service=document.querySelector('#select').value;
    let persons=document.querySelector('#persons').value;



if(amount==''&& service=='select'){
    alert("please Enter valid input");

}

if(persons=='1'){
    document.querySelector('.each').style.display='none';

}else{
        document.querySelector('.each').style.display='block';

}

let total=(amount*service)/persons;
total =total.toFixed(2);

document.querySelector('.tip').style.display='block';
document.querySelector('.total').innerHTML=total

}
