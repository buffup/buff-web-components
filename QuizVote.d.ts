import { LitElement } from 'lit';
export declare class QuizVote extends LitElement {
    static styles: import('lit').CSSResult[];
    author: QuizVoteAuthor;
    question: string;
    answers: QuizVoteAnswer[];
    duration: number;
    elapsed: number;
    autoremove: boolean;
    freeze: boolean;
    vote: number | null;
    private _interval;
    connectedCallback(): void;
    disconnectedCallback(): void;
    disableClose: boolean;
    private _closed;
    private _selectedAnswer;
    private _selectAnswer;
    private _renderAnswer;
    render(): import('lit-html').TemplateResult<1>;
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
