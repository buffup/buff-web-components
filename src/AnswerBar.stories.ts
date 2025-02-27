import { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit';
import exampleAnswerImage from './assets/Person.svg';
//import { AnswerTile } from './Quiz';

export default {
    title: 'Components/Answer Bar',
    component: 'buff-answer-bar',
    tags: ['autodocs'],
} as Meta;


const Template: StoryFn = (args) => html`
    <div style="width: ${args.width}; height: ${args.height};">
        <buff-answer-bar
            .progress=${args.progress} .color=${args.color} .hoverColor=${args.hoverColor}
            .imageUrl=${args.imageUrl} .text=${args.text} .footer=${args.footer}
        ></buff-answer-bar>
    </div>
`;

export const Default = Template.bind({});
Default.args = {
    width: '200px',
    height: '50px',
    progress: 0,
    color: '',
    hoverColor: '',
    imageUrl: exampleAnswerImage,
    text: 'Example answer with long text that should wrap',
    footer: `100 pts`,
};

export const ProgressBar = Template.bind({});
ProgressBar.args = {
    width: '200px',
    height: '50px',
    progress: 0.5,
    color: '',
    hoverColor: '',
    imageUrl: exampleAnswerImage,
    text: 'Example answer with long text that should wrap',
    footer: '50%'
};

export const CustomColorsWithHover = Template.bind({});
CustomColorsWithHover.args = {
    width: '200px',
    height: '50px',
    progress: 0,
    color: 'green-600',
    hoverColor: 'amber-400',
    imageUrl: exampleAnswerImage,
    text: 'Example answer with long text that should wrap',
    footer: '✔️'
};

