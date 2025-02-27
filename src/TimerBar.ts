import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import closeBuffImage from './assets/IconClose.svg';

@customElement('buff-timer-bar')
export class TimerBar extends LitElement {
    @property({type: Number}) totalTime: number = 0;
    @property({type: Number}) timeLeft: number = 0;
    @property({type: String}) barColorStart: string = '';
    @property({type: String}) barColorEnd: string = '';
    @property({type: String}) barBackground: string = '';

    render() {
        const min = String(Math.floor(this.timeLeft / 1000 / 60)).padStart(2, '0');
        const sec = String(Math.floor(this.timeLeft / 1000 % 60)).padStart(2, '0');

        return html`
            <div id="container">
                <div id="timer">${min}:${sec}</div>
                <div id="progress-background" style="background-color: ${this.barBackground ? this.barBackground : '#D1D5DB'}">
                    <div id="progress" style="width: ${this.timeLeft / this.totalTime * 100}%; background-color: ${this._getColor()}"></div>
                </div>
                <div id="close-button" @click=${this._clickClose}>
                    <img src="${closeBuffImage}" />
                </div>
            </div>
        `;
    }

    private _getColor() {
        const start = {
            r: parseInt(this.barColorStart ? this.barColorStart.slice(1, 3) : '05', 16),
            g: parseInt(this.barColorStart ? this.barColorStart.slice(3, 5) : '96', 16),
            b: parseInt(this.barColorStart ? this.barColorStart.slice(5, 7) : '69', 16)
        };

        if (this.timeLeft/this.totalTime >= 0.75) {
            return `#${start.r.toString(16).padStart(2, '0')}${start.g.toString(16).padStart(2, '0')}${start.b.toString(16).padStart(2, '0')}`;
        }

        const end = {
            r: parseInt(this.barColorEnd ? this.barColorEnd.slice(1, 3) : 'DC', 16),
            g: parseInt(this.barColorEnd ? this.barColorEnd.slice(3, 5) : '26', 16),
            b: parseInt(this.barColorEnd ? this.barColorEnd.slice(5, 7) : '26', 16)
        };

        if (this.timeLeft/this.totalTime <= 0.25) {
            return `#${end.r.toString(16).padStart(2, '0')}${end.g.toString(16).padStart(2, '0')}${end.b.toString(16).padStart(2, '0')}`;
        }

        // Smoothly transition between colors
        const blended = {
            r: Math.floor(end.r + (start.r - end.r) * this.timeLeft / this.totalTime),
            g: Math.floor(end.g + (start.g - end.g) * this.timeLeft / this.totalTime),
            b: Math.floor(end.b + (start.b - end.b) * this.timeLeft / this.totalTime)
        };

        return `#${blended.r.toString(16).padStart(2, '0')}${blended.g.toString(16).padStart(2, '0')}${blended.b.toString(16).padStart(2, '0')}`;
    }

    private _clickClose() {
        console.log('close button clicked');
        this.dispatchEvent(new CustomEvent('timer-bar-close', {
            detail: { message: 'close button clicked' },
            bubbles: true,
            composed: true
        }));
    }

    static styles = [
        css`
            #container {
                position: relative;
                left: 0;
                top: 0;
                width: 100%;
                display: flex;
                align-items: center;
                gap: 5px;
                font-family: sans-serif;
            }

            #timer {
                height: 100%;
                width: auto;
                max-width: 5ch;
                display: flex;
                align-items: center;
                font-size: 14px;
                font-weight: 600;
            }

            #progress-background {
                flex: 1;
                min-width: 0;
                height: 10px;
                border-radius: 6px;
            }

            #progress {
                position: relative;
                height: 100%;
                top: 0;
                left: 0;
                border-radius: 6px;
            }

            #close-button {
                width: 100%;
                max-width: 1ch;
                height: 100%;
            }

            #close-button img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        `
    ];
}


