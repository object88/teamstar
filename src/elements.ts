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

customElements.define("team-tag", Tag)