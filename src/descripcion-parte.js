import { LitElement, html } from 'lit-element';

export class DescripcionParte extends LitElement {

    static get properties(){
        return{
            valores: {
                type: Object
            }
        }
    }

    constructor(){
        super();
        this.valores = {};
    }

    attributeChangedCallback(name, oldval, newval) {
        console.log('attribute change: ', name, newval);
        console.log(this.valores)
        super.attributeChangedCallback(name, oldval, newval);
        
    }

    render() {
        return html`
            ${Object.keys(this.valores).map(item =>  html `${this.valores[item].name}`)}
            ${this.valores}
        `;
    }
    
}
customElements.define('descripcion-parte', DescripcionParte);

/* 

Ejemplo de codigo:

<descripcion-parte 
    title="<String>"
    full="true|false"
    valores="<Object>">
</descripcion-parte>

valores = [{
    title: String,
    value: String
}]
static get styles(){
        return css`
        :root{
            --ancho-nombre: 200px;
        }
        .cuadrado-descripcion{
            box-shadow: 1px 1px 3px rgb(0, 0, 0, 0.3);
            border-radius: 3px;
            padding: 30px;
        }
        .nombre{
            min-width: 200px;
            float: left;
        }
        .descripcion{
            float: left;
        }
        `;
    }

*/

/* render() {
        return html`
        <div class="cuadrado-descripcion">
            <h3>${this.title}</h3>
            ${this.valores.map((item, index) => html`
            <div style="clear:both">
                ${this.valores[index].title && this.full ? html`
                <div class="nombre"><b>${this.valores[index].title}:</b></div>
                ` : html``}

                
                <div class="descripcion">${this.fullWidth}${this.valores[index].value}</div>
            </div>
            `)}
        </div>
        
        `;

    }
        */