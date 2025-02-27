import {html, unsafeCSS, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import tailwindStyles from './tailwind.css?inline';

@customElement('simple-greeting')
export class SimpleGreeting extends LitElement {
    static styles = unsafeCSS(tailwindStyles);

    @property() name = 'Somebody';

    render() {
        return html`<p class="text-2xl text-center text-blue-500">Hello, ${this.name}!</p>`;
    }
}
