const qrInput = document.querySelector(".qr-input");
const qrButton = document.querySelector(".qr-button");
const qrContainer = document.querySelector(".qr-container");
const qrImage =  document.querySelector(".qr-container img");

qrButton.addEventListener("click" , qrShow);

function qrShow (){

    let qrValue = qrInput.value;
    if(!qrValue){
        return alert("لطفا یک متنی رو وارد کن");
    }

    qrButton.innerHTML="در حال دریافت QR Code";

    qrImage.src =`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;

    qrImage.addEventListener("load" , () => {
        qrContainer.classList.remove('hidden');
    qrButton.innerHTML="تولید QR Code";
    });
}
qrInput.addEventListener("keyup", ()=>{
    if(!qrInput.value){
        qrContainer.classList.add('hidden');
        
    }
});