let sum =0;
function handleSit(){
    const a1 = document.getElementById('A1');
    a1.classList.add('bg-[#1DD100]');
    a1.classList.add('text-white')
    const text = a1.innerText;
    const mainText = text;


    // dubbole click
    let a = 1;
    a1.addEventListener('click',()=>{
        a++;
        if(a === 2){
            alert("You cannot click a button twice")
            location.reload();
        }
    })

    // create element
    const divName = document.getElementById('div-name')
     const p = document.createElement('p')
     

     divName.appendChild(p)
     p.innerText = mainText + " " + 'Economy' + ' ' + 550;

    // remove

    let totalSit = document.getElementById('total-sit');
    let total = totalSit.innerText;
    let mainTotal = parseInt(total);
    let he = mainTotal - 1;
    totalSit.innerText = he;

    // add
    let add = document.getElementById('add-number');
    let addText = add.innerText;
    let addNumber = parseInt(addText);
    let added = addNumber + 1;
    add.innerText = added;
    if(add.innerText === '5'){
        alert('you can purchases only 4 ticket')
        location.reload();
    }

    // added price
    let pr = 550;
    let price = document.getElementById('total-price');
    let priceValue = price.innerText;
    sum = parseFloat(price.innerText) + pr;
    price.innerText = sum;

    // grand total
    const grandTotal = document.getElementById('Grand-total');
    const grandValue = grandTotal.innerText;
    grandTotal.innerText = sum;
     
}


                                // a2
function handleSitA2(){
    const a1 = document.getElementById('A2');
    a1.classList.add('bg-[#1DD100]');
    a1.classList.add('text-white')
    const text = a1.innerText;
    const mainText = text;

    // create element
    const divName = document.getElementById('div-name')
     const p = document.createElement('p')
     p.classList.add('mr-10')
     divName.appendChild(p)
     p.innerText = mainText + " " + 'Economy' + ' ' + 550;
    //  part
     // remove

     let totalSit = document.getElementById('total-sit');
     let total = totalSit.innerText;
     let mainTotal = parseInt(total);
     let he = mainTotal - 1;
     totalSit.innerText = he;
 
     // add
     let add = document.getElementById('add-number');
     let addText = add.innerText;
     let addNumber = parseInt(addText);
     let added = addNumber + 1;
     add.innerText = added;
     if(add.innerText === '5'){
         alert('you can purchases only 4 ticket')
         location.reload();
     }

         // dubbole click
    let a = 1;
    a1.addEventListener('click',()=>{
        a++;
        if(a === 2){
            alert("You cannot click a button twice")
            location.reload();
        }
    })
 
     // added price
     let pr = 550;
     let price = document.getElementById('total-price');
     let priceValue = price.innerText;
     sum = parseFloat(price.innerText) + pr;
     price.innerText = sum;
 
     // grand total
     const grandTotal = document.getElementById('Grand-total');
     const grandValue = grandTotal.innerText;
     grandTotal.innerText = sum;
      
     
}

// a3

function handleSitA3(){
    const a1 = document.getElementById('A3');
    a1.classList.add('bg-[#1DD100]');
    a1.classList.add('text-white')
    const text = a1.innerText;
    const mainText = text;

    // create element
    const divName = document.getElementById('div-name')
     const p = document.createElement('p')
     p.classList.add('mr-10')
     divName.appendChild(p)
     p.innerText = mainText + " " + 'Economy' + ' ' + 550;
    //  part
     // remove

     let totalSit = document.getElementById('total-sit');
     let total = totalSit.innerText;
     let mainTotal = parseInt(total);
     let he = mainTotal - 1;
     totalSit.innerText = he;
 
     // add
     let add = document.getElementById('add-number');
     let addText = add.innerText;
     let addNumber = parseInt(addText);
     let added = addNumber + 1;
     add.innerText = added;
     if(add.innerText === '5'){
         alert('you can purchases only 4 ticket')
         location.reload();
     }

         // dubbole click
    let a = 1;
    a1.addEventListener('click',()=>{
        a++;
        if(a === 2){
            alert("You cannot click a button twice")
            location.reload();
        }
    })
 
     // added price
     let pr = 550;
     let price = document.getElementById('total-price');
     let priceValue = price.innerText;
     sum = parseFloat(price.innerText) + pr;
     price.innerText = sum;
 
     // grand total
     const grandTotal = document.getElementById('Grand-total');
     const grandValue = grandTotal.innerText;
     grandTotal.innerText = sum;
      
     
}

