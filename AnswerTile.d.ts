import { LitElement } from 'lit';
export declare class AnswerTile extends LitElement {
    imageUrl: string;
    text: string;
    footer: string;
    progress: number;
    color: string;
    hoverColor: string;
    constructor();
    updated(changedProperties: Map<string | number | symbol, unknown>): void;
    private _updateStyleProperties;
    render(): import('lit-html').TemplateResult<1>;
    static styles: import('lit').CSSResult[];
}
