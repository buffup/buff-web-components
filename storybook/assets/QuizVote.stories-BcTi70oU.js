import{x as o}from"./lit-element-C3K0L47Q.js";import{s as d}from"./sportbuff-logo-CQy7WOdd.js";const m={title:"Quiz/Vote",component:"buff-quiz-vote",tags:["autodocs"]},l=e=>e===void 0?o`<buff-quiz-vote></buff-quiz-vote>`:o`<buff-quiz-vote 
        .author=${e.author}
        .question=${e.question}
        .answers=${e.answers}
        .duration=${e.duration}
        .disableClose=${e.disableClose}
    ></buff-quiz-vote>`,t=l.bind({});t.args={author:{name:"CNN",imageUrl:d},question:"Who will win the 2024 presidential election?",answers:[{text:"Donald Trump",points:20,imageUrl:"",voteUrl:"https://api.buffup.net/v1/vote/ec64fa88-b886-4178-8749-a9af93a9edd2"},{text:"Joe Biden",points:20,imageUrl:"",voteUrl:"https://api.buffup.net/v1/vote/57aa33bb-88f8-4ad9-b5e9-a2701d8f6960"},{text:"Kanye West",points:100,imageUrl:"",voteUrl:"https://api.buffup.net/v1/vote/118efccf-0580-46a9-a8a4-7b514b7c661e"}],duration:15e3,disableClose:!0};const a=l.bind({});a.args={author:{name:"CNN",imageUrl:"https://api.buffup.net/v1/image/author/cnn"},question:"Who will win the 2024 presidential election?",answers:[{text:"Donald Trump",points:20,imageUrl:"",voteUrl:"https://api.buffup.net/v1/vote/ec64fa88-b886-4178-8749-a9af93a9edd2"},{text:"Joe Biden",points:20,imageUrl:"",voteUrl:"https://api.buffup.net/v1/vote/57aa33bb-88f8-4ad9-b5e9-a2701d8f6960"},{text:"Kanye West",points:100,imageUrl:"",voteUrl:"https://api.buffup.net/v1/vote/118efccf-0580-46a9-a8a4-7b514b7c661e"}],duration:5e3,disableClose:!1};var r,s,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`(args: TemplateArgs) => {
  if (args === undefined) {
    return html\`<buff-quiz-vote></buff-quiz-vote>\`;
  }
  return html\`<buff-quiz-vote 
        .author=\${args.author}
        .question=\${args.question}
        .answers=\${args.answers}
        .duration=\${args.duration}
        .disableClose=\${args.disableClose}
    ></buff-quiz-vote>\`;
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var i,u,f;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`(args: TemplateArgs) => {
  if (args === undefined) {
    return html\`<buff-quiz-vote></buff-quiz-vote>\`;
  }
  return html\`<buff-quiz-vote 
        .author=\${args.author}
        .question=\${args.question}
        .answers=\${args.answers}
        .duration=\${args.duration}
        .disableClose=\${args.disableClose}
    ></buff-quiz-vote>\`;
}`,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const c=["Primary","Secondary"];export{t as Primary,a as Secondary,c as __namedExportsOrder,m as default};
