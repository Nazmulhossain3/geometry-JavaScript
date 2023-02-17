function getInputFieldValue(inputId){
    const inputFieldValue = document.getElementById(inputId)
    const inputFieldString = inputFieldValue.value;
    const inputField = parseFloat(inputFieldString)

    inputFieldValue.value = '';
    return inputField;
}


function getElementInnerText(elementId){
    const textElement = document.getElementById(elementId);
    const TextElementValue = textElement.innerText
    const element = (TextElementValue)
    
    return element;
}



// this is for click blog btn-part

document.getElementById('blog-btn').addEventListener('click',function(){
    window.location.href = "Question-ans.html"
})


// here triangle addeventlistener part.....
document.getElementById('triangle-btn').addEventListener('click',function(){
   const triangle = getElementInnerText('triangle')
   
   const base = getInputFieldValue('base-input');
   const height =getInputFieldValue('height-input')
   const area = 0.5 * base * height
   
   const number = 0;
   const count = number + 1;
   
  
   const container = document.getElementById('table-container')
   const tr = document.createElement('tr');
   tr.innerHTML = `
   <td> ${count} </td>
   <td> ${triangle} </td>
   <td> ${area} <span>cm<sup> 2 </sup> </span> </td>
   <td> <button class="btn btn-primary">Button</button> </td>
   `;

   container.appendChild(tr);
   
})


// rectangle btn addeventlistener  start here

document.getElementById('rectangle-btn').addEventListener('click',function(){
    const rectangle = getElementInnerText('rectangle')
    const width = getInputFieldValue('rectangle-width-input')
    const length = getInputFieldValue('rectangle-length-input')
    const area = width * length;
    
   const number = 0;
   const count = number + 1;

    
   const container = document.getElementById('table-container')
   const tr = document.createElement('tr');
   tr.innerHTML = `
   <td> ${count} </td>
   <td> ${rectangle} </td>
   <td> ${area} <span>cm<sup> 2 </sup> </span> </td>
   <td> <button class="btn btn-primary">Button</button> </td>
   `;

   container.appendChild(tr);
})

// parallelogram-btn addeventlistener details here

document.getElementById('parallelogram-btn').addEventListener('click', function(){
    const parallelogram = getElementInnerText('parallelogram')
    const base = getInputFieldValue('parallelogram-base-input');
    const height = getInputFieldValue('parallelogram-height-input');
    const area = base * height;

    const number = 0;
   const count = number + 1;
   
   
    const container = document.getElementById('table-container')
   const tr = document.createElement('tr');
   tr.innerHTML = `
   <td> ${count} </td>
   <td> ${parallelogram} </td>
   <td> ${area} <span>cm<sup> 2 </sup> </span> </td>
   <td> <button class="btn btn-primary">Button</button> </td>
   `;

   container.appendChild(tr);


})



// rhombus addeventlistener details here


document.getElementById('rhombus-btn').addEventListener('click', function(){
    const rhombus = getElementInnerText('rhombus')
    const d1 = getInputFieldValue('rhombus-base-input');
    const d2 = getInputFieldValue('rhombus-height-input');
    const area = 0.5 * d1 * d2;

    const number = 0;
   const count = number + 1;
   
   
    const container = document.getElementById('table-container')
   const tr = document.createElement('tr');
   tr.innerHTML = `
   <td> ${count} </td>
   <td> ${rhombus} </td>
   <td> ${area} <span>cm<sup> 2 </sup> </span> </td>
   <td> <button class="btn btn-primary">Button</button> </td>
   `;

   container.appendChild(tr);


})


// pentagon btn addeventlistener details here

document.getElementById('pentagon-btn').addEventListener('click', function(){
    const pentagon = getElementInnerText('pentagon')
    const p = getInputFieldValue('pentagon-p-input');
    const b = getInputFieldValue('pentagon-b-input');
    const area = 0.5 * p * b;

    const number = 0;
   const count = number + 1;
   
   
    const container = document.getElementById('table-container')
   const tr = document.createElement('tr');
   tr.innerHTML = `
   <td> ${count} </td>
   <td> ${pentagon} </td>
   <td> ${area} <span>cm<sup> 2 </sup> </span> </td>
   <td> <button class="btn btn-primary">Button</button> </td>
   `;

   container.appendChild(tr);


})


//  ellipse add eventlistener work here

document.getElementById('ellipse-btn').addEventListener('click', function(){
    const ellipse = getElementInnerText('ellipse')
    const p = getInputFieldValue('ellipse-a-input');
    const b = getInputFieldValue('ellipse-b-input');
    const area = 3.14 * p * b;

    const number = 0;
   const count = number + 1;
   
   
    const container = document.getElementById('table-container')
   const tr = document.createElement('tr');
   tr.innerHTML = `
   <td> ${count} </td>
   <td> ${ellipse} </td>
   <td> ${area} <span>cm<sup> 2 </sup> </span> </td>
   <td> <button class="btn btn-primary">Button</button> </td>
   `;

   container.appendChild(tr);


})