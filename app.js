function getInputFieldValue(inputId){
    const inputFieldValue = document.getElementById(inputId)
    const inputFieldString = inputFieldValue.value;
    const inputField = parseFloat(inputFieldString)

    inputFieldValue.value = '';
    return inputField;
}


function getElementInnerText(elementId){
    const textElement = document.getElementById('triangle');
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