import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('buff-author-text')
export class AuthorText extends LitElement {
    @property({type: String}) author: string = '';
    @property({type: String}) imageUrl: string = '';
    @property({type: String}) text: string = '';

    render() {
        return html`
            <div id="container">
                <div id="image-container">
                    <img src=${this.imageUrl} />
                </div>
                <div id="text-container">
                    <p id="author">${this.author}</p>
                    <p id="text">${this.text}</p>
                </div>
            </div>
        `;
    }

    static styles = [
        css`
            #container {
                position: relative;
                left: 0;
                top: 0;
                width: 100%;
                display: flex;
                align-items: left;
                justify-content: flex-start;
                overflow: hidden;
                gap: 4px;
                font-family: sans-serif;
            }

            #image-container {
                width: 25%;
                display: flex;
                background-color: #fff;
                border-radius: 6px;
            }

            #image-container img {
                width: 100%;
                height: auto;
                object-fit: contain;
            }

            #author {
                margin: 0;
                font-size: 12px;
                font-weight: 600;
            }

            #text {
                margin: 0;
                font-size: 16px;
                font-weight: 700;
            }
        `
    ];
}

