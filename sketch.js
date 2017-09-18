let words = [];
let x = 100;
let y = 50;

class Word {
	constructor(x,y){
		this.x = x;
		this.y = y;
		this.div = createDiv();
	}

	pushword(word) {
		this.div.html(word);
		this.div.position(this.x,this.y);
	}

	update(){
		this.y += 0;
		this.div.position(this.x,this.y);

		if (this.y> windowHeight){
			this.y = 0;
		}
	}

}


function setup() {
	noCanvas();

	for (i = 0; i < 4; i++){
		let v = new Word(x,y);
		v.pushword('letsgo');
		words.push(v);

		x += 40;
	}	
}


function draw() {
	for (i = 0; i < words.length; i++){
		words[i].update();
	}	


}