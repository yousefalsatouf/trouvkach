(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{10:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var o=n(5),l=n(2),a=n(3),i=n(1),r=n(0),p=/^on(.+)$/i,u=function(t){function e(e){var n;return n=t.call(this,e)||this,Object(i.a)(Object(l.a)(n),"_leafletEvents",void 0),Object(i.a)(Object(l.a)(n),"leafletElement",void 0),n._leafletEvents=n.extractLeafletEvents(e),n}Object(a.a)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.bindLeafletEvents(this._leafletEvents)},n.componentDidUpdate=function(t){this._leafletEvents=this.bindLeafletEvents(this.extractLeafletEvents(this.props),this._leafletEvents)},n.componentWillUnmount=function(){var t=this,e=this.leafletElement;e&&Object.keys(this._leafletEvents).forEach(function(n){e.off(n,t._leafletEvents[n])})},n.extractLeafletEvents=function(t){return Object.keys(t).reduce(function(e,n){p.test(n)&&(null!=t[n]&&(e[n.replace(p,function(t,e){return e.toLowerCase()})]=t[n]));return e},{})},n.bindLeafletEvents=function(t,e){void 0===t&&(t={}),void 0===e&&(e={});var n=this.leafletElement;if(null==n||null==n.on)return{};var l=Object(o.a)({},e);return Object.keys(e).forEach(function(o){null!=t[o]&&e[o]===t[o]||(delete l[o],n.off(o,e[o]))}),Object.keys(t).forEach(function(o){null!=e[o]&&t[o]===e[o]||(l[o]=t[o],n.on(o,t[o]))}),l},n.fireLeafletEvent=function(t,e){var n=this.leafletElement;n&&n.fire(t,e)},e}(r.Component)},11:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var o=n(29),l=n(2),a=n(3),i=n(1),r=n(0),p=n.n(r),u=n(7),c=function(t){function e(e){var n;return n=t.call(this,e)||this,Object(i.a)(Object(l.a)(n),"contextValue",void 0),Object(i.a)(Object(l.a)(n),"leafletElement",void 0),n.leafletElement=n.createLeafletElement(e),n}Object(a.a)(e,t);var n=e.prototype;return n.createLeafletElement=function(t){throw new Error("createLeafletElement() must be implemented")},n.updateLeafletElement=function(t,e){},n.componentDidMount=function(){t.prototype.componentDidMount.call(this),this.layerContainer.addLayer(this.leafletElement)},n.componentDidUpdate=function(e){if(t.prototype.componentDidUpdate.call(this,e),this.props.attribution!==e.attribution){var n=this.props.leaflet.map;null!=n&&null!=n.attributionControl&&(n.attributionControl.removeAttribution(e.attribution),n.attributionControl.addAttribution(this.props.attribution))}this.updateLeafletElement(e,this.props)},n.componentWillUnmount=function(){t.prototype.componentWillUnmount.call(this),this.layerContainer.removeLayer(this.leafletElement)},n.render=function(){var t=this.props.children;return null==t?null:null==this.contextValue?p.a.createElement(r.Fragment,null,t):p.a.createElement(u.a,{value:this.contextValue},t)},Object(o.a)(e,[{key:"layerContainer",get:function(){return this.props.leaflet.layerContainer||this.props.leaflet.map}}]),e}(n(12).a)},12:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var o=n(5),l=n(3),a=function(t){function e(){return t.apply(this,arguments)||this}return Object(l.a)(e,t),e.prototype.getOptions=function(t){return null!=t.pane?t:null!=t.leaflet&&null!=t.leaflet.pane?Object(o.a)({},t,{pane:t.leaflet.pane}):t},e}(n(10).a)},67:function(t,e,n){"use strict";var o=n(3),l=n(4),a=n(7),i=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.createLeafletElement=function(t){return new l.TileLayer(t.url,this.getOptions(t))},n.updateLeafletElement=function(e,n){t.prototype.updateLeafletElement.call(this,e,n),n.url!==e.url&&this.leafletElement.setUrl(n.url)},e}(n(28).a);e.a=Object(a.b)(i)},68:function(t,e,n){"use strict";var o=n(5),l=n(3),a=n(4),i=n(0),r=n.n(i),p=n(7),u=function(t){function e(){return t.apply(this,arguments)||this}Object(l.a)(e,t);var n=e.prototype;return n.createLeafletElement=function(t){var e=new a.Marker(t.position,this.getOptions(t));return this.contextValue=Object(o.a)({},t.leaflet,{popupContainer:e}),e},n.updateLeafletElement=function(t,e){e.position!==t.position&&this.leafletElement.setLatLng(e.position),e.icon!==t.icon&&this.leafletElement.setIcon(e.icon),e.zIndexOffset!==t.zIndexOffset&&this.leafletElement.setZIndexOffset(e.zIndexOffset),e.opacity!==t.opacity&&this.leafletElement.setOpacity(e.opacity),e.draggable!==t.draggable&&(!0===e.draggable?this.leafletElement.dragging.enable():this.leafletElement.dragging.disable())},n.render=function(){var t=this.props.children;return null==t||null==this.contextValue?null:r.a.createElement(p.a,{value:this.contextValue},t)},e}(n(11).a);e.a=Object(p.b)(u)},69:function(t,e,n){"use strict";var o=n(5),l=n(2),a=n(3),i=n(1),r=n(4),p=n(7),u=function(t){function e(){for(var e,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o))||this,Object(i.a)(Object(l.a)(e),"onPopupOpen",function(t){t.popup===e.leafletElement&&e.onOpen()}),Object(i.a)(Object(l.a)(e),"onPopupClose",function(t){t.popup===e.leafletElement&&e.onClose()}),Object(i.a)(Object(l.a)(e),"onRender",function(){!1!==e.props.autoPan&&e.leafletElement.isOpen()&&(e.leafletElement._map&&e.leafletElement._map._panAnim&&(e.leafletElement._map._panAnim=void 0),e.leafletElement._adjustPan())}),e}Object(a.a)(e,t);var n=e.prototype;return n.getOptions=function(e){return Object(o.a)({},t.prototype.getOptions.call(this,e),{autoPan:!1})},n.createLeafletElement=function(t){var e=this.getOptions(t);return e.autoPan=!1!==t.autoPan,new r.Popup(e,t.leaflet.popupContainer)},n.updateLeafletElement=function(t,e){e.position!==t.position&&this.leafletElement.setLatLng(e.position)},n.componentDidMount=function(){var t=this.props.position,e=this.props.leaflet,n=e.map,o=e.popupContainer,l=this.leafletElement;null!=n&&n.on({popupopen:this.onPopupOpen,popupclose:this.onPopupClose}),o?o.bindPopup(l):(t&&l.setLatLng(t),l.openOn(n))},n.componentWillUnmount=function(){var e=this.props.leaflet.map;null!=e&&(e.off({popupopen:this.onPopupOpen,popupclose:this.onPopupClose}),e.removeLayer(this.leafletElement)),t.prototype.componentWillUnmount.call(this)},e}(n(30).a);Object(i.a)(u,"defaultProps",{pane:"popupPane"}),e.a=Object(p.b)(u)}}]);