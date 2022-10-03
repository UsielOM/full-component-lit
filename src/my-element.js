import { LitElement, html, css } from 'lit-element';

export class MyElement extends LitElement {
    static get properties() {
        return {
            greeting: {},
            planet: {},
        };
    }

    // Los estilos se limitan a este elemento: no entrarán en conflicto con los estilos
    // en la página principal o en otros componentes. La API de estilo puede estar expuesta
    // a través de propiedades personalizadas de CSS.

    static get styles() {
        return css `
        :host{
            display: inline-block;
            padding: 10px;
            background: lightgray;
        }
        .planet {
            color: var(--planet-color, blue);
        }
    `
    }

    constructor() {
        super();
        // Definir propiedades reactivas: actualizar las causas de una propiedad reactiva
        // el componente a actualizar.
        this.greeting = 'Hellow';
        this.planet = 'World';
    }

    // El método render() se llama cada vez que cambian las propiedades reactivas.
    // Devolver HTML en un literal de plantilla de cadena etiquetado con el html
    // función de etiqueta para describir el DOM interno del componente.
    // Las expresiones pueden establecer valores de atributo, valores de propiedad, controladores de eventos,
    // y nodos secundarios/texto.

    render() {
        return html `
        <span @click=${this.togglePlanet}> ${this.greeting} 
        <span class="planet"> ${this.planet}</span>
     </span>
        `;
    }

    // Los controladores de eventos pueden actualizar el estado de @properties en el elemento
    // instancia, haciendo que se vuelva a renderizar
    togglePlanet() {
        this.planet = this.planet === 'World' ? 'Usiel' : 'World';
    }
}
customElements.define('my-element', MyElement);