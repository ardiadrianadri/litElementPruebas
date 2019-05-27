import { LitElement } from 'lit-element';

export class GetInfo extends LitElement {
    static get properties(){
        return{
            datos: {
                type: Object
            }
        }
    }

    constructor(){
        super();
        this.getDatos();
    }

    async getDatos(){
        let event = new CustomEvent('get-info', {
            bubbles: true,
            composed: true,
            detail: {
                datos: await this.llamadaAPI()
            }
        });
        this.dispatchEvent(event);
    }

    llamadaAPI(){
        return new Promise(function(resolve, reject){
            const xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
            xhr.open("GET", "https://www.potterapi.com/v1/characters?key=$2a$10$tGUbVx78uFPqsIyN.E.w5uYSTv9tbNJMckX0gLRqGEQUo0UGngwHm");
            xhr.send();
            xhr.onreadystatechange = function() {
                if (xhr.readyState == XMLHttpRequest.DONE) {
                    resolve(xhr.response)
                }
            }
        })    
    }
}
customElements.define('get-info', GetInfo);