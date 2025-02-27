import { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit';
import { QuizVoteAuthor, QuizVoteAnswer } from './QuizVote';
import sportbuffLogo from './assets/sportbuff-logo.png';


export default {
    title: 'Quiz/Vote',
    component: 'buff-quiz-vote',
    tags: ['autodocs'],
} as Meta;

//const Template: StoryFn<QuizVoteData> = (data: QuizVoteData) => {
const Template: StoryFn<TemplateArgs> = (args: TemplateArgs) => {
    if (args === undefined) {
        return html`<buff-quiz-vote></buff-quiz-vote>`;
    }

    return html`<buff-quiz-vote 
        .author=${args.author}
        .question=${args.question}
        .answers=${args.answers}
        .duration=${args.duration}
        .disableClose=${args.disableClose}
    ></buff-quiz-vote>`;
};

interface TemplateArgs {
    author: QuizVoteAuthor;
    question: string;
    answers: QuizVoteAnswer[];
    duration: number;
    disableClose: boolean;
}

export const Primary = Template.bind({});
Primary.args = {
    author: {name: 'CNN', imageUrl: sportbuffLogo},
    question: 'Who will win the 2024 presidential election?',
    answers: [
        {
            text: 'Donald Trump',
            points: 20,
            //imageUrl: 'https://api.buffup.net/v1/image/answer/trump',
            imageUrl: '',
            voteUrl: 'https://api.buffup.net/v1/vote/ec64fa88-b886-4178-8749-a9af93a9edd2'
        },
        {
            text: 'Joe Biden',
            points: 20,
            //imageUrl: 'https://api.buffup.net/v1/image/answer/biden',
            imageUrl: '',
            voteUrl: 'https://api.buffup.net/v1/vote/57aa33bb-88f8-4ad9-b5e9-a2701d8f6960'
        },
        {
            text: 'Kanye West',
            points: 100,
            //imageUrl: 'https://api.buffup.net/v1/image/answer/kanye',
            imageUrl: '',
            voteUrl: 'https://api.buffup.net/v1/vote/118efccf-0580-46a9-a8a4-7b514b7c661e'
        },
    ],
    duration: 15000,
    disableClose: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
    author: {name: 'CNN', imageUrl: 'https://api.buffup.net/v1/image/author/cnn'},
    question: 'Who will win the 2024 presidential election?',
    answers: [
            {
                text: 'Donald Trump',
                points: 20,
                //imageUrl: 'https://api.buffup.net/v1/image/answer/trump',
                imageUrl: '',
                voteUrl: 'https://api.buffup.net/v1/vote/ec64fa88-b886-4178-8749-a9af93a9edd2'
            },
            {
                text: 'Joe Biden',
                points: 20,
                //imageUrl: 'https://api.buffup.net/v1/image/answer/biden',
                imageUrl: '',
                voteUrl: 'https://api.buffup.net/v1/vote/57aa33bb-88f8-4ad9-b5e9-a2701d8f6960'
            },
            {
                text: 'Kanye West',
                points: 100,
                //imageUrl: 'https://api.buffup.net/v1/image/answer/kanye',
                imageUrl: '',
                voteUrl: 'https://api.buffup.net/v1/vote/118efccf-0580-46a9-a8a4-7b514b7c661e'
            },
        ],
    duration: 5000,
    disableClose: false,
};
