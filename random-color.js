function randomColor(){

    let color = [];
    for(let i = 0; i< 3; i++){
        color.push(Math.floor(Math.random()* 256))
    }

    return 'rgb(' + color.join(', ')

}

document.getElementById('triangle-card').addEventListener('mouseover',function(){

document.getElementById('triangle-card').style.backgroundColor = randomColor()
})

document.getElementById('rectangle-card').addEventListener('mouseover',function(){

    document.getElementById('rectangle-card').style.backgroundColor = randomColor();

})
document.getElementById('card-parallelogram').addEventListener('mouseover',function(){

    document.getElementById('card-parallelogram').style.backgroundColor = randomColor();

})
document.getElementById('card-rhombus').addEventListener('mouseover',function(){

    document.getElementById('card-rhombus').style.backgroundColor = randomColor();

})
document.getElementById('card-pentagon').addEventListener('mouseover',function(){

    document.getElementById('card-pentagon').style.backgroundColor = randomColor();

})
document.getElementById('card-ellips').addEventListener('mouseover',function(){

    document.getElementById('card-ellips').style.backgroundColor = randomColor();

})
