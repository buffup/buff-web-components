import { LitElement } from 'lit';
export declare class TimerBar extends LitElement {
    totalTime: number;
    timeLeft: number;
    barColorStart: string;
    barColorEnd: string;
    barBackground: string;
    render(): import('lit-html').TemplateResult<1>;
    private _getColor;
    private _clickClose;
    static styles: import('lit').CSSResult[];
}
