// let a = document.getElementById("a"); 
// let s = document.getElementById("s"); 
// let d = document.getElementById("d"); 
// let f = document.getElementById("f");
// let g = document.getElementById("g");
// let h = document.getElementById("h");
// let j = document.getElementById("j");
// let k = document.getElementById("k");

// function playAudioA() { 
//   a.play(); 
// } 
// function playAudioS() { 
//   s.play(); 
// } 
// function playAudioD() { 
//   d.play(); 
// } 
// function playAudioF() { 
//   f.play(); 
// } 
// function playAudioG() { 
//   g.play(); 
// }
// function playAudioH() { 
//   h.play(); 
// } 
// function playAudioJ() { 
//   j.play(); 
// } 
// function playAudioK() { 
//   k.play(); 
// } 


class Piano {
	constructor(audioTags) {
  	this._connectToLayout(audioTags);
  }
  
  _connectToLayout(audioTags) {
    this._setupAudioElements(audioTags);
    this._setupButtons();
  }
  
  _setupAudioElements(audioTags) {
  	this.audioElements = {};
    
    for (let i = 0; i < audioTags.length; i++) {
    		const audioTag = audioTags[i];
  
    		this.audioElements[audioTag] = document.getElementById(audioTag);
  	}
	}
  
  _setupButtons() {
    const pianoContainer = document.getElementById('piano');
    console.log(typeof this.styleButton)
    Object.keys(this.audioElements).forEach(el => {
    	const button = document.createElement('button');
      button.classList.add('piano-btn');
 
      button.innerHTML = el.toUpperCase();
      
      button.onclick = () => {
        this.audioElements[el].play();
      };
      
      pianoContainer.appendChild(button);
    });
  }
}

const DianasPiano = new Piano(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k']);

