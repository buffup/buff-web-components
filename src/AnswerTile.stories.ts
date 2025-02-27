import { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit';
import exampleAnswerImage from './assets/Person.svg';
//import { AnswerTile } from './Quiz';

export default {
    title: 'Components/Answer Tile',
    component: 'buff-answer-tile',
    tags: ['autodocs'],
} as Meta;

export const Default: StoryFn = (args) => html`
    <buff-answer-tile
        .imageUrl=${args.imageUrl}
        .text=${args.text}
        .footer=${args.footer}
    ></buff-answer-tile>
`;
Default.args = {
    imageUrl: exampleAnswerImage,
    text: 'Example answer',
    footer: '100 pts'
};

export const ProgressBar: StoryFn = (args) => html`
    <buff-answer-tile
        .progress=${args.progress}
        .imageUrl=${exampleAnswerImage}
        .text=${'Example answer'}
        .footer=${Math.round(args.progress * 100) + '%'}
    ></buff-answer-tile>
`;
ProgressBar.args = {
    progress: 0.5,
};

export const CustomColorsWithHover: StoryFn = (args) => html`
    <buff-answer-tile
        .color=${args.color}
        .hoverColor=${args.hoverColor}
        .imageUrl=${exampleAnswerImage}
        .text=${'Example answer'}
        .footer=${'✔️'}
    ></buff-answer-tile>
`;

CustomColorsWithHover.args = {
    color: '#16A34A',
    hoverColor: '#FBBF24',
};

