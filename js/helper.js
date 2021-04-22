/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
const synth = window.speechSynthesis;

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	let utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const randomEl = arr =>{
	return arr[Math.floor(Math.random() * arr.length)]
};

const addText = (dom, string) =>{
	const parent = dom.parentElement;
	let wrapperText = document.createElement("div");
	wrapperText.id = 'storyTextWrapper';
	let p = document.createElement("p");
	wrapperText.append(p)
	p.textContent = string;
	parent.append(wrapperText);
}

const tellStory = arr =>{
	if(arr.length < 4){
		return 'please click more other buttons'
	} else{
		return arr.join(' ');
	}
}
const reset = () =>{
	story = [];
	// btns.map((btn) => {return btn.disabled = false});
	for (let button of btns) {
		button.disabled = false;
	}
	const clearTexts = $$('#storyTextWrapper');
	for(let z = 0; z<clearTexts.length; z++) {
		clearTexts[z].innerHTML = '';
	}
}

