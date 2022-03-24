/*
 GMaps.js v0.4.25
 http://hpneo.github.com/gmaps/

 Copyright 2017, Gustavo Leon
 Released under the MIT License.
*/
(function(y,C){"object"===typeof exports?module.exports=C():"function"===typeof define&&define.amd?define(["jquery","googlemaps!"],C):y.GMaps=C()})(this,function(){var y=function(a,b){var c;if(a===b)return a;for(c in b)void 0!==b[c]&&(a[c]=b[c]);return a},C=function(a,b){var c=Array.prototype.slice.call(arguments,2),d=[],f=a.length,g;if(Array.prototype.map&&a.map===Array.prototype.map)d=Array.prototype.map.call(a,function(h){var l=c.slice(0);l.splice(0,0,h);return b.apply(this,l)});else for(g=0;g<
  f;g++)callback_params=c,callback_params.splice(0,0,a[g]),d.push(b.apply(this,callback_params));return d},H=function(a){var b=[],c;for(c=0;c<a.length;c++)b=b.concat(a[c]);return b},F=function(a,b){var c;for(c=0;c<a.length;c++)if(!(a[c]instanceof google.maps.LatLng))if(0<a[c].length&&"object"===typeof a[c][0])a[c]=F(a[c],b);else{var d=c;var f=a[c];var g=f[0],h=f[1];b&&(g=f[1],h=f[0]);f=new google.maps.LatLng(g,h);a[d]=f}return a},M=function(a,b){var c=a.replace(".","");return"jQuery"in this&&b?$("."+
  c,b)[0]:document.getElementsByClassName(c)[0]},A=function(a,b){a=a.replace("#","");return"jQuery"in window&&b?$("#"+a,b)[0]:document.getElementById(a)},N=function(a){var b=0,c=0;if(a.getBoundingClientRect)return a=a.getBoundingClientRect(),[a.left- -(window.scrollX?window.scrollX:window.pageXOffset),a.top- -(window.scrollY?window.scrollY:window.pageYOffset)];if(a.offsetParent){do b+=a.offsetLeft,c+=a.offsetTop;while(a=a.offsetParent)}return[b,c]},k=function(a){var b=document,c=function(d){if("object"!==
  typeof window.google||!window.google.maps)return"object"===typeof window.console&&window.console.error&&console.error("Google Maps API is required. Please register the following JavaScript library https://maps.googleapis.com/maps/api/js."),function(){};if(!this)return new c(d);d.zoom=d.zoom||15;d.mapType=d.mapType||"roadmap";var f=function(p,r){return void 0===p?r:p},g=this,h="bounds_changed center_changed click dblclick drag dragend dragstart idle maptypeid_changed projection_changed resize tilesloaded zoom_changed".split(" "),
  l=["mousemove","mouseout","mouseover"],n="el lat lng mapType width height markerClusterer enableNewStyle".split(" ");var m=d.el||d.div;var t=d.markerClusterer,u=google.maps.MapTypeId[d.mapType.toUpperCase()],B=new google.maps.LatLng(d.lat,d.lng),v=f(d.zoomControl,!0),E=d.zoomControlOpt||{style:"DEFAULT",position:"TOP_LEFT"},O=E.style||"DEFAULT";E=E.position||"TOP_LEFT";var P=f(d.panControl,!0),Q=f(d.mapTypeControl,!0),R=f(d.scaleControl,!0),S=f(d.streetViewControl,!0),I=f(I,!0);f={};u={zoom:this.zoom,
  center:B,mapTypeId:u};v={panControl:P,zoomControl:v,zoomControlOptions:{style:google.maps.ZoomControlStyle[O],position:google.maps.ControlPosition[E]},mapTypeControl:Q,scaleControl:R,streetViewControl:S,overviewMapControl:I};"string"===typeof d.el||"string"===typeof d.div?-1<m.indexOf("#")?this.el=A(m,d.context):this.el=M.apply(this,[m,d.context]):this.el=m;if("undefined"===typeof this.el||null===this.el)throw"No element defined.";window.context_menu=window.context_menu||{};window.context_menu[g.el.id]=
  {};this.controls=[];this.overlays=[];this.layers=[];this.singleLayers={};this.markers=[];this.polylines=[];this.routes=[];this.polygons=[];this.overlay_el=this.infoWindow=null;this.zoom=d.zoom;this.registered_events={};this.el.style.width=d.width||this.el.scrollWidth||this.el.offsetWidth;this.el.style.height=d.height||this.el.scrollHeight||this.el.offsetHeight;google.maps.visualRefresh=d.enableNewStyle;for(m=0;m<n.length;m++)delete d[n[m]];1!=d.disableDefaultUI&&(u=y(u,v));f=y(u,d);for(m=0;m<h.length;m++)delete f[h[m]];
  for(m=0;m<l.length;m++)delete f[l[m]];this.map=new google.maps.Map(this.el,f);t&&(this.markerClusterer=t.apply(this,[this.map]));var K=function(p,r){var q="",x=window.context_menu[g.el.id][p],w;for(w in x)x.hasOwnProperty(w)&&(q+='<li><a id="'+p+"_"+w+'" href="#">'+x[w].title+"</a></li>");if(A("gmaps_context_menu")){var z=A("gmaps_context_menu");z.innerHTML=q;q=z.getElementsByTagName("a");var T=q.length;for(w=0;w<T;w++){var J=q[w];google.maps.event.clearListeners(J,"click");google.maps.event.addDomListenerOnce(J,
  "click",function(U){U.preventDefault();x[this.id.replace(p+"_","")].action.apply(g,[r]);g.hideContextMenu()},!1)}w=N.apply(this,[g.el]);q=w[1]+r.pixel.y-15;z.style.left=w[0]+r.pixel.x-15+"px";z.style.top=q+"px"}};this.buildContextMenu=function(p,r){if("marker"===p){r.pixel={};var q=new google.maps.OverlayView;q.setMap(g.map);q.draw=function(){var w=q.getProjection(),z=r.marker.getPosition();r.pixel=w.fromLatLngToContainerPixel(z);K(p,r)}}else K(p,r);var x=A("gmaps_context_menu");setTimeout(function(){x.style.display=
  "block"},0)};this.setContextMenu=function(p){window.context_menu[g.el.id][p.control]={};var r,q=b.createElement("ul");for(r in p.options)if(p.options.hasOwnProperty(r)){var x=p.options[r];window.context_menu[g.el.id][p.control][x.name]={title:x.title,action:x.action}}q.id="gmaps_context_menu";q.style.display="none";q.style.position="absolute";q.style.minWidth="100px";q.style.background="white";q.style.listStyle="none";q.style.padding="8px";q.style.boxShadow="2px 2px 6px #ccc";A("gmaps_context_menu")||
  b.body.appendChild(q);var w=A("gmaps_context_menu");google.maps.event.addDomListener(w,"mouseout",function(z){z.relatedTarget&&this.contains(z.relatedTarget)||window.setTimeout(function(){w.style.display="none"},400)},!1)};this.hideContextMenu=function(){var p=A("gmaps_context_menu");p&&(p.style.display="none")};n=function(p,r){google.maps.event.addListener(p,r,function(q){void 0==q&&(q=this);d[r].apply(this,[q]);g.hideContextMenu()})};google.maps.event.addListener(this.map,"zoom_changed",this.hideContextMenu);
  for(t=0;t<h.length;t++)m=h[t],m in d&&n(this.map,m);for(t=0;t<l.length;t++)m=l[t],m in d&&n(this.map,m);google.maps.event.addListener(this.map,"rightclick",function(p){d.rightclick&&d.rightclick.apply(this,[p]);void 0!=window.context_menu[g.el.id].map&&g.buildContextMenu("map",p)});this.refresh=function(){google.maps.event.trigger(this.map,"resize")};this.fitZoom=function(){var p=[],r=this.markers.length,q;for(q=0;q<r;q++)"boolean"===typeof this.markers[q].visible&&this.markers[q].visible&&p.push(this.markers[q].getPosition());
  this.fitLatLngBounds(p)};this.fitLatLngBounds=function(p){var r=p.length,q=new google.maps.LatLngBounds,x;for(x=0;x<r;x++)q.extend(p[x]);this.map.fitBounds(q)};this.setCenter=function(p,r,q){this.map.panTo(new google.maps.LatLng(p,r));q&&q()};this.getElement=function(){return this.el};this.zoomIn=function(p){p=p||1;this.zoom=this.map.getZoom()+p;this.map.setZoom(this.zoom)};this.zoomOut=function(p){p=p||1;this.zoom=this.map.getZoom()-p;this.map.setZoom(this.zoom)};h=[];for(var G in this.map)"function"!=
  typeof this.map[G]||this[G]||h.push(G);for(m=0;m<h.length;m++)(function(p,r,q){p[q]=function(){return r[q].apply(r,arguments)}})(this,this.map,h[m])};return c}(this);k.prototype.createControl=function(a){var b=document.createElement("div");b.style.cursor="pointer";!0!==a.disableDefaultStyles&&(b.style.fontFamily="Roboto, Arial, sans-serif",b.style.fontSize="11px",b.style.boxShadow="rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px");for(var c in a.style)b.style[c]=a.style[c];a.id&&(b.id=a.id);a.title&&(b.title=
  a.title);a.classes&&(b.className=a.classes);a.content&&("string"===typeof a.content?b.innerHTML=a.content:a.content instanceof HTMLElement&&b.appendChild(a.content));a.position&&(b.position=google.maps.ControlPosition[a.position.toUpperCase()]);for(var d in a.events)(function(f,g){google.maps.event.addDomListener(f,g,function(){a.events[g].apply(this,[this])})})(b,d);b.index=1;return b};k.prototype.addControl=function(a){a=this.createControl(a);this.controls.push(a);this.map.controls[a.position].push(a);
  return a};k.prototype.removeControl=function(a){var b=null,c;for(c=0;c<this.controls.length;c++)this.controls[c]==a&&(b=this.controls[c].position,this.controls.splice(c,1));if(b)for(c=0;c<this.map.controls.length;c++)if(b=this.map.controls[a.position],b.getAt(c)==a){b.removeAt(c);break}return a};k.prototype.createMarker=function(a){if(void 0==a.lat&&void 0==a.lng&&void 0==a.position)throw"No latitude or longitude defined.";var b=this,c=a.details,d=a.fences,f=a.outside,g={position:new google.maps.LatLng(a.lat,
  a.lng),map:null};g=y(g,a);delete g.lat;delete g.lng;delete g.fences;delete g.outside;var h=new google.maps.Marker(g);h.fences=d;if(a.infoWindow)for(h.infoWindow=new google.maps.InfoWindow(a.infoWindow),g=["closeclick","content_changed","domready","position_changed","zindex_changed"],d=0;d<g.length;d++)(function(n,m){a.infoWindow[m]&&google.maps.event.addListener(n,m,function(t){a.infoWindow[m].apply(this,[t])})})(h.infoWindow,g[d]);g="animation_changed clickable_changed cursor_changed draggable_changed flat_changed icon_changed position_changed shadow_changed shape_changed title_changed visible_changed zindex_changed".split(" ");
  var l="dblclick drag dragend dragstart mousedown mouseout mouseover mouseup".split(" ");for(d=0;d<g.length;d++)(function(n,m){a[m]&&google.maps.event.addListener(n,m,function(){a[m].apply(this,[this])})})(h,g[d]);for(d=0;d<l.length;d++)(function(n,m,t){a[t]&&google.maps.event.addListener(m,t,function(u){u.pixel||(u.pixel=n.getProjection().fromLatLngToPoint(u.latLng));a[t].apply(this,[u])})})(this.map,h,l[d]);google.maps.event.addListener(h,"click",function(){this.details=c;a.click&&a.click.apply(this,
  [this]);h.infoWindow&&(b.hideInfoWindows(),h.infoWindow.open(b.map,h))});google.maps.event.addListener(h,"rightclick",function(n){n.marker=this;a.rightclick&&a.rightclick.apply(this,[n]);void 0!=window.context_menu[b.el.id].marker&&b.buildContextMenu("marker",n)});h.fences&&google.maps.event.addListener(h,"dragend",function(){b.checkMarkerGeofence(h,function(n,m){f(n,m)})});return h};k.prototype.addMarker=function(a){if(!a.hasOwnProperty("gm_accessors_"))if(a.hasOwnProperty("lat")&&a.hasOwnProperty("lng")||
  a.position)a=this.createMarker(a);else throw"No latitude or longitude defined.";a.setMap(this.map);this.markerClusterer&&this.markerClusterer.addMarker(a);this.markers.push(a);k.fire("marker_added",a,this);return a};k.prototype.addMarkers=function(a){for(var b=0,c;c=a[b];b++)this.addMarker(c);return this.markers};k.prototype.hideInfoWindows=function(){for(var a=0,b;b=this.markers[a];a++)b.infoWindow&&b.infoWindow.close()};k.prototype.removeMarker=function(a){for(var b=0;b<this.markers.length;b++)if(this.markers[b]===
  a){this.markers[b].setMap(null);this.markers.splice(b,1);this.markerClusterer&&this.markerClusterer.removeMarker(a);k.fire("marker_removed",a,this);break}return a};k.prototype.removeMarkers=function(a){var b=[];if("undefined"==typeof a){for(var c=0;c<this.markers.length;c++){var d=this.markers[c];d.setMap(null);k.fire("marker_removed",d,this)}this.markerClusterer&&this.markerClusterer.clearMarkers&&this.markerClusterer.clearMarkers()}else{for(c=0;c<a.length;c++)d=this.markers.indexOf(a[c]),-1<d&&
  (d=this.markers[d],d.setMap(null),this.markerClusterer&&this.markerClusterer.removeMarker(d),k.fire("marker_removed",d,this));for(c=0;c<this.markers.length;c++)d=this.markers[c],null!=d.getMap()&&b.push(d)}this.markers=b};k.prototype.drawOverlay=function(a){var b=new google.maps.OverlayView,c=!0;b.setMap(this.map);null!=a.auto_show&&(c=a.auto_show);b.onAdd=function(){var d=document.createElement("div");d.style.borderStyle="none";d.style.borderWidth="0px";d.style.position="absolute";d.style.zIndex=
  100;d.innerHTML=a.content;b.el=d;a.layer||(a.layer="overlayLayer");var f=this.getPanes(),g=["contextmenu","DOMMouseScroll","dblclick","mousedown"];f[a.layer].appendChild(d);for(var h=0;h<g.length;h++)(function(l,n){google.maps.event.addDomListener(l,n,function(m){-1!=navigator.userAgent.toLowerCase().indexOf("msie")&&document.all?(m.cancelBubble=!0,m.returnValue=!1):m.stopPropagation()})})(d,g[h]);a.click&&(f.overlayMouseTarget.appendChild(b.el),google.maps.event.addDomListener(b.el,"click",function(){a.click.apply(b,
  [b])}));google.maps.event.trigger(this,"ready")};b.draw=function(){var d=this.getProjection().fromLatLngToDivPixel(new google.maps.LatLng(a.lat,a.lng));a.horizontalOffset=a.horizontalOffset||0;a.verticalOffset=a.verticalOffset||0;var f=b.el,g=f.children[0],h=g.clientHeight;g=g.clientWidth;switch(a.verticalAlign){case "top":f.style.top=d.y-h+a.verticalOffset+"px";break;default:case "middle":f.style.top=d.y-h/2+a.verticalOffset+"px";break;case "bottom":f.style.top=d.y+a.verticalOffset+"px"}switch(a.horizontalAlign){case "left":f.style.left=
  d.x-g+a.horizontalOffset+"px";break;default:case "center":f.style.left=d.x-g/2+a.horizontalOffset+"px";break;case "right":f.style.left=d.x+a.horizontalOffset+"px"}f.style.display=c?"block":"none";c||a.show.apply(this,[f])};b.onRemove=function(){var d=b.el;a.remove?a.remove.apply(this,[d]):(b.el.parentNode.removeChild(b.el),b.el=null)};this.overlays.push(b);return b};k.prototype.removeOverlay=function(a){for(var b=0;b<this.overlays.length;b++)if(this.overlays[b]===a){this.overlays[b].setMap(null);
  this.overlays.splice(b,1);break}};k.prototype.removeOverlays=function(){for(var a=0,b;b=this.overlays[a];a++)b.setMap(null);this.overlays=[]};k.prototype.drawPolyline=function(a){var b=[],c=a.path;if(c.length)if(void 0===c[0][0])b=c;else for(var d=0,f;f=c[d];d++)b.push(new google.maps.LatLng(f[0],f[1]));b={map:this.map,path:b,strokeColor:a.strokeColor,strokeOpacity:a.strokeOpacity,strokeWeight:a.strokeWeight,geodesic:a.geodesic,clickable:!0,editable:!1,visible:!0};a.hasOwnProperty("clickable")&&(b.clickable=
  a.clickable);a.hasOwnProperty("editable")&&(b.editable=a.editable);a.hasOwnProperty("icons")&&(b.icons=a.icons);a.hasOwnProperty("zIndex")&&(b.zIndex=a.zIndex);b=new google.maps.Polyline(b);c="click dblclick mousedown mousemove mouseout mouseover mouseup rightclick".split(" ");for(d=0;d<c.length;d++)(function(g,h){a[h]&&google.maps.event.addListener(g,h,function(l){a[h].apply(this,[l])})})(b,c[d]);this.polylines.push(b);k.fire("polyline_added",b,this);return b};k.prototype.removePolyline=function(a){for(var b=
  0;b<this.polylines.length;b++)if(this.polylines[b]===a){this.polylines[b].setMap(null);this.polylines.splice(b,1);k.fire("polyline_removed",a,this);break}};k.prototype.removePolylines=function(){for(var a=0,b;b=this.polylines[a];a++)b.setMap(null);this.polylines=[]};k.prototype.drawCircle=function(a){a=y({map:this.map,center:new google.maps.LatLng(a.lat,a.lng)},a);delete a.lat;delete a.lng;for(var b=new google.maps.Circle(a),c="click dblclick mousedown mousemove mouseout mouseover mouseup rightclick".split(" "),
  d=0;d<c.length;d++)(function(f,g){a[g]&&google.maps.event.addListener(f,g,function(h){a[g].apply(this,[h])})})(b,c[d]);this.polygons.push(b);return b};k.prototype.drawRectangle=function(a){a=y({map:this.map},a);var b=new google.maps.LatLngBounds(new google.maps.LatLng(a.bounds[0][0],a.bounds[0][1]),new google.maps.LatLng(a.bounds[1][0],a.bounds[1][1]));a.bounds=b;b=new google.maps.Rectangle(a);for(var c="click dblclick mousedown mousemove mouseout mouseover mouseup rightclick".split(" "),d=0;d<c.length;d++)(function(f,
  g){a[g]&&google.maps.event.addListener(f,g,function(h){a[g].apply(this,[h])})})(b,c[d]);this.polygons.push(b);return b};k.prototype.drawPolygon=function(a){var b=!1;a.hasOwnProperty("useGeoJSON")&&(b=a.useGeoJSON);delete a.useGeoJSON;a=y({map:this.map},a);0==b&&(a.paths=[a.paths.slice(0)]);0<a.paths.length&&0<a.paths[0].length&&(a.paths=H(C(a.paths,F,b)));b=new google.maps.Polygon(a);for(var c="click dblclick mousedown mousemove mouseout mouseover mouseup rightclick".split(" "),d=0;d<c.length;d++)(function(f,
  g){a[g]&&google.maps.event.addListener(f,g,function(h){a[g].apply(this,[h])})})(b,c[d]);this.polygons.push(b);k.fire("polygon_added",b,this);return b};k.prototype.removePolygon=function(a){for(var b=0;b<this.polygons.length;b++)if(this.polygons[b]===a){this.polygons[b].setMap(null);this.polygons.splice(b,1);k.fire("polygon_removed",a,this);break}};k.prototype.removePolygons=function(){for(var a=0,b;b=this.polygons[a];a++)b.setMap(null);this.polygons=[]};k.prototype.getFromFusionTables=function(a){var b=
  a.events;delete a.events;a=new google.maps.FusionTablesLayer(a);for(var c in b)(function(d,f){google.maps.event.addListener(d,f,function(g){b[f].apply(this,[g])})})(a,c);this.layers.push(a);return a};k.prototype.loadFromFusionTables=function(a){a=this.getFromFusionTables(a);a.setMap(this.map);return a};k.prototype.getFromKML=function(a){var b=a.url,c=a.events;delete a.url;delete a.events;a=new google.maps.KmlLayer(b,a);for(var d in c)(function(f,g){google.maps.event.addListener(f,g,function(h){c[g].apply(this,
  [h])})})(a,d);this.layers.push(a);return a};k.prototype.loadFromKML=function(a){a=this.getFromKML(a);a.setMap(this.map);return a};k.prototype.addLayer=function(a,b){b=b||{};var c;switch(a){case "weather":this.singleLayers.weather=c=new google.maps.weather.WeatherLayer;break;case "clouds":this.singleLayers.clouds=c=new google.maps.weather.CloudLayer;break;case "traffic":this.singleLayers.traffic=c=new google.maps.TrafficLayer;break;case "transit":this.singleLayers.transit=c=new google.maps.TransitLayer;
  break;case "bicycling":this.singleLayers.bicycling=c=new google.maps.BicyclingLayer;break;case "panoramio":this.singleLayers.panoramio=c=new google.maps.panoramio.PanoramioLayer;c.setTag(b.filter);delete b.filter;b.click&&google.maps.event.addListener(c,"click",function(f){b.click(f);delete b.click});break;case "places":this.singleLayers.places=c=new google.maps.places.PlacesService(this.map);if(b.search||b.nearbySearch||b.radarSearch){var d={bounds:b.bounds||null,keyword:b.keyword||null,location:b.location||
  null,name:b.name||null,radius:b.radius||null,rankBy:b.rankBy||null,types:b.types||null};b.radarSearch&&c.radarSearch(d,b.radarSearch);b.search&&c.search(d,b.search);b.nearbySearch&&c.nearbySearch(d,b.nearbySearch)}b.textSearch&&c.textSearch({bounds:b.bounds||null,location:b.location||null,query:b.query||null,radius:b.radius||null},b.textSearch)}if(void 0!==c)return"function"==typeof c.setOptions&&c.setOptions(b),"function"==typeof c.setMap&&c.setMap(this.map),c};k.prototype.removeLayer=function(a){if("string"==
  typeof a&&void 0!==this.singleLayers[a])this.singleLayers[a].setMap(null),delete this.singleLayers[a];else for(var b=0;b<this.layers.length;b++)if(this.layers[b]===a){this.layers[b].setMap(null);this.layers.splice(b,1);break}};var D,L;k.prototype.getRoutes=function(a){switch(a.travelMode){case "bicycling":D=google.maps.TravelMode.BICYCLING;break;case "transit":D=google.maps.TravelMode.TRANSIT;break;case "driving":D=google.maps.TravelMode.DRIVING;break;default:D=google.maps.TravelMode.WALKING}L="imperial"===
  a.unitSystem?google.maps.UnitSystem.IMPERIAL:google.maps.UnitSystem.METRIC;var b=y({avoidHighways:!1,avoidTolls:!1,optimizeWaypoints:!1,waypoints:[]},a);b.origin=/string/.test(typeof a.origin)?a.origin:new google.maps.LatLng(a.origin[0],a.origin[1]);b.destination=/string/.test(typeof a.destination)?a.destination:new google.maps.LatLng(a.destination[0],a.destination[1]);b.travelMode=D;b.unitSystem=L;delete b.callback;delete b.error;var c=[];(new google.maps.DirectionsService).route(b,function(d,f){if(f===
  google.maps.DirectionsStatus.OK){for(var g in d.routes)d.routes.hasOwnProperty(g)&&c.push(d.routes[g]);a.callback&&a.callback(c,d,f)}else a.error&&a.error(d,f)})};k.prototype.removeRoutes=function(){this.routes.length=0};k.prototype.getElevations=function(a){a=y({locations:[],path:!1,samples:256},a);0<a.locations.length&&0<a.locations[0].length&&(a.locations=H(C([a.locations],F,!1)));var b=a.callback;delete a.callback;var c=new google.maps.ElevationService;a.path?c.getElevationAlongPath({path:a.locations,
  samples:a.samples},function(d,f){b&&"function"===typeof b&&b(d,f)}):(delete a.path,delete a.samples,c.getElevationForLocations(a,function(d,f){b&&"function"===typeof b&&b(d,f)}))};k.prototype.cleanRoute=k.prototype.removePolylines;k.prototype.renderRoute=function(a,b){var c="string"===typeof b.panel?document.getElementById(b.panel.replace("#","")):b.panel;b.panel=c;b=y({map:this.map},b);var d=new google.maps.DirectionsRenderer(b);this.getRoutes({origin:a.origin,destination:a.destination,travelMode:a.travelMode,
  waypoints:a.waypoints,unitSystem:a.unitSystem,error:a.error,avoidHighways:a.avoidHighways,avoidTolls:a.avoidTolls,optimizeWaypoints:a.optimizeWaypoints,callback:function(f,g,h){h===google.maps.DirectionsStatus.OK&&d.setDirections(g)}})};k.prototype.drawRoute=function(a){var b=this;this.getRoutes({origin:a.origin,destination:a.destination,travelMode:a.travelMode,waypoints:a.waypoints,unitSystem:a.unitSystem,error:a.error,avoidHighways:a.avoidHighways,avoidTolls:a.avoidTolls,optimizeWaypoints:a.optimizeWaypoints,
  callback:function(c){if(0<c.length){var d={path:c[c.length-1].overview_path,strokeColor:a.strokeColor,strokeOpacity:a.strokeOpacity,strokeWeight:a.strokeWeight};a.hasOwnProperty("icons")&&(d.icons=a.icons);b.drawPolyline(d);a.callback&&a.callback(c[c.length-1])}}})};k.prototype.travelRoute=function(a){if(a.origin&&a.destination)this.getRoutes({origin:a.origin,destination:a.destination,travelMode:a.travelMode,waypoints:a.waypoints,unitSystem:a.unitSystem,error:a.error,callback:function(f){0<f.length&&
  a.start&&a.start(f[f.length-1]);if(0<f.length&&a.step){var g=f[f.length-1];if(0<g.legs.length)for(var h=g.legs[0].steps,l=0,n;n=h[l];l++)n.step_number=l,a.step(n,g.legs[0].steps.length-1)}0<f.length&&a.end&&a.end(f[f.length-1])}});else if(a.route&&0<a.route.legs.length)for(var b=a.route.legs[0].steps,c=0,d;d=b[c];c++)d.step_number=c,a.step(d)};k.prototype.drawSteppedRoute=function(a){var b=this;if(a.origin&&a.destination)this.getRoutes({origin:a.origin,destination:a.destination,travelMode:a.travelMode,
  waypoints:a.waypoints,error:a.error,callback:function(h){0<h.length&&a.start&&a.start(h[h.length-1]);if(0<h.length&&a.step){var l=h[h.length-1];if(0<l.legs.length)for(var n=l.legs[0].steps,m=0,t;t=n[m];m++){t.step_number=m;var u={path:t.path,strokeColor:a.strokeColor,strokeOpacity:a.strokeOpacity,strokeWeight:a.strokeWeight};a.hasOwnProperty("icons")&&(u.icons=a.icons);b.drawPolyline(u);a.step(t,l.legs[0].steps.length-1)}}0<h.length&&a.end&&a.end(h[h.length-1])}});else if(a.route&&0<a.route.legs.length)for(var c=
  a.route.legs[0].steps,d=0,f;f=c[d];d++){f.step_number=d;var g={path:f.path,strokeColor:a.strokeColor,strokeOpacity:a.strokeOpacity,strokeWeight:a.strokeWeight};a.hasOwnProperty("icons")&&(g.icons=a.icons);b.drawPolyline(g);a.step(f)}};k.Route=function(a){this.origin=a.origin;this.destination=a.destination;this.waypoints=a.waypoints;this.map=a.map;this.route=a.route;this.step_count=0;this.steps=this.route.legs[0].steps;this.steps_length=this.steps.length;var b={path:new google.maps.MVCArray,strokeColor:a.strokeColor,
  strokeOpacity:a.strokeOpacity,strokeWeight:a.strokeWeight};a.hasOwnProperty("icons")&&(b.icons=a.icons);this.polyline=this.map.drawPolyline(b).getPath()};k.Route.prototype.getRoute=function(a){var b=this;this.map.getRoutes({origin:this.origin,destination:this.destination,travelMode:a.travelMode,waypoints:this.waypoints||[],error:a.error,callback:function(){b.route=e[0];a.callback&&a.callback.call(b)}})};k.Route.prototype.back=function(){if(0<this.step_count){this.step_count--;var a=this.route.legs[0].steps[this.step_count].path,
  b;for(b in a)a.hasOwnProperty(b)&&this.polyline.pop()}};k.Route.prototype.forward=function(){if(this.step_count<this.steps_length){var a=this.route.legs[0].steps[this.step_count].path,b;for(b in a)a.hasOwnProperty(b)&&this.polyline.push(a[b]);this.step_count++}};k.prototype.checkGeofence=function(a,b,c){return c.containsLatLng(new google.maps.LatLng(a,b))};k.prototype.checkMarkerGeofence=function(a,b){if(a.fences)for(var c=0,d;d=a.fences[c];c++){var f=a.getPosition();this.checkGeofence(f.lat(),f.lng(),
  d)||b(a,d)}};k.prototype.toImage=function(a){a=a||{};var b={};b.size=a.size||[this.el.clientWidth,this.el.clientHeight];b.lat=this.getCenter().lat();b.lng=this.getCenter().lng();if(0<this.markers.length)for(b.markers=[],a=0;a<this.markers.length;a++)b.markers.push({lat:this.markers[a].getPosition().lat(),lng:this.markers[a].getPosition().lng()});0<this.polylines.length&&(a=this.polylines[0],b.polyline={},b.polyline.path=google.maps.geometry.encoding.encodePath(a.getPath()),b.polyline.strokeColor=
  a.strokeColor,b.polyline.strokeOpacity=a.strokeOpacity,b.polyline.strokeWeight=a.strokeWeight);return k.staticMapURL(b)};k.staticMapURL=function(a){function b(B,v){if("#"===B[0]&&(B=B.replace("#","0x"),v)){v=parseFloat(v);v=Math.min(1,Math.max(v,0));if(0===v)return"0x00000000";v=(255*v).toString(16);1===v.length&&(v+=v);B=B.slice(0,8)+v}return B}var c=[],d=("file:"===location.protocol?"http:":location.protocol)+"//maps.googleapis.com/maps/api/staticmap";a.url&&(d=a.url,delete a.url);d+="?";var f=
  a.markers;delete a.markers;!f&&a.marker&&(f=[a.marker],delete a.marker);var g=a.styles;delete a.styles;var h=a.polyline;delete a.polyline;if(a.center)c.push("center="+a.center),delete a.center;else if(a.address)c.push("center="+a.address),delete a.address;else if(a.lat)c.push(["center=",a.lat,",",a.lng].join("")),delete a.lat,delete a.lng;else if(a.visible){var l=encodeURI(a.visible.join("|"));c.push("visible="+l)}(l=a.size)?(l.join&&(l=l.join("x")),delete a.size):l="630x300";c.push("size="+l);a.zoom||
  !1===a.zoom||(a.zoom=15);l=a.hasOwnProperty("sensor")?!!a.sensor:!0;delete a.sensor;c.push("sensor="+l);for(var n in a)a.hasOwnProperty(n)&&c.push(n+"="+a[n]);if(f)for(a=0;l=f[a];a++){var m=[];l.size&&"normal"!==l.size?(m.push("size:"+l.size),delete l.size):l.icon&&(m.push("icon:"+encodeURI(l.icon)),delete l.icon);l.color&&(m.push("color:"+l.color.replace("#","0x")),delete l.color);l.label&&(m.push("label:"+l.label[0].toUpperCase()),delete l.label);var t=l.address?l.address:l.lat+","+l.lng;delete l.address;
  delete l.lat;delete l.lng;for(n in l)l.hasOwnProperty(n)&&m.push(n+":"+l[n]);m.length||0===a?(m.push(t),m=m.join("|"),c.push("markers="+encodeURI(m))):(m=c.pop()+encodeURI("|"+t),c.push(m))}if(g)for(a=0;a<g.length;a++){n=[];g[a].featureType&&n.push("feature:"+g[a].featureType.toLowerCase());g[a].elementType&&n.push("element:"+g[a].elementType.toLowerCase());for(f=0;f<g[a].stylers.length;f++)for(var u in g[a].stylers[f]){l=g[a].stylers[f][u];if("hue"==u||"color"==u)l="0x"+l.substring(1);n.push(u+":"+
  l)}f=n.join("|");""!=f&&c.push("style="+f)}if(h){l=h;h=[];l.strokeWeight&&h.push("weight:"+parseInt(l.strokeWeight,10));l.strokeColor&&(g=b(l.strokeColor,l.strokeOpacity),h.push("color:"+g));l.fillColor&&(g=b(l.fillColor,l.fillOpacity),h.push("fillcolor:"+g));g=l.path;if(g.join)for(f=0;u=g[f];f++)h.push(u.join(","));else h.push("enc:"+g);h=h.join("|");c.push("path="+encodeURI(h))}c.push("scale="+(window.devicePixelRatio||1));c=c.join("&");return d+c};k.prototype.addMapType=function(a,b){if(b.hasOwnProperty("getTileUrl")&&
  "function"==typeof b.getTileUrl){b.tileSize=b.tileSize||new google.maps.Size(256,256);var c=new google.maps.ImageMapType(b);this.map.mapTypes.set(a,c)}else throw"'getTileUrl' function required.";};k.prototype.addOverlayMapType=function(a){if(a.hasOwnProperty("getTile")&&"function"==typeof a.getTile){var b=a.index;delete a.index;this.map.overlayMapTypes.insertAt(b,a)}else throw"'getTile' function required.";};k.prototype.removeOverlayMapType=function(a){this.map.overlayMapTypes.removeAt(a)};k.prototype.addStyle=
  function(a){var b=new google.maps.StyledMapType(a.styles,{name:a.styledMapName});this.map.mapTypes.set(a.mapTypeId,b)};k.prototype.setStyle=function(a){this.map.setMapTypeId(a)};k.prototype.createPanorama=function(a){a.hasOwnProperty("lat")&&a.hasOwnProperty("lng")||(a.lat=this.getCenter().lat(),a.lng=this.getCenter().lng());this.panorama=k.createPanorama(a);this.map.setStreetView(this.panorama);return this.panorama};k.createPanorama=function(a){var b=A(a.el,a.context);a.position=new google.maps.LatLng(a.lat,
  a.lng);delete a.el;delete a.context;delete a.lat;delete a.lng;for(var c="closeclick links_changed pano_changed position_changed pov_changed resize visible_changed".split(" "),d=y({visible:!0},a),f=0;f<c.length;f++)delete d[c[f]];b=new google.maps.StreetViewPanorama(b,d);for(f=0;f<c.length;f++)(function(g,h){a[h]&&google.maps.event.addListener(g,h,function(){a[h].apply(this)})})(b,c[f]);return b};k.prototype.on=function(a,b){return k.on(a,this,b)};k.prototype.off=function(a){k.off(a,this)};k.prototype.once=
  function(a,b){return k.once(a,this,b)};k.custom_events="marker_added marker_removed polyline_added polyline_removed polygon_added polygon_removed geolocated geolocation_failed".split(" ");k.on=function(a,b,c){if(-1==k.custom_events.indexOf(a))return b instanceof k&&(b=b.map),google.maps.event.addListener(b,a,c);c={handler:c,eventName:a};b.registered_events[a]=b.registered_events[a]||[];b.registered_events[a].push(c);return c};k.off=function(a,b){-1==k.custom_events.indexOf(a)?(b instanceof k&&(b=
  b.map),google.maps.event.clearListeners(b,a)):b.registered_events[a]=[]};k.once=function(a,b,c){if(-1==k.custom_events.indexOf(a))return b instanceof k&&(b=b.map),google.maps.event.addListenerOnce(b,a,c)};k.fire=function(a,b,c){if(-1==k.custom_events.indexOf(a))google.maps.event.trigger(b,a,Array.prototype.slice.apply(arguments).slice(2));else if(a in c.registered_events)for(var d=c.registered_events[a],f=0;f<d.length;f++)d[f].handler.apply(c,[b])};k.geolocate=function(a){var b=a.always||a.complete;
  navigator.geolocation?navigator.geolocation.getCurrentPosition(function(c){a.success(c);b&&b()},function(c){a.error(c);b&&b()},a.options):(a.not_supported(),b&&b())};k.geocode=function(a){this.geocoder=new google.maps.Geocoder;var b=a.callback;a.hasOwnProperty("lat")&&a.hasOwnProperty("lng")&&(a.latLng=new google.maps.LatLng(a.lat,a.lng));delete a.lat;delete a.lng;delete a.callback;this.geocoder.geocode(a,function(c,d){b(c,d)})};"object"===typeof window.google&&window.google.maps&&(google.maps.Polygon.prototype.getBounds||
  (google.maps.Polygon.prototype.getBounds=function(a){a=new google.maps.LatLngBounds;for(var b=this.getPaths(),c,d=0;d<b.getLength();d++){c=b.getAt(d);for(var f=0;f<c.getLength();f++)a.extend(c.getAt(f))}return a}),google.maps.Polygon.prototype.containsLatLng||(google.maps.Polygon.prototype.containsLatLng=function(a){var b=this.getBounds();if(null!==b&&!b.contains(a))return!1;b=!1;for(var c=this.getPaths().getLength(),d=0;d<c;d++)for(var f=this.getPaths().getAt(d),g=f.getLength(),h=g-1,l=0;l<g;l++){var n=
  f.getAt(l);h=f.getAt(h);(n.lng()<a.lng()&&h.lng()>=a.lng()||h.lng()<a.lng()&&n.lng()>=a.lng())&&n.lat()+(a.lng()-n.lng())/(h.lng()-n.lng())*(h.lat()-n.lat())<a.lat()&&(b=!b);h=l}return b}),google.maps.Circle.prototype.containsLatLng||(google.maps.Circle.prototype.containsLatLng=function(a){return google.maps.geometry?google.maps.geometry.spherical.computeDistanceBetween(this.getCenter(),a)<=this.getRadius():!0}),google.maps.Rectangle.prototype.containsLatLng=function(a){return this.getBounds().contains(a)},
  google.maps.LatLngBounds.prototype.containsLatLng=function(a){return this.contains(a)},google.maps.Marker.prototype.setFences=function(a){this.fences=a},google.maps.Marker.prototype.addFence=function(a){this.fences.push(a)},google.maps.Marker.prototype.getId=function(){return this.__gm_id});Array.prototype.indexOf||(Array.prototype.indexOf=function(a){if(null==this)throw new TypeError;var b=Object(this),c=b.length>>>0;if(0===c)return-1;var d=0;1<arguments.length&&(d=Number(arguments[1]),d!=d?d=0:
  0!=d&&Infinity!=d&&-Infinity!=d&&(d=(0<d||-1)*Math.floor(Math.abs(d))));if(d>=c)return-1;for(d=0<=d?d:Math.max(c-Math.abs(d),0);d<c;d++)if(d in b&&b[d]===a)return d;return-1});return k});