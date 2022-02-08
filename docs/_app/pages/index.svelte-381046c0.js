var gl=Object.defineProperty,bl=Object.defineProperties;var pl=Object.getOwnPropertyDescriptors;var Te=Object.getOwnPropertySymbols;var vl=Object.prototype.hasOwnProperty,yl=Object.prototype.propertyIsEnumerable;var we=(f,e,l)=>e in f?gl(f,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):f[e]=l,De=(f,e)=>{for(var l in e||(e={}))vl.call(e,l)&&we(f,l,e[l]);if(Te)for(var l of Te(e))yl.call(e,l)&&we(f,l,e[l]);return f},Me=(f,e)=>bl(f,pl(e));import{S as ce,i as _e,s as ie,e as y,c as B,a as A,d as k,b as K,g as S,K as te,L as ye,v as Ne,M as Bl,k as D,m as M,J as m,t as H,h as O,j as G,N as de,l as ae,O as ne,P as Ie,Q as be,R as pe,w as se,x as oe,y as re,q as Z,o as le,B as he,n as Le,p as Se,T as ve,U as Be,V as Ae,W as Ee,X as Al}from"../chunks/vendor-eaeb889e.js";function El(f){let e;return{c(){e=y("div"),this.h()},l(l){e=B(l,"DIV",{id:!0,class:!0});var t=A(e);t.forEach(k),this.h()},h(){K(e,"id",f[1]),K(e,"class","drag-drop-area svelte-1h0qlek")},m(l,t){S(l,e,t),e.innerHTML=f[0]},p(l,[t]){t&1&&(e.innerHTML=l[0])},i:te,o:te,d(l){l&&k(e)}}}function Tl(f,e,l){let{prompt:t="Drop previously generated file here"}=e;const n="droparea-"+Math.random().toString(36).slice(2),i=new Map([["ready",t],["loading","Loading file, stand by"]]);let s=i.get("ready");const a=ye();return Ne(()=>{const o=Bl(`#${n}`,h=>{l(0,s=i.get("loading")),setTimeout(()=>{h.forEach(r=>{const u=new FileReader;u.addEventListener("load",g=>{a("loadedFile",{name:r.name,contents:u.result}),l(0,s=i.get("ready"))}),u.readAsText(r)})},1e3)});return()=>{o()}}),f.$$set=o=>{"prompt"in o&&l(2,t=o.prompt)},[s,n,t]}class Ce extends ce{constructor(e){super();_e(this,e,Tl,El,ie,{prompt:2})}}function He(f,e,l){const t=f.slice();return t[2]=e[l],t}function Oe(f,e,l){const t=f.slice();return t[5]=e[l],t}function Re(f,e,l){const t=f.slice();return t[5]=e[l],t}function Ue(f){let e,l,t,n=f[1],i=[];for(let o=0;o<n.length;o+=1)i[o]=Ke(Re(f,n,o));let s=f[0],a=[];for(let o=0;o<s.length;o+=1)a[o]=Ve(He(f,s,o));return{c(){e=y("table"),l=y("tr");for(let o=0;o<i.length;o+=1)i[o].c();t=D();for(let o=0;o<a.length;o+=1)a[o].c()},l(o){e=B(o,"TABLE",{});var h=A(e);l=B(h,"TR",{});var r=A(l);for(let u=0;u<i.length;u+=1)i[u].l(r);r.forEach(k),t=M(h);for(let u=0;u<a.length;u+=1)a[u].l(h);h.forEach(k)},m(o,h){S(o,e,h),m(e,l);for(let r=0;r<i.length;r+=1)i[r].m(l,null);m(e,t);for(let r=0;r<a.length;r+=1)a[r].m(e,null)},p(o,h){if(h&2){n=o[1];let r;for(r=0;r<n.length;r+=1){const u=Re(o,n,r);i[r]?i[r].p(u,h):(i[r]=Ke(u),i[r].c(),i[r].m(l,null))}for(;r<i.length;r+=1)i[r].d(1);i.length=n.length}if(h&3){s=o[0];let r;for(r=0;r<s.length;r+=1){const u=He(o,s,r);a[r]?a[r].p(u,h):(a[r]=Ve(u),a[r].c(),a[r].m(e,null))}for(;r<a.length;r+=1)a[r].d(1);a.length=s.length}},d(o){o&&k(e),de(i,o),de(a,o)}}}function Ke(f){let e,l=f[5]+"",t;return{c(){e=y("th"),t=H(l)},l(n){e=B(n,"TH",{});var i=A(e);t=O(i,l),i.forEach(k)},m(n,i){S(n,e,i),m(e,t)},p(n,i){i&2&&l!==(l=n[5]+"")&&G(t,l)},d(n){n&&k(e)}}}function Fe(f){let e,l=f[2][f[5]]+"",t;return{c(){e=y("td"),t=H(l)},l(n){e=B(n,"TD",{});var i=A(e);t=O(i,l),i.forEach(k)},m(n,i){S(n,e,i),m(e,t)},p(n,i){i&3&&l!==(l=n[2][n[5]]+"")&&G(t,l)},d(n){n&&k(e)}}}function Ve(f){let e,l,t=f[1],n=[];for(let i=0;i<t.length;i+=1)n[i]=Fe(Oe(f,t,i));return{c(){e=y("tr");for(let i=0;i<n.length;i+=1)n[i].c();l=D()},l(i){e=B(i,"TR",{});var s=A(e);for(let a=0;a<n.length;a+=1)n[a].l(s);l=M(s),s.forEach(k)},m(i,s){S(i,e,s);for(let a=0;a<n.length;a+=1)n[a].m(e,null);m(e,l)},p(i,s){if(s&3){t=i[1];let a;for(a=0;a<t.length;a+=1){const o=Oe(i,t,a);n[a]?n[a].p(o,s):(n[a]=Fe(o),n[a].c(),n[a].m(e,l))}for(;a<n.length;a+=1)n[a].d(1);n.length=t.length}},d(i){i&&k(e),de(n,i)}}}function wl(f){let e,l=f[0].length&&Ue(f);return{c(){l&&l.c(),e=ae()},l(t){l&&l.l(t),e=ae()},m(t,n){l&&l.m(t,n),S(t,e,n)},p(t,[n]){t[0].length?l?l.p(t,n):(l=Ue(t),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},i:te,o:te,d(t){l&&l.d(t),t&&k(e)}}}function Dl(f,e,l){let{data:t}=e,{keys:n}=e;return f.$$set=i=>{"data"in i&&l(0,t=i.data),"keys"in i&&l(1,n=i.keys)},[t,n]}class Ml extends ce{constructor(e){super();_e(this,e,Dl,wl,ie,{data:0,keys:1})}}function Pe(f,e,l){const t=f.slice();return t[11]=e[l],t[12]=e,t[13]=l,t}function je(f){let e,l,t=[],n=new Map,i=f[0].length&&qe(f),s=f[0];const a=o=>o[11];for(let o=0;o<s.length;o+=1){let h=Pe(f,s,o),r=a(h);n.set(r,t[o]=Ge(r,h))}return{c(){e=y("div"),i&&i.c(),l=D();for(let o=0;o<t.length;o+=1)t[o].c();this.h()},l(o){e=B(o,"DIV",{class:!0});var h=A(e);i&&i.l(h),l=M(h);for(let r=0;r<t.length;r+=1)t[r].l(h);h.forEach(k),this.h()},h(){K(e,"class","chooseColumns svelte-yjg26n")},m(o,h){S(o,e,h),i&&i.m(e,null),m(e,l);for(let r=0;r<t.length;r+=1)t[r].m(e,null)},p(o,h){o[0].length?i?i.p(o,h):(i=qe(o),i.c(),i.m(e,l)):i&&(i.d(1),i=null),h&3&&(s=o[0],t=be(t,h,a,1,o,s,n,e,pe,Ge,null,Pe))},d(o){o&&k(e),i&&i.d();for(let h=0;h<t.length;h+=1)t[h].d()}}}function qe(f){let e,l,t,n,i,s,a;return{c(){e=y("button"),l=H("Select None"),t=D(),n=y("button"),i=H("Select All"),this.h()},l(o){e=B(o,"BUTTON",{type:!0});var h=A(e);l=O(h,"Select None"),h.forEach(k),t=M(o),n=B(o,"BUTTON",{type:!0});var r=A(n);i=O(r,"Select All"),r.forEach(k),this.h()},h(){K(e,"type","button"),K(n,"type","button")},m(o,h){S(o,e,h),m(e,l),S(o,t,h),S(o,n,h),m(n,i),s||(a=[ne(e,"click",f[5]),ne(n,"click",f[6])],s=!0)},p:te,d(o){o&&k(e),o&&k(t),o&&k(n),s=!1,Ie(a)}}}function Ge(f,e){let l,t,n,i,s=e[11]+"",a,o,h,r;function u(){e[7].call(n,e[13])}return{key:f,first:null,c(){l=y("li"),t=y("label"),n=y("input"),i=D(),a=H(s),o=D(),this.h()},l(g){l=B(g,"LI",{});var p=A(l);t=B(p,"LABEL",{});var v=A(t);n=B(v,"INPUT",{type:!0}),i=M(v),a=O(v,s),v.forEach(k),o=M(p),p.forEach(k),this.h()},h(){K(n,"type","checkbox"),this.first=l},m(g,p){S(g,l,p),m(l,t),m(t,n),n.checked=e[1][e[13]],m(t,i),m(t,a),m(l,o),h||(r=ne(n,"change",u),h=!0)},p(g,p){e=g,p&3&&(n.checked=e[1][e[13]]),p&1&&s!==(s=e[11]+"")&&G(a,s)},d(g){g&&k(l),h=!1,r()}}}function Nl(f){let e,l=(f[2]?"Hide":"Show")+"",t,n,i,s,a,o,h=f[2]&&je(f);return{c(){e=y("button"),t=H(l),n=H(" columns"),i=D(),h&&h.c(),s=ae(),this.h()},l(r){e=B(r,"BUTTON",{type:!0});var u=A(e);t=O(u,l),n=O(u," columns"),u.forEach(k),i=M(r),h&&h.l(r),s=ae(),this.h()},h(){K(e,"type","button"),e.disabled=f[3]},m(r,u){S(r,e,u),m(e,t),m(e,n),S(r,i,u),h&&h.m(r,u),S(r,s,u),a||(o=ne(e,"click",f[4]),a=!0)},p(r,[u]){u&4&&l!==(l=(r[2]?"Hide":"Show")+"")&&G(t,l),u&8&&(e.disabled=r[3]),r[2]?h?h.p(r,u):(h=je(r),h.c(),h.m(s.parentNode,s)):h&&(h.d(1),h=null)},i:te,o:te,d(r){r&&k(e),r&&k(i),h&&h.d(r),r&&k(s),a=!1,o()}}}function Il(f,e,l){let t,{names:n}=e;const i=ye();let s=!0,a;const o=()=>{l(2,s=!s)},h=v=>{i("updateColumns",n.reduce((b,_,c)=>(a[c]&&b.push(_),b),[]))},r=v=>{l(1,a=n.map(b=>!0))},u=()=>{l(1,a=a.map(v=>!1))},g=()=>{l(1,a=a.map(v=>!0))};function p(v){a[v]=this.checked,l(1,a)}return f.$$set=v=>{"names"in v&&l(0,n=v.names)},f.$$.update=()=>{f.$$.dirty&1&&r(),f.$$.dirty&2&&h(),f.$$.dirty&1&&l(3,t=!n.length)},[n,a,s,t,o,u,g,p]}class Ll extends ce{constructor(e){super();_e(this,e,Il,Nl,ie,{names:0})}}function Je(f){let e,l=(f[2]?"Hide":"Show")+"",t,n,i,s;return{c(){e=y("button"),t=H(l),n=H(" table"),this.h()},l(a){e=B(a,"BUTTON",{type:!0});var o=A(e);t=O(o,l),n=O(o," table"),o.forEach(k),this.h()},h(){K(e,"type","button")},m(a,o){S(a,e,o),m(e,t),m(e,n),i||(s=ne(e,"click",f[5]),i=!0)},p(a,o){o&4&&l!==(l=(a[2]?"Hide":"Show")+"")&&G(t,l)},d(a){a&&k(e),i=!1,s()}}}function Qe(f){let e,l;return e=new Ml({props:{keys:f[3],data:f[0]}}),{c(){se(e.$$.fragment)},l(t){oe(e.$$.fragment,t)},m(t,n){re(e,t,n),l=!0},p(t,n){const i={};n&8&&(i.keys=t[3]),n&1&&(i.data=t[0]),e.$set(i)},i(t){l||(Z(e.$$.fragment,t),l=!0)},o(t){le(e.$$.fragment,t),l=!1},d(t){he(e,t)}}}function Sl(f){let e,l,t,n,i,s,a,o,h=f[0].length&&Je(f);i=new Ll({props:{names:f[4]}}),i.$on("updateColumns",f[6]);let r=f[2]&&Qe(f);return{c(){e=y("p"),l=H(f[1]),t=D(),h&&h.c(),n=D(),se(i.$$.fragment),s=D(),r&&r.c(),a=ae()},l(u){e=B(u,"P",{});var g=A(e);l=O(g,f[1]),g.forEach(k),t=M(u),h&&h.l(u),n=M(u),oe(i.$$.fragment,u),s=M(u),r&&r.l(u),a=ae()},m(u,g){S(u,e,g),m(e,l),S(u,t,g),h&&h.m(u,g),S(u,n,g),re(i,u,g),S(u,s,g),r&&r.m(u,g),S(u,a,g),o=!0},p(u,[g]){(!o||g&2)&&G(l,u[1]),u[0].length?h?h.p(u,g):(h=Je(u),h.c(),h.m(n.parentNode,n)):h&&(h.d(1),h=null);const p={};g&16&&(p.names=u[4]),i.$set(p),u[2]?r?(r.p(u,g),g&4&&Z(r,1)):(r=Qe(u),r.c(),Z(r,1),r.m(a.parentNode,a)):r&&(Le(),le(r,1,1,()=>{r=null}),Se())},i(u){o||(Z(i.$$.fragment,u),Z(r),o=!0)},o(u){le(i.$$.fragment,u),le(r),o=!1},d(u){u&&k(e),u&&k(t),h&&h.d(u),u&&k(n),he(i,u),u&&k(s),r&&r.d(u),u&&k(a)}}}function Cl(f,e,l){let t,n,{data:i}=e,{filename:s}=e,a=!1;const o=()=>{l(2,a=!a)},h=ye(),r=u=>{l(3,n=u.detail),h("updateKeys",n)};return Ne(()=>{h("updateKeys",n)}),f.$$set=u=>{"data"in u&&l(0,i=u.data),"filename"in u&&l(1,s=u.filename)},f.$$.update=()=>{var u,g;f.$$.dirty&1&&l(4,t=Object.keys((u=i[0])!=null?u:[]).sort()),f.$$.dirty&1&&l(3,n=Object.keys((g=i[0])!=null?g:[]))},[i,s,a,n,t,o,r]}class We extends ce{constructor(e){super();_e(this,e,Cl,Sl,ie,{data:0,filename:1})}}function Xe(f,e,l){const t=f.slice();return t[9]=e[l],t}function Ye(f,e,l){const t=f.slice();return t[12]=e[l],t}function ze(f,e){let l,t,n,i,s,a=e[12]+"",o,h,r,u;return{key:f,first:null,c(){l=y("li"),t=y("label"),n=y("input"),s=D(),o=H(a),h=D(),this.h()},l(g){l=B(g,"LI",{});var p=A(l);t=B(p,"LABEL",{});var v=A(t);n=B(v,"INPUT",{type:!0}),s=M(v),o=O(v,a),v.forEach(k),h=M(p),p.forEach(k),this.h()},h(){K(n,"type","radio"),n.__value=i=e[12],n.value=n.__value,e[7][0].push(n),this.first=l},m(g,p){S(g,l,p),m(l,t),m(t,n),n.checked=n.__value===e[0],m(t,s),m(t,o),m(l,h),r||(u=ne(n,"change",e[6]),r=!0)},p(g,p){e=g,p&4&&i!==(i=e[12])&&(n.__value=i,n.value=n.__value),p&1&&(n.checked=n.__value===e[0]),p&4&&a!==(a=e[12]+"")&&G(o,a)},d(g){g&&k(l),e[7][0].splice(e[7][0].indexOf(n),1),r=!1,u()}}}function Ze(f,e){let l,t,n,i,s,a=e[9]+"",o,h,r,u;return{key:f,first:null,c(){l=y("li"),t=y("label"),n=y("input"),s=D(),o=H(a),h=D(),this.h()},l(g){l=B(g,"LI",{});var p=A(l);t=B(p,"LABEL",{});var v=A(t);n=B(v,"INPUT",{type:!0}),s=M(v),o=O(v,a),v.forEach(k),h=M(p),p.forEach(k),this.h()},h(){K(n,"type","radio"),n.__value=i=e[9],n.value=n.__value,e[7][1].push(n),this.first=l},m(g,p){S(g,l,p),m(l,t),m(t,n),n.checked=n.__value===e[1],m(t,s),m(t,o),m(l,h),r||(u=ne(n,"change",e[8]),r=!0)},p(g,p){e=g,p&8&&i!==(i=e[9])&&(n.__value=i,n.value=n.__value),p&2&&(n.checked=n.__value===e[1]),p&8&&a!==(a=e[9]+"")&&G(o,a)},d(g){g&&k(l),e[7][1].splice(e[7][1].indexOf(n),1),r=!1,u()}}}function Hl(f){let e,l,t,n,i,s,a,o,h,r,u,g,p=[],v=new Map,b,_,c,d,T,L,C,R=[],F=new Map,$=f[2];const Y=N=>N[12];for(let N=0;N<$.length;N+=1){let I=Ye(f,$,N),U=Y(I);v.set(U,p[N]=ze(U,I))}let Q=f[3];const W=N=>N[9];for(let N=0;N<Q.length;N+=1){let I=Xe(f,Q,N),U=W(I);F.set(U,R[N]=Ze(U,I))}return{c(){e=y("div"),l=y("fieldset"),t=y("legend"),n=H("Select key to match between files"),i=D(),s=y("div"),a=y("div"),o=y("p"),h=y("strong"),r=H(f[4]),u=D(),g=y("ul");for(let N=0;N<p.length;N+=1)p[N].c();b=D(),_=y("div"),c=y("p"),d=y("strong"),T=H(f[5]),L=D(),C=y("ul");for(let N=0;N<R.length;N+=1)R[N].c();this.h()},l(N){e=B(N,"DIV",{class:!0});var I=A(e);l=B(I,"FIELDSET",{});var U=A(l);t=B(U,"LEGEND",{});var j=A(t);n=O(j,"Select key to match between files"),j.forEach(k),i=M(U),s=B(U,"DIV",{class:!0});var x=A(s);a=B(x,"DIV",{});var q=A(a);o=B(q,"P",{});var w=A(o);h=B(w,"STRONG",{});var J=A(h);r=O(J,f[4]),J.forEach(k),w.forEach(k),u=M(q),g=B(q,"UL",{class:!0});var E=A(g);for(let X=0;X<p.length;X+=1)p[X].l(E);E.forEach(k),q.forEach(k),b=M(x),_=B(x,"DIV",{});var V=A(_);c=B(V,"P",{});var z=A(c);d=B(z,"STRONG",{});var P=A(d);T=O(P,f[5]),P.forEach(k),z.forEach(k),L=M(V),C=B(V,"UL",{class:!0});var me=A(C);for(let X=0;X<R.length;X+=1)R[X].l(me);me.forEach(k),V.forEach(k),x.forEach(k),U.forEach(k),I.forEach(k),this.h()},h(){K(g,"class","svelte-12yuf20"),K(C,"class","svelte-12yuf20"),K(s,"class","pick-key svelte-12yuf20"),K(e,"class","wrapper")},m(N,I){S(N,e,I),m(e,l),m(l,t),m(t,n),m(l,i),m(l,s),m(s,a),m(a,o),m(o,h),m(h,r),m(a,u),m(a,g);for(let U=0;U<p.length;U+=1)p[U].m(g,null);m(s,b),m(s,_),m(_,c),m(c,d),m(d,T),m(_,L),m(_,C);for(let U=0;U<R.length;U+=1)R[U].m(C,null)},p(N,[I]){I&16&&G(r,N[4]),I&5&&($=N[2],p=be(p,I,Y,1,N,$,v,g,pe,ze,null,Ye)),I&32&&G(T,N[5]),I&10&&(Q=N[3],R=be(R,I,W,1,N,Q,F,C,pe,Ze,null,Xe))},i:te,o:te,d(N){N&&k(e);for(let I=0;I<p.length;I+=1)p[I].d();for(let I=0;I<R.length;I+=1)R[I].d()}}}function Ol(f,e,l){let{keysA:t}=e,{keysB:n}=e,{keyA:i}=e,{keyB:s}=e,{filenameA:a}=e,{filenameB:o}=e;const h=[[],[]];function r(){i=this.__value,l(0,i)}function u(){s=this.__value,l(1,s)}return f.$$set=g=>{"keysA"in g&&l(2,t=g.keysA),"keysB"in g&&l(3,n=g.keysB),"keyA"in g&&l(0,i=g.keyA),"keyB"in g&&l(1,s=g.keyB),"filenameA"in g&&l(4,a=g.filenameA),"filenameB"in g&&l(5,o=g.filenameB)},[i,s,t,n,a,o,r,h,u]}class Rl extends ce{constructor(e){super();_e(this,e,Ol,Hl,ie,{keysA:2,keysB:3,keyA:0,keyB:1,filenameA:4,filenameB:5})}}function $e(f,e,l){const t=f.slice();return t[15]=e[l],t[16]=e,t[17]=l,t}function xe(f,e){let l,t,n,i,s,a,o,h,r,u,g,p,v,b=(e[0][e[17]]?e[0][e[17]]:"")+"",_,c,d,T,L,C,R,F,$,Y,Q,W=(e[1][e[17]]?e[1][e[17]]:"")+"",N,I,U,j,x;function q(){e[9].call(n,e[17])}function w(){return e[10](e[17])}function J(){return e[11](e[17])}function E(){return e[12](e[17])}function V(){return e[13](e[17])}return{key:f,first:null,c(){l=y("tr"),t=y("th"),n=y("input"),i=D(),s=y("td"),a=y("button"),o=H("\u2191"),r=D(),u=y("button"),g=H("\u2193"),v=D(),_=H(b),c=D(),d=y("td"),T=y("button"),L=H("\u2191"),R=D(),F=y("button"),$=H("\u2193"),Q=D(),N=H(W),I=D(),U=y("tr"),this.h()},l(z){l=B(z,"TR",{});var P=A(l);t=B(P,"TH",{});var me=A(t);n=B(me,"INPUT",{type:!0}),me.forEach(k),i=M(P),s=B(P,"TD",{});var X=A(s);a=B(X,"BUTTON",{type:!0});var fe=A(a);o=O(fe,"\u2191"),fe.forEach(k),r=M(X),u=B(X,"BUTTON",{type:!0});var ke=A(u);g=O(ke,"\u2193"),ke.forEach(k),v=M(X),_=O(X,b),X.forEach(k),c=M(P),d=B(P,"TD",{});var ue=A(d);T=B(ue,"BUTTON",{type:!0});var ge=A(T);L=O(ge,"\u2191"),ge.forEach(k),R=M(ue),F=B(ue,"BUTTON",{type:!0});var ee=A(F);$=O(ee,"\u2193"),ee.forEach(k),Q=M(ue),N=O(ue,W),ue.forEach(k),I=M(P),P.forEach(k),U=B(z,"TR",{}),A(U).forEach(k),this.h()},h(){K(n,"type","checkbox"),K(a,"type","button"),a.disabled=h=e[17]===0,K(u,"type","button"),u.disabled=p=e[17]===e[5]-1,K(T,"type","button"),T.disabled=C=e[17]===0,K(F,"type","button"),F.disabled=Y=e[17]===e[5]-1,this.first=l},m(z,P){S(z,l,P),m(l,t),m(t,n),n.checked=e[4][e[17]],m(l,i),m(l,s),m(s,a),m(a,o),m(s,r),m(s,u),m(u,g),m(s,v),m(s,_),m(l,c),m(l,d),m(d,T),m(T,L),m(d,R),m(d,F),m(F,$),m(d,Q),m(d,N),m(l,I),S(z,U,P),j||(x=[ne(n,"change",q),ne(a,"click",w),ne(u,"click",J),ne(T,"click",E),ne(F,"click",V)],j=!0)},p(z,P){e=z,P&48&&(n.checked=e[4][e[17]]),P&32&&h!==(h=e[17]===0)&&(a.disabled=h),P&32&&p!==(p=e[17]===e[5]-1)&&(u.disabled=p),P&33&&b!==(b=(e[0][e[17]]?e[0][e[17]]:"")+"")&&G(_,b),P&32&&C!==(C=e[17]===0)&&(T.disabled=C),P&32&&Y!==(Y=e[17]===e[5]-1)&&(F.disabled=Y),P&34&&W!==(W=(e[1][e[17]]?e[1][e[17]]:"")+"")&&G(N,W)},d(z){z&&k(l),z&&k(U),j=!1,Ie(x)}}}function Ul(f){let e,l,t,n,i,s,a,o,h,r,u,g,p,v,b,_,c=[],d=new Map,T={length:f[5]};const L=C=>C[17];for(let C=0;C<T.length;C+=1){let R=$e(f,T,C),F=L(R);d.set(F,c[C]=xe(F,R))}return{c(){e=y("div"),l=y("fieldset"),t=y("legend"),n=H("Match column data"),i=D(),s=y("table"),a=y("tr"),o=y("th"),h=H("Include?"),r=D(),u=y("th"),g=H(f[2]),p=D(),v=y("th"),b=H(f[3]),_=D();for(let C=0;C<c.length;C+=1)c[C].c();this.h()},l(C){e=B(C,"DIV",{class:!0});var R=A(e);l=B(R,"FIELDSET",{});var F=A(l);t=B(F,"LEGEND",{});var $=A(t);n=O($,"Match column data"),$.forEach(k),i=M(F),s=B(F,"TABLE",{});var Y=A(s);a=B(Y,"TR",{});var Q=A(a);o=B(Q,"TH",{});var W=A(o);h=O(W,"Include?"),W.forEach(k),r=M(Q),u=B(Q,"TH",{});var N=A(u);g=O(N,f[2]),N.forEach(k),p=M(Q),v=B(Q,"TH",{});var I=A(v);b=O(I,f[3]),I.forEach(k),Q.forEach(k),_=M(Y);for(let U=0;U<c.length;U+=1)c[U].l(Y);Y.forEach(k),F.forEach(k),R.forEach(k),this.h()},h(){K(e,"class","wrapper")},m(C,R){S(C,e,R),m(e,l),m(l,t),m(t,n),m(l,i),m(l,s),m(s,a),m(a,o),m(o,h),m(a,r),m(a,u),m(u,g),m(a,p),m(a,v),m(v,b),m(s,_);for(let F=0;F<c.length;F+=1)c[F].m(s,null)},p(C,[R]){R&4&&G(g,C[2]),R&8&&G(b,C[3]),R&243&&(T={length:C[5]},c=be(c,R,L,1,C,T,d,s,pe,xe,null,$e))},i:te,o:te,d(C){C&&k(e);for(let R=0;R<c.length;R+=1)c[R].d()}}}function Kl(f,e,l){let t,n,{fieldsA:i}=e,{fieldsB:s}=e,{fieldMap:a=[]}=e,{filenameA:o}=e,{filenameB:h}=e;const r=d=>{l(8,a=[]),n.forEach((T,L)=>{T&&i[L]&&s[L]&&a.push([i[L],s[L]])})},u=(d,T)=>{const L=i.splice(d,1);i.splice(d+(T?-1:1),0,L[0]),l(0,i)},g=(d,T)=>{const L=s.splice(d,1);s.splice(d+(T?-1:1),0,L[0]),l(1,s)};function p(d){n[d]=this.checked,l(4,n),l(5,t),l(0,i),l(1,s)}const v=d=>u(d,!0),b=d=>u(d,!1),_=d=>g(d,!0),c=d=>g(d,!1);return f.$$set=d=>{"fieldsA"in d&&l(0,i=d.fieldsA),"fieldsB"in d&&l(1,s=d.fieldsB),"fieldMap"in d&&l(8,a=d.fieldMap),"filenameA"in d&&l(2,o=d.filenameA),"filenameB"in d&&l(3,h=d.filenameB)},f.$$.update=()=>{f.$$.dirty&3&&l(5,t=Math.max(i.length,s.length)),f.$$.dirty&32&&l(4,n=new Array(t).map(()=>!1)),f.$$.dirty&19&&(i||s)&&r()},[i,s,o,h,n,t,u,g,a,p,v,b,_,c]}class Fl extends ce{constructor(e){super();_e(this,e,Kl,Ul,ie,{fieldsA:0,fieldsB:1,fieldMap:8,filenameA:2,filenameB:3})}}function el(f,e,l){const t=f.slice();return t[14]=e[l],t[16]=l,t}function ll(f,e,l){const t=f.slice();return t[17]=e[l],t}function tl(f,e,l){const t=f.slice();return t[17]=e[l],t}function nl(f,e,l){const t=f.slice();return t[17]=e[l],t}function fl(f,e,l){const t=f.slice();return t[17]=e[l],t}function il(f,e,l){const t=f.slice();return t[26]=e[l],t}function al(f){let e,l=f[5],t=[];for(let n=0;n<l.length;n+=1)t[n]=sl(il(f,l,n));return{c(){e=y("ul");for(let n=0;n<t.length;n+=1)t[n].c()},l(n){e=B(n,"UL",{});var i=A(e);for(let s=0;s<t.length;s+=1)t[s].l(i);i.forEach(k)},m(n,i){S(n,e,i);for(let s=0;s<t.length;s+=1)t[s].m(e,null)},p(n,i){if(i&32){l=n[5];let s;for(s=0;s<l.length;s+=1){const a=il(n,l,s);t[s]?t[s].p(a,i):(t[s]=sl(a),t[s].c(),t[s].m(e,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=l.length}},d(n){n&&k(e),de(t,n)}}}function sl(f){let e,l=f[26]+"",t;return{c(){e=y("li"),t=H(l)},l(n){e=B(n,"LI",{});var i=A(e);t=O(i,l),i.forEach(k)},m(n,i){S(n,e,i),m(e,t)},p(n,i){i&32&&l!==(l=n[26]+"")&&G(t,l)},d(n){n&&k(e)}}}function ol(f){let e,l=f[17]+"",t;return{c(){e=y("th"),t=H(l)},l(n){e=B(n,"TH",{});var i=A(e);t=O(i,l),i.forEach(k)},m(n,i){S(n,e,i),m(e,t)},p(n,i){i&1&&l!==(l=n[17]+"")&&G(t,l)},d(n){n&&k(e)}}}function rl(f){let e,l=f[17]+"",t;return{c(){e=y("th"),t=H(l)},l(n){e=B(n,"TH",{});var i=A(e);t=O(i,l),i.forEach(k)},m(n,i){S(n,e,i),m(e,t)},p(n,i){i&2&&l!==(l=n[17]+"")&&G(t,l)},d(n){n&&k(e)}}}function hl(f){let e=f[14][1].A[f[17]]+"",l;return{c(){l=H(e)},l(t){l=O(t,e)},m(t,n){S(t,l,n)},p(t,n){n&17&&e!==(e=t[14][1].A[t[17]]+"")&&G(l,e)},d(t){t&&k(l)}}}function ul(f){let e,l=f[14][1].A[f[17]]&&hl(f);return{c(){e=y("td"),l&&l.c(),this.h()},l(t){e=B(t,"TD",{class:!0});var n=A(e);l&&l.l(n),n.forEach(k),this.h()},h(){K(e,"class","svelte-3lnms1"),ve(e,"mismatch",f[14][1].mismatch.A.includes(f[17]))},m(t,n){S(t,e,n),l&&l.m(e,null)},p(t,n){t[14][1].A[t[17]]?l?l.p(t,n):(l=hl(t),l.c(),l.m(e,null)):l&&(l.d(1),l=null),n&17&&ve(e,"mismatch",t[14][1].mismatch.A.includes(t[17]))},d(t){t&&k(e),l&&l.d()}}}function cl(f){let e=f[14][1].B[f[17]]+"",l;return{c(){l=H(e)},l(t){l=O(t,e)},m(t,n){S(t,l,n)},p(t,n){n&18&&e!==(e=t[14][1].B[t[17]]+"")&&G(l,e)},d(t){t&&k(l)}}}function _l(f){let e,l=f[14][1].B[f[17]]&&cl(f);return{c(){e=y("td"),l&&l.c(),this.h()},l(t){e=B(t,"TD",{class:!0});var n=A(e);l&&l.l(n),n.forEach(k),this.h()},h(){K(e,"class","svelte-3lnms1"),ve(e,"mismatch",f[14][1].mismatch.B.includes(f[17]))},m(t,n){S(t,e,n),l&&l.m(e,null)},p(t,n){t[14][1].B[t[17]]?l?l.p(t,n):(l=cl(t),l.c(),l.m(e,null)):l&&(l.d(1),l=null),n&18&&ve(e,"mismatch",t[14][1].mismatch.B.includes(t[17]))},d(t){t&&k(e),l&&l.d()}}}function dl(f){let e,l,t=f[16]+1+"",n,i,s,a,o=f[14][0]+"",h,r,u,g=f[0],p=[];for(let _=0;_<g.length;_+=1)p[_]=ul(tl(f,g,_));let v=f[1],b=[];for(let _=0;_<v.length;_+=1)b[_]=_l(ll(f,v,_));return{c(){e=y("tr"),l=y("th"),n=H(t),i=D();for(let _=0;_<p.length;_+=1)p[_].c();s=D(),a=y("td"),h=H(o),r=D();for(let _=0;_<b.length;_+=1)b[_].c();u=D()},l(_){e=B(_,"TR",{});var c=A(e);l=B(c,"TH",{});var d=A(l);n=O(d,t),d.forEach(k),i=M(c);for(let L=0;L<p.length;L+=1)p[L].l(c);s=M(c),a=B(c,"TD",{});var T=A(a);h=O(T,o),T.forEach(k),r=M(c);for(let L=0;L<b.length;L+=1)b[L].l(c);u=M(c),c.forEach(k)},m(_,c){S(_,e,c),m(e,l),m(l,n),m(e,i);for(let d=0;d<p.length;d+=1)p[d].m(e,null);m(e,s),m(e,a),m(a,h),m(e,r);for(let d=0;d<b.length;d+=1)b[d].m(e,null);m(e,u)},p(_,c){if(c&17){g=_[0];let d;for(d=0;d<g.length;d+=1){const T=tl(_,g,d);p[d]?p[d].p(T,c):(p[d]=ul(T),p[d].c(),p[d].m(e,s))}for(;d<p.length;d+=1)p[d].d(1);p.length=g.length}if(c&16&&o!==(o=_[14][0]+"")&&G(h,o),c&18){v=_[1];let d;for(d=0;d<v.length;d+=1){const T=ll(_,v,d);b[d]?b[d].p(T,c):(b[d]=_l(T),b[d].c(),b[d].m(e,u))}for(;d<b.length;d+=1)b[d].d(1);b.length=v.length}},d(_){_&&k(e),de(p,_),de(b,_)}}}function ml(f){let e,l,t,n,i,s,a,o,h,r,u,g,p,v,b,_,c,d,T,L,C,R,F,$,Y,Q,W,N=f[0],I=[];for(let w=0;w<N.length;w+=1)I[w]=ol(fl(f,N,w));let U=f[1],j=[];for(let w=0;w<U.length;w+=1)j[w]=rl(nl(f,U,w));let x=[...f[4]],q=[];for(let w=0;w<x.length;w+=1)q[w]=dl(el(f,x,w));return{c(){e=y("table"),l=y("thead"),t=y("tr"),n=y("th"),i=H("Files"),s=D(),a=y("th"),o=H(f[2]),r=D(),u=y("th"),g=H("\xA0"),p=D(),v=y("th"),b=H(f[3]),c=D(),d=y("tr"),T=y("th"),L=H("Row"),C=D();for(let w=0;w<I.length;w+=1)I[w].c();R=D(),F=y("th"),$=H("Shared Key"),Y=D();for(let w=0;w<j.length;w+=1)j[w].c();Q=D(),W=y("tbody");for(let w=0;w<q.length;w+=1)q[w].c();this.h()},l(w){e=B(w,"TABLE",{id:!0,class:!0});var J=A(e);l=B(J,"THEAD",{});var E=A(l);t=B(E,"TR",{});var V=A(t);n=B(V,"TH",{});var z=A(n);i=O(z,"Files"),z.forEach(k),s=M(V),a=B(V,"TH",{colspan:!0});var P=A(a);o=O(P,f[2]),P.forEach(k),r=M(V),u=B(V,"TH",{});var me=A(u);g=O(me,"\xA0"),me.forEach(k),p=M(V),v=B(V,"TH",{colspan:!0});var X=A(v);b=O(X,f[3]),X.forEach(k),V.forEach(k),c=M(E),d=B(E,"TR",{});var fe=A(d);T=B(fe,"TH",{});var ke=A(T);L=O(ke,"Row"),ke.forEach(k),C=M(fe);for(let ee=0;ee<I.length;ee+=1)I[ee].l(fe);R=M(fe),F=B(fe,"TH",{});var ue=A(F);$=O(ue,"Shared Key"),ue.forEach(k),Y=M(fe);for(let ee=0;ee<j.length;ee+=1)j[ee].l(fe);fe.forEach(k),E.forEach(k),Q=M(J),W=B(J,"TBODY",{});var ge=A(W);for(let ee=0;ee<q.length;ee+=1)q[ee].l(ge);ge.forEach(k),J.forEach(k),this.h()},h(){K(a,"colspan",h=f[0].length),K(v,"colspan",_=f[1].length),K(e,"id","results"),K(e,"class","svelte-3lnms1")},m(w,J){S(w,e,J),m(e,l),m(l,t),m(t,n),m(n,i),m(t,s),m(t,a),m(a,o),m(t,r),m(t,u),m(u,g),m(t,p),m(t,v),m(v,b),m(l,c),m(l,d),m(d,T),m(T,L),m(d,C);for(let E=0;E<I.length;E+=1)I[E].m(d,null);m(d,R),m(d,F),m(F,$),m(d,Y);for(let E=0;E<j.length;E+=1)j[E].m(d,null);m(e,Q),m(e,W);for(let E=0;E<q.length;E+=1)q[E].m(W,null)},p(w,J){if(J&4&&G(o,w[2]),J&1&&h!==(h=w[0].length)&&K(a,"colspan",h),J&8&&G(b,w[3]),J&2&&_!==(_=w[1].length)&&K(v,"colspan",_),J&1){N=w[0];let E;for(E=0;E<N.length;E+=1){const V=fl(w,N,E);I[E]?I[E].p(V,J):(I[E]=ol(V),I[E].c(),I[E].m(d,R))}for(;E<I.length;E+=1)I[E].d(1);I.length=N.length}if(J&2){U=w[1];let E;for(E=0;E<U.length;E+=1){const V=nl(w,U,E);j[E]?j[E].p(V,J):(j[E]=rl(V),j[E].c(),j[E].m(d,null))}for(;E<j.length;E+=1)j[E].d(1);j.length=U.length}if(J&19){x=[...w[4]];let E;for(E=0;E<x.length;E+=1){const V=el(w,x,E);q[E]?q[E].p(V,J):(q[E]=dl(V),q[E].c(),q[E].m(W,null))}for(;E<q.length;E+=1)q[E].d(1);q.length=x.length}},d(w){w&&k(e),de(I,w),de(j,w),de(q,w)}}}function Vl(f){let e,l,t,n,i,s,a,o,h=f[4],r,u,g,p=f[5].length&&al(f),v=ml(f);return{c(){p&&p.c(),e=D(),l=y("div"),t=y("button"),n=H("Copy table to clipboard"),i=D(),s=y("span"),a=H(f[6]),o=D(),v.c(),r=ae(),this.h()},l(b){p&&p.l(b),e=M(b),l=B(b,"DIV",{});var _=A(l);t=B(_,"BUTTON",{type:!0});var c=A(t);n=O(c,"Copy table to clipboard"),c.forEach(k),i=M(_),s=B(_,"SPAN",{});var d=A(s);a=O(d,f[6]),d.forEach(k),_.forEach(k),o=M(b),v.l(b),r=ae(),this.h()},h(){K(t,"type","button")},m(b,_){p&&p.m(b,_),S(b,e,_),S(b,l,_),m(l,t),m(t,n),m(l,i),m(l,s),m(s,a),S(b,o,_),v.m(b,_),S(b,r,_),u||(g=ne(t,"click",f[7]),u=!0)},p(b,[_]){b[5].length?p?p.p(b,_):(p=al(b),p.c(),p.m(e.parentNode,e)):p&&(p.d(1),p=null),_&64&&G(a,b[6]),_&16&&ie(h,h=b[4])?(v.d(1),v=ml(b),v.c(),v.m(r.parentNode,r)):v.p(b,_)},i:te,o:te,d(b){p&&p.d(b),b&&k(e),b&&k(l),b&&k(o),b&&k(r),v.d(b),u=!1,g()}}}function Pl(f,e,l){let{keyA:t}=e,{keyB:n}=e,{keysA:i}=e,{keysB:s}=e,{fileA:a}=e,{fileB:o}=e,{filenameA:h}=e,{filenameB:r}=e,{fieldMap:u=[]}=e,g=new Map([]),p=[],v="";const b=(c,d)=>d.reduce((T,L)=>(T[L]=c[L],T),{}),_=()=>{const c=document.createRange(),d=window.getSelection();d.removeAllRanges(),c.selectNodeContents(document.getElementById("results")),d.addRange(c),document.execCommand("copy"),d.removeAllRanges(),l(6,v="Results table copied to the clipboard; now paste into a spreadsheet."),setTimeout(()=>{l(6,v="")},5e3)};return f.$$set=c=>{"keyA"in c&&l(8,t=c.keyA),"keyB"in c&&l(9,n=c.keyB),"keysA"in c&&l(0,i=c.keysA),"keysB"in c&&l(1,s=c.keysB),"fileA"in c&&l(10,a=c.fileA),"fileB"in c&&l(11,o=c.fileB),"filenameA"in c&&l(2,h=c.filenameA),"filenameB"in c&&l(3,r=c.filenameB),"fieldMap"in c&&l(12,u=c.fieldMap)},f.$$.update=()=>{if(f.$$.dirty&7999){if(l(5,p=[]),t&&n){const c=[];a.forEach(d=>{c.includes(d[t])?p.push(`non-unique key in ${h}: "${t}": "${d[t]}"`):c.push(d[t])}),l(4,g=new Map(a.map(d=>[d[t],{A:b(d,i),B:{},mismatch:{A:[],B:[]}}]))),o.forEach(d=>{const T=g.get(d[n]);T?Object.keys(T.B).length>0?p.push(`non-unique key in ${r}: "${n}": "${d[n]}"`):g.set(d[n],Me(De({},T),{B:b(d,s),mismatch:{A:[],B:[]}})):g.set(d[n],{A:{},B:b(d,s),mismatch:{A:[],B:[]}})})}g.forEach((c,d)=>{u.forEach(T=>{const L=T[0],C=T[1];c.A[L]!==c.B[C]&&(c.mismatch.A.push(L),c.mismatch.B.push(C))})})}},[i,s,h,r,g,p,v,_,t,n,a,o,u]}class jl extends ce{constructor(e){super();_e(this,e,Pl,Vl,ie,{keyA:8,keyB:9,keysA:0,keysB:1,fileA:10,fileB:11,filenameA:2,filenameB:3,fieldMap:12})}}function ql(f){let e,l,t,n,i,s,a,o,h,r;function u(_){f[11](_)}function g(_){f[12](_)}let p={filenameA:f[4],filenameB:f[5],keysA:f[2],keysB:f[3]};f[6]!==void 0&&(p.keyA=f[6]),f[7]!==void 0&&(p.keyB=f[7]),l=new Rl({props:p}),Be.push(()=>Ae(l,"keyA",u)),Be.push(()=>Ae(l,"keyB",g));function v(_){f[13](_)}let b={filenameA:f[4],filenameB:f[5],fieldsA:f[9],fieldsB:f[10]};return f[8]!==void 0&&(b.fieldMap=f[8]),s=new Fl({props:b}),Be.push(()=>Ae(s,"fieldMap",v)),h=new jl({props:{fieldMap:f[8],filenameA:f[4],filenameB:f[5],keyA:f[6],keyB:f[7],keysA:f[9],keysB:f[10],fileA:f[0],fileB:f[1]}}),{c(){e=y("div"),se(l.$$.fragment),i=D(),se(s.$$.fragment),o=D(),se(h.$$.fragment),this.h()},l(_){e=B(_,"DIV",{class:!0});var c=A(e);oe(l.$$.fragment,c),i=M(c),oe(s.$$.fragment,c),c.forEach(k),o=M(_),oe(h.$$.fragment,_),this.h()},h(){K(e,"class","wrapper svelte-1t0h1vg")},m(_,c){S(_,e,c),re(l,e,null),m(e,i),re(s,e,null),S(_,o,c),re(h,_,c),r=!0},p(_,[c]){const d={};c&16&&(d.filenameA=_[4]),c&32&&(d.filenameB=_[5]),c&4&&(d.keysA=_[2]),c&8&&(d.keysB=_[3]),!t&&c&64&&(t=!0,d.keyA=_[6],Ee(()=>t=!1)),!n&&c&128&&(n=!0,d.keyB=_[7],Ee(()=>n=!1)),l.$set(d);const T={};c&16&&(T.filenameA=_[4]),c&32&&(T.filenameB=_[5]),c&512&&(T.fieldsA=_[9]),c&1024&&(T.fieldsB=_[10]),!a&&c&256&&(a=!0,T.fieldMap=_[8],Ee(()=>a=!1)),s.$set(T);const L={};c&256&&(L.fieldMap=_[8]),c&16&&(L.filenameA=_[4]),c&32&&(L.filenameB=_[5]),c&64&&(L.keyA=_[6]),c&128&&(L.keyB=_[7]),c&512&&(L.keysA=_[9]),c&1024&&(L.keysB=_[10]),c&1&&(L.fileA=_[0]),c&2&&(L.fileB=_[1]),h.$set(L)},i(_){r||(Z(l.$$.fragment,_),Z(s.$$.fragment,_),Z(h.$$.fragment,_),r=!0)},o(_){le(l.$$.fragment,_),le(s.$$.fragment,_),le(h.$$.fragment,_),r=!1},d(_){_&&k(e),he(l),he(s),_&&k(o),he(h,_)}}}function Gl(f,e,l){let{fileA:t}=e,{fileB:n}=e,{keysA:i}=e,{keysB:s}=e,{filenameA:a}=e,{filenameB:o}=e,h,r,u=[],g,p;function v(c){h=c,l(6,h)}function b(c){r=c,l(7,r)}function _(c){u=c,l(8,u)}return f.$$set=c=>{"fileA"in c&&l(0,t=c.fileA),"fileB"in c&&l(1,n=c.fileB),"keysA"in c&&l(2,i=c.keysA),"keysB"in c&&l(3,s=c.keysB),"filenameA"in c&&l(4,a=c.filenameA),"filenameB"in c&&l(5,o=c.filenameB)},f.$$.update=()=>{f.$$.dirty&68&&l(9,g=i.filter(c=>c!==h)),f.$$.dirty&136&&l(10,p=s.filter(c=>c!==r))},[t,n,i,s,a,o,h,r,u,g,p,v,b,_]}class Jl extends ce{constructor(e){super();_e(this,e,Gl,ql,ie,{fileA:0,fileB:1,keysA:2,keysB:3,filenameA:4,filenameB:5})}}function kl(f){let e,l;return e=new Jl({props:{filenameA:f[2],filenameB:f[3],keysA:f[4],fileA:f[0],keysB:f[5],fileB:f[1]}}),{c(){se(e.$$.fragment)},l(t){oe(e.$$.fragment,t)},m(t,n){re(e,t,n),l=!0},p(t,n){const i={};n&4&&(i.filenameA=t[2]),n&8&&(i.filenameB=t[3]),n&16&&(i.keysA=t[4]),n&1&&(i.fileA=t[0]),n&32&&(i.keysB=t[5]),n&2&&(i.fileB=t[1]),e.$set(i)},i(t){l||(Z(e.$$.fragment,t),l=!0)},o(t){le(e.$$.fragment,t),l=!1},d(t){he(e,t)}}}function Ql(f){let e,l,t,n,i,s,a,o,h,r,u,g,p;t=new Ce({props:{prompt:"Drop file A here"}}),t.$on("loadedFile",f[6]),i=new We({props:{filename:f[2],data:f[0]}}),i.$on("updateKeys",f[8]),o=new Ce({props:{prompt:"Drop file B here"}}),o.$on("loadedFile",f[7]),r=new We({props:{filename:f[3],data:f[1]}}),r.$on("updateKeys",f[9]);let v=f[4].length&&f[5].length&&kl(f);return{c(){e=y("div"),l=y("div"),se(t.$$.fragment),n=D(),se(i.$$.fragment),s=D(),a=y("div"),se(o.$$.fragment),h=D(),se(r.$$.fragment),u=D(),v&&v.c(),g=ae(),this.h()},l(b){e=B(b,"DIV",{class:!0});var _=A(e);l=B(_,"DIV",{});var c=A(l);oe(t.$$.fragment,c),n=M(c),oe(i.$$.fragment,c),c.forEach(k),s=M(_),a=B(_,"DIV",{});var d=A(a);oe(o.$$.fragment,d),h=M(d),oe(r.$$.fragment,d),d.forEach(k),_.forEach(k),u=M(b),v&&v.l(b),g=ae(),this.h()},h(){K(e,"class","dropAreas svelte-16iyvcs")},m(b,_){S(b,e,_),m(e,l),re(t,l,null),m(l,n),re(i,l,null),m(e,s),m(e,a),re(o,a,null),m(a,h),re(r,a,null),S(b,u,_),v&&v.m(b,_),S(b,g,_),p=!0},p(b,[_]){const c={};_&4&&(c.filename=b[2]),_&1&&(c.data=b[0]),i.$set(c);const d={};_&8&&(d.filename=b[3]),_&2&&(d.data=b[1]),r.$set(d),b[4].length&&b[5].length?v?(v.p(b,_),_&48&&Z(v,1)):(v=kl(b),v.c(),Z(v,1),v.m(g.parentNode,g)):v&&(Le(),le(v,1,1,()=>{v=null}),Se())},i(b){p||(Z(t.$$.fragment,b),Z(i.$$.fragment,b),Z(o.$$.fragment,b),Z(r.$$.fragment,b),Z(v),p=!0)},o(b){le(t.$$.fragment,b),le(i.$$.fragment,b),le(o.$$.fragment,b),le(r.$$.fragment,b),le(v),p=!1},d(b){b&&k(e),he(t),he(i),he(o),he(r),b&&k(u),v&&v.d(b),b&&k(g)}}}function Wl(f,e,l){let t=[],n=[],i="",s="",a=[],o=[];const h=async v=>Al({flatKeys:!0}).fromString(v).then(b=>b);return[t,n,i,s,a,o,async v=>{l(0,t=await h(v.detail.contents)),l(2,i=v.detail.name)},async v=>{l(1,n=await h(v.detail.contents)),l(3,s=v.detail.name)},v=>{l(4,a=v.detail)},v=>{l(5,o=v.detail)}]}class zl extends ce{constructor(e){super();_e(this,e,Wl,Ql,ie,{})}}export{zl as default};
