//let selectedColor = 'blue'
//let color = 'pink';

const painting = document.querySelector('.painting');
/*
blue.addEventListner('click', (e) => {
    let color = 'blue';
})
*/

let color = 'white';

let colors = ['blue', 'red', 'yellow', 'green'];
for (let i = 0; i < colors.length, i++) {
    const chooser = document.querySelector('#' + colors[i]);
    chooser.addEventListener('click', () => { 
    color = colors[i];
})
}

painting.addEventListener('click', (e) => {
	e.target.style.backgroundColor = color;
    //console.log(e.target)
    //console.log('testing, testing, 123')
});

/*
painting.addEventListner(click, function(e){
    e.target.style.backgroundColor = selectedColor 
})
*/

//e.target.style.backgroundColor = 'blue'

