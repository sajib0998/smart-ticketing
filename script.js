// let sum =0;
// function handleSit(){
//     const a1 = document.getElementById('A1');
//     a1.classList.add('bg-[#1DD100]');
//     a1.classList.add('text-white')
//     const text = a1.innerText;
//     const mainText = text;


//     // dubbole click
//     let a = 1;
//     a1.addEventListener('click',()=>{
//         a++;
//         if(a === 2){
//             alert("You cannot click a button twice")
//             location.reload();
//         }
//     })

//    

                                    // start
function buyTickets(){
        const targetSection = document.getElementById('green-line');
        targetSection.scrollIntoView({behavior:"smooth"});
}

    const allSit = document.getElementsByClassName('kbd');
 
    for(let sit of allSit){
  
        sit.addEventListener("click", function(event){
 
             // add number
             const totalSit = document.getElementById('add-number').innerText;
           
             if(totalSit == 4){
                 alert("You can buy only four tickets.")
                 return;
             }
               

            sit.classList.add('bg-[#1DD100]');
            sit.classList.add('text-white');

            const name = event.target.innerText;

            const divName = document.getElementById('div-name');
            const p1 = document.createElement('p');
            p1.innerText = name;
            const p2 = document.createElement('p');
            p2.innerText = 'Economy';
            const p3 = document.createElement('p');
            p3.innerText = 550;
            divName.appendChild(p1);
            divName.appendChild(p2);
            divName.appendChild(p3);

            // remove sit numbers
            const mainSit = document.getElementById('total-sit');
            const mainSitValue = mainSit.innerText;
            const newSit = mainSitValue - 1;
            mainSit.innerText = newSit;

              
            // add sit numbers
            const addNumber = document.getElementById('add-number');
            const addNumberValue = addNumber.innerText;
            const newNumber = parseInt(addNumberValue) + 1;
            addNumber.innerText = newNumber;
            
            // add total price
            const totalPrice = document.getElementById('total-price');
            const totalPriceValue = totalPrice.innerText;
            const newPrice = parseInt(totalPriceValue) + 550;
            totalPrice.innerText = newPrice;
            // add grand total
            const grandTotal = document.getElementById('Grand-total');
            const grandTotalValue = grandTotal.innerText;
            grandTotal.innerText = totalPrice.innerText;
               
        })
                                                          //  ekta itcket ekbar e kinte parba
            
let a = 0;
sit.addEventListener('click',()=>{
    a++;
    if(a + 1 > 2){
        alert("You cannot click a button twice")
     location.reload()
    }
})
    }


    function applyBtn(){
        const grandTotal = document.getElementById('Grand-total');
        const grandTotalValue = grandTotal.innerText
        const input = document.getElementById('cupon-input');
        if(input.value === 'NEW15'){
        const grandTotalDiscount = grandTotalValue - (grandTotalValue * 0.15);
        grandTotal.innerText = grandTotalDiscount;
        }
        else if(input.value === 'Couple 20'){
            const grandTotalDiscount2 = grandTotalValue - (grandTotalValue * 0.20);
            grandTotal.innerText = grandTotalDiscount2;
            }
   
    }

// remove disabled button
document.getElementById('cupon-input').addEventListener('keyup', function(){
    const input = document.getElementById('cupon-input');
    const grandTotal = document.getElementById('Grand-total')
    const inputValue = input.value;
    const applyBtn = document.getElementById('apply-btn')
    if((input.value === 'Couple 20' || input.value === 'NEW15') && grandTotal.innerText > 0 ){
        applyBtn.disabled = false;
     }
})

document.getElementById('ph-num').addEventListener('keyup', function(){
    const next = document.getElementById('next-btn');
    const phone = document.getElementById('ph-num');
    const grandTotal = document.getElementById('Grand-total')
    const phoneValue = phone.value;
    if(phone.value.length === 11 && grandTotal.innerText > 0){
        next.disabled = false;
    }
})

