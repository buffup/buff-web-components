import { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit';

export default {
    title: 'Simple Greeting',
    component: 'simple-greeting',
    tags: ['autodocs'],
} as Meta;

const Template: StoryFn = ({ name }) => html`<simple-greeting .name=${name}></simple-greeting>`;

export const Default = Template.bind({});
Default.args = { name: 'World' };
