var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function u(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode&&t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function i(t){return document.createTextNode(t)}function f(){return i(" ")}function d(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let $;function p(t){$=t}const g=[],h=[],m=[],b=[],y=Promise.resolve();let _=!1;function x(t){m.push(t)}const w=new Set;let v=0;function k(){if(0!==v)return;const t=$;do{try{for(;v<g.length;){const t=g[v];v++,p(t),E(t.$$)}}catch(t){throw g.length=0,v=0,t}for(p(null),g.length=0,v=0;h.length;)h.pop()();for(let t=0;t<m.length;t+=1){const e=m[t];w.has(e)||(w.add(e),e())}m.length=0}while(g.length);for(;b.length;)b.pop()();_=!1,w.clear(),p(t)}function E(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(x)}}const C=new Set;function M(t,e){-1===t.$$.dirty[0]&&(g.push(t),_||(_=!0,y.then(k)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function A(c,u,s,a,i,f,d,g=[-1]){const h=$;p(c);const m=c.$$={fragment:null,ctx:[],props:f,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u.context||(h?h.$$.context:[])),callbacks:n(),dirty:g,skip_bound:!1,root:u.target||h.$$.root};d&&d(m.root);let b=!1;if(m.ctx=s?s(c,u.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return m.ctx&&i(m.ctx[t],m.ctx[t]=o)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](o),b&&M(c,t)),e})):[],m.update(),b=!0,o(m.before_update),m.fragment=!!a&&a(m.ctx),u.target){if(u.hydrate){const t=function(t){return Array.from(t.childNodes)}(u.target);m.fragment&&m.fragment.l(t),t.forEach(l)}else m.fragment&&m.fragment.c();u.intro&&((y=c.$$.fragment)&&y.i&&(C.delete(y),y.i(_))),function(t,n,c,u){const{fragment:s,after_update:l}=t.$$;s&&s.m(n,c),u||x((()=>{const n=t.$$.on_mount.map(e).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...n):o(n),t.$$.on_mount=[]})),l.forEach(x)}(c,u.target,u.anchor,u.customElement),k()}var y,_;p(h)}class N{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(e,n){if(!r(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function j(e){let n;return{c(){n=a("span"),n.textContent="Checking...",d(n,"class","svelte-2gwoeg")},m(t,e){s(t,n,e)},p:t,d(t){t&&l(n)}}}function O(t){let e,n,o,r,c=`${t[0][0]} 天 ${t[0][1]}小時 ${t[0][2]}分鐘 ${t[0][3]}秒`;return{c(){e=a("p"),e.textContent="距離 金姓女鬼 上一次直播已經過了",n=f(),o=a("p"),r=i(c),d(e,"class","head svelte-2gwoeg"),d(o,"class","time svelte-2gwoeg")},m(t,c){s(t,e,c),s(t,n,c),s(t,o,c),u(o,r)},p(t,e){1&e&&c!==(c=`${t[0][0]} 天 ${t[0][1]}小時 ${t[0][2]}分鐘 ${t[0][3]}秒`)&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(r,c)},d(t){t&&l(e),t&&l(n),t&&l(o)}}}function T(e){let n,o,r,c;function i(t,e){return t[0]?O:j}let $=i(e),p=$(e);return{c(){n=a("main"),o=a("div"),r=a("div"),c=f(),p.c(),d(r,"class","bg svelte-2gwoeg"),d(o,"class","modal-wrapper svelte-2gwoeg"),d(n,"class","svelte-2gwoeg")},m(t,e){s(t,n,e),u(n,o),u(o,r),u(o,c),p.m(o,null)},p(t,[e]){$===($=i(t))&&p?p.p(t,e):(p.d(1),p=$(t),p&&(p.c(),p.m(o,null)))},i:t,o:t,d(t){t&&l(n),p.d()}}}function D(t,e,n){let o=null;return o=function(t){const e=new Date-new Date(t),n=e%864e5,o=n%36e5,r=o%6e4;return[Math.floor(e/864e5),Math.floor(n/36e5),Math.floor(o/6e4),Math.floor(r/1e3)]}("2023-01-12T21:16:40+00:00"),[o]}return new class extends N{constructor(t){super(),A(this,t,D,T,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
