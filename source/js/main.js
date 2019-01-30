function generateSnake(){
	let x = Math.round(Math.random() * (10 -3) + 3);
	let y = Math.round(Math.random() * (10 -3) + 3);
	return [ x, y];
}


window.onload = ()=>{
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
	excel.forEach((elem,index)=>{
		if(x === 11){
			x = 1;
			y--;
		}
		elem[1].setAttribute('posX',x);
		elem[1].setAttribute('posY',y);
		x++;
	});

	let coordinates = generateSnake();
	var snakeBody = [document.querySelector('[posX = "' + coordinates[0] + '"][posY = "' + coordinates[1] + '"]'),
					document.querySelector('[posX = "' + (coordinates[0]-1) + '"][posY = "' + coordinates[1] + '"]'),
					document.querySelector('[posX = "' + (coordinates[0]-2) + '"][posY = "' + coordinates[1] + '"]')];
	snakeBody.forEach((item) => {
		item.classList.add('snakeBody');
	})
	snakeBody[0].classList.add('head');

	let mouse;
	function createMouse(){
		function generateMause(){
			let x = Math.round(Math.random() * (10 -3) + 3);
			let y = Math.round(Math.random() * (10 -3) + 3);
			return [ x, y];
		}

		let mouseCoordinates = generateMause();
		// console.log(mouseCoordinates);
		mouse = document.querySelector('[posX = "' + mouseCoordinates[0] + '"][posY = "' + mouseCoordinates[1] + '"]');
		console.log(mouse);

		while(mouse.classList.contains('snakeBody')){

			let mouseCoordinates = generateMause();
			mouse = document.querySelector('[posX = "' + mouseCoordinates[0] + '"][posY = "' + mouseCoordinates[1] + '"]');
		}

		mouse.classList.add('mouse');

	}
	createMouse();

	function move(){
		console.log(snakeBody);
		let snakeCoordinates = [snakeBody[0].getAttribute('posX'),snakeBody[0].getAttribute('posY')];
		console.log(snakeCoordinates[0])

		snakeBody[0].classList.remove('head');
		snakeBody[snakeBody.length - 1].classList.remove('snakeBody');
		console.log(snakeBody);
		snakeBody.pop();
		console.log(snakeBody);
		if(snakeCoordinates[0] < 10){
			snakeBody.unshift(document.querySelector('[posX = "' + (snakeCoordinates[0] + 1) + '"][posY = "' + snakeCoordinates[1] + '"]'));
		}else{
			snakeBody.unshift(document.querySelector('[posX = "' + 1 + '"][posY = "' + snakeCoordinates[1] + '"]'))
		}


		// console.log(snakeBody);
		// snakeBody[0].classList.add('head');
		// snakeBody.forEach((item) => {
		// 	console.log(snakeBody);
		// 	item.classList.add('snakeBody');
		// })
	}


	let interval = setInterval(move,1000);
	// move();

}