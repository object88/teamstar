import './styles.scss';

class Tag extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		var n = this.getAttribute('data-name')
    this.innerHTML = `<p>${n}</p>`;
	}
}

class Tags extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		
	}
}

customElements.define("team-tag", Tag)