import { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit';

export default {
    title: 'Components/Timer Bar',
    component: 'buff-timer-bar',
    tags: ['autodocs'],
} as Meta;

const Template: StoryFn = (args) => html`
    <div style="width: ${args.width};">
        <buff-timer-bar
            .totalTime=${args.totalTime}
            .timeLeft=${args.timeLeft}
            .barColorStart=${args.barColorStart}
            .barColorEnd=${args.barColorEnd}
            .barBackground=${args.barBackground}
        ></buff-timer-bar>
    </div>
`;

export const Default = Template.bind({});
Default.args = {
    width: '280px',
    totalTime: 10000,
    timeLeft: 7500,
    barColorStart: '#16A34A',
    barColorEnd: '#EF4444',
    barBackground: '#D1D5DB',
};

export const Halfway = Template.bind({});
Halfway.args = {
    width: '280px',
    totalTime: 10000,
    timeLeft: 5000,
    barColorStart: '#16A34A',
    barColorEnd: '#EF4444',
    barBackground: '#D1D5DB',
};

export const AlmostFinished = Template.bind({});
AlmostFinished.args = {
    width: '280px',
    totalTime: 10000,
    timeLeft: 2000,
    barColorStart: '#16A34A',
    barColorEnd: '#EF4444',
    barBackground: '#D1D5DB',
};
