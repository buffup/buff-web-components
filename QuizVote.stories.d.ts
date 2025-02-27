import { Meta, StoryFn } from '@storybook/web-components';
import { QuizVoteAuthor, QuizVoteAnswer } from './QuizVote';
declare const _default: Meta;
export default _default;
interface TemplateArgs {
    author: QuizVoteAuthor;
    question: string;
    answers: QuizVoteAnswer[];
    duration: number;
    disableClose: boolean;
}
export declare const Primary: StoryFn<TemplateArgs>;
export declare const Secondary: StoryFn<TemplateArgs>;
