import{f as U,u as L,r as f,a as u,x as h,i as k}from"./lit-element-C3K0L47Q.js";import{d as E}from"./Person-CUtQ_Dqb.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const m=o=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(o,e)}):customElements.define(o,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I={attribute:!0,type:String,converter:L,reflect:!1,hasChanged:U},T=(o=I,e,r)=>{const{kind:i,metadata:t}=r;let l=globalThis.litPropertyMetadata.get(t);if(l===void 0&&globalThis.litPropertyMetadata.set(t,l=new Map),l.set(r.name,o),i==="accessor"){const{name:a}=r;return{set(w){const j=e.get.call(this);e.set.call(this,w),this.requestUpdate(a,j,o)},init(w){return w!==void 0&&this.P(a,void 0,o),w}}}if(i==="setter"){const{name:a}=r;return function(w){const j=this[a];e.call(this,w),this.requestUpdate(a,j,o)}}throw Error("Unsupported decorator location: "+i)};function n(o){return(e,r)=>typeof r=="object"?T(o,e,r):((i,t,l)=>{const a=t.hasOwnProperty(l);return t.constructor.createProperty(l,a?{...i,wrapped:!0}:i),a?Object.getOwnPropertyDescriptor(t,l):void 0})(o,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function P(o){return n({...o,state:!0,attribute:!1})}const C='/*! tailwindcss v4.0.4 | MIT License | https://tailwindcss.com */@layer theme,base,components,utilities;@layer theme{:root,:host{--font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;--font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50: oklch(.971 .013 17.38);--color-red-100: oklch(.936 .032 17.717);--color-red-200: oklch(.885 .062 18.334);--color-red-300: oklch(.808 .114 19.571);--color-red-400: oklch(.704 .191 22.216);--color-red-500: oklch(.637 .237 25.331);--color-red-600: oklch(.577 .245 27.325);--color-red-700: oklch(.505 .213 27.518);--color-red-800: oklch(.444 .177 26.899);--color-red-900: oklch(.396 .141 25.723);--color-red-950: oklch(.258 .092 26.042);--color-orange-50: oklch(.98 .016 73.684);--color-orange-100: oklch(.954 .038 75.164);--color-orange-200: oklch(.901 .076 70.697);--color-orange-300: oklch(.837 .128 66.29);--color-orange-400: oklch(.75 .183 55.934);--color-orange-500: oklch(.705 .213 47.604);--color-orange-600: oklch(.646 .222 41.116);--color-orange-700: oklch(.553 .195 38.402);--color-orange-800: oklch(.47 .157 37.304);--color-orange-900: oklch(.408 .123 38.172);--color-orange-950: oklch(.266 .079 36.259);--color-amber-50: oklch(.987 .022 95.277);--color-amber-100: oklch(.962 .059 95.617);--color-amber-200: oklch(.924 .12 95.746);--color-amber-300: oklch(.879 .169 91.605);--color-amber-400: oklch(.828 .189 84.429);--color-amber-500: oklch(.769 .188 70.08);--color-amber-600: oklch(.666 .179 58.318);--color-amber-700: oklch(.555 .163 48.998);--color-amber-800: oklch(.473 .137 46.201);--color-amber-900: oklch(.414 .112 45.904);--color-amber-950: oklch(.279 .077 45.635);--color-yellow-50: oklch(.987 .026 102.212);--color-yellow-100: oklch(.973 .071 103.193);--color-yellow-200: oklch(.945 .129 101.54);--color-yellow-300: oklch(.905 .182 98.111);--color-yellow-400: oklch(.852 .199 91.936);--color-yellow-500: oklch(.795 .184 86.047);--color-yellow-600: oklch(.681 .162 75.834);--color-yellow-700: oklch(.554 .135 66.442);--color-yellow-800: oklch(.476 .114 61.907);--color-yellow-900: oklch(.421 .095 57.708);--color-yellow-950: oklch(.286 .066 53.813);--color-lime-50: oklch(.986 .031 120.757);--color-lime-100: oklch(.967 .067 122.328);--color-lime-200: oklch(.938 .127 124.321);--color-lime-300: oklch(.897 .196 126.665);--color-lime-400: oklch(.841 .238 128.85);--color-lime-500: oklch(.768 .233 130.85);--color-lime-600: oklch(.648 .2 131.684);--color-lime-700: oklch(.532 .157 131.589);--color-lime-800: oklch(.453 .124 130.933);--color-lime-900: oklch(.405 .101 131.063);--color-lime-950: oklch(.274 .072 132.109);--color-green-50: oklch(.982 .018 155.826);--color-green-100: oklch(.962 .044 156.743);--color-green-200: oklch(.925 .084 155.995);--color-green-300: oklch(.871 .15 154.449);--color-green-400: oklch(.792 .209 151.711);--color-green-500: oklch(.723 .219 149.579);--color-green-600: oklch(.627 .194 149.214);--color-green-700: oklch(.527 .154 150.069);--color-green-800: oklch(.448 .119 151.328);--color-green-900: oklch(.393 .095 152.535);--color-green-950: oklch(.266 .065 152.934);--color-emerald-50: oklch(.979 .021 166.113);--color-emerald-100: oklch(.95 .052 163.051);--color-emerald-200: oklch(.905 .093 164.15);--color-emerald-300: oklch(.845 .143 164.978);--color-emerald-400: oklch(.765 .177 163.223);--color-emerald-500: oklch(.696 .17 162.48);--color-emerald-600: oklch(.596 .145 163.225);--color-emerald-700: oklch(.508 .118 165.612);--color-emerald-800: oklch(.432 .095 166.913);--color-emerald-900: oklch(.378 .077 168.94);--color-emerald-950: oklch(.262 .051 172.552);--color-teal-50: oklch(.984 .014 180.72);--color-teal-100: oklch(.953 .051 180.801);--color-teal-200: oklch(.91 .096 180.426);--color-teal-300: oklch(.855 .138 181.071);--color-teal-400: oklch(.777 .152 181.912);--color-teal-500: oklch(.704 .14 182.503);--color-teal-600: oklch(.6 .118 184.704);--color-teal-700: oklch(.511 .096 186.391);--color-teal-800: oklch(.437 .078 188.216);--color-teal-900: oklch(.386 .063 188.416);--color-teal-950: oklch(.277 .046 192.524);--color-cyan-50: oklch(.984 .019 200.873);--color-cyan-100: oklch(.956 .045 203.388);--color-cyan-200: oklch(.917 .08 205.041);--color-cyan-300: oklch(.865 .127 207.078);--color-cyan-400: oklch(.789 .154 211.53);--color-cyan-500: oklch(.715 .143 215.221);--color-cyan-600: oklch(.609 .126 221.723);--color-cyan-700: oklch(.52 .105 223.128);--color-cyan-800: oklch(.45 .085 224.283);--color-cyan-900: oklch(.398 .07 227.392);--color-cyan-950: oklch(.302 .056 229.695);--color-sky-50: oklch(.977 .013 236.62);--color-sky-100: oklch(.951 .026 236.824);--color-sky-200: oklch(.901 .058 230.902);--color-sky-300: oklch(.828 .111 230.318);--color-sky-400: oklch(.746 .16 232.661);--color-sky-500: oklch(.685 .169 237.323);--color-sky-600: oklch(.588 .158 241.966);--color-sky-700: oklch(.5 .134 242.749);--color-sky-800: oklch(.443 .11 240.79);--color-sky-900: oklch(.391 .09 240.876);--color-sky-950: oklch(.293 .066 243.157);--color-blue-50: oklch(.97 .014 254.604);--color-blue-100: oklch(.932 .032 255.585);--color-blue-200: oklch(.882 .059 254.128);--color-blue-300: oklch(.809 .105 251.813);--color-blue-400: oklch(.707 .165 254.624);--color-blue-500: oklch(.623 .214 259.815);--color-blue-600: oklch(.546 .245 262.881);--color-blue-700: oklch(.488 .243 264.376);--color-blue-800: oklch(.424 .199 265.638);--color-blue-900: oklch(.379 .146 265.522);--color-blue-950: oklch(.282 .091 267.935);--color-indigo-50: oklch(.962 .018 272.314);--color-indigo-100: oklch(.93 .034 272.788);--color-indigo-200: oklch(.87 .065 274.039);--color-indigo-300: oklch(.785 .115 274.713);--color-indigo-400: oklch(.673 .182 276.935);--color-indigo-500: oklch(.585 .233 277.117);--color-indigo-600: oklch(.511 .262 276.966);--color-indigo-700: oklch(.457 .24 277.023);--color-indigo-800: oklch(.398 .195 277.366);--color-indigo-900: oklch(.359 .144 278.697);--color-indigo-950: oklch(.257 .09 281.288);--color-violet-50: oklch(.969 .016 293.756);--color-violet-100: oklch(.943 .029 294.588);--color-violet-200: oklch(.894 .057 293.283);--color-violet-300: oklch(.811 .111 293.571);--color-violet-400: oklch(.702 .183 293.541);--color-violet-500: oklch(.606 .25 292.717);--color-violet-600: oklch(.541 .281 293.009);--color-violet-700: oklch(.491 .27 292.581);--color-violet-800: oklch(.432 .232 292.759);--color-violet-900: oklch(.38 .189 293.745);--color-violet-950: oklch(.283 .141 291.089);--color-purple-50: oklch(.977 .014 308.299);--color-purple-100: oklch(.946 .033 307.174);--color-purple-200: oklch(.902 .063 306.703);--color-purple-300: oklch(.827 .119 306.383);--color-purple-400: oklch(.714 .203 305.504);--color-purple-500: oklch(.627 .265 303.9);--color-purple-600: oklch(.558 .288 302.321);--color-purple-700: oklch(.496 .265 301.924);--color-purple-800: oklch(.438 .218 303.724);--color-purple-900: oklch(.381 .176 304.987);--color-purple-950: oklch(.291 .149 302.717);--color-fuchsia-50: oklch(.977 .017 320.058);--color-fuchsia-100: oklch(.952 .037 318.852);--color-fuchsia-200: oklch(.903 .076 319.62);--color-fuchsia-300: oklch(.833 .145 321.434);--color-fuchsia-400: oklch(.74 .238 322.16);--color-fuchsia-500: oklch(.667 .295 322.15);--color-fuchsia-600: oklch(.591 .293 322.896);--color-fuchsia-700: oklch(.518 .253 323.949);--color-fuchsia-800: oklch(.452 .211 324.591);--color-fuchsia-900: oklch(.401 .17 325.612);--color-fuchsia-950: oklch(.293 .136 325.661);--color-pink-50: oklch(.971 .014 343.198);--color-pink-100: oklch(.948 .028 342.258);--color-pink-200: oklch(.899 .061 343.231);--color-pink-300: oklch(.823 .12 346.018);--color-pink-400: oklch(.718 .202 349.761);--color-pink-500: oklch(.656 .241 354.308);--color-pink-600: oklch(.592 .249 .584);--color-pink-700: oklch(.525 .223 3.958);--color-pink-800: oklch(.459 .187 3.815);--color-pink-900: oklch(.408 .153 2.432);--color-pink-950: oklch(.284 .109 3.907);--color-rose-50: oklch(.969 .015 12.422);--color-rose-100: oklch(.941 .03 12.58);--color-rose-200: oklch(.892 .058 10.001);--color-rose-300: oklch(.81 .117 11.638);--color-rose-400: oklch(.712 .194 13.428);--color-rose-500: oklch(.645 .246 16.439);--color-rose-600: oklch(.586 .253 17.585);--color-rose-700: oklch(.514 .222 16.935);--color-rose-800: oklch(.455 .188 13.697);--color-rose-900: oklch(.41 .159 10.272);--color-rose-950: oklch(.271 .105 12.094);--color-slate-50: oklch(.984 .003 247.858);--color-slate-100: oklch(.968 .007 247.896);--color-slate-200: oklch(.929 .013 255.508);--color-slate-300: oklch(.869 .022 252.894);--color-slate-400: oklch(.704 .04 256.788);--color-slate-500: oklch(.554 .046 257.417);--color-slate-600: oklch(.446 .043 257.281);--color-slate-700: oklch(.372 .044 257.287);--color-slate-800: oklch(.279 .041 260.031);--color-slate-900: oklch(.208 .042 265.755);--color-slate-950: oklch(.129 .042 264.695);--color-gray-50: oklch(.985 .002 247.839);--color-gray-100: oklch(.967 .003 264.542);--color-gray-200: oklch(.928 .006 264.531);--color-gray-300: oklch(.872 .01 258.338);--color-gray-400: oklch(.707 .022 261.325);--color-gray-500: oklch(.551 .027 264.364);--color-gray-600: oklch(.446 .03 256.802);--color-gray-700: oklch(.373 .034 259.733);--color-gray-800: oklch(.278 .033 256.848);--color-gray-900: oklch(.21 .034 264.665);--color-gray-950: oklch(.13 .028 261.692);--color-zinc-50: oklch(.985 0 0);--color-zinc-100: oklch(.967 .001 286.375);--color-zinc-200: oklch(.92 .004 286.32);--color-zinc-300: oklch(.871 .006 286.286);--color-zinc-400: oklch(.705 .015 286.067);--color-zinc-500: oklch(.552 .016 285.938);--color-zinc-600: oklch(.442 .017 285.786);--color-zinc-700: oklch(.37 .013 285.805);--color-zinc-800: oklch(.274 .006 286.033);--color-zinc-900: oklch(.21 .006 285.885);--color-zinc-950: oklch(.141 .005 285.823);--color-neutral-50: oklch(.985 0 0);--color-neutral-100: oklch(.97 0 0);--color-neutral-200: oklch(.922 0 0);--color-neutral-300: oklch(.87 0 0);--color-neutral-400: oklch(.708 0 0);--color-neutral-500: oklch(.556 0 0);--color-neutral-600: oklch(.439 0 0);--color-neutral-700: oklch(.371 0 0);--color-neutral-800: oklch(.269 0 0);--color-neutral-900: oklch(.205 0 0);--color-neutral-950: oklch(.145 0 0);--color-stone-50: oklch(.985 .001 106.423);--color-stone-100: oklch(.97 .001 106.424);--color-stone-200: oklch(.923 .003 48.717);--color-stone-300: oklch(.869 .005 56.366);--color-stone-400: oklch(.709 .01 56.259);--color-stone-500: oklch(.553 .013 58.071);--color-stone-600: oklch(.444 .011 73.639);--color-stone-700: oklch(.374 .01 67.558);--color-stone-800: oklch(.268 .007 34.298);--color-stone-900: oklch(.216 .006 56.043);--color-stone-950: oklch(.147 .004 49.25);--color-black: #000;--color-white: #fff;--spacing: .25rem;--breakpoint-sm: 40rem;--breakpoint-md: 48rem;--breakpoint-lg: 64rem;--breakpoint-xl: 80rem;--breakpoint-2xl: 96rem;--container-3xs: 16rem;--container-2xs: 18rem;--container-xs: 20rem;--container-sm: 24rem;--container-md: 28rem;--container-lg: 32rem;--container-xl: 36rem;--container-2xl: 42rem;--container-3xl: 48rem;--container-4xl: 56rem;--container-5xl: 64rem;--container-6xl: 72rem;--container-7xl: 80rem;--text-xs: .75rem;--text-xs--line-height: calc(1 / .75);--text-sm: .875rem;--text-sm--line-height: calc(1.25 / .875);--text-base: 1rem;--text-base--line-height: 1.5 ;--text-lg: 1.125rem;--text-lg--line-height: calc(1.75 / 1.125);--text-xl: 1.25rem;--text-xl--line-height: calc(1.75 / 1.25);--text-2xl: 1.5rem;--text-2xl--line-height: calc(2 / 1.5);--text-3xl: 1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl: 2.25rem;--text-4xl--line-height: calc(2.5 / 2.25);--text-5xl: 3rem;--text-5xl--line-height: 1;--text-6xl: 3.75rem;--text-6xl--line-height: 1;--text-7xl: 4.5rem;--text-7xl--line-height: 1;--text-8xl: 6rem;--text-8xl--line-height: 1;--text-9xl: 8rem;--text-9xl--line-height: 1;--font-weight-thin: 100;--font-weight-extralight: 200;--font-weight-light: 300;--font-weight-normal: 400;--font-weight-medium: 500;--font-weight-semibold: 600;--font-weight-bold: 700;--font-weight-extrabold: 800;--font-weight-black: 900;--tracking-tighter: -.05em;--tracking-tight: -.025em;--tracking-normal: 0em;--tracking-wide: .025em;--tracking-wider: .05em;--tracking-widest: .1em;--leading-tight: 1.25;--leading-snug: 1.375;--leading-normal: 1.5;--leading-relaxed: 1.625;--leading-loose: 2;--radius-xs: .125rem;--radius-sm: .25rem;--radius-md: .375rem;--radius-lg: .5rem;--radius-xl: .75rem;--radius-2xl: 1rem;--radius-3xl: 1.5rem;--radius-4xl: 2rem;--shadow-2xs: 0 1px rgb(0 0 0 / .05);--shadow-xs: 0 1px 2px 0 rgb(0 0 0 / .05);--shadow-sm: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--shadow-md: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1);--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / .25);--inset-shadow-2xs: inset 0 1px rgb(0 0 0 / .05);--inset-shadow-xs: inset 0 1px 1px rgb(0 0 0 / .05);--inset-shadow-sm: inset 0 2px 4px rgb(0 0 0 / .05);--drop-shadow-xs: 0 1px 1px rgb(0 0 0 / .05);--drop-shadow-sm: 0 1px 2px rgb(0 0 0 / .15);--drop-shadow-md: 0 3px 3px rgb(0 0 0 / .12);--drop-shadow-lg: 0 4px 4px rgb(0 0 0 / .15);--drop-shadow-xl: 0 9px 7px rgb(0 0 0 / .1);--drop-shadow-2xl: 0 25px 25px rgb(0 0 0 / .15);--ease-in: cubic-bezier(.4, 0, 1, 1);--ease-out: cubic-bezier(0, 0, .2, 1);--ease-in-out: cubic-bezier(.4, 0, .2, 1);--animate-spin: spin 1s linear infinite;--animate-ping: ping 1s cubic-bezier(0, 0, .2, 1) infinite;--animate-pulse: pulse 2s cubic-bezier(.4, 0, .6, 1) infinite;--animate-bounce: bounce 1s infinite;--blur-xs: 4px;--blur-sm: 8px;--blur-md: 12px;--blur-lg: 16px;--blur-xl: 24px;--blur-2xl: 40px;--blur-3xl: 64px;--perspective-dramatic: 100px;--perspective-near: 300px;--perspective-normal: 500px;--perspective-midrange: 800px;--perspective-distant: 1200px;--aspect-video: 16 / 9;--default-transition-duration: .15s;--default-transition-timing-function: cubic-bezier(.4, 0, .2, 1);--default-font-family: var(--font-sans);--default-font-feature-settings: var(--font-sans--font-feature-settings);--default-font-variation-settings: var( --font-sans--font-variation-settings );--default-mono-font-family: var(--font-mono);--default-mono-font-feature-settings: var( --font-mono--font-feature-settings );--default-mono-font-variation-settings: var( --font-mono--font-variation-settings )}}@layer base{*,:after,:before,::backdrop,::file-selector-button{box-sizing:border-box;margin:0;padding:0;border:0 solid}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:var( --default-font-family, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" );font-feature-settings:var(--default-font-feature-settings, normal);font-variation-settings:var( --default-font-variation-settings, normal );-webkit-tap-highlight-color:transparent}body{line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var( --default-mono-font-family, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace );font-feature-settings:var( --default-mono-font-feature-settings, normal );font-variation-settings:var( --default-mono-font-variation-settings, normal );font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea,::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;border-radius:0;background-color:transparent;opacity:1}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1;color:color-mix(in oklab,currentColor 50%,transparent)}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit,::-webkit-datetime-edit-year-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-meridiem-field{padding-block:0}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]),::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer utilities{.collapse{visibility:collapse}.visible{visibility:visible}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.top-0{top:calc(var(--spacing) * 0)}.top-10{top:calc(var(--spacing) * 10)}.bottom-0{bottom:calc(var(--spacing) * 0)}.left-0{left:calc(var(--spacing) * 0)}.float-left{float:left}.float-right{float:right}.container{width:100%}@media (width >= 40rem){.container{max-width:40rem}}@media (width >= 48rem){.container{max-width:48rem}}@media (width >= 64rem){.container{max-width:64rem}}@media (width >= 80rem){.container{max-width:80rem}}@media (width >= 96rem){.container{max-width:96rem}}.mr-\\[100\\%\\]{margin-right:100%}.block{display:block}.contents{display:contents}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.table{display:table}.size-1{width:calc(var(--spacing) * 1);height:calc(var(--spacing) * 1)}.h-2{height:calc(var(--spacing) * 2)}.h-3{height:calc(var(--spacing) * 3)}.h-6{height:calc(var(--spacing) * 6)}.h-8{height:calc(var(--spacing) * 8)}.h-10{height:calc(var(--spacing) * 10)}.h-12{height:calc(var(--spacing) * 12)}.h-15{height:calc(var(--spacing) * 15)}.h-25{height:calc(var(--spacing) * 25)}.h-40{height:calc(var(--spacing) * 40)}.h-full{height:100%}.w-2{width:calc(var(--spacing) * 2)}.w-12{width:calc(var(--spacing) * 12)}.w-17{width:calc(var(--spacing) * 17)}.w-28{width:calc(var(--spacing) * 28)}.w-70{width:calc(var(--spacing) * 70)}.w-full{width:100%}.flex-1{flex:1}.transform{transform:var(--tw-rotate-x) var(--tw-rotate-y) var(--tw-rotate-z) var(--tw-skew-x) var(--tw-skew-y)}.resize{resize:both}.flex-col{flex-direction:column}.items-center{align-items:center}.items-start{align-items:flex-start}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.justify-start{justify-content:flex-start}.gap-1{gap:calc(var(--spacing) * 1)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-2\\.5{gap:calc(var(--spacing) * 2.5)}.self-stretch{align-self:stretch}.overflow-hidden{overflow:hidden}.rounded{border-radius:.25rem}.rounded-md{border-radius:var(--radius-md)}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-solid{--tw-border-style: solid;border-style:solid}.border-gray-800{border-color:var(--color-gray-800)}.border-green-700{border-color:var(--color-green-700)}.bg-gray-300{background-color:var(--color-gray-300)}.bg-gray-800{background-color:var(--color-gray-800)}.bg-green-700{background-color:var(--color-green-700)}.bg-red-500{background-color:var(--color-red-500)}.bg-white{background-color:var(--color-white)}.object-contain{object-fit:contain}.p-1{padding:calc(var(--spacing) * 1)}.px-2{padding-inline:calc(var(--spacing) * 2)}.py-3{padding-block:calc(var(--spacing) * 3)}.pb-3{padding-bottom:calc(var(--spacing) * 3)}.text-center{text-align:center}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading, var(--text-2xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading, var(--text-base--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading, var(--text-xs--line-height))}.text-\\[8px\\]{font-size:8px}.leading-3{--tw-leading: calc(var(--spacing) * 3);line-height:calc(var(--spacing) * 3)}.leading-5{--tw-leading: calc(var(--spacing) * 5);line-height:calc(var(--spacing) * 5)}.font-bold{--tw-font-weight: var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-semibold{--tw-font-weight: var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.break-words{overflow-wrap:break-word}.text-blue-500{color:var(--color-blue-500)}.text-gray-900{color:var(--color-gray-900)}.text-white{color:var(--color-white)}.uppercase{text-transform:uppercase}.italic{font-style:italic}.tabular-nums{--tw-numeric-spacing: tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.underline{text-decoration-line:underline}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.ring{--tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentColor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow{--tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / .1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / .1));box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-inner{--tw-shadow: inset 0 2px 4px 0 var(--tw-shadow-color, rgb(0 0 0 / .05));box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.drop-shadow{--tw-drop-shadow: drop-shadow(0 1px 2px rgb(0 0 0 / .1)) drop-shadow( 0 1px 1px rgb(0 0 0 / .06));filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.grayscale{--tw-grayscale: grayscale(100%);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.invert{--tw-invert: invert(100%);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter;transition-timing-function:var(--tw-ease, var(--default-transition-timing-function));transition-duration:var(--tw-duration, var(--default-transition-duration))}.ease-in-out{--tw-ease: var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.ease-out{--tw-ease: var(--ease-out);transition-timing-function:var(--ease-out)}@media (hover: hover){.group-hover\\:border-blue-800:is(:where(.group):hover *){border-color:var(--color-blue-800)}}}@keyframes spin{to{transform:rotate(360deg)}}@keyframes ping{75%,to{transform:scale(2);opacity:0}}@keyframes pulse{50%{opacity:.5}}@keyframes bounce{0%,to{transform:translateY(-25%);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;animation-timing-function:cubic-bezier(0,0,.2,1)}}@property --tw-rotate-x{syntax: "*"; inherits: false; initial-value: rotateX(0);}@property --tw-rotate-y{syntax: "*"; inherits: false; initial-value: rotateY(0);}@property --tw-rotate-z{syntax: "*"; inherits: false; initial-value: rotateZ(0);}@property --tw-skew-x{syntax: "*"; inherits: false; initial-value: skewX(0);}@property --tw-skew-y{syntax: "*"; inherits: false; initial-value: skewY(0);}@property --tw-border-style{syntax: "*"; inherits: false; initial-value: solid;}@property --tw-leading{syntax: "*"; inherits: false;}@property --tw-font-weight{syntax: "*"; inherits: false;}@property --tw-ordinal{syntax: "*"; inherits: false;}@property --tw-slashed-zero{syntax: "*"; inherits: false;}@property --tw-numeric-figure{syntax: "*"; inherits: false;}@property --tw-numeric-spacing{syntax: "*"; inherits: false;}@property --tw-numeric-fraction{syntax: "*"; inherits: false;}@property --tw-shadow{syntax: "*"; inherits: false; initial-value: 0 0 #0000;}@property --tw-shadow-color{syntax: "*"; inherits: false;}@property --tw-inset-shadow{syntax: "*"; inherits: false; initial-value: 0 0 #0000;}@property --tw-inset-shadow-color{syntax: "*"; inherits: false;}@property --tw-ring-color{syntax: "*"; inherits: false;}@property --tw-ring-shadow{syntax: "*"; inherits: false; initial-value: 0 0 #0000;}@property --tw-inset-ring-color{syntax: "*"; inherits: false;}@property --tw-inset-ring-shadow{syntax: "*"; inherits: false; initial-value: 0 0 #0000;}@property --tw-ring-inset{syntax: "*"; inherits: false;}@property --tw-ring-offset-width{syntax: "<length>"; inherits: false; initial-value: 0px;}@property --tw-ring-offset-color{syntax: "*"; inherits: false; initial-value: #fff;}@property --tw-ring-offset-shadow{syntax: "*"; inherits: false; initial-value: 0 0 #0000;}@property --tw-outline-style{syntax: "*"; inherits: false; initial-value: solid;}@property --tw-blur{syntax: "*"; inherits: false;}@property --tw-brightness{syntax: "*"; inherits: false;}@property --tw-contrast{syntax: "*"; inherits: false;}@property --tw-grayscale{syntax: "*"; inherits: false;}@property --tw-hue-rotate{syntax: "*"; inherits: false;}@property --tw-invert{syntax: "*"; inherits: false;}@property --tw-opacity{syntax: "*"; inherits: false;}@property --tw-saturate{syntax: "*"; inherits: false;}@property --tw-sepia{syntax: "*"; inherits: false;}@property --tw-ease{syntax: "*"; inherits: false;}';var A=Object.defineProperty,B=Object.getOwnPropertyDescriptor,D=(o,e,r,i)=>{for(var t=i>1?void 0:i?B(e,r):e,l=o.length-1,a;l>=0;l--)(a=o[l])&&(t=(i?a(e,r,t):a(t))||t);return i&&t&&A(e,r,t),t};let S=class extends u{constructor(){super(...arguments),this.name="Somebody"}render(){return h`<p class="text-2xl text-center text-blue-500">Hello, ${this.name}!</p>`}};S.styles=f(C);D([n()],S.prototype,"name",2);S=D([m("simple-greeting")],S);const O='@import"https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap";',M="data:image/svg+xml,%3csvg%20width='8'%20height='8'%20viewBox='0%200%208%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='IconClose'%3e%3cpath%20id='Mask-10'%20opacity='0.5'%20d='M7.71146%201.68165C7.96031%201.43279%208.0575%201.07008%207.96641%200.730139C7.87533%200.390199%207.6098%200.124675%207.26986%200.033588C6.92992%20-0.0574989%206.56721%200.0396896%206.31835%200.288543L4.00062%202.60751L1.68165%200.288543C1.43279%200.0396896%201.07008%20-0.0574989%200.730139%200.033588C0.390199%200.124675%200.124675%200.390199%200.033588%200.730139C-0.0574989%201.07008%200.0396896%201.43279%200.288543%201.68165L2.60751%204.00062L0.288543%206.31835C0.0396896%206.56721%20-0.0574989%206.92992%200.033588%207.26986C0.124675%207.6098%200.390199%207.87533%200.730139%207.96641C1.07008%208.0575%201.43279%207.96031%201.68165%207.71146L4.00062%205.39249L4.43711%205.82899L6.31835%207.71023C6.70271%208.09492%207.32615%208.0952%207.71084%207.71084C8.09554%207.32649%208.09581%206.70305%207.71146%206.31835L5.39249%204.00062L7.71146%201.68165Z'%20fill='%23191D23'/%3e%3c/g%3e%3c/svg%3e";var N=Object.defineProperty,F=Object.getOwnPropertyDescriptor,c=(o,e,r,i)=>{for(var t=i>1?void 0:i?F(e,r):e,l=o.length-1,a;l>=0;l--)(a=o[l])&&(t=(i?a(e,r,t):a(t))||t);return i&&t&&N(e,r,t),t};let s=class extends u{constructor(){super(...arguments),this.author={name:"",imageUrl:""},this.question="",this.answers=[],this.duration=5e3,this.elapsed=0,this.autoremove=!1,this.freeze=!1,this.vote=null,this._interval=0,this.disableClose=!1,this._closed=!1,this._selectedAnswer=-1}connectedCallback(){super.connectedCallback(),this._interval=setInterval(()=>{this.freeze||(this.elapsed+=500)},500)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this._interval)}_selectAnswer(o){Math.max(0,this.duration-this.elapsed)<=0||(this._selectedAnswer=o,fetch(this.answers[o].voteUrl,{method:"POST"}).then(r=>{r.ok||console.error("Vote rejected:",r)}).catch(r=>console.error("Failed to vote:",r)))}_renderAnswer(o,e){return h`
            <div class="w-17 h-25 relative group overflow-hidden" @click="${()=>this._selectAnswer(e)}">
                <div class="
                    w-17 h-25 absolute left-0 top-0 overflow-hidden rounded-md border-2 border-solid bg-gray-300
                    ${this._selectedAnswer===e?"border-green-700":"border-gray-800 group-hover:border-blue-800"}
                ">
                    <div class="
                        absolute w-17 left-0 bottom-0 text-white text-xs font-bold text-center
                        ${this._selectedAnswer===e?"bg-green-700":"bg-gray-800"}
                    ">
                        ${o.points} <span class="text-[8px]">pts</span>
                    </div>

                    <img class="w-17 h-10 absolute left-0 top-0" src="${o.imageUrl||E}" />
                    <div class="w-17 h-8 absolute left-0 top-10 text-center text-xs font-semibold leading-3 break-words p-1">
                        ${o.text}
                    </div>
                </div>
            </div>
        `}render(){const o=Math.max(0,this.duration-this.elapsed),e=String(Math.floor(o/6e4)).padStart(2,"0"),r=String(Math.floor(o/1e3)%60).padStart(2,"0"),i=this._closed&&!this.disableClose?"fly-out":"fly-in";return h`
            <div class="relative w-70" style="animation: ${i} ease-in-out 0.5s forwards;">
                <div class="w-70 h-40 gradient-bg rounded"></div>

                <div class="absolute top-0 left-0 px-2 inline-flex flex-col justify-end items-start">
                    <div class="inline-flex self-stretch h-6 py-3 justify-start items-center gap-2">
                        <div 
                            class="text-gray-900 text-xs font-semibold leading-3 break-words"
                            style="animation: timer ${this.duration}ms linear;"
                        >${e}:${r}</div>
                        <div class="inline-flex flex-1 flex-col justify-start items-start gap-2.5 bg-gray-300 shadow-inner rounded-md">
                            <div class="self-stretch p-1 rounded-md mr-[100%] bg-red-500" style="animation: burndown ${this.duration}ms linear;"></div>
                        </div>
                        <div class="relative w-2 h-2">
                            <img class="absolute left-0 top-0 w-2 h-2" src="${M}" @click="${()=>this._closed=!0}" />
                        </div>
                    </div>

                    <div class="self-stretch h-15 pb-3 inline-flex flex-col justify-start items-start gap-2.5">
                        <div class="self-stretch inline-flex justify-start items-start gap-2">
                            <div class="w-12 h-12 bg-white rounded flex flex-col justify-center items-center gap-2.5 inline-flex overflow-hidden">
                                <img class="w-full h-full object-contain rounded" src="${this.author.imageUrl}" />
                            </div>
                            <div class="flex-1 self-stretch inline-flex flex-col justify-start items-start">
                                <div class="w-28 h-3 text-gray-900 text-xs font-semibold leading-3 break-words">${this.author.name}</div>
                                <div class="self-stretch h-8 text-gray-900 text-base font-bold leading-5 break-words">${this.question}</div>
                            </div>
                        </div>
                    </div>

                    <div class="self-stretch inline-flex justify-center items-center gap-1">
                        ${this.answers.map((t,l)=>this._renderAnswer(t,l))}
                    </div>
                </div>
            </div>
        `}};s.styles=[f(C),f(O),k`
            :host {
                font-family: 'Open Sans', sans-serif;
            }

            .gradient-bg {
                /* 
                * gray-100 but with transparency 
                *
                * TODO: find a way to use the palette instead of hardcoding the color
                * otherwise it will be hard to update the color palette in the future
                */
                background: linear-gradient(56deg, rgba(243, 244, 246, 0.30) 0%, rgba(243, 244, 246, 0.75) 75%);
            }

            @keyframes fly-in {
                from { transform: translateX(-100vw); }
                to { transform: translateX(0); }
            }

            @keyframes fly-out {
                from { transform: translateX(0); }
                to { transform: translateX(-100vw); }
            }

            @keyframes timer {
                from { color: var(--color-gray-900); }
                50% { color: var(--color-gray-900); }
                to { color: var(--color-red-500); }
            }

            @keyframes burndown {
                from { margin-right: 0%; background-color: var(--color-emerald-500); }
                50% { margin-right: 50%; background-color: var(--color-emerald-500); }
                to { margin-right: 100%; background-color: var(--color-red-500); }
            }
        `];c([n({type:Object})],s.prototype,"author",2);c([n({type:Object})],s.prototype,"question",2);c([n({type:Array})],s.prototype,"answers",2);c([n({type:Number})],s.prototype,"duration",2);c([n({type:Number})],s.prototype,"elapsed",2);c([n({type:Boolean})],s.prototype,"autoremove",2);c([n({type:Boolean})],s.prototype,"freeze",2);c([n({type:Boolean})],s.prototype,"vote",2);c([P()],s.prototype,"_interval",2);c([n({type:Boolean})],s.prototype,"disableClose",2);c([P()],s.prototype,"_closed",2);c([P()],s.prototype,"_selectedAnswer",2);s=c([m("buff-quiz-vote")],s);var q=Object.defineProperty,X=Object.getOwnPropertyDescriptor,b=(o,e,r,i)=>{for(var t=i>1?void 0:i?X(e,r):e,l=o.length-1,a;l>=0;l--)(a=o[l])&&(t=(i?a(e,r,t):a(t))||t);return i&&t&&q(e,r,t),t};let d=class extends u{constructor(){super(),this.imageUrl="",this.text="",this.footer="",this.progress=0,this.color="#1F2937",this.hoverColor="#1F2937",this._updateStyleProperties()}updated(o){(o.has("color")||o.has("hoverColor"))&&this._updateStyleProperties()}_updateStyleProperties(){this.style.setProperty("--edge-color",this.color),this.style.setProperty("--edge-color-hover",this.hoverColor)}render(){return h`
            <div id="container">
                <div id="image-container"><img src=${this.imageUrl} /></div>
                <div id="answer-container"><p>${this.text}</p></div>
                <div id="footer-container">
                    <p>${this.footer}</p>
                    <div style="width: ${this.progress*100}%;"></div>
                </div>
            </div>
        `}};d.styles=[f(C),f(O),k`
            #container {
                display: flex;
                flex-direction: column;
                justify-content: center;

                width: 60px;
                height: 90px;
                overflow: hidden;
                border-radius: var(--radius-md);
                background-color: #D1D5DB;
                border: 2px solid var(--edge-color);

                font-size: var(--text-xs);
                font-weight: 600;
                text-align: center;
            }

            #container:hover {
                border-color: var(--edge-color-hover);
            }

            #image-container {
                height: 40%;
                display: flex;
                justify-content: center;
            }

            #image-container img {
                object-fit: contain;
            }

            #answer-container {
                height: 40%;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }

            #footer-container {
                height: 20%;
                background-color: var(--edge-color);
            }

            #container:hover #footer-container {
                background-color: var(--edge-color-hover);
            }

            #footer-container p {
                color: white;
            }

            #footer-container div {
                position: relative;
                top: -100%;
                left: 0;
                height: 100%;
                width: 0;
                background: rgba(255, 255, 255, 0.5);
            }
        `];b([n({type:String})],d.prototype,"imageUrl",2);b([n({type:String})],d.prototype,"text",2);b([n({type:String})],d.prototype,"footer",2);b([n({type:Number})],d.prototype,"progress",2);b([n({type:String})],d.prototype,"color",2);b([n({type:String})],d.prototype,"hoverColor",2);d=b([m("buff-answer-tile")],d);var R=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,v=(o,e,r,i)=>{for(var t=i>1?void 0:i?Y(e,r):e,l=o.length-1,a;l>=0;l--)(a=o[l])&&(t=(i?a(e,r,t):a(t))||t);return i&&t&&R(e,r,t),t};let p=class extends u{constructor(){super(),this.imageUrl="",this.text="",this.footer="",this.progress=0,this.color="",this.hoverColor="",this._updateStyleProperties()}updated(o){(o.has("color")||o.has("hoverColor"))&&this._updateStyleProperties()}_updateStyleProperties(){this.style.setProperty("--edge-color",`var(--color-${this.color?this.color:"gray-800"})`),this.style.setProperty("--edge-color-hover",`var(--color-${this.hoverColor?this.hoverColor:"gray-800"})`)}render(){return h`
            <div id="bar-container">
                ${this.imageUrl?h`<div id="image-container"><img src=${this.imageUrl} /></div>`:""}
                <div id="text-container" style="left: ${this.imageUrl?"15%":"0"}; width: ${this.imageUrl?"75%":"90%"};">
                    <p>${this.text}</p>
                </div>
                <div id="footer-container">
                    <p>${this.footer}</p>
                    <div id="progress" style="height: ${this.progress*100}%;"></div>
                </div>
            </div>
        `}};p.styles=[f(C),f(O),k`
            #bar-container {
                position: relative;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;

                overflow: hidden;
                border-radius: var(--radius-md);
                background-color: var(--color-gray-300);
                border: 2px solid var(--edge-color);
            }

            #bar-container:hover {
                border-color: var(--edge-color-hover);
            }

            #image-container {
                position: absolute;
                left: 0;
                top: 0;
                width: 15%;
                height: 100%;
            }

            #image-container img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }

            #text-container {
                position: absolute;
                top: 0;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: left;
                overflow: hidden;
            }

            #text-container p {
                font-size: var(--text-xs);
                font-weight: 600;
            }

            #footer-container {
                position: absolute;
                right: 0;
                top: 0;
                width: 10%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
                background-color: var(--edge-color);
            }

            #bar-container:hover #footer-container {
                background-color: var(--edge-color-hover);
            }

            #footer-container p {
                color: var(--color-white);
                font-size: var(--text-xs);
                line-height: var(--text-xs--lint-height);
                font-weight: 600;
                text-align: center;
            }

            #progress {
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 0%;
                background: rgba(255, 255, 255, 0.5);
            }
        `];v([n({type:String})],p.prototype,"imageUrl",2);v([n({type:String})],p.prototype,"text",2);v([n({type:String})],p.prototype,"footer",2);v([n({type:Number})],p.prototype,"progress",2);v([n({type:String})],p.prototype,"color",2);v([n({type:String})],p.prototype,"hoverColor",2);p=v([m("buff-answer-bar")],p);var G=Object.defineProperty,V=Object.getOwnPropertyDescriptor,$=(o,e,r,i)=>{for(var t=i>1?void 0:i?V(e,r):e,l=o.length-1,a;l>=0;l--)(a=o[l])&&(t=(i?a(e,r,t):a(t))||t);return i&&t&&G(e,r,t),t};let g=class extends u{constructor(){super(...arguments),this.totalTime=0,this.timeLeft=0,this.barColorStart="",this.barColorEnd="",this.barBackground=""}render(){const o=String(Math.floor(this.timeLeft/1e3/60)).padStart(2,"0"),e=String(Math.floor(this.timeLeft/1e3%60)).padStart(2,"0");return h`
            <div id="container">
                <div id="timer">${o}:${e}</div>
                <div id="progress-background" style="background-color: ${this.barBackground?this.barBackground:"#D1D5DB"}">
                    <div id="progress" style="width: ${this.timeLeft/this.totalTime*100}%; background-color: ${this._getColor()}"></div>
                </div>
                <div id="close-button" @click=${this._clickClose}>
                    <img src="${M}" />
                </div>
            </div>
        `}_getColor(){const o={r:parseInt(this.barColorStart?this.barColorStart.slice(1,3):"05",16),g:parseInt(this.barColorStart?this.barColorStart.slice(3,5):"96",16),b:parseInt(this.barColorStart?this.barColorStart.slice(5,7):"69",16)};if(this.timeLeft/this.totalTime>=.75)return`#${o.r.toString(16).padStart(2,"0")}${o.g.toString(16).padStart(2,"0")}${o.b.toString(16).padStart(2,"0")}`;const e={r:parseInt(this.barColorEnd?this.barColorEnd.slice(1,3):"DC",16),g:parseInt(this.barColorEnd?this.barColorEnd.slice(3,5):"26",16),b:parseInt(this.barColorEnd?this.barColorEnd.slice(5,7):"26",16)};if(this.timeLeft/this.totalTime<=.25)return`#${e.r.toString(16).padStart(2,"0")}${e.g.toString(16).padStart(2,"0")}${e.b.toString(16).padStart(2,"0")}`;const r={r:Math.floor(e.r+(o.r-e.r)*this.timeLeft/this.totalTime),g:Math.floor(e.g+(o.g-e.g)*this.timeLeft/this.totalTime),b:Math.floor(e.b+(o.b-e.b)*this.timeLeft/this.totalTime)};return`#${r.r.toString(16).padStart(2,"0")}${r.g.toString(16).padStart(2,"0")}${r.b.toString(16).padStart(2,"0")}`}_clickClose(){console.log("close button clicked"),this.dispatchEvent(new CustomEvent("timer-bar-close",{detail:{message:"close button clicked"},bubbles:!0,composed:!0}))}};g.styles=[k`
            #container {
                position: relative;
                left: 0;
                top: 0;
                width: 100%;
                display: flex;
                align-items: center;
                gap: 5px;
                font-family: sans-serif;
            }

            #timer {
                height: 100%;
                width: auto;
                max-width: 5ch;
                display: flex;
                align-items: center;
                font-size: 14px;
                font-weight: 600;
            }

            #progress-background {
                flex: 1;
                min-width: 0;
                height: 10px;
                border-radius: 6px;
            }

            #progress {
                position: relative;
                height: 100%;
                top: 0;
                left: 0;
                border-radius: 6px;
            }

            #close-button {
                width: 100%;
                max-width: 1ch;
                height: 100%;
            }

            #close-button img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        `];$([n({type:Number})],g.prototype,"totalTime",2);$([n({type:Number})],g.prototype,"timeLeft",2);$([n({type:String})],g.prototype,"barColorStart",2);$([n({type:String})],g.prototype,"barColorEnd",2);$([n({type:String})],g.prototype,"barBackground",2);g=$([m("buff-timer-bar")],g);var Z=Object.defineProperty,H=Object.getOwnPropertyDescriptor,_=(o,e,r,i)=>{for(var t=i>1?void 0:i?H(e,r):e,l=o.length-1,a;l>=0;l--)(a=o[l])&&(t=(i?a(e,r,t):a(t))||t);return i&&t&&Z(e,r,t),t};let x=class extends u{constructor(){super(...arguments),this.author="",this.imageUrl="",this.text=""}render(){return h`
            <div id="container">
                <div id="image-container">
                    <img src=${this.imageUrl} />
                </div>
                <div id="text-container">
                    <p id="author">${this.author}</p>
                    <p id="text">${this.text}</p>
                </div>
            </div>
        `}};x.styles=[k`
            #container {
                position: relative;
                left: 0;
                top: 0;
                width: 100%;
                display: flex;
                align-items: left;
                justify-content: flex-start;
                overflow: hidden;
                gap: 4px;
                font-family: sans-serif;
            }

            #image-container {
                width: 25%;
                display: flex;
                background-color: #fff;
                border-radius: 6px;
            }

            #image-container img {
                width: 100%;
                height: auto;
                object-fit: contain;
            }

            #author {
                margin: 0;
                font-size: 12px;
                font-weight: 600;
            }

            #text {
                margin: 0;
                font-size: 16px;
                font-weight: 700;
            }
        `];_([n({type:String})],x.prototype,"author",2);_([n({type:String})],x.prototype,"imageUrl",2);_([n({type:String})],x.prototype,"text",2);x=_([m("buff-author-text")],x);var Q=Object.defineProperty,J=Object.getOwnPropertyDescriptor,z=(o,e,r,i)=>{for(var t=i>1?void 0:i?J(e,r):e,l=o.length-1,a;l>=0;l--)(a=o[l])&&(t=(i?a(e,r,t):a(t))||t);return i&&t&&Q(e,r,t),t};let y=class extends u{constructor(){super(...arguments),this.backgroundColor="#F3F4F7",this.width="280px",this.height="135px"}render(){const o=this.backgroundColor+Math.round(102).toString(16),e=this.backgroundColor+Math.round(.7*255).toString(16);return h`
            <div id="container" style="
                background: linear-gradient(56deg, ${o} 0%, ${e} 75%);
                width: ${this.width};
                height: ${this.height};
            ">
                <slot name="content"></slot>
            </div>
        `}};y.styles=[k`
            #container {
                padding: 6px;
                border-radius: 6px;
                overflow: visible;
                display: flex;
                flex-direction: column;
                gap: 6px;
            }
        `];z([n({type:String})],y.prototype,"backgroundColor",2);z([n({type:String})],y.prototype,"width",2);z([n({type:String})],y.prototype,"height",2);y=z([m("buff-container")],y);const ee={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},backgrounds:{values:[{name:"sports",value:"url(https://web-dashboard.sportbuff.buffup.net/3e6d065f9c5fefe8240c6eeb8134c5c2.png)"},{name:"white",value:"#ffffff"},{name:"black",value:"#000000"},{name:"gray",value:"#888888"}]}}};export{ee as default};
