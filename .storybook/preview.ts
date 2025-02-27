import type { Preview } from "@storybook/web-components";
import "../src/hello-world";
import "../src/QuizVote";
import "../src/AnswerTile";
import "../src/AnswerBar";
import "../src/TimerBar";
import "../src/AuthorText";
import "../src/BuffContainer";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds : {
      values: [
        { name: 'sports', value: 'url(https://web-dashboard.sportbuff.buffup.net/3e6d065f9c5fefe8240c6eeb8134c5c2.png)'},
        { name: 'white', value: '#ffffff' },
        { name: 'black', value: '#000000' },
        { name: 'gray', value: '#888888' },
      ],
    },
  },
};

export default preview;
