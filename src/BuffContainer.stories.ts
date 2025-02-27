import { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit';
import sportbuffLogo from './assets/sportbuff-logo.png';
import exampleAnswerImage from './assets/Person.svg';

export default {
    title: 'Components/Buff Container',
    component: 'buff-container',
    tags: ['autodocs'],
} as Meta;

const Template: StoryFn = (args) => html`
    <buff-container .backgroundColor=${args.backgroundColor}>
        <div slot="content">
            <h1>Buff Container</h1>
            <p>This is the content of the Buff Container</p>
        </div>
    </buff-container>
`;

export const Default = Template.bind({});
Default.args = {
    backgroundColor: '#F3F4F6',
}

export const Quiz: StoryFn = () => html`
    <buff-container>
        <div slot="content" style="display: contents;">
            <buff-timer-bar
                .totalTime=${10000}
                .timeLeft=${7500}
                .barColorStart=${'#16A34A'}
                .barColorEnd=${'#EF4444'}
                .barBackground=${'#D1D5DB'}
            ></buff-timer-bar>
            <buff-author-text
                .author=${'CNN'}
                .imageUrl=${sportbuffLogo}
                .text=${'Who will win the 2024 presidential election?'}
            ></buff-author-text>

            <div style="display: flex; justify-content: center; gap: 6px;">
                <buff-answer-tile
                    .imageUrl=${exampleAnswerImage} text="example"
                    footer="100 pts" hoverColor="#2563EB"
                ></buff-answer-tile>

                <buff-answer-tile
                    .imageUrl=${exampleAnswerImage} text="example"
                    footer="100 pts" hoverColor="#2563EB"
                ></buff-answer-tile>

                <buff-answer-tile
                    .imageUrl=${exampleAnswerImage} text="example"
                    footer="100 pts" hoverColor="#2563EB"
                ></buff-answer-tile>
            </div>
        </div>
    </buff-container>
`;
