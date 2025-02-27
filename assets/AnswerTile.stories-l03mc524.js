import{x as a}from"./lit-element-C3K0L47Q.js";import{d as t}from"./Person-CUtQ_Dqb.js";const x={title:"Components/Answer Tile",component:"buff-answer-tile",tags:["autodocs"]},r=e=>a`
    <buff-answer-tile
        .imageUrl=${e.imageUrl}
        .text=${e.text}
        .footer=${e.footer}
    ></buff-answer-tile>
`;r.args={imageUrl:t,text:"Example answer",footer:"100 pts"};const o=e=>a`
    <buff-answer-tile
        .progress=${e.progress}
        .imageUrl=${t}
        .text=${"Example answer"}
        .footer=${Math.round(e.progress*100)+"%"}
    ></buff-answer-tile>
`;o.args={progress:.5};const s=e=>a`
    <buff-answer-tile
        .color=${e.color}
        .hoverColor=${e.hoverColor}
        .imageUrl=${t}
        .text=${"Example answer"}
        .footer=${"✔️"}
    ></buff-answer-tile>
`;s.args={color:"#16A34A",hoverColor:"#FBBF24"};var n,l,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`args => html\`
    <buff-answer-tile
        .imageUrl=\${args.imageUrl}
        .text=\${args.text}
        .footer=\${args.footer}
    ></buff-answer-tile>
\``,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var f,i,g;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`args => html\`
    <buff-answer-tile
        .progress=\${args.progress}
        .imageUrl=\${exampleAnswerImage}
        .text=\${'Example answer'}
        .footer=\${Math.round(args.progress * 100) + '%'}
    ></buff-answer-tile>
\``,...(g=(i=o.parameters)==null?void 0:i.docs)==null?void 0:g.source}}};var p,u,c;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`args => html\`
    <buff-answer-tile
        .color=\${args.color}
        .hoverColor=\${args.hoverColor}
        .imageUrl=\${exampleAnswerImage}
        .text=\${'Example answer'}
        .footer=\${'✔️'}
    ></buff-answer-tile>
\``,...(c=(u=s.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const d=["Default","ProgressBar","CustomColorsWithHover"];export{s as CustomColorsWithHover,r as Default,o as ProgressBar,d as __namedExportsOrder,x as default};
