var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode&&t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function i(t){return document.createTextNode(t)}function f(){return i(" ")}function d(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let p;function h(t){p=t}const m=[],$=[],g=[],y=[],b=Promise.resolve();let _=!1;function v(t){g.push(t)}const w=new Set;let x=0;function k(){if(0!==x)return;const t=p;do{try{for(;x<m.length;){const t=m[x];x++,h(t),j(t.$$)}}catch(t){throw m.length=0,x=0,t}for(h(null),m.length=0,x=0;$.length;)$.pop()();for(let t=0;t<g.length;t+=1){const e=g[t];w.has(e)||(w.add(e),e())}g.length=0}while(m.length);for(;y.length;)y.pop()();_=!1,w.clear(),h(t)}function j(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(v)}}const C=new Set;function E(t,e){-1===t.$$.dirty[0]&&(m.push(t),_||(_=!0,b.then(k)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function M(c,s,a,u,i,f,d,m=[-1]){const $=p;h(c);const g=c.$$={fragment:null,ctx:[],props:f,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||($?$.$$.context:[])),callbacks:n(),dirty:m,skip_bound:!1,root:s.target||$.$$.root};d&&d(g.root);let y=!1;if(g.ctx=a?a(c,s.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return g.ctx&&i(g.ctx[t],g.ctx[t]=o)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](o),y&&E(c,t)),e})):[],g.update(),y=!0,o(g.before_update),g.fragment=!!u&&u(g.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);g.fragment&&g.fragment.l(t),t.forEach(l)}else g.fragment&&g.fragment.c();s.intro&&((b=c.$$.fragment)&&b.i&&(C.delete(b),b.i(_))),function(t,n,c,s){const{fragment:a,after_update:l}=t.$$;a&&a.m(n,c),s||v((()=>{const n=t.$$.on_mount.map(e).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...n):o(n),t.$$.on_mount=[]})),l.forEach(v)}(c,s.target,s.anchor,s.customElement),k()}var b,_;h($)}class T{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(e,n){if(!r(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function A(e){let n;return{c(){n=u("span"),n.textContent="Checking...",d(n,"class","svelte-myl7tb")},m(t,e){a(t,n,e)},p:t,d(t){t&&l(n)}}}function N(t){let e,n,o,r,c,p,h=`${t[0][0]} 天 ${t[0][1]}小時 ${t[0][2]}分鐘 ${t[0][3]}秒`;return{c(){e=u("p"),e.textContent="距離 金姓女鬼 上一次直播已經過了",n=f(),o=u("p"),r=i(h),c=f(),p=u("p"),p.innerHTML='<a target="_blank" href="https://www.youtube.com/@Kintsuai?sub_confirmation=1" rel="noreferrer noopener" class="svelte-myl7tb">&gt;&gt; 譴責她</a>',d(e,"class","head svelte-myl7tb"),d(o,"class","time svelte-myl7tb"),d(p,"class","subscripe svelte-myl7tb")},m(t,l){a(t,e,l),a(t,n,l),a(t,o,l),s(o,r),a(t,c,l),a(t,p,l)},p(t,e){1&e&&h!==(h=`${t[0][0]} 天 ${t[0][1]}小時 ${t[0][2]}分鐘 ${t[0][3]}秒`)&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(r,h)},d(t){t&&l(e),t&&l(n),t&&l(o),t&&l(c),t&&l(p)}}}function O(e){let n,o,r,c,i;function p(t,e){return t[0]?N:A}let h=p(e),m=h(e);return{c(){n=u("main"),o=u("div"),r=u("div"),i=f(),m.c(),d(r,"class","bg svelte-myl7tb"),d(r,"style",c="opacity: "+(.6-.05*e[0][0])),d(o,"class","modal-wrapper svelte-myl7tb"),d(n,"class","svelte-myl7tb")},m(t,e){a(t,n,e),s(n,o),s(o,r),s(o,i),m.m(o,null)},p(t,[e]){1&e&&c!==(c="opacity: "+(.6-.05*t[0][0]))&&d(r,"style",c),h===(h=p(t))&&m?m.p(t,e):(m.d(1),m=h(t),m&&(m.c(),m.m(o,null)))},i:t,o:t,d(t){t&&l(n),m.d()}}}const S="2023-01-12T21:16:40+00:00";function P(t){const e=new Date-new Date(t),n=e%864e5,o=n%36e5,r=o%6e4;return[Math.floor(e/864e5),Math.floor(n/36e5),Math.floor(o/6e4),Math.floor(r/1e3)]}function D(t,e,n){let o=null;o=P(S),window.setInterval((()=>{n(0,o=P(S))}),1e3);const r=new URLSearchParams(window.location.search).get("channel")||"@Kintsuai",c={channelId:"@"===r[0]?r:"@"+r};return console.log(c),fetch("https://last-stream-time-4ko2j3acva-as.a.run.app",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(c)}).then((t=>{console.log(t)})).catch((t=>{console.log(t)})),[o]}return new class extends T{constructor(t){super(),M(this,t,D,O,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
