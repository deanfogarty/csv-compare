var vl=Object.defineProperty,yl=Object.defineProperties;var Bl=Object.getOwnPropertyDescriptors;var we=Object.getOwnPropertySymbols;var Al=Object.prototype.hasOwnProperty,El=Object.prototype.propertyIsEnumerable;var De=(f,e,l)=>e in f?vl(f,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):f[e]=l,Me=(f,e)=>{for(var l in e||(e={}))Al.call(e,l)&&De(f,l,e[l]);if(we)for(var l of we(e))El.call(e,l)&&De(f,l,e[l]);return f},Ne=(f,e)=>yl(f,Bl(e));import{S as oe,i as re,s as ne,e as y,c as B,a as A,d as m,b as U,g as w,K as Y,L as be,v as Ie,M as Tl,k as M,m as N,J as b,t as H,h as O,j as F,N as ue,l as Z,O as W,P as pe,Q as me,R as ke,w as fe,x as ie,y as se,q as J,o as X,B as ae,n as Se,p as Le,T as ge,U as ve,V as ye,W as Be,X as wl}from"../chunks/vendor-eaeb889e.js";function Dl(f){let e;return{c(){e=y("div"),this.h()},l(l){e=B(l,"DIV",{id:!0,class:!0});var t=A(e);t.forEach(m),this.h()},h(){U(e,"id",f[1]),U(e,"class","drag-drop-area svelte-1h0qlek")},m(l,t){w(l,e,t),e.innerHTML=f[0]},p(l,[t]){t&1&&(e.innerHTML=l[0])},i:Y,o:Y,d(l){l&&m(e)}}}function Ml(f,e,l){let{prompt:t="Drop previously generated file here"}=e;const n="droparea-"+Math.random().toString(36).slice(2),i=new Map([["ready",t],["loading","Loading file, stand by"]]);let u=i.get("ready");const o=be();return Ie(()=>{const a=Tl(`#${n}`,h=>{l(0,u=i.get("loading")),setTimeout(()=>{h.forEach(s=>{const _=new FileReader;_.addEventListener("load",g=>{o("loadedFile",{name:s.name,contents:_.result}),l(0,u=i.get("ready"))}),_.readAsText(s)})},1e3)});return()=>{a()}}),f.$$set=a=>{"prompt"in a&&l(2,t=a.prompt)},[u,n,t]}class Ce extends oe{constructor(e){super();re(this,e,Ml,Dl,ne,{prompt:2})}}function He(f,e,l){const t=f.slice();return t[2]=e[l],t}function Oe(f,e,l){const t=f.slice();return t[5]=e[l],t}function Re(f,e,l){const t=f.slice();return t[5]=e[l],t}function Ue(f){let e,l,t,n=f[1],i=[];for(let a=0;a<n.length;a+=1)i[a]=Ke(Re(f,n,a));let u=f[0],o=[];for(let a=0;a<u.length;a+=1)o[a]=Ve(He(f,u,a));return{c(){e=y("table"),l=y("tr");for(let a=0;a<i.length;a+=1)i[a].c();t=M();for(let a=0;a<o.length;a+=1)o[a].c()},l(a){e=B(a,"TABLE",{});var h=A(e);l=B(h,"TR",{});var s=A(l);for(let _=0;_<i.length;_+=1)i[_].l(s);s.forEach(m),t=N(h);for(let _=0;_<o.length;_+=1)o[_].l(h);h.forEach(m)},m(a,h){w(a,e,h),b(e,l);for(let s=0;s<i.length;s+=1)i[s].m(l,null);b(e,t);for(let s=0;s<o.length;s+=1)o[s].m(e,null)},p(a,h){if(h&2){n=a[1];let s;for(s=0;s<n.length;s+=1){const _=Re(a,n,s);i[s]?i[s].p(_,h):(i[s]=Ke(_),i[s].c(),i[s].m(l,null))}for(;s<i.length;s+=1)i[s].d(1);i.length=n.length}if(h&3){u=a[0];let s;for(s=0;s<u.length;s+=1){const _=He(a,u,s);o[s]?o[s].p(_,h):(o[s]=Ve(_),o[s].c(),o[s].m(e,null))}for(;s<o.length;s+=1)o[s].d(1);o.length=u.length}},d(a){a&&m(e),ue(i,a),ue(o,a)}}}function Ke(f){let e,l=f[5]+"",t;return{c(){e=y("th"),t=H(l)},l(n){e=B(n,"TH",{});var i=A(e);t=O(i,l),i.forEach(m)},m(n,i){w(n,e,i),b(e,t)},p(n,i){i&2&&l!==(l=n[5]+"")&&F(t,l)},d(n){n&&m(e)}}}function Fe(f){let e,l=f[2][f[5]]+"",t;return{c(){e=y("td"),t=H(l)},l(n){e=B(n,"TD",{});var i=A(e);t=O(i,l),i.forEach(m)},m(n,i){w(n,e,i),b(e,t)},p(n,i){i&3&&l!==(l=n[2][n[5]]+"")&&F(t,l)},d(n){n&&m(e)}}}function Ve(f){let e,l,t=f[1],n=[];for(let i=0;i<t.length;i+=1)n[i]=Fe(Oe(f,t,i));return{c(){e=y("tr");for(let i=0;i<n.length;i+=1)n[i].c();l=M()},l(i){e=B(i,"TR",{});var u=A(e);for(let o=0;o<n.length;o+=1)n[o].l(u);l=N(u),u.forEach(m)},m(i,u){w(i,e,u);for(let o=0;o<n.length;o+=1)n[o].m(e,null);b(e,l)},p(i,u){if(u&3){t=i[1];let o;for(o=0;o<t.length;o+=1){const a=Oe(i,t,o);n[o]?n[o].p(a,u):(n[o]=Fe(a),n[o].c(),n[o].m(e,l))}for(;o<n.length;o+=1)n[o].d(1);n.length=t.length}},d(i){i&&m(e),ue(n,i)}}}function Nl(f){let e,l=f[0].length&&Ue(f);return{c(){l&&l.c(),e=Z()},l(t){l&&l.l(t),e=Z()},m(t,n){l&&l.m(t,n),w(t,e,n)},p(t,[n]){t[0].length?l?l.p(t,n):(l=Ue(t),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},i:Y,o:Y,d(t){l&&l.d(t),t&&m(e)}}}function Il(f,e,l){let{data:t}=e,{keys:n}=e;return f.$$set=i=>{"data"in i&&l(0,t=i.data),"keys"in i&&l(1,n=i.keys)},[t,n]}class Sl extends oe{constructor(e){super();re(this,e,Il,Nl,ne,{data:0,keys:1})}}function je(f,e,l){const t=f.slice();return t[11]=e[l],t[12]=e,t[13]=l,t}function Pe(f){let e,l,t=[],n=new Map,i=f[0].length&&qe(f),u=f[0];const o=a=>a[11];for(let a=0;a<u.length;a+=1){let h=je(f,u,a),s=o(h);n.set(s,t[a]=Ge(s,h))}return{c(){e=y("div"),i&&i.c(),l=M();for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){e=B(a,"DIV",{class:!0});var h=A(e);i&&i.l(h),l=N(h);for(let s=0;s<t.length;s+=1)t[s].l(h);h.forEach(m),this.h()},h(){U(e,"class","chooseColumns svelte-yjg26n")},m(a,h){w(a,e,h),i&&i.m(e,null),b(e,l);for(let s=0;s<t.length;s+=1)t[s].m(e,null)},p(a,h){a[0].length?i?i.p(a,h):(i=qe(a),i.c(),i.m(e,l)):i&&(i.d(1),i=null),h&3&&(u=a[0],t=me(t,h,o,1,a,u,n,e,ke,Ge,null,je))},d(a){a&&m(e),i&&i.d();for(let h=0;h<t.length;h+=1)t[h].d()}}}function qe(f){let e,l,t,n,i,u,o;return{c(){e=y("button"),l=H("Select None"),t=M(),n=y("button"),i=H("Select All"),this.h()},l(a){e=B(a,"BUTTON",{type:!0});var h=A(e);l=O(h,"Select None"),h.forEach(m),t=N(a),n=B(a,"BUTTON",{type:!0});var s=A(n);i=O(s,"Select All"),s.forEach(m),this.h()},h(){U(e,"type","button"),U(n,"type","button")},m(a,h){w(a,e,h),b(e,l),w(a,t,h),w(a,n,h),b(n,i),u||(o=[W(e,"click",f[5]),W(n,"click",f[6])],u=!0)},p:Y,d(a){a&&m(e),a&&m(t),a&&m(n),u=!1,pe(o)}}}function Ge(f,e){let l,t,n,i,u=e[11]+"",o,a,h,s;function _(){e[7].call(n,e[13])}return{key:f,first:null,c(){l=y("li"),t=y("label"),n=y("input"),i=M(),o=H(u),a=M(),this.h()},l(g){l=B(g,"LI",{});var v=A(l);t=B(v,"LABEL",{});var k=A(t);n=B(k,"INPUT",{type:!0}),i=N(k),o=O(k,u),k.forEach(m),a=N(v),v.forEach(m),this.h()},h(){U(n,"type","checkbox"),this.first=l},m(g,v){w(g,l,v),b(l,t),b(t,n),n.checked=e[1][e[13]],b(t,i),b(t,o),b(l,a),h||(s=W(n,"change",_),h=!0)},p(g,v){e=g,v&3&&(n.checked=e[1][e[13]]),v&1&&u!==(u=e[11]+"")&&F(o,u)},d(g){g&&m(l),h=!1,s()}}}function Ll(f){let e,l=(f[2]?"Hide":"Show")+"",t,n,i,u,o,a,h=f[2]&&Pe(f);return{c(){e=y("button"),t=H(l),n=H(" columns"),i=M(),h&&h.c(),u=Z(),this.h()},l(s){e=B(s,"BUTTON",{type:!0});var _=A(e);t=O(_,l),n=O(_," columns"),_.forEach(m),i=N(s),h&&h.l(s),u=Z(),this.h()},h(){U(e,"type","button"),e.disabled=f[3]},m(s,_){w(s,e,_),b(e,t),b(e,n),w(s,i,_),h&&h.m(s,_),w(s,u,_),o||(a=W(e,"click",f[4]),o=!0)},p(s,[_]){_&4&&l!==(l=(s[2]?"Hide":"Show")+"")&&F(t,l),_&8&&(e.disabled=s[3]),s[2]?h?h.p(s,_):(h=Pe(s),h.c(),h.m(u.parentNode,u)):h&&(h.d(1),h=null)},i:Y,o:Y,d(s){s&&m(e),s&&m(i),h&&h.d(s),s&&m(u),o=!1,a()}}}function Cl(f,e,l){let t,{names:n}=e;const i=be();let u=!0,o;const a=()=>{l(2,u=!u)},h=k=>{i("updateColumns",n.reduce((c,r,d)=>(o[d]&&c.push(r),c),[]))},s=k=>{l(1,o=n.map(c=>!0))},_=()=>{l(1,o=o.map(k=>!1))},g=()=>{l(1,o=o.map(k=>!0))};function v(k){o[k]=this.checked,l(1,o)}return f.$$set=k=>{"names"in k&&l(0,n=k.names)},f.$$.update=()=>{f.$$.dirty&1&&s(),f.$$.dirty&2&&h(),f.$$.dirty&1&&l(3,t=!n.length)},[n,o,u,t,a,_,g,v]}class Hl extends oe{constructor(e){super();re(this,e,Cl,Ll,ne,{names:0})}}function Je(f){let e,l=(f[2]?"Hide":"Show")+"",t,n,i,u;return{c(){e=y("button"),t=H(l),n=H(" table"),this.h()},l(o){e=B(o,"BUTTON",{type:!0});var a=A(e);t=O(a,l),n=O(a," table"),a.forEach(m),this.h()},h(){U(e,"type","button")},m(o,a){w(o,e,a),b(e,t),b(e,n),i||(u=W(e,"click",f[5]),i=!0)},p(o,a){a&4&&l!==(l=(o[2]?"Hide":"Show")+"")&&F(t,l)},d(o){o&&m(e),i=!1,u()}}}function Qe(f){let e,l;return e=new Sl({props:{keys:f[3],data:f[0]}}),{c(){fe(e.$$.fragment)},l(t){ie(e.$$.fragment,t)},m(t,n){se(e,t,n),l=!0},p(t,n){const i={};n&8&&(i.keys=t[3]),n&1&&(i.data=t[0]),e.$set(i)},i(t){l||(J(e.$$.fragment,t),l=!0)},o(t){X(e.$$.fragment,t),l=!1},d(t){ae(e,t)}}}function Ol(f){let e,l,t,n,i,u,o,a,h=f[0].length&&Je(f);i=new Hl({props:{names:f[4]}}),i.$on("updateColumns",f[6]);let s=f[2]&&Qe(f);return{c(){e=y("p"),l=H(f[1]),t=M(),h&&h.c(),n=M(),fe(i.$$.fragment),u=M(),s&&s.c(),o=Z()},l(_){e=B(_,"P",{});var g=A(e);l=O(g,f[1]),g.forEach(m),t=N(_),h&&h.l(_),n=N(_),ie(i.$$.fragment,_),u=N(_),s&&s.l(_),o=Z()},m(_,g){w(_,e,g),b(e,l),w(_,t,g),h&&h.m(_,g),w(_,n,g),se(i,_,g),w(_,u,g),s&&s.m(_,g),w(_,o,g),a=!0},p(_,[g]){(!a||g&2)&&F(l,_[1]),_[0].length?h?h.p(_,g):(h=Je(_),h.c(),h.m(n.parentNode,n)):h&&(h.d(1),h=null);const v={};g&16&&(v.names=_[4]),i.$set(v),_[2]?s?(s.p(_,g),g&4&&J(s,1)):(s=Qe(_),s.c(),J(s,1),s.m(o.parentNode,o)):s&&(Se(),X(s,1,1,()=>{s=null}),Le())},i(_){a||(J(i.$$.fragment,_),J(s),a=!0)},o(_){X(i.$$.fragment,_),X(s),a=!1},d(_){_&&m(e),_&&m(t),h&&h.d(_),_&&m(n),ae(i,_),_&&m(u),s&&s.d(_),_&&m(o)}}}function Rl(f,e,l){let t,n,{data:i}=e,{filename:u}=e,o=!1;const a=()=>{l(2,o=!o)},h=be(),s=_=>{l(3,n=_.detail),h("updateKeys",n)};return Ie(()=>{h("updateKeys",n)}),f.$$set=_=>{"data"in _&&l(0,i=_.data),"filename"in _&&l(1,u=_.filename)},f.$$.update=()=>{var _,g;f.$$.dirty&1&&l(4,t=Object.keys((_=i[0])!=null?_:[]).sort()),f.$$.dirty&1&&l(3,n=Object.keys((g=i[0])!=null?g:[]))},[i,u,o,n,t,a,s]}class We extends oe{constructor(e){super();re(this,e,Rl,Ol,ne,{data:0,filename:1})}}function Xe(f,e,l){const t=f.slice();return t[9]=e[l],t}function Ye(f,e,l){const t=f.slice();return t[12]=e[l],t}function ze(f,e){let l,t,n,i,u,o=e[12]+"",a,h,s,_;return{key:f,first:null,c(){l=y("li"),t=y("label"),n=y("input"),u=M(),a=H(o),h=M(),this.h()},l(g){l=B(g,"LI",{});var v=A(l);t=B(v,"LABEL",{});var k=A(t);n=B(k,"INPUT",{type:!0}),u=N(k),a=O(k,o),k.forEach(m),h=N(v),v.forEach(m),this.h()},h(){U(n,"type","radio"),n.__value=i=e[12],n.value=n.__value,e[7][0].push(n),this.first=l},m(g,v){w(g,l,v),b(l,t),b(t,n),n.checked=n.__value===e[0],b(t,u),b(t,a),b(l,h),s||(_=W(n,"change",e[6]),s=!0)},p(g,v){e=g,v&4&&i!==(i=e[12])&&(n.__value=i,n.value=n.__value),v&1&&(n.checked=n.__value===e[0]),v&4&&o!==(o=e[12]+"")&&F(a,o)},d(g){g&&m(l),e[7][0].splice(e[7][0].indexOf(n),1),s=!1,_()}}}function Ze(f,e){let l,t,n,i,u,o=e[9]+"",a,h,s,_;return{key:f,first:null,c(){l=y("li"),t=y("label"),n=y("input"),u=M(),a=H(o),h=M(),this.h()},l(g){l=B(g,"LI",{});var v=A(l);t=B(v,"LABEL",{});var k=A(t);n=B(k,"INPUT",{type:!0}),u=N(k),a=O(k,o),k.forEach(m),h=N(v),v.forEach(m),this.h()},h(){U(n,"type","radio"),n.__value=i=e[9],n.value=n.__value,e[7][1].push(n),this.first=l},m(g,v){w(g,l,v),b(l,t),b(t,n),n.checked=n.__value===e[1],b(t,u),b(t,a),b(l,h),s||(_=W(n,"change",e[8]),s=!0)},p(g,v){e=g,v&8&&i!==(i=e[9])&&(n.__value=i,n.value=n.__value),v&2&&(n.checked=n.__value===e[1]),v&8&&o!==(o=e[9]+"")&&F(a,o)},d(g){g&&m(l),e[7][1].splice(e[7][1].indexOf(n),1),s=!1,_()}}}function Ul(f){let e,l,t,n,i,u,o,a,h,s,_,g,v=[],k=new Map,c,r,d,p,E,T,C,R=[],V=new Map,$=f[2];const x=L=>L[12];for(let L=0;L<$.length;L+=1){let S=Ye(f,$,L),K=x(S);k.set(K,v[L]=ze(K,S))}let Q=f[3];const z=L=>L[9];for(let L=0;L<Q.length;L+=1){let S=Xe(f,Q,L),K=z(S);V.set(K,R[L]=Ze(K,S))}return{c(){e=y("div"),l=y("fieldset"),t=y("legend"),n=H("Select key to match between files"),i=M(),u=y("div"),o=y("div"),a=y("p"),h=y("strong"),s=H(f[4]),_=M(),g=y("ul");for(let L=0;L<v.length;L+=1)v[L].c();c=M(),r=y("div"),d=y("p"),p=y("strong"),E=H(f[5]),T=M(),C=y("ul");for(let L=0;L<R.length;L+=1)R[L].c();this.h()},l(L){e=B(L,"DIV",{class:!0});var S=A(e);l=B(S,"FIELDSET",{});var K=A(l);t=B(K,"LEGEND",{});var G=A(t);n=O(G,"Select key to match between files"),G.forEach(m),i=N(K),u=B(K,"DIV",{class:!0});var ee=A(u);o=B(ee,"DIV",{});var P=A(o);a=B(P,"P",{});var I=A(a);h=B(I,"STRONG",{});var q=A(h);s=O(q,f[4]),q.forEach(m),I.forEach(m),_=N(P),g=B(P,"UL",{class:!0});var D=A(g);for(let te=0;te<v.length;te+=1)v[te].l(D);D.forEach(m),P.forEach(m),c=N(ee),r=B(ee,"DIV",{});var j=A(r);d=B(j,"P",{});var _e=A(d);p=B(_e,"STRONG",{});var ce=A(p);E=O(ce,f[5]),ce.forEach(m),_e.forEach(m),T=N(j),C=B(j,"UL",{class:!0});var de=A(C);for(let te=0;te<R.length;te+=1)R[te].l(de);de.forEach(m),j.forEach(m),ee.forEach(m),K.forEach(m),S.forEach(m),this.h()},h(){U(g,"class","svelte-12yuf20"),U(C,"class","svelte-12yuf20"),U(u,"class","pick-key svelte-12yuf20"),U(e,"class","wrapper")},m(L,S){w(L,e,S),b(e,l),b(l,t),b(t,n),b(l,i),b(l,u),b(u,o),b(o,a),b(a,h),b(h,s),b(o,_),b(o,g);for(let K=0;K<v.length;K+=1)v[K].m(g,null);b(u,c),b(u,r),b(r,d),b(d,p),b(p,E),b(r,T),b(r,C);for(let K=0;K<R.length;K+=1)R[K].m(C,null)},p(L,[S]){S&16&&F(s,L[4]),S&5&&($=L[2],v=me(v,S,x,1,L,$,k,g,ke,ze,null,Ye)),S&32&&F(E,L[5]),S&10&&(Q=L[3],R=me(R,S,z,1,L,Q,V,C,ke,Ze,null,Xe))},i:Y,o:Y,d(L){L&&m(e);for(let S=0;S<v.length;S+=1)v[S].d();for(let S=0;S<R.length;S+=1)R[S].d()}}}function Kl(f,e,l){let{keysA:t}=e,{keysB:n}=e,{keyA:i}=e,{keyB:u}=e,{filenameA:o}=e,{filenameB:a}=e;const h=[[],[]];function s(){i=this.__value,l(0,i)}function _(){u=this.__value,l(1,u)}return f.$$set=g=>{"keysA"in g&&l(2,t=g.keysA),"keysB"in g&&l(3,n=g.keysB),"keyA"in g&&l(0,i=g.keyA),"keyB"in g&&l(1,u=g.keyB),"filenameA"in g&&l(4,o=g.filenameA),"filenameB"in g&&l(5,a=g.filenameB)},[i,u,t,n,o,a,s,h,_]}class Fl extends oe{constructor(e){super();re(this,e,Kl,Ul,ne,{keysA:2,keysB:3,keyA:0,keyB:1,filenameA:4,filenameB:5})}}function $e(f,e,l){const t=f.slice();return t[15]=e[l],t[16]=e,t[17]=l,t}function xe(f){let e,l,t,n,i,u,o,a,h=(f[0][f[17]]?f[0][f[17]]:"")+"",s,_,g;function v(){return f[10](f[17])}function k(){return f[11](f[17])}return{c(){e=y("button"),l=H("\u2191"),n=M(),i=y("button"),u=H("\u2193"),a=M(),s=H(h),this.h()},l(c){e=B(c,"BUTTON",{type:!0});var r=A(e);l=O(r,"\u2191"),r.forEach(m),n=N(c),i=B(c,"BUTTON",{type:!0});var d=A(i);u=O(d,"\u2193"),d.forEach(m),a=N(c),s=O(c,h),this.h()},h(){U(e,"type","button"),e.disabled=t=f[17]===0,U(i,"type","button"),i.disabled=o=f[17]===f[0].length-1},m(c,r){w(c,e,r),b(e,l),w(c,n,r),w(c,i,r),b(i,u),w(c,a,r),w(c,s,r),_||(g=[W(e,"click",v),W(i,"click",k)],_=!0)},p(c,r){f=c,r&32&&t!==(t=f[17]===0)&&(e.disabled=t),r&33&&o!==(o=f[17]===f[0].length-1)&&(i.disabled=o),r&33&&h!==(h=(f[0][f[17]]?f[0][f[17]]:"")+"")&&F(s,h)},d(c){c&&m(e),c&&m(n),c&&m(i),c&&m(a),c&&m(s),_=!1,pe(g)}}}function el(f){let e,l,t,n,i,u,o,a,h=(f[1][f[17]]?f[1][f[17]]:"")+"",s,_,g;function v(){return f[12](f[17])}function k(){return f[13](f[17])}return{c(){e=y("button"),l=H("\u2191"),n=M(),i=y("button"),u=H("\u2193"),a=M(),s=H(h),this.h()},l(c){e=B(c,"BUTTON",{type:!0});var r=A(e);l=O(r,"\u2191"),r.forEach(m),n=N(c),i=B(c,"BUTTON",{type:!0});var d=A(i);u=O(d,"\u2193"),d.forEach(m),a=N(c),s=O(c,h),this.h()},h(){U(e,"type","button"),e.disabled=t=f[17]===0,U(i,"type","button"),i.disabled=o=f[17]===f[1].length-1},m(c,r){w(c,e,r),b(e,l),w(c,n,r),w(c,i,r),b(i,u),w(c,a,r),w(c,s,r),_||(g=[W(e,"click",v),W(i,"click",k)],_=!0)},p(c,r){f=c,r&32&&t!==(t=f[17]===0)&&(e.disabled=t),r&34&&o!==(o=f[17]===f[1].length-1)&&(i.disabled=o),r&34&&h!==(h=(f[1][f[17]]?f[1][f[17]]:"")+"")&&F(s,h)},d(c){c&&m(e),c&&m(n),c&&m(i),c&&m(a),c&&m(s),_=!1,pe(g)}}}function ll(f,e){let l,t,n,i,u,o,a,h,s,_,g;function v(){e[9].call(n,e[17])}let k=e[17]<e[0].length&&xe(e),c=e[17]<e[1].length&&el(e);return{key:f,first:null,c(){l=y("tr"),t=y("th"),n=y("input"),i=M(),u=y("td"),k&&k.c(),o=M(),a=y("td"),c&&c.c(),h=M(),s=y("tr"),this.h()},l(r){l=B(r,"TR",{});var d=A(l);t=B(d,"TH",{});var p=A(t);n=B(p,"INPUT",{type:!0}),p.forEach(m),i=N(d),u=B(d,"TD",{});var E=A(u);k&&k.l(E),E.forEach(m),o=N(d),a=B(d,"TD",{});var T=A(a);c&&c.l(T),T.forEach(m),h=N(d),d.forEach(m),s=B(r,"TR",{}),A(s).forEach(m),this.h()},h(){U(n,"type","checkbox"),this.first=l},m(r,d){w(r,l,d),b(l,t),b(t,n),n.checked=e[4][e[17]],b(l,i),b(l,u),k&&k.m(u,null),b(l,o),b(l,a),c&&c.m(a,null),b(l,h),w(r,s,d),_||(g=W(n,"change",v),_=!0)},p(r,d){e=r,d&48&&(n.checked=e[4][e[17]]),e[17]<e[0].length?k?k.p(e,d):(k=xe(e),k.c(),k.m(u,null)):k&&(k.d(1),k=null),e[17]<e[1].length?c?c.p(e,d):(c=el(e),c.c(),c.m(a,null)):c&&(c.d(1),c=null)},d(r){r&&m(l),k&&k.d(),c&&c.d(),r&&m(s),_=!1,g()}}}function Vl(f){let e,l,t,n,i,u,o,a,h,s,_,g,v,k,c,r,d=[],p=new Map,E={length:f[5]};const T=C=>C[17];for(let C=0;C<E.length;C+=1){let R=$e(f,E,C),V=T(R);p.set(V,d[C]=ll(V,R))}return{c(){e=y("div"),l=y("fieldset"),t=y("legend"),n=H("Match column data"),i=M(),u=y("table"),o=y("tr"),a=y("th"),h=H("Include?"),s=M(),_=y("th"),g=H(f[2]),v=M(),k=y("th"),c=H(f[3]),r=M();for(let C=0;C<d.length;C+=1)d[C].c();this.h()},l(C){e=B(C,"DIV",{class:!0});var R=A(e);l=B(R,"FIELDSET",{});var V=A(l);t=B(V,"LEGEND",{});var $=A(t);n=O($,"Match column data"),$.forEach(m),i=N(V),u=B(V,"TABLE",{});var x=A(u);o=B(x,"TR",{});var Q=A(o);a=B(Q,"TH",{});var z=A(a);h=O(z,"Include?"),z.forEach(m),s=N(Q),_=B(Q,"TH",{});var L=A(_);g=O(L,f[2]),L.forEach(m),v=N(Q),k=B(Q,"TH",{});var S=A(k);c=O(S,f[3]),S.forEach(m),Q.forEach(m),r=N(x);for(let K=0;K<d.length;K+=1)d[K].l(x);x.forEach(m),V.forEach(m),R.forEach(m),this.h()},h(){U(e,"class","wrapper")},m(C,R){w(C,e,R),b(e,l),b(l,t),b(t,n),b(l,i),b(l,u),b(u,o),b(o,a),b(a,h),b(o,s),b(o,_),b(_,g),b(o,v),b(o,k),b(k,c),b(u,r);for(let V=0;V<d.length;V+=1)d[V].m(u,null)},p(C,[R]){R&4&&F(g,C[2]),R&8&&F(c,C[3]),R&243&&(E={length:C[5]},d=me(d,R,T,1,C,E,p,u,ke,ll,null,$e))},i:Y,o:Y,d(C){C&&m(e);for(let R=0;R<d.length;R+=1)d[R].d()}}}function jl(f,e,l){let t,n,{fieldsA:i}=e,{fieldsB:u}=e,{fieldMap:o=[]}=e,{filenameA:a}=e,{filenameB:h}=e;const s=p=>{l(8,o=[]),n.forEach((E,T)=>{E&&i[T]&&u[T]&&o.push([i[T],u[T]])})},_=(p,E)=>{const T=i.splice(p,1);i.splice(p+(E?-1:1),0,T[0]),l(0,i)},g=(p,E)=>{const T=u.splice(p,1);u.splice(p+(E?-1:1),0,T[0]),l(1,u)};function v(p){n[p]=this.checked,l(4,n),l(5,t),l(0,i),l(1,u)}const k=p=>_(p,!0),c=p=>_(p,!1),r=p=>g(p,!0),d=p=>g(p,!1);return f.$$set=p=>{"fieldsA"in p&&l(0,i=p.fieldsA),"fieldsB"in p&&l(1,u=p.fieldsB),"fieldMap"in p&&l(8,o=p.fieldMap),"filenameA"in p&&l(2,a=p.filenameA),"filenameB"in p&&l(3,h=p.filenameB)},f.$$.update=()=>{f.$$.dirty&3&&l(5,t=Math.max(i.length,u.length)),f.$$.dirty&32&&l(4,n=new Array(t).map(()=>!1)),f.$$.dirty&19&&(i||u)&&s()},[i,u,a,h,n,t,_,g,o,v,k,c,r,d]}class Pl extends oe{constructor(e){super();re(this,e,jl,Vl,ne,{fieldsA:0,fieldsB:1,fieldMap:8,filenameA:2,filenameB:3})}}function tl(f,e,l){const t=f.slice();return t[16]=e[l],t[18]=l,t}function nl(f,e,l){const t=f.slice();return t[19]=e[l],t}function fl(f,e,l){const t=f.slice();return t[19]=e[l],t}function il(f,e,l){const t=f.slice();return t[19]=e[l],t}function sl(f,e,l){const t=f.slice();return t[19]=e[l],t}function al(f,e,l){const t=f.slice();return t[28]=e[l],t}function ol(f){let e,l=(f[7]?"Hide":"Show")+"",t,n,i,u,o,a,h=f[7]&&rl(f);return{c(){e=y("button"),t=H(l),n=H(" Errors"),i=M(),h&&h.c(),u=Z(),this.h()},l(s){e=B(s,"BUTTON",{type:!0});var _=A(e);t=O(_,l),n=O(_," Errors"),_.forEach(m),i=N(s),h&&h.l(s),u=Z(),this.h()},h(){U(e,"type","button")},m(s,_){w(s,e,_),b(e,t),b(e,n),w(s,i,_),h&&h.m(s,_),w(s,u,_),o||(a=W(e,"click",f[8]),o=!0)},p(s,_){_&128&&l!==(l=(s[7]?"Hide":"Show")+"")&&F(t,l),s[7]?h?h.p(s,_):(h=rl(s),h.c(),h.m(u.parentNode,u)):h&&(h.d(1),h=null)},d(s){s&&m(e),s&&m(i),h&&h.d(s),s&&m(u),o=!1,a()}}}function rl(f){let e,l=f[5],t=[];for(let n=0;n<l.length;n+=1)t[n]=ul(al(f,l,n));return{c(){e=y("ul");for(let n=0;n<t.length;n+=1)t[n].c()},l(n){e=B(n,"UL",{});var i=A(e);for(let u=0;u<t.length;u+=1)t[u].l(i);i.forEach(m)},m(n,i){w(n,e,i);for(let u=0;u<t.length;u+=1)t[u].m(e,null)},p(n,i){if(i&32){l=n[5];let u;for(u=0;u<l.length;u+=1){const o=al(n,l,u);t[u]?t[u].p(o,i):(t[u]=ul(o),t[u].c(),t[u].m(e,null))}for(;u<t.length;u+=1)t[u].d(1);t.length=l.length}},d(n){n&&m(e),ue(t,n)}}}function ul(f){let e,l=f[28]+"",t;return{c(){e=y("li"),t=H(l)},l(n){e=B(n,"LI",{});var i=A(e);t=O(i,l),i.forEach(m)},m(n,i){w(n,e,i),b(e,t)},p(n,i){i&32&&l!==(l=n[28]+"")&&F(t,l)},d(n){n&&m(e)}}}function hl(f){let e,l=f[19]+"",t;return{c(){e=y("th"),t=H(l)},l(n){e=B(n,"TH",{});var i=A(e);t=O(i,l),i.forEach(m)},m(n,i){w(n,e,i),b(e,t)},p(n,i){i&1&&l!==(l=n[19]+"")&&F(t,l)},d(n){n&&m(e)}}}function _l(f){let e,l=f[19]+"",t;return{c(){e=y("th"),t=H(l)},l(n){e=B(n,"TH",{});var i=A(e);t=O(i,l),i.forEach(m)},m(n,i){w(n,e,i),b(e,t)},p(n,i){i&2&&l!==(l=n[19]+"")&&F(t,l)},d(n){n&&m(e)}}}function cl(f){let e=f[16][1].A[f[19]]+"",l;return{c(){l=H(e)},l(t){l=O(t,e)},m(t,n){w(t,l,n)},p(t,n){n&17&&e!==(e=t[16][1].A[t[19]]+"")&&F(l,e)},d(t){t&&m(l)}}}function dl(f){let e,l=f[16][1].A[f[19]]&&cl(f);return{c(){e=y("td"),l&&l.c(),this.h()},l(t){e=B(t,"TD",{class:!0});var n=A(e);l&&l.l(n),n.forEach(m),this.h()},h(){U(e,"class","svelte-2j5yvy"),ge(e,"mismatch",f[16][1].mismatch.A.includes(f[19]))},m(t,n){w(t,e,n),l&&l.m(e,null)},p(t,n){t[16][1].A[t[19]]?l?l.p(t,n):(l=cl(t),l.c(),l.m(e,null)):l&&(l.d(1),l=null),n&17&&ge(e,"mismatch",t[16][1].mismatch.A.includes(t[19]))},d(t){t&&m(e),l&&l.d()}}}function ml(f){let e=f[16][1].B[f[19]]+"",l;return{c(){l=H(e)},l(t){l=O(t,e)},m(t,n){w(t,l,n)},p(t,n){n&18&&e!==(e=t[16][1].B[t[19]]+"")&&F(l,e)},d(t){t&&m(l)}}}function kl(f){let e,l=f[16][1].B[f[19]]&&ml(f);return{c(){e=y("td"),l&&l.c(),this.h()},l(t){e=B(t,"TD",{class:!0});var n=A(e);l&&l.l(n),n.forEach(m),this.h()},h(){U(e,"class","svelte-2j5yvy"),ge(e,"mismatch",f[16][1].mismatch.B.includes(f[19]))},m(t,n){w(t,e,n),l&&l.m(e,null)},p(t,n){t[16][1].B[t[19]]?l?l.p(t,n):(l=ml(t),l.c(),l.m(e,null)):l&&(l.d(1),l=null),n&18&&ge(e,"mismatch",t[16][1].mismatch.B.includes(t[19]))},d(t){t&&m(e),l&&l.d()}}}function gl(f){let e,l,t=f[18]+1+"",n,i,u,o,a=f[16][0]+"",h,s,_,g=f[0],v=[];for(let r=0;r<g.length;r+=1)v[r]=dl(fl(f,g,r));let k=f[1],c=[];for(let r=0;r<k.length;r+=1)c[r]=kl(nl(f,k,r));return{c(){e=y("tr"),l=y("th"),n=H(t),i=M();for(let r=0;r<v.length;r+=1)v[r].c();u=M(),o=y("td"),h=H(a),s=M();for(let r=0;r<c.length;r+=1)c[r].c();_=M()},l(r){e=B(r,"TR",{});var d=A(e);l=B(d,"TH",{});var p=A(l);n=O(p,t),p.forEach(m),i=N(d);for(let T=0;T<v.length;T+=1)v[T].l(d);u=N(d),o=B(d,"TD",{});var E=A(o);h=O(E,a),E.forEach(m),s=N(d);for(let T=0;T<c.length;T+=1)c[T].l(d);_=N(d),d.forEach(m)},m(r,d){w(r,e,d),b(e,l),b(l,n),b(e,i);for(let p=0;p<v.length;p+=1)v[p].m(e,null);b(e,u),b(e,o),b(o,h),b(e,s);for(let p=0;p<c.length;p+=1)c[p].m(e,null);b(e,_)},p(r,d){if(d&17){g=r[0];let p;for(p=0;p<g.length;p+=1){const E=fl(r,g,p);v[p]?v[p].p(E,d):(v[p]=dl(E),v[p].c(),v[p].m(e,u))}for(;p<v.length;p+=1)v[p].d(1);v.length=g.length}if(d&16&&a!==(a=r[16][0]+"")&&F(h,a),d&18){k=r[1];let p;for(p=0;p<k.length;p+=1){const E=nl(r,k,p);c[p]?c[p].p(E,d):(c[p]=kl(E),c[p].c(),c[p].m(e,_))}for(;p<c.length;p+=1)c[p].d(1);c.length=k.length}},d(r){r&&m(e),ue(v,r),ue(c,r)}}}function bl(f){let e,l,t,n,i,u,o,a,h,s,_,g,v,k,c,r,d,p,E,T,C,R,V,$,x,Q,z,L=f[0],S=[];for(let I=0;I<L.length;I+=1)S[I]=hl(sl(f,L,I));let K=f[1],G=[];for(let I=0;I<K.length;I+=1)G[I]=_l(il(f,K,I));let ee=[...f[4]],P=[];for(let I=0;I<ee.length;I+=1)P[I]=gl(tl(f,ee,I));return{c(){e=y("table"),l=y("thead"),t=y("tr"),n=y("th"),i=H("Files"),u=M(),o=y("th"),a=H(f[2]),s=M(),_=y("th"),g=H("\xA0"),v=M(),k=y("th"),c=H(f[3]),d=M(),p=y("tr"),E=y("th"),T=H("Row"),C=M();for(let I=0;I<S.length;I+=1)S[I].c();R=M(),V=y("th"),$=H("Shared Key"),x=M();for(let I=0;I<G.length;I+=1)G[I].c();Q=M(),z=y("tbody");for(let I=0;I<P.length;I+=1)P[I].c();this.h()},l(I){e=B(I,"TABLE",{id:!0,class:!0});var q=A(e);l=B(q,"THEAD",{});var D=A(l);t=B(D,"TR",{});var j=A(t);n=B(j,"TH",{});var _e=A(n);i=O(_e,"Files"),_e.forEach(m),u=N(j),o=B(j,"TH",{colspan:!0});var ce=A(o);a=O(ce,f[2]),ce.forEach(m),s=N(j),_=B(j,"TH",{});var de=A(_);g=O(de,"\xA0"),de.forEach(m),v=N(j),k=B(j,"TH",{colspan:!0});var te=A(k);c=O(te,f[3]),te.forEach(m),j.forEach(m),d=N(D),p=B(D,"TR",{});var he=A(p);E=B(he,"TH",{});var Ae=A(E);T=O(Ae,"Row"),Ae.forEach(m),C=N(he);for(let le=0;le<S.length;le+=1)S[le].l(he);R=N(he),V=B(he,"TH",{});var Ee=A(V);$=O(Ee,"Shared Key"),Ee.forEach(m),x=N(he);for(let le=0;le<G.length;le+=1)G[le].l(he);he.forEach(m),D.forEach(m),Q=N(q),z=B(q,"TBODY",{});var Te=A(z);for(let le=0;le<P.length;le+=1)P[le].l(Te);Te.forEach(m),q.forEach(m),this.h()},h(){U(o,"colspan",h=f[0].length),U(k,"colspan",r=f[1].length),U(e,"id","results"),U(e,"class","svelte-2j5yvy")},m(I,q){w(I,e,q),b(e,l),b(l,t),b(t,n),b(n,i),b(t,u),b(t,o),b(o,a),b(t,s),b(t,_),b(_,g),b(t,v),b(t,k),b(k,c),b(l,d),b(l,p),b(p,E),b(E,T),b(p,C);for(let D=0;D<S.length;D+=1)S[D].m(p,null);b(p,R),b(p,V),b(V,$),b(p,x);for(let D=0;D<G.length;D+=1)G[D].m(p,null);b(e,Q),b(e,z);for(let D=0;D<P.length;D+=1)P[D].m(z,null)},p(I,q){if(q&4&&F(a,I[2]),q&1&&h!==(h=I[0].length)&&U(o,"colspan",h),q&8&&F(c,I[3]),q&2&&r!==(r=I[1].length)&&U(k,"colspan",r),q&1){L=I[0];let D;for(D=0;D<L.length;D+=1){const j=sl(I,L,D);S[D]?S[D].p(j,q):(S[D]=hl(j),S[D].c(),S[D].m(p,R))}for(;D<S.length;D+=1)S[D].d(1);S.length=L.length}if(q&2){K=I[1];let D;for(D=0;D<K.length;D+=1){const j=il(I,K,D);G[D]?G[D].p(j,q):(G[D]=_l(j),G[D].c(),G[D].m(p,null))}for(;D<G.length;D+=1)G[D].d(1);G.length=K.length}if(q&19){ee=[...I[4]];let D;for(D=0;D<ee.length;D+=1){const j=tl(I,ee,D);P[D]?P[D].p(j,q):(P[D]=gl(j),P[D].c(),P[D].m(z,null))}for(;D<P.length;D+=1)P[D].d(1);P.length=ee.length}},d(I){I&&m(e),ue(S,I),ue(G,I),ue(P,I)}}}function ql(f){let e,l,t,n,i,u,o,a,h,s=f[4],_,g,v,k=f[5].length&&ol(f),c=bl(f);return{c(){e=y("div"),k&&k.c(),l=M(),t=y("div"),n=y("button"),i=H("Copy table to clipboard"),u=M(),o=y("span"),a=H(f[6]),h=M(),c.c(),_=Z(),this.h()},l(r){e=B(r,"DIV",{class:!0});var d=A(e);k&&k.l(d),d.forEach(m),l=N(r),t=B(r,"DIV",{});var p=A(t);n=B(p,"BUTTON",{type:!0});var E=A(n);i=O(E,"Copy table to clipboard"),E.forEach(m),u=N(p),o=B(p,"SPAN",{});var T=A(o);a=O(T,f[6]),T.forEach(m),p.forEach(m),h=N(r),c.l(r),_=Z(),this.h()},h(){U(e,"class","errors svelte-2j5yvy"),U(n,"type","button")},m(r,d){w(r,e,d),k&&k.m(e,null),w(r,l,d),w(r,t,d),b(t,n),b(n,i),b(t,u),b(t,o),b(o,a),w(r,h,d),c.m(r,d),w(r,_,d),g||(v=W(n,"click",f[9]),g=!0)},p(r,[d]){r[5].length?k?k.p(r,d):(k=ol(r),k.c(),k.m(e,null)):k&&(k.d(1),k=null),d&64&&F(a,r[6]),d&16&&ne(s,s=r[4])?(c.d(1),c=bl(r),c.c(),c.m(_.parentNode,_)):c.p(r,d)},i:Y,o:Y,d(r){r&&m(e),k&&k.d(),r&&m(l),r&&m(t),r&&m(h),r&&m(_),c.d(r),g=!1,v()}}}function Gl(f,e,l){let{keyA:t}=e,{keyB:n}=e,{keysA:i}=e,{keysB:u}=e,{fileA:o}=e,{fileB:a}=e,{filenameA:h}=e,{filenameB:s}=e,{fieldMap:_=[]}=e,g=new Map([]),v=[],k="",c=!1;const r=()=>{l(7,c=!c)},d=(E,T)=>T.reduce((C,R)=>(C[R]=E[R],C),{}),p=()=>{const E=document.createRange(),T=window.getSelection();T.removeAllRanges(),E.selectNodeContents(document.getElementById("results")),T.addRange(E),document.execCommand("copy"),T.removeAllRanges(),l(6,k="Results table copied to the clipboard; now paste into a spreadsheet."),setTimeout(()=>{l(6,k="")},5e3)};return f.$$set=E=>{"keyA"in E&&l(10,t=E.keyA),"keyB"in E&&l(11,n=E.keyB),"keysA"in E&&l(0,i=E.keysA),"keysB"in E&&l(1,u=E.keysB),"fileA"in E&&l(12,o=E.fileA),"fileB"in E&&l(13,a=E.fileB),"filenameA"in E&&l(2,h=E.filenameA),"filenameB"in E&&l(3,s=E.filenameB),"fieldMap"in E&&l(14,_=E.fieldMap)},f.$$.update=()=>{if(f.$$.dirty&31807){if(l(5,v=[]),t&&n){const E=[];o.forEach(T=>{E.includes(T[t])?v.push(`non-unique key in ${h}: "${t}": "${T[t]}"`):E.push(T[t])}),l(4,g=new Map(o.map(T=>[T[t],{A:d(T,i),B:{},mismatch:{A:[],B:[]}}]))),a.forEach(T=>{const C=g.get(T[n]);C?Object.keys(C.B).length>0?v.push(`non-unique key in ${s}: "${n}": "${T[n]}"`):g.set(T[n],Ne(Me({},C),{B:d(T,u),mismatch:{A:[],B:[]}})):g.set(T[n],{A:{},B:d(T,u),mismatch:{A:[],B:[]}})})}g.forEach((E,T)=>{_.forEach(C=>{const R=C[0],V=C[1];E.A[R]!==E.B[V]&&(E.mismatch.A.push(R),E.mismatch.B.push(V))})})}},[i,u,h,s,g,v,k,c,r,p,t,n,o,a,_]}class Jl extends oe{constructor(e){super();re(this,e,Gl,ql,ne,{keyA:10,keyB:11,keysA:0,keysB:1,fileA:12,fileB:13,filenameA:2,filenameB:3,fieldMap:14})}}function Ql(f){let e,l,t,n,i,u,o,a,h,s;function _(r){f[11](r)}function g(r){f[12](r)}let v={filenameA:f[4],filenameB:f[5],keysA:f[2],keysB:f[3]};f[6]!==void 0&&(v.keyA=f[6]),f[7]!==void 0&&(v.keyB=f[7]),l=new Fl({props:v}),ve.push(()=>ye(l,"keyA",_)),ve.push(()=>ye(l,"keyB",g));function k(r){f[13](r)}let c={filenameA:f[4],filenameB:f[5],fieldsA:f[9],fieldsB:f[10]};return f[8]!==void 0&&(c.fieldMap=f[8]),u=new Pl({props:c}),ve.push(()=>ye(u,"fieldMap",k)),h=new Jl({props:{fieldMap:f[8],filenameA:f[4],filenameB:f[5],keyA:f[6],keyB:f[7],keysA:f[9],keysB:f[10],fileA:f[0],fileB:f[1]}}),{c(){e=y("div"),fe(l.$$.fragment),i=M(),fe(u.$$.fragment),a=M(),fe(h.$$.fragment),this.h()},l(r){e=B(r,"DIV",{class:!0});var d=A(e);ie(l.$$.fragment,d),i=N(d),ie(u.$$.fragment,d),d.forEach(m),a=N(r),ie(h.$$.fragment,r),this.h()},h(){U(e,"class","wrapper svelte-1t0h1vg")},m(r,d){w(r,e,d),se(l,e,null),b(e,i),se(u,e,null),w(r,a,d),se(h,r,d),s=!0},p(r,[d]){const p={};d&16&&(p.filenameA=r[4]),d&32&&(p.filenameB=r[5]),d&4&&(p.keysA=r[2]),d&8&&(p.keysB=r[3]),!t&&d&64&&(t=!0,p.keyA=r[6],Be(()=>t=!1)),!n&&d&128&&(n=!0,p.keyB=r[7],Be(()=>n=!1)),l.$set(p);const E={};d&16&&(E.filenameA=r[4]),d&32&&(E.filenameB=r[5]),d&512&&(E.fieldsA=r[9]),d&1024&&(E.fieldsB=r[10]),!o&&d&256&&(o=!0,E.fieldMap=r[8],Be(()=>o=!1)),u.$set(E);const T={};d&256&&(T.fieldMap=r[8]),d&16&&(T.filenameA=r[4]),d&32&&(T.filenameB=r[5]),d&64&&(T.keyA=r[6]),d&128&&(T.keyB=r[7]),d&512&&(T.keysA=r[9]),d&1024&&(T.keysB=r[10]),d&1&&(T.fileA=r[0]),d&2&&(T.fileB=r[1]),h.$set(T)},i(r){s||(J(l.$$.fragment,r),J(u.$$.fragment,r),J(h.$$.fragment,r),s=!0)},o(r){X(l.$$.fragment,r),X(u.$$.fragment,r),X(h.$$.fragment,r),s=!1},d(r){r&&m(e),ae(l),ae(u),r&&m(a),ae(h,r)}}}function Wl(f,e,l){let{fileA:t}=e,{fileB:n}=e,{keysA:i}=e,{keysB:u}=e,{filenameA:o}=e,{filenameB:a}=e,h,s,_=[],g,v;function k(d){h=d,l(6,h)}function c(d){s=d,l(7,s)}function r(d){_=d,l(8,_)}return f.$$set=d=>{"fileA"in d&&l(0,t=d.fileA),"fileB"in d&&l(1,n=d.fileB),"keysA"in d&&l(2,i=d.keysA),"keysB"in d&&l(3,u=d.keysB),"filenameA"in d&&l(4,o=d.filenameA),"filenameB"in d&&l(5,a=d.filenameB)},f.$$.update=()=>{f.$$.dirty&68&&l(9,g=i.filter(d=>d!==h)),f.$$.dirty&136&&l(10,v=u.filter(d=>d!==s))},[t,n,i,u,o,a,h,s,_,g,v,k,c,r]}class Xl extends oe{constructor(e){super();re(this,e,Wl,Ql,ne,{fileA:0,fileB:1,keysA:2,keysB:3,filenameA:4,filenameB:5})}}function pl(f){let e,l;return e=new Xl({props:{filenameA:f[2],filenameB:f[3],keysA:f[4],fileA:f[0],keysB:f[5],fileB:f[1]}}),{c(){fe(e.$$.fragment)},l(t){ie(e.$$.fragment,t)},m(t,n){se(e,t,n),l=!0},p(t,n){const i={};n&4&&(i.filenameA=t[2]),n&8&&(i.filenameB=t[3]),n&16&&(i.keysA=t[4]),n&1&&(i.fileA=t[0]),n&32&&(i.keysB=t[5]),n&2&&(i.fileB=t[1]),e.$set(i)},i(t){l||(J(e.$$.fragment,t),l=!0)},o(t){X(e.$$.fragment,t),l=!1},d(t){ae(e,t)}}}function Yl(f){let e,l,t,n,i,u,o,a,h,s,_,g,v;t=new Ce({props:{prompt:"Drop file A here"}}),t.$on("loadedFile",f[6]),i=new We({props:{filename:f[2],data:f[0]}}),i.$on("updateKeys",f[8]),a=new Ce({props:{prompt:"Drop file B here"}}),a.$on("loadedFile",f[7]),s=new We({props:{filename:f[3],data:f[1]}}),s.$on("updateKeys",f[9]);let k=f[4].length&&f[5].length&&pl(f);return{c(){e=y("div"),l=y("div"),fe(t.$$.fragment),n=M(),fe(i.$$.fragment),u=M(),o=y("div"),fe(a.$$.fragment),h=M(),fe(s.$$.fragment),_=M(),k&&k.c(),g=Z(),this.h()},l(c){e=B(c,"DIV",{class:!0});var r=A(e);l=B(r,"DIV",{});var d=A(l);ie(t.$$.fragment,d),n=N(d),ie(i.$$.fragment,d),d.forEach(m),u=N(r),o=B(r,"DIV",{});var p=A(o);ie(a.$$.fragment,p),h=N(p),ie(s.$$.fragment,p),p.forEach(m),r.forEach(m),_=N(c),k&&k.l(c),g=Z(),this.h()},h(){U(e,"class","dropAreas svelte-16iyvcs")},m(c,r){w(c,e,r),b(e,l),se(t,l,null),b(l,n),se(i,l,null),b(e,u),b(e,o),se(a,o,null),b(o,h),se(s,o,null),w(c,_,r),k&&k.m(c,r),w(c,g,r),v=!0},p(c,[r]){const d={};r&4&&(d.filename=c[2]),r&1&&(d.data=c[0]),i.$set(d);const p={};r&8&&(p.filename=c[3]),r&2&&(p.data=c[1]),s.$set(p),c[4].length&&c[5].length?k?(k.p(c,r),r&48&&J(k,1)):(k=pl(c),k.c(),J(k,1),k.m(g.parentNode,g)):k&&(Se(),X(k,1,1,()=>{k=null}),Le())},i(c){v||(J(t.$$.fragment,c),J(i.$$.fragment,c),J(a.$$.fragment,c),J(s.$$.fragment,c),J(k),v=!0)},o(c){X(t.$$.fragment,c),X(i.$$.fragment,c),X(a.$$.fragment,c),X(s.$$.fragment,c),X(k),v=!1},d(c){c&&m(e),ae(t),ae(i),ae(a),ae(s),c&&m(_),k&&k.d(c),c&&m(g)}}}function zl(f,e,l){let t=[],n=[],i="",u="",o=[],a=[];const h=async k=>wl({flatKeys:!0}).fromString(k).then(c=>c);return[t,n,i,u,o,a,async k=>{l(0,t=await h(k.detail.contents)),l(2,i=k.detail.name)},async k=>{l(1,n=await h(k.detail.contents)),l(3,u=k.detail.name)},k=>{l(4,o=k.detail)},k=>{l(5,a=k.detail)}]}class xl extends oe{constructor(e){super();re(this,e,zl,Yl,ne,{})}}export{xl as default};