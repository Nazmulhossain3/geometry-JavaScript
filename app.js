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

let serial = 0;

document.getElementById('triangle-btn').addEventListener('click',function(){
   const triangle = getElementInnerText('triangle')
   
   const base = getInputFieldValue('base-input');
   const height =getInputFieldValue('height-input')
   const areaOfTriangle = 0.5 * base * height;
   
   const area = areaOfTriangle.toFixed(2);
    if(isNaN(base) || isNaN(height)){
       return alert('please give number')
    }

    else if(base < 0 || height< 0){
        return alert('please give positive number')
    }

    serial += 1
   
   const container = document.getElementById('table-container')
   const tr = document.createElement('tr');
   tr.innerHTML = `
   <td> ${serial} </td>
   <td> ${triangle} </td>
   <td> ${area} <span>cm<sup> 2 </sup> </span> </td>
   <td> <button class="btn btn-primary">click here</button> </td>
   `;

   container.appendChild(tr);
   
})


// rectangle btn addeventlistener  start here

document.getElementById('rectangle-btn').addEventListener('click',function(){
    serial += 1

    const rectangle = getElementInnerText('rectangle')
    const width = getInputFieldValue('rectangle-width-input')
    const length = getInputFieldValue('rectangle-length-input')
    const rectangleOfArea = width * length;
    const area = rectangleOfArea.toFixed(2);

    if(isNaN(width) || isNaN(length)){
        return alert('please give number')
     }
 
     else if(width < 0 || length< 0){
         return alert('please give positive number')
     }
 
    
  
    
   const container = document.getElementById('table-container')
   const tr = document.createElement('tr');
   tr.innerHTML = `
   <td> ${serial} </td>
   <td> ${rectangle} </td>
   <td> ${area} <span>cm<sup> 2 </sup> </span> </td>
   <td> <button class="btn btn-primary">click here</button> </td>
   `;

   container.appendChild(tr);
})

// parallelogram-btn addeventlistener details here

document.getElementById('parallelogram-btn').addEventListener('click', function(){

    serial += 1

    const parallelogram = getElementInnerText('parallelogram')
    const base = getInputFieldValue('parallelogram-base-input');
    const height = getInputFieldValue('parallelogram-height-input');
    const parallelogramOfArea = base * height;

    const area = parallelogramOfArea.toFixed(2);

   
   
    const container = document.getElementById('table-container')
   const tr = document.createElement('tr');
   tr.innerHTML = `
   <td> ${serial} </td>
   <td> ${parallelogram} </td>
   <td> ${area} <span>cm<sup> 2 </sup> </span> </td>
   <td> <button class="btn btn-primary">click here</button> </td>
   `;

   container.appendChild(tr);


})



// rhombus addeventlistener details here


document.getElementById('rhombus-btn').addEventListener('click', function(){ 
    serial += 1
    const rhombus = getElementInnerText('rhombus')
    const d1 = getInputFieldValue('rhombus-base-input');
    const d2 = getInputFieldValue('rhombus-height-input');
    const rhombusArea = 0.5 * d1 * d2;

    const area = rhombusArea.toFixed(2);

    
   
    const container = document.getElementById('table-container')
   const tr = document.createElement('tr');
   tr.innerHTML = `
   <td> ${serial} </td>
   <td> ${rhombus} </td>
   <td> ${area} <span>cm<sup> 2 </sup> </span> </td>
   <td> <button class="btn btn-primary">click here</button> </td>
   `;

   container.appendChild(tr);


})


// pentagon btn addeventlistener details here

document.getElementById('pentagon-btn').addEventListener('click', function(){
    serial += 1
    const pentagon = getElementInnerText('pentagon')
    const p = getInputFieldValue('pentagon-p-input');
    const b = getInputFieldValue('pentagon-b-input');
    const areaPentagon = 0.5 * p * b;
    const area = areaPentagon.toFixed(2);

  
   
   
    const container = document.getElementById('table-container')
   const tr = document.createElement('tr');
   tr.innerHTML = `
   <td> ${ serial} </td>
   <td> ${pentagon} </td>
   <td> ${area} <span>cm<sup> 2 </sup> </span> </td>
   <td> <button class="btn btn-primary">click here</button> </td>
   `;

   container.appendChild(tr);


})


//  ellipse add eventlistener work here

document.getElementById('ellipse-btn').addEventListener('click', function(){
    serial += 1
    const ellipse = getElementInnerText('ellipse')
    const p = getInputFieldValue('ellipse-a-input');
    const b = getInputFieldValue('ellipse-b-input');
    const areaEllipse = 3.14 * p * b;
    const area = areaEllipse.toFixed(2);

   
   
   
    const container = document.getElementById('table-container')
   const tr = document.createElement('tr');
   tr.innerHTML = `
   <td> ${serial} </td>
   <td> ${ellipse} </td>
   <td> ${area} <span>cm<sup> 2 </sup> </span> </td>
   <td> <button class="btn btn-primary">click here</button> </td>
   `;

   container.appendChild(tr);


})