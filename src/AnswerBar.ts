import {html, css, unsafeCSS, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import tailwindStyles from './tailwind.css?inline';
import opensans from './opensans.css?inline';

@customElement('buff-answer-bar')
export class AnswerBar extends LitElement {
    @property({type: String}) imageUrl: string = '';
    @property({type: String}) text: string = '';
    @property({type: String}) footer: string = '';
    @property({type: Number}) progress: number = 0;
    @property({type: String}) color: string = '';
    @property({type: String}) hoverColor: string = '';

    constructor() {
        super();
        this._updateStyleProperties();
    }

    updated(changedProperties: Map<string | number | symbol, unknown>) {
        if (changedProperties.has('color') || changedProperties.has('hoverColor')) this._updateStyleProperties();
    }

    private _updateStyleProperties() {
        this.style.setProperty('--edge-color', `var(--color-${this.color ? this.color : 'gray-800'})`);
        this.style.setProperty('--edge-color-hover', `var(--color-${this.hoverColor ? this.hoverColor : 'gray-800'})`);
    }

    render() {
        return html`
            <div id="bar-container">
                ${this.imageUrl ? html`<div id="image-container"><img src=${this.imageUrl} /></div>` : ''}
                <div id="text-container" style="left: ${this.imageUrl ? '15%' : '0'}; width: ${this.imageUrl ? '75%' : '90%'};">
                    <p>${this.text}</p>
                </div>
                <div id="footer-container">
                    <p>${this.footer}</p>
                    <div id="progress" style="height: ${this.progress * 100}%;"></div>
                </div>
            </div>
        `;
    }

    static styles = [
        unsafeCSS(tailwindStyles),
        unsafeCSS(opensans),
        css`
            #bar-container {
                position: relative;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;

                overflow: hidden;
                border-radius: var(--radius-md);
                background-color: var(--color-gray-300);
                border: 2px solid var(--edge-color);
            }

            #bar-container:hover {
                border-color: var(--edge-color-hover);
            }

            #image-container {
                position: absolute;
                left: 0;
                top: 0;
                width: 15%;
                height: 100%;
            }

            #image-container img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }

            #text-container {
                position: absolute;
                top: 0;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: left;
                overflow: hidden;
            }

            #text-container p {
                font-size: var(--text-xs);
                font-weight: 600;
            }

            #footer-container {
                position: absolute;
                right: 0;
                top: 0;
                width: 10%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
                background-color: var(--edge-color);
            }

            #bar-container:hover #footer-container {
                background-color: var(--edge-color-hover);
            }

            #footer-container p {
                color: var(--color-white);
                font-size: var(--text-xs);
                line-height: var(--text-xs--lint-height);
                font-weight: 600;
                text-align: center;
            }

            #progress {
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 0%;
                background: rgba(255, 255, 255, 0.5);
            }
        `
    ];
}
