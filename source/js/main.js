window.onload = ()=>{
	// alert(11);

	let field = document.createElement('div')
	document.body.appendChild(field);
	field.classList.add('field');

	for(let i = 1; i <= 100; i++){
		let excel = document.createElement('div')
		field.appendChild(excel);
		excel.classList.add('excel');
	}
	let excel = Object.entries(document.getElementsByClassName('excel'));
	let x = 1;
	let y = 10;
	// console.log(typeof(excel));
	// console.log(excel);
	excel.forEach((elem,index)=>{
		if(x === 11){
			x = 1;
			y--;
		}
		elem[1].setAttribute('posX',x);
		elem[1].setAttribute('posY',y);
		x++;
		
		// console.log(index);
	})
}