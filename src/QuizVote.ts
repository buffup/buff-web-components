import {html, css, unsafeCSS, LitElement} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import tailwindStyles from './tailwind.css?inline';
import opensans from './opensans.css?inline';
import defaultAnswerImage from './assets/Person.svg';
import closeBuffImage from './assets/IconClose.svg';

@customElement('buff-quiz-vote')
export class QuizVote extends LitElement {
    static styles = [
        unsafeCSS(tailwindStyles),
        unsafeCSS(opensans),
        css`
            :host {
                font-family: 'Open Sans', sans-serif;
            }

            .gradient-bg {
                /* 
                * gray-100 but with transparency 
                *
                * TODO: find a way to use the palette instead of hardcoding the color
                * otherwise it will be hard to update the color palette in the future
                */
                background: linear-gradient(56deg, rgba(243, 244, 246, 0.30) 0%, rgba(243, 244, 246, 0.75) 75%);
            }

            @keyframes fly-in {
                from { transform: translateX(-100vw); }
                to { transform: translateX(0); }
            }

            @keyframes fly-out {
                from { transform: translateX(0); }
                to { transform: translateX(-100vw); }
            }

            @keyframes timer {
                from { color: var(--color-gray-900); }
                50% { color: var(--color-gray-900); }
                to { color: var(--color-red-500); }
            }

            @keyframes burndown {
                from { margin-right: 0%; background-color: var(--color-emerald-500); }
                50% { margin-right: 50%; background-color: var(--color-emerald-500); }
                to { margin-right: 100%; background-color: var(--color-red-500); }
            }
        `
    ];

    @property({type: Object}) author: QuizVoteAuthor = {name: '', imageUrl: ''};
    @property({type: Object}) question: string = '';
    @property({type: Array}) answers: QuizVoteAnswer[] = [];
    @property({type: Number}) duration: number = 5000;
    @property({type: Number}) elapsed: number = 0;

    @property({type: Boolean}) autoremove: boolean = false;
    @property({type: Boolean}) freeze: boolean = false;
    @property({type: Boolean}) vote: number | null = null;

    @state() private _interval: number = 0;

    connectedCallback() {
        super.connectedCallback();

        this._interval = setInterval(() => {
            if (this.freeze) return;
            this.elapsed += 500;
        }, 500);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        clearInterval(this._interval);
    }

    @property({type: Boolean}) disableClose: boolean = false;

    //@state() private _startTime: number = Date.now();
    //@state() private _remaining: number = this.duration;
    @state() private _closed: boolean = false;
    //@state() private _removed: boolean = false;
    //@state() private _interval: number = setInterval(() => this._onAnimationFrame(), 500);
    @state() private _selectedAnswer: number = -1;
    //@state() private _votedAt: number | null = null;


    //private _onAnimationFrame() {
    //    const remaining = this.duration - (Date.now() - this._startTime);
    //    const closeDueToAlreadyClosed = this._closed;
    //    const closeDueToTime = remaining <= 0;
    //    const closeDueToVote = this._votedAt !== null && this._votedAt + 500 < Date.now();

    //    this._remaining = Math.max(0, remaining);
    //    this._closed = closeDueToAlreadyClosed || closeDueToTime || closeDueToVote;
    //    this._removed = remaining <= -500;

    //    if (this._removed && !this.disableClose) {
    //        clearInterval(this._interval);
    //        this.remove();
    //        return;
    //    }

    //    this.requestUpdate();
    //}

    private _selectAnswer(index: number) {
        const remaining = Math.max(0, this.duration - this.elapsed);

        if (remaining <= 0) return;

        //this._votedAt = Date.now();
        this._selectedAnswer = index;

        fetch(this.answers[index].voteUrl, {method: 'POST'})
            .then(response => { if (!response.ok) console.error('Vote rejected:', response); })
            .catch(error => console.error('Failed to vote:', error));

    }

    private _renderAnswer(answer: QuizVoteAnswer, index: number) {
        return html`
            <div class="w-17 h-25 relative group overflow-hidden" @click="${() => this._selectAnswer(index)}">
                <div class="
                    w-17 h-25 absolute left-0 top-0 overflow-hidden rounded-md border-2 border-solid bg-gray-300
                    ${this._selectedAnswer === index ? 'border-green-700' : 'border-gray-800 group-hover:border-blue-800'}
                ">
                    <div class="
                        absolute w-17 left-0 bottom-0 text-white text-xs font-bold text-center
                        ${this._selectedAnswer === index ? 'bg-green-700' : 'bg-gray-800'}
                    ">
                        ${answer.points} <span class="text-[8px]">pts</span>
                    </div>

                    <img class="w-17 h-10 absolute left-0 top-0" src="${answer.imageUrl || defaultAnswerImage}" />
                    <div class="w-17 h-8 absolute left-0 top-10 text-center text-xs font-semibold leading-3 break-words p-1">
                        ${answer.text}
                    </div>
                </div>
            </div>
        `;
    }

    render() {
        const remaining = Math.max(0, this.duration - this.elapsed);
        const minutes = String(Math.floor(remaining/60000)).padStart(2, '0');
        const seconds = String(Math.floor(remaining/1000) % 60).padStart(2, '0');
        const flyInOut = this._closed&&!this.disableClose ? 'fly-out' : 'fly-in';

        return html`
            <div class="relative w-70" style="animation: ${flyInOut} ease-in-out 0.5s forwards;">
                <div class="w-70 h-40 gradient-bg rounded"></div>

                <div class="absolute top-0 left-0 px-2 inline-flex flex-col justify-end items-start">
                    <div class="inline-flex self-stretch h-6 py-3 justify-start items-center gap-2">
                        <div 
                            class="text-gray-900 text-xs font-semibold leading-3 break-words"
                            style="animation: timer ${this.duration}ms linear;"
                        >${minutes}:${seconds}</div>
                        <div class="inline-flex flex-1 flex-col justify-start items-start gap-2.5 bg-gray-300 shadow-inner rounded-md">
                            <div class="self-stretch p-1 rounded-md mr-[100%] bg-red-500" style="animation: burndown ${this.duration}ms linear;"></div>
                        </div>
                        <div class="relative w-2 h-2">
                            <img class="absolute left-0 top-0 w-2 h-2" src="${closeBuffImage}" @click="${() => this._closed = true}" />
                        </div>
                    </div>

                    <div class="self-stretch h-15 pb-3 inline-flex flex-col justify-start items-start gap-2.5">
                        <div class="self-stretch inline-flex justify-start items-start gap-2">
                            <div class="w-12 h-12 bg-white rounded flex flex-col justify-center items-center gap-2.5 inline-flex overflow-hidden">
                                <img class="w-full h-full object-contain rounded" src="${this.author.imageUrl}" />
                            </div>
                            <div class="flex-1 self-stretch inline-flex flex-col justify-start items-start">
                                <div class="w-28 h-3 text-gray-900 text-xs font-semibold leading-3 break-words">${this.author.name}</div>
                                <div class="self-stretch h-8 text-gray-900 text-base font-bold leading-5 break-words">${this.question}</div>
                            </div>
                        </div>
                    </div>

                    <div class="self-stretch inline-flex justify-center items-center gap-1">
                        ${this.answers.map((answer, index) => this._renderAnswer(answer, index))}
                    </div>
                </div>
            </div>
        `;
    }
}

export interface QuizVoteAuthor {
    name: string;
    imageUrl: string;
}

export interface QuizVoteAnswer {
    text: string;
    imageUrl: string;
    points: number;
    voteUrl: string;
}
