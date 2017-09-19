let words = [];
let x = 100;
let y = 50;
let input;
let button;
let deleteBar;

class Word {
	constructor(){
		this.x = random(5,windowWidth - 5);
		this.y = 10;
		this.div = createDiv();
	}

	pushword(word) {
		this.div.html(word);
		this.div.position(this.x,this.y);
		words.push(this);
	}

	update(){
		this.y += 1.7;
		this.div.position(this.x,this.y);

		if (this.y> windowHeight){
			this.y = 0;
		}
	}

}


function setup() {
	noCanvas();

	

	let p2 = createP("add words here");
	input = createInput('sample');
	button = createButton('create');
	button.mousePressed(function () {
		let v = new Word();
		v.pushword(input.value());
	})

	deleteBar = createInput('deletewords');
	deleteBar.position(10, windowHeight-50);
	let p1 = createP('input the word you want to delete below and hit ENTER');
	p1.position(10, windowHeight-90);

	for (i = 0; i < 4; i++){
		x = 40;
		let v = new Word();
		v.pushword('letsgo');
		
	}	


}

function delWord(){
	delword = deleteBar.value();
	for (i = words.length-1; i > -1; i--){
		// console.log(words[i].div.elt.innerText);
		if (words[i].div.elt.innerText == delword){
			words[i].div.remove();
		}
	}
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