import{x as l}from"./lit-element-C3K0L47Q.js";import{s as c}from"./sportbuff-logo-CQy7WOdd.js";import{d as r}from"./Person-CUtQ_Dqb.js";const g={title:"Components/Buff Container",component:"buff-container",tags:["autodocs"]},m=u=>l`
    <buff-container .backgroundColor=${u.backgroundColor}>
        <div slot="content">
            <h1>Buff Container</h1>
            <p>This is the content of the Buff Container</p>
        </div>
    </buff-container>
`,e=m.bind({});e.args={backgroundColor:"#F3F4F6"};const t=()=>l`
    <buff-container>
        <div slot="content" style="display: contents;">
            <buff-timer-bar
                .totalTime=${1e4}
                .timeLeft=${7500}
                .barColorStart=${"#16A34A"}
                .barColorEnd=${"#EF4444"}
                .barBackground=${"#D1D5DB"}
            ></buff-timer-bar>
            <buff-author-text
                .author=${"CNN"}
                .imageUrl=${c}
                .text=${"Who will win the 2024 presidential election?"}
            ></buff-author-text>

            <div style="display: flex; justify-content: center; gap: 6px;">
                <buff-answer-tile
                    .imageUrl=${r} text="example"
                    footer="100 pts" hoverColor="#2563EB"
                ></buff-answer-tile>

                <buff-answer-tile
                    .imageUrl=${r} text="example"
                    footer="100 pts" hoverColor="#2563EB"
                ></buff-answer-tile>

                <buff-answer-tile
                    .imageUrl=${r} text="example"
                    footer="100 pts" hoverColor="#2563EB"
                ></buff-answer-tile>
            </div>
        </div>
    </buff-container>
`;var o,n,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => html\`
    <buff-container .backgroundColor=\${args.backgroundColor}>
        <div slot="content">
            <h1>Buff Container</h1>
            <p>This is the content of the Buff Container</p>
        </div>
    </buff-container>
\``,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var f,i,s;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`() => html\`
    <buff-container>
        <div slot="content" style="display: contents;">
            <buff-timer-bar
                .totalTime=\${10000}
                .timeLeft=\${7500}
                .barColorStart=\${'#16A34A'}
                .barColorEnd=\${'#EF4444'}
                .barBackground=\${'#D1D5DB'}
            ></buff-timer-bar>
            <buff-author-text
                .author=\${'CNN'}
                .imageUrl=\${sportbuffLogo}
                .text=\${'Who will win the 2024 presidential election?'}
            ></buff-author-text>

            <div style="display: flex; justify-content: center; gap: 6px;">
                <buff-answer-tile
                    .imageUrl=\${exampleAnswerImage} text="example"
                    footer="100 pts" hoverColor="#2563EB"
                ></buff-answer-tile>

                <buff-answer-tile
                    .imageUrl=\${exampleAnswerImage} text="example"
                    footer="100 pts" hoverColor="#2563EB"
                ></buff-answer-tile>

                <buff-answer-tile
                    .imageUrl=\${exampleAnswerImage} text="example"
                    footer="100 pts" hoverColor="#2563EB"
                ></buff-answer-tile>
            </div>
        </div>
    </buff-container>
\``,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const h=["Default","Quiz"];export{e as Default,t as Quiz,h as __namedExportsOrder,g as default};
