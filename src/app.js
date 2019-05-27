import { LitElement, html } from 'lit-element';

export class App extends LitElement {

    static get properties(){
        return{
            datos: {
                type: Object, 
                reflect: true
            }
        }
    }
    constructor(){
        super();
        this.datos = {};
    }

    connectedCallback(){
        super.connectedCallback();
        this.addEventListener('get-info', (e) => { 
            this.datos = Object.assign({}, {...e.detail.datos})
        })
    }

  
    
      
    render() {
        return html`
        <get-info></get-info>
        <descripcion-parte full="true" id="descripcion" valores="${this.datos}"></descripcion-parte>
        `;
    }
}
customElements.define('app-xiaomi', App);