// a4

function handleSitA4(){
    const a1 = document.getElementById('A4');
    a1.classList.add('bg-[#1DD100]');
    a1.classList.add('text-white')
    const text = a1.innerText;
    const mainText = text;

    // create element
    const divName = document.getElementById('div-name')
     const p = document.createElement('p')
     p.classList.add('mr-10')
     divName.appendChild(p)
     p.innerText = mainText + " " + 'Economy' + ' ' + 550;
    //  part
     // remove

     let totalSit = document.getElementById('total-sit');
     let total = totalSit.innerText;
     let mainTotal = parseInt(total);
     let he = mainTotal - 1;
     totalSit.innerText = he;
 
     // add
     let add = document.getElementById('add-number');
     let addText = add.innerText;
     let addNumber = parseInt(addText);
     let added = addNumber + 1;
     add.innerText = added;
     if(add.innerText === '5'){
         alert('you can purchases only 4 ticket')
         location.reload();
     }

         // dubbole click
    let a = 1;
    a1.addEventListener('click',()=>{
        a++;
        if(a === 2){
            alert("You cannot click a button twice")
            location.reload();
        }
    })
 
     // added price
     let pr = 550;
     let price = document.getElementById('total-price');
     let priceValue = price.innerText;
     sum = parseFloat(price.innerText) + pr;
     price.innerText = sum;
 
     // grand total
     const grandTotal = document.getElementById('Grand-total');
     const grandValue = grandTotal.innerText;
     grandTotal.innerText = sum;
      
     
}

// b1
function handleSitB1(){
    const a1 = document.getElementById('B1');
    a1.classList.add('bg-[#1DD100]');
    a1.classList.add('text-white')
    const text = a1.innerText;
    const mainText = text;

    // create element
    const divName = document.getElementById('div-name')
     const p = document.createElement('p')
     p.classList.add('mr-10')
     divName.appendChild(p)
     p.innerText = mainText + " " + 'Economy' + ' ' + 550;
    //  part
     // remove

     let totalSit = document.getElementById('total-sit');
     let total = totalSit.innerText;
     let mainTotal = parseInt(total);
     let he = mainTotal - 1;
     totalSit.innerText = he;
 
     // add
     let add = document.getElementById('add-number');
     let addText = add.innerText;
     let addNumber = parseInt(addText);
     let added = addNumber + 1;
     add.innerText = added;
     if(add.innerText === '5'){
         alert('you can purchases only 4 ticket')
         location.reload();
     }

         // dubbole click
    let a = 1;
    a1.addEventListener('click',()=>{
        a++;
        if(a === 2){
            alert("You cannot click a button twice")
            location.reload();
        }
    })
 
     // added price
     let pr = 550;
     let price = document.getElementById('total-price');
     let priceValue = price.innerText;
     sum = parseFloat(price.innerText) + pr;
     price.innerText = sum;
 
     // grand total
     const grandTotal = document.getElementById('Grand-total');
     const grandValue = grandTotal.innerText;
     grandTotal.innerText = sum;
      
     
}

// b2
function handleSitB2(){
    const a1 = document.getElementById('B2');
    a1.classList.add('bg-[#1DD100]');
    a1.classList.add('text-white')
    const text = a1.innerText;
    const mainText = text;

    // create element
    const divName = document.getElementById('div-name')
     const p = document.createElement('p')
     p.classList.add('mr-10')
     divName.appendChild(p)
     p.innerText = mainText + " " + 'Economy' + ' ' + 550;
    //  part
     // remove

     let totalSit = document.getElementById('total-sit');
     let total = totalSit.innerText;
     let mainTotal = parseInt(total);
     let he = mainTotal - 1;
     totalSit.innerText = he;
 
     // add
     let add = document.getElementById('add-number');
     let addText = add.innerText;
     let addNumber = parseInt(addText);
     let added = addNumber + 1;
     add.innerText = added;
     if(add.innerText === '5'){
         alert('you can purchases only 4 ticket')
         location.reload();
     }

         // dubbole click
    let a = 1;
    a1.addEventListener('click',()=>{
        a++;
        if(a === 2){
            alert("You cannot click a button twice")
            location.reload();
        }
    })
 
     // added price
     let pr = 550;
     let price = document.getElementById('total-price');
     let priceValue = price.innerText;
     sum = parseFloat(price.innerText) + pr;
     price.innerText = sum;
 
     // grand total
     const grandTotal = document.getElementById('Grand-total');
     const grandValue = grandTotal.innerText;
     grandTotal.innerText = sum;
      
     
}

