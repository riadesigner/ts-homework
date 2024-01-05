(()=>{"use strict";var r=function(t,n){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])},r(t,n)};function t(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function e(){this.constructor=t}r(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}function n(r,t){var n,e,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(a){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(u=0)),u;)try{if(n=1,e&&(o=2&c[0]?e.return:c[0]?e.throw||((o=e.return)&&o.call(e),0):e.next)&&!(o=o.call(e,c[1])).done)return o;switch(e=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return u.label++,{value:c[1],done:!1};case 5:u.label++,e=c[1],c=[0];continue;case 7:c=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){u=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){u.label=c[1];break}if(6===c[0]&&u.label<o[1]){u.label=o[1],o=c;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(c);break}o[2]&&u.ops.pop(),u.trys.pop();continue}c=t.call(r,u)}catch(r){c=[6,r],e=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,a])}}}function e(r){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&r[t],e=0;if(n)return n.call(r);if(r&&"number"==typeof r.length)return{next:function(){return r&&e>=r.length&&(r=void 0),{value:r&&r[e++],done:!r}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function o(r,t){var n="function"==typeof Symbol&&r[Symbol.iterator];if(!n)return r;var e,o,i=n.call(r),u=[];try{for(;(void 0===t||t-- >0)&&!(e=i.next()).done;)u.push(e.value)}catch(r){o={error:r}}finally{try{e&&!e.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return u}function i(r,t,n){if(n||2===arguments.length)for(var e,o=0,i=t.length;o<i;o++)!e&&o in t||(e||(e=Array.prototype.slice.call(t,0,o)),e[o]=t[o]);return r.concat(e||Array.prototype.slice.call(t))}function u(r){return this instanceof u?(this.v=r,this):new u(r)}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError;var c=function(r){return r&&"number"==typeof r.length&&"function"!=typeof r};function a(r){return"function"==typeof r}function s(r){return a(null==r?void 0:r.then)}var l,f=((l=function(r){var t;t=this,Error.call(t),t.stack=(new Error).stack,this.message=r?r.length+" errors occurred during unsubscription:\n"+r.map((function(r,t){return t+1+") "+r.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=r}).prototype=Object.create(Error.prototype),l.prototype.constructor=l,l);function p(r,t){if(r){var n=r.indexOf(t);0<=n&&r.splice(n,1)}}var h=function(){function r(r){this.initialTeardown=r,this.closed=!1,this._parentage=null,this._finalizers=null}var t;return r.prototype.unsubscribe=function(){var r,t,n,u,c;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var l=e(s),p=l.next();!p.done;p=l.next())p.value.remove(this)}catch(t){r={error:t}}finally{try{p&&!p.done&&(t=l.return)&&t.call(l)}finally{if(r)throw r.error}}else s.remove(this);var h=this.initialTeardown;if(a(h))try{h()}catch(r){c=r instanceof f?r.errors:[r]}var y=this._finalizers;if(y){this._finalizers=null;try{for(var v=e(y),b=v.next();!b.done;b=v.next()){var m=b.value;try{d(m)}catch(r){c=null!=c?c:[],r instanceof f?c=i(i([],o(c)),o(r.errors)):c.push(r)}}}catch(r){n={error:r}}finally{try{b&&!b.done&&(u=v.return)&&u.call(v)}finally{if(n)throw n.error}}}if(c)throw new f(c)}},r.prototype.add=function(t){var n;if(t&&t!==this)if(this.closed)d(t);else{if(t instanceof r){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=null!==(n=this._finalizers)&&void 0!==n?n:[]).push(t)}},r.prototype._hasParent=function(r){var t=this._parentage;return t===r||Array.isArray(t)&&t.includes(r)},r.prototype._addParent=function(r){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(r),t):t?[t,r]:r},r.prototype._removeParent=function(r){var t=this._parentage;t===r?this._parentage=null:Array.isArray(t)&&p(t,r)},r.prototype.remove=function(t){var n=this._finalizers;n&&p(n,t),t instanceof r&&t._removeParent(this)},r.EMPTY=((t=new r).closed=!0,t),r}();function y(r){return r instanceof h||r&&"closed"in r&&a(r.remove)&&a(r.add)&&a(r.unsubscribe)}function d(r){a(r)?r():r.unsubscribe()}h.EMPTY;var v={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},b={setTimeout:function(r,t){for(var n=[],e=2;e<arguments.length;e++)n[e-2]=arguments[e];var u=b.delegate;return(null==u?void 0:u.setTimeout)?u.setTimeout.apply(u,i([r,t],o(n))):setTimeout.apply(void 0,i([r,t],o(n)))},clearTimeout:function(r){var t=b.delegate;return((null==t?void 0:t.clearTimeout)||clearTimeout)(r)},delegate:void 0};function m(r){b.setTimeout((function(){var t=v.onUnhandledError;if(!t)throw r;t(r)}))}function w(){}var x=_("C",void 0,void 0);function _(r,t,n){return{kind:r,value:t,error:n}}var S=null,g=function(r){function n(t){var n=r.call(this)||this;return n.isStopped=!1,t?(n.destination=t,y(t)&&t.add(n)):n.destination=j,n}return t(n,r),n.create=function(r,t,n){return new O(r,t,n)},n.prototype.next=function(r){this.isStopped?I(function(r){return _("N",r,void 0)}(r),this):this._next(r)},n.prototype.error=function(r){this.isStopped?I(_("E",void 0,r),this):(this.isStopped=!0,this._error(r))},n.prototype.complete=function(){this.isStopped?I(x,this):(this.isStopped=!0,this._complete())},n.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,r.prototype.unsubscribe.call(this),this.destination=null)},n.prototype._next=function(r){this.destination.next(r)},n.prototype._error=function(r){try{this.destination.error(r)}finally{this.unsubscribe()}},n.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},n}(h),E=Function.prototype.bind;function T(r,t){return E.call(r,t)}var P=function(){function r(r){this.partialObserver=r}return r.prototype.next=function(r){var t=this.partialObserver;if(t.next)try{t.next(r)}catch(r){A(r)}},r.prototype.error=function(r){var t=this.partialObserver;if(t.error)try{t.error(r)}catch(r){A(r)}else A(r)},r.prototype.complete=function(){var r=this.partialObserver;if(r.complete)try{r.complete()}catch(r){A(r)}},r}(),O=function(r){function n(t,n,e){var o,i,u=r.call(this)||this;return a(t)||!t?o={next:null!=t?t:void 0,error:null!=n?n:void 0,complete:null!=e?e:void 0}:u&&v.useDeprecatedNextContext?((i=Object.create(t)).unsubscribe=function(){return u.unsubscribe()},o={next:t.next&&T(t.next,i),error:t.error&&T(t.error,i),complete:t.complete&&T(t.complete,i)}):o=t,u.destination=new P(o),u}return t(n,r),n}(g);function A(r){var t;v.useDeprecatedSynchronousErrorHandling?(t=r,v.useDeprecatedSynchronousErrorHandling&&S&&(S.errorThrown=!0,S.error=t)):m(r)}function I(r,t){var n=v.onStoppedNotification;n&&b.setTimeout((function(){return n(r,t)}))}var j={closed:!0,next:w,error:function(r){throw r},complete:w},k="function"==typeof Symbol&&Symbol.observable||"@@observable";function z(r){return r}var U=function(){function r(r){r&&(this._subscribe=r)}return r.prototype.lift=function(t){var n=new r;return n.source=this,n.operator=t,n},r.prototype.subscribe=function(r,t,n){var e,o=this,i=(e=r)&&e instanceof g||function(r){return r&&a(r.next)&&a(r.error)&&a(r.complete)}(e)&&y(e)?r:new O(r,t,n);return function(r){if(v.useDeprecatedSynchronousErrorHandling){var t=!S;if(t&&(S={errorThrown:!1,error:null}),r(),t){var n=S,e=n.errorThrown,o=n.error;if(S=null,e)throw o}}else r()}((function(){var r=o,t=r.operator,n=r.source;i.add(t?t.call(i,n):n?o._subscribe(i):o._trySubscribe(i))})),i},r.prototype._trySubscribe=function(r){try{return this._subscribe(r)}catch(t){r.error(t)}},r.prototype.forEach=function(r,t){var n=this;return new(t=D(t))((function(t,e){var o=new O({next:function(t){try{r(t)}catch(r){e(r),o.unsubscribe()}},error:e,complete:t});n.subscribe(o)}))},r.prototype._subscribe=function(r){var t;return null===(t=this.source)||void 0===t?void 0:t.subscribe(r)},r.prototype[k]=function(){return this},r.prototype.pipe=function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return(0===(n=r).length?z:1===n.length?n[0]:function(r){return n.reduce((function(r,t){return t(r)}),r)})(this);var n},r.prototype.toPromise=function(r){var t=this;return new(r=D(r))((function(r,n){var e;t.subscribe((function(r){return e=r}),(function(r){return n(r)}),(function(){return r(e)}))}))},r.create=function(t){return new r(t)},r}();function D(r){var t;return null!==(t=null!=r?r:v.Promise)&&void 0!==t?t:Promise}function N(r){return a(r[k])}function C(r){return Symbol.asyncIterator&&a(null==r?void 0:r[Symbol.asyncIterator])}function H(r){return new TypeError("You provided "+(null!==r&&"object"==typeof r?"an invalid object":"'"+r+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}var Y="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator";function F(r){return a(null==r?void 0:r[Y])}function R(r){return function(r,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,o=n.apply(r,t||[]),i=[];return e={},c("next"),c("throw"),c("return"),e[Symbol.asyncIterator]=function(){return this},e;function c(r){o[r]&&(e[r]=function(t){return new Promise((function(n,e){i.push([r,t,n,e])>1||a(r,t)}))})}function a(r,t){try{(n=o[r](t)).value instanceof u?Promise.resolve(n.value.v).then(s,l):f(i[0][2],n)}catch(r){f(i[0][3],r)}var n}function s(r){a("next",r)}function l(r){a("throw",r)}function f(r,t){r(t),i.shift(),i.length&&a(i[0][0],i[0][1])}}(this,arguments,(function(){var t,e,o;return n(this,(function(n){switch(n.label){case 0:t=r.getReader(),n.label=1;case 1:n.trys.push([1,,9,10]),n.label=2;case 2:return[4,u(t.read())];case 3:return e=n.sent(),o=e.value,e.done?[4,u(void 0)]:[3,5];case 4:return[2,n.sent()];case 5:return[4,u(o)];case 6:return[4,n.sent()];case 7:return n.sent(),[3,2];case 8:return[3,10];case 9:return t.releaseLock(),[7];case 10:return[2]}}))}))}function M(r){return a(null==r?void 0:r.getReader)}function G(r){if(r instanceof U)return r;if(null!=r){if(N(r))return i=r,new U((function(r){var t=i[k]();if(a(t.subscribe))return t.subscribe(r);throw new TypeError("Provided object does not correctly implement Symbol.observable")}));if(c(r))return o=r,new U((function(r){for(var t=0;t<o.length&&!r.closed;t++)r.next(o[t]);r.complete()}));if(s(r))return n=r,new U((function(r){n.then((function(t){r.closed||(r.next(t),r.complete())}),(function(t){return r.error(t)})).then(null,m)}));if(C(r))return L(r);if(F(r))return t=r,new U((function(r){var n,o;try{for(var i=e(t),u=i.next();!u.done;u=i.next()){var c=u.value;if(r.next(c),r.closed)return}}catch(r){n={error:r}}finally{try{u&&!u.done&&(o=i.return)&&o.call(i)}finally{if(n)throw n.error}}r.complete()}));if(M(r))return L(R(r))}var t,n,o,i;throw H(r)}function L(r){return new U((function(t){(function(r,t){var o,i,u,c,a,s,l,f;return a=this,s=void 0,f=function(){var a,s;return n(this,(function(n){switch(n.label){case 0:n.trys.push([0,5,6,11]),o=function(r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=r[Symbol.asyncIterator];return n?n.call(r):(r=e(r),t={},o("next"),o("throw"),o("return"),t[Symbol.asyncIterator]=function(){return this},t);function o(n){t[n]=r[n]&&function(t){return new Promise((function(e,o){!function(r,t,n,e){Promise.resolve(e).then((function(t){r({value:t,done:n})}),t)}(e,o,(t=r[n](t)).done,t.value)}))}}}(r),n.label=1;case 1:return[4,o.next()];case 2:if((i=n.sent()).done)return[3,4];if(a=i.value,t.next(a),t.closed)return[2];n.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return s=n.sent(),u={error:s},[3,11];case 6:return n.trys.push([6,,9,10]),i&&!i.done&&(c=o.return)?[4,c.call(o)]:[3,8];case 7:n.sent(),n.label=8;case 8:return[3,10];case 9:if(u)throw u.error;return[7];case 10:return[7];case 11:return t.complete(),[2]}}))},new((l=void 0)||(l=Promise))((function(r,t){function n(r){try{o(f.next(r))}catch(r){t(r)}}function e(r){try{o(f.throw(r))}catch(r){t(r)}}function o(t){var o;t.done?r(t.value):(o=t.value,o instanceof l?o:new l((function(r){r(o)}))).then(n,e)}o((f=f.apply(a,s||[])).next())}))})(r,t).catch((function(r){return t.error(r)}))}))}function q(r,t,n,e,o){void 0===e&&(e=0),void 0===o&&(o=!1);var i=t.schedule((function(){n(),o?r.add(this.schedule(null,e)):this.unsubscribe()}),e);if(r.add(i),!o)return i}function B(r){return function(t){if(function(r){return a(null==r?void 0:r.lift)}(t))return t.lift((function(t){try{return r(t,this)}catch(r){this.error(r)}}));throw new TypeError("Unable to lift unknown Observable type")}}var J=function(r){function n(t,n,e,o,i,u){var c=r.call(this,t)||this;return c.onFinalize=i,c.shouldUnsubscribe=u,c._next=n?function(r){try{n(r)}catch(r){t.error(r)}}:r.prototype._next,c._error=o?function(r){try{o(r)}catch(r){t.error(r)}finally{this.unsubscribe()}}:r.prototype._error,c._complete=e?function(){try{e()}catch(r){t.error(r)}finally{this.unsubscribe()}}:r.prototype._complete,c}return t(n,r),n.prototype.unsubscribe=function(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var n=this.closed;r.prototype.unsubscribe.call(this),!n&&(null===(t=this.onFinalize)||void 0===t||t.call(this))}},n}(g);function K(r,t){return void 0===t&&(t=0),B((function(n,e){n.subscribe(new J(e,(function(n){return q(e,r,(function(){return e.next(n)}),t)}),(function(){return q(e,r,(function(){return e.complete()}),t)}),(function(n){return q(e,r,(function(){return e.error(n)}),t)}),undefined))}))}function Q(r,t){return void 0===t&&(t=0),B((function(n,e){e.add(r.schedule((function(){return n.subscribe(e)}),t))}))}function V(r,t){if(!r)throw new Error("Iterable cannot be null");return new U((function(n){q(n,t,(function(){var e=r[Symbol.asyncIterator]();q(n,t,(function(){e.next().then((function(r){r.done?n.complete():n.next(r.value)}))}),0,!0)}))}))}console.log("from",(function(r,t){return t?function(r,t){if(null!=r){if(N(r))return function(r,t){return G(r).pipe(Q(t),K(t))}(r,t);if(c(r))return function(r,t){return new U((function(n){var e=0;return t.schedule((function(){e===r.length?n.complete():(n.next(r[e++]),n.closed||this.schedule())}))}))}(r,t);if(s(r))return function(r,t){return G(r).pipe(Q(t),K(t))}(r,t);if(C(r))return V(r,t);if(F(r))return function(r,t){return new U((function(n){var e;return q(n,t,(function(){e=r[Y](),q(n,t,(function(){var r,t,o;try{t=(r=e.next()).value,o=r.done}catch(r){return void n.error(r)}o?n.complete():n.next(t)}),0,!0)})),function(){return a(null==e?void 0:e.return)&&e.return()}}))}(r,t);if(M(r))return function(r,t){return V(R(r),t)}(r,t)}throw H(r)}(r,t):G(r)}))})();