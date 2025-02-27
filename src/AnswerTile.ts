import {html, css, unsafeCSS, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import tailwindStyles from './tailwind.css?inline';
import opensans from './opensans.css?inline';

// TODO: how do we depricate tailwind now we are using more vanilla css?
// TODO: how do we standardize the color palette? Do we keep tailwind just for this?

@customElement('buff-answer-tile')
export class AnswerTile extends LitElement {
    @property({type: String}) imageUrl: string = '';
    @property({type: String}) text: string = '';
    @property({type: String}) footer: string = '';
    @property({type: Number}) progress: number = 0;
    @property({type: String}) color: string = '#1F2937';
    @property({type: String}) hoverColor: string = '#1F2937';

    constructor() {
        super();
        this._updateStyleProperties();
    }

    updated(changedProperties: Map<string | number | symbol, unknown>) {
        if (changedProperties.has('color') || changedProperties.has('hoverColor')) this._updateStyleProperties();
    }

    private _updateStyleProperties() {
        this.style.setProperty('--edge-color', this.color);
        this.style.setProperty('--edge-color-hover', this.hoverColor);
    }

    render() {
        return html`
            <div id="container">
                <div id="image-container"><img src=${this.imageUrl} /></div>
                <div id="answer-container"><p>${this.text}</p></div>
                <div id="footer-container">
                    <p>${this.footer}</p>
                    <div style="width: ${this.progress * 100}%;"></div>
                </div>
            </div>
        `;
    }


    static styles = [
        unsafeCSS(tailwindStyles),
        unsafeCSS(opensans),
        css`
            #container {
                display: flex;
                flex-direction: column;
                justify-content: center;

                width: 60px;
                height: 90px;
                overflow: hidden;
                border-radius: var(--radius-md);
                background-color: #D1D5DB;
                border: 2px solid var(--edge-color);

                font-size: var(--text-xs);
                font-weight: 600;
                text-align: center;
            }

            #container:hover {
                border-color: var(--edge-color-hover);
            }

            #image-container {
                height: 40%;
                display: flex;
                justify-content: center;
            }

            #image-container img {
                object-fit: contain;
            }

            #answer-container {
                height: 40%;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }

            #footer-container {
                height: 20%;
                background-color: var(--edge-color);
            }

            #container:hover #footer-container {
                background-color: var(--edge-color-hover);
            }

            #footer-container p {
                color: white;
            }

            #footer-container div {
                position: relative;
                top: -100%;
                left: 0;
                height: 100%;
                width: 0;
                background: rgba(255, 255, 255, 0.5);
            }
        `
    ]
}
