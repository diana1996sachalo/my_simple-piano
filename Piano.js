class Piano {
	constructor(buttonsData) {
  	this._connectToLayout(buttonsData);
  }
  
  _connectToLayout(buttonsData) {
    this._setupButtons(buttonsData);
    this._setupListener(buttonsData);
  }

  _setupListener(buttonsData) {

    const switchKeyPress = {};
    for (let i = 0; i < buttonsData.length; i++) {
      const { keyCode, sound } = buttonsData[i];
  
      switchKeyPress[keyCode] = () => {
        sound.pause();
        sound.currentTime = 0;
        sound.play();
      }
    }

    const listener = ({ keyCode }) => switchKeyPress[keyCode] && switchKeyPress[keyCode]();

    document.addEventListener('keypress', listener);
  }
  
  _setupButtons(buttonsData) {
    const pianoContainer = document.getElementById('piano');

    buttonsData.forEach((el, a) => {
    	const button = document.createElement('button');
      button.classList.add('piano-btn');
 
      button.innerHTML = el.name.toUpperCase();
      
      button.onclick = () => el.sound.play();
      
      pianoContainer.appendChild(button);
    });
  }
}