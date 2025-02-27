import { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit';
import sportbuffLogo from './assets/sportbuff-logo.png';

export default {
    title: 'Components/Author Text',
    component: 'buff-author-text',
    tags: ['autodocs'],
} as Meta;

const Template: StoryFn = (args) => html`
    <div style="width: ${args.width};">
        <buff-author-text
            .author=${args.author}
            .imageUrl=${args.imageUrl}
            .text=${args.text}
        ></buff-author-text>
    </div>
`;

export const Default = Template.bind({});
Default.args = {
    width: '280px',
    author: 'CNN',
    imageUrl: sportbuffLogo,
    text: 'Who will win the 2024 presidential election?',
}