// b3
function handleSitB3(){
    const a1 = document.getElementById('B3');
    a1.classList.add('bg-[#1DD100]');
    a1.classList.add('text-white')
    const text = a1.innerText;
    const mainText = text;

    // create element
    const divName = document.getElementById('div-name')
     const p = document.createElement('p')
     p.classList.add('mr-10')
     divName.appendChild(p)
     p.innerText = mainText + " " + 'Economy' + ' ' + 550;
    //  part
     // remove

     let totalSit = document.getElementById('total-sit');
     let total = totalSit.innerText;
     let mainTotal = parseInt(total);
     let he = mainTotal - 1;
     totalSit.innerText = he;
 
     // add
     let add = document.getElementById('add-number');
     let addText = add.innerText;
     let addNumber = parseInt(addText);
     let added = addNumber + 1;
     add.innerText = added;
     if(add.innerText === '5'){
         alert('you can purchases only 4 ticket')
         location.reload();
     }

         // dubbole click
    let a = 1;
    a1.addEventListener('click',()=>{
        a++;
        if(a === 2){
            alert("You cannot click a button twice")
            location.reload();
        }
    })
 
     // added price
     let pr = 550;
     let price = document.getElementById('total-price');
     let priceValue = price.innerText;
     sum = parseFloat(price.innerText) + pr;
     price.innerText = sum;
 
     // grand total
     const grandTotal = document.getElementById('Grand-total');
     const grandValue = grandTotal.innerText;
     grandTotal.innerText = sum;
      
     
}

// b4
function handleSitB4(){
    const a1 = document.getElementById('B4');
    a1.classList.add('bg-[#1DD100]');
    a1.classList.add('text-white')
    const text = a1.innerText;
    const mainText = text;

    // create element
    const divName = document.getElementById('div-name')
     const p = document.createElement('p')
     p.classList.add('mr-10')
     divName.appendChild(p)
     p.innerText = mainText + " " + 'Economy' + ' ' + 550;
    //  part
     // remove

     let totalSit = document.getElementById('total-sit');
     let total = totalSit.innerText;
     let mainTotal = parseInt(total);
     let he = mainTotal - 1;
     totalSit.innerText = he;
 
     // add
     let add = document.getElementById('add-number');
     let addText = add.innerText;
     let addNumber = parseInt(addText);
     let added = addNumber + 1;
     add.innerText = added;
     if(add.innerText === '5'){
         alert('you can purchases only 4 ticket')
         location.reload();
     }

         // dubbole click
    let a = 1;
    a1.addEventListener('click',()=>{
        a++;
        if(a === 2){
            alert("You cannot click a button twice")
            location.reload();
        }
    })
 
     // added price
     let pr = 550;
     let price = document.getElementById('total-price');
     let priceValue = price.innerText;
     sum = parseFloat(price.innerText) + pr;
     price.innerText = sum;
 
     // grand total
     const grandTotal = document.getElementById('Grand-total');
     const grandValue = grandTotal.innerText;
     grandTotal.innerText = sum;
      
     
}

// APPLY BUTTON
function applyBtn(){
    const input = document.getElementById('cupon-input');
    const inputDiv = document.getElementById('cupon-div');
    const total = document.getElementById('total-price');
    const grand = document.getElementById('Grand-total');
    const grandPrice = grand.innerText;
    if(input.value === 'NEW15'){
        inputDiv.classList.add('hidden')
        grand.innerText = total.innerText - (total.innerText * 0.15);

    }
    else if(input.value === 'Couple 20'){
        inputDiv.classList.add('hidden')
        grand.innerText = total.innerText - (total.innerText * 0.20);
    }
}
// buy tickets

function buyTickets(){
    const targetSection = document.getElementById('green-line');
    targetSection.scrollIntoView({behavior:"smooth"});
}

function ContinueBtn(){
    location.reload();
}