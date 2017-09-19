let words = [];
let x = 100;
let y = 50;
let input;
let button;
let deleteBar;
let finalpoetry;

class Word {
	constructor(){
		this.x = random(5,windowWidth - 5);
		this.y = random(10, windowHeight - 10);
		this.div = createDiv();
	}

	pushword(word) {
		this.div.html(word);
		this.div.position(this.x,this.y);
		words.push(this);
	}

	update(){
		this.y += random(1.4,1.7);
		this.div.position(this.x,this.y);

		if (this.y> windowHeight){
			this.y = 0;
		}
	}

}


function setup() {
	noCanvas();

	loadStrings('src/shakespeare.txt', prepareText);

	let p2 = createP("add words here");
	input = createInput('sample');
	button = createButton('create');
	finalpoetry = createDiv('');
	finalpoetry.style('font-family','helvetica');
	finalpoetry.style('font-size','17px');
	
	button.mousePressed(function () {
		let v = new Word();
		v.pushword(input.value());
	})

	deleteBar = createInput('deletewords');
	deleteBar.position(10, windowHeight-50);
	let p1 = createP('input the word you want to delete below and hit ENTER');
	p1.position(10, windowHeight-90);

	// for (i = 0; i < 4; i++){
	// 	x = 40;
	// 	let v = new Word();
	// 	v.pushword('letsgo');		
	// }	
}

function prepareText(srcText){
	for (line = 0; line < srcText.length; line++){
		let wrds = srcText[line].split(" ");
		for (w = 0; w < wrds.length; w++){
			let v = new Word();
			v.pushword(wrds[w]);
		}
	}
}

function delWord(){
	delword = deleteBar.value();
	let typo = True;
	for (i = words.length-1; i > -1; i--){
		// console.log(words[i].div.elt.innerText);
		if (words[i].div.elt.innerText == delword){
			typo = False;
			words[i].div.remove();
		}
	}
	if (typo == False){
		let finalpoem = finalpoetry.elt.innerText+' '+deleteBar.value();
		finalpoetry.html(finalpoem);
	}
	deleteBar.value("");
}

function keyPressed() {
	if (keyCode === ENTER){
		delWord();
	}
}

function draw() {
	for (i = 0; i < words.length; i++){
		words[i].update();
	}	


}
