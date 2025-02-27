import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('buff-container')
export class BuffContainer extends LitElement {
    @property({type: String}) backgroundColor: string = '#F3F4F7';
    @property({type: String}) width: string = '280px';
    @property({type: String}) height: string = '135px';

    render() {
        const start = this.backgroundColor + (Math.round(0.40 * 255)).toString(16);
        const end = this.backgroundColor + (Math.round(0.70 * 255)).toString(16);

        return html`
            <div id="container" style="
                background: linear-gradient(56deg, ${start} 0%, ${end} 75%);
                width: ${this.width};
                height: ${this.height};
            ">
                <slot name="content"></slot>
            </div>
        `;
    }

    static styles = [
        css`
            #container {
                padding: 6px;
                border-radius: 6px;
                overflow: visible;
                display: flex;
                flex-direction: column;
                gap: 6px;
            }
        `
    ];
}

