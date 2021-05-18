"use strict";String.prototype.getHostUrl=function(){var e=document.createElement("a");return e.href=this,e.protocol+"//"+e.host},String.prototype.isValidUrl=function(){return/^(http[s]?:\/\/www\.|http[s]?:\/\/|\/\/|\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(this)};var mediaAssetBaseUrl=function(){function r(e){var t=e.toLowerCase();return-1<t.indexOf("afcs.dellcdn.com/csbtest")?{assetUrl:t.getHostUrl()+"/csbtest"+a}:-1<t.indexOf("afcs.dellcdn.com")?{assetUrl:t.getHostUrl()+"/csb"+a}:{assetUrl:e.getHostUrl()}}var i="media.min.js",a="/mediaux/bundles/v2",t={assetUrl:"https://afcs.dellcdn.com/csb"+a};try{return function(){if(window.scriptOrder&&0<window.scriptOrder.length){var e=window.scriptOrder.filter(function(e){return e&&e.url&&-1<e.url.toLowerCase().indexOf(i)});if(0<e.length&&e[0].url&&e[0].url.trim())return r(e[0].url)}return null}()||function(){var e=$('script[src*="'+i+'" i]'),t=e&&e.get(0);if(t){var a=$(t).attr("src");return a.isValidUrl()?r(a):{assetUrl:"".concat(window.location.protocol,"//").concat(window.location.host)}}return null}()||t}catch(e){return t}}();Dell.BrightcoveInit=Dell.BrightcoveInit||{},function(t){(function(){t(".dell-media-bc-video-container").on("click",function(){var e=t(this).find("brightcove-video").data("object");e.Id=t(this).find("brightcove-video").attr("id"),((Dell||{}).BrightcoveMFE||{}).brightcoveLoader&&Dell.BrightcoveMFE.brightcoveLoader.init(e)})}).call(Dell.BrightcoveInit)}(jQuery),Dell.scene7=Dell.scene7||{},function(p,f){(function(){var o,e=mediaAssetBaseUrl.assetUrl,n={s7Sdk:"https://scene7-cdn.dell.com/s7sdk/3.10/js/s7sdk/utils/Utils.js",Static:e+"/videoplayers/cfs7siwtviewerwrapperall.min.js",Axiometric:e+"/videoplayers/cfs7spinnerall.min.js",Gallery:e+"/videoplayers/cfs7gvwtviewerwrapperall.min.js",Flyout:e+"/videoplayers/cfs7flyoutviewerwrapperall.min.js"},l={s7Sdk:"undefined"!=typeof s7sdk,Static:!1,Axiometric:!1,Gallery:!1,Flyout:!1},m="https://scene7-cdn.dell.com/is/image/",v="https://scene7-cdn.dell.com/is/content/",w="https://scene7-cdn.dell.com/skins/",h="Scene7SharedAssets/Universal_HTML5_SpinSet_light",t=p("dell-media-scene7-video"),S=[],k={},s=p(f);function d(e){l[e]?s.trigger("s7."+e+"Ready"):n[e]&&(p.ajax({url:n[e],dataType:"script",async:!0,cache:!0}).done(function(){l[e]=!0,s.trigger("s7."+e+"Ready")}).fail(function(e,t){}),delete n[e])}function c(e){for(var t,a,r,i=0,n=e.length;i<n;i++)t=p(e[i].target),e[i].isIntersecting&&(r=(a=t).attr("player-type"),S.push(a),a.attr("data-state","loading"),d("s7Sdk"),d(r),o.unobserve(e[i].target))}function u(e){for(var t,a,r,i,n,o,l,s,d,c,u,p,f,y=0,g=S.length;y<g;y++)if(S[y].attr("player-type")===e)switch(t=S.splice(y,1)[0],y--,g--,e){case"Gallery":u=t,0,p=JSON.parse(u.attr("player"))||{},f=u.attr("id"),k[f]=new com.scene7.gvwtViewer.S7GVWTWrapper({serverUrl:m,asset:p.assetUrl,container:f,transparent:!0,locale:u.attr("locale")||"en",carouselType:Dell.Metrics&&Dell.Metrics.sc&&"csb_snp_productdetail"===Dell.Metrics.sc.module?"thumbnails":p.carouseltype,trackingHandlers:{hotSpotActivate:function(){},galleryItemChange:function(){}}}),k[f].draw();break;case"Axiometric":l=t,s=void 0,s=JSON.parse(l.attr("player"))||{},d=l.attr("id"),c=s.maxLoadRadiusPreloadframes&&s.maxLoadRadiusResolution?s.maxLoadRadiusPreloadframes+","+("string"==typeof s.maxLoadRadiusResolution?"Low"!==s.maxLoadRadiusResolution.towLowerCase():Boolean(s.maxLoadRadiusResolution)):"6,false",k[d]=new com.scene7.axiometricSpinViewer.spinViewerWrapper({containerId:d,instructionalMessage:s.instructionalMessage,initialHorizontalAxis:parseInt(s.initialHorizontalAxi,10),autospin:s.autospinEnabled,params:{serverUrl:m,mapUrl:v,config:h,contenturl:w,asset:s.assetUrl,maxloadradius:c}});break;case"Static":i=t,0,n=JSON.parse(i.attr("player"))||{},o=i.attr("id"),k[o]=new com.scene7.siwtViewer.S7SIWTViewerWrapper({serverUrl:m,asset:n.assetUrl,container:o,transparent:!0,locale:i.attr("locale")||"en",trackingHandlers:{hotSpotActivate:function(){}},minImageBreakpoint:768}),k[o].draw();break;case"Flyout":r=(a=t).attr("id"),k[r]=new s7viewers.FlyoutViewer({params:{serverUrl:m,asset:playerObj.assetUrl,config:"Scene7SharedAssets/Universal_HTML5_Zoom_Inline",contenturl:w,imagereload:"1,breakpoint,200;400;800;1600"},containerId:a.attr("id"),transparent:!0,locale:a.attr("locale")||"en"}).init()}}function a(e){if(e&&0<e.length){o=new IntersectionObserver(c,{rootMargin:"-300px 100%",threshold:.01});for(var t=0,a=e.length;t<a;t++)o.observe(e.get(t));r=f.createElement("link").relList,i='<link as="script" rel="'+(r&&r.supports&&r.supports("preload")?"preload":"prefetch")+'" href="{0}" />',p("body").append(i.replace("{0}",n.s7Sdk)),s.on("s7.GalleryReady s7.s7SdkReady",function(){l.Gallery&&l.s7Sdk&&u("Gallery")}).on("s7.AxiometricReady s7.s7SdkReady",function(){l.Axiometric&&l.s7Sdk&&u("Axiometric")}).on("s7.StaticReady s7.s7SdkReady",function(){l.Static&&l.s7Sdk&&u("Static")})}var r,i}a(t),this.init=a}).call(Dell.scene7)}(jQuery,(window,document)),Dell.youku=Dell.youku||{},function(l,t){(function(){var n=!1,o={};function e(){l('.dell-media-youku-container[data-state="playing"]').attr("data-state","paused").each(function(){var e=l(this).find(".dell-media-youku-video").attr("data-guid");o[e]&&(o[e].select&&"function"==typeof o[e].select.isPC&&o[e].select.isPC()?l('.dell-media-youku-video[data-guid="'+e+'"]').find("iframe").get(0).contentWindow.postMessage("pause","*"):o[e].pauseVideo())})}l(t).on("click.youku",".dell-media-youku-container",function(e){var t,a,r=l(this),i=r.find(".dell-media-youku-video");e.preventDefault(),o[i.attr("id")]||(r.attr("data-state","loading"),a="function"==typeof(t=function(){var e,t,a,r;t="False"!==(e=i).attr("data-rel"),a=e.attr("data-guid"),r=e.attr("id"),o[a]=new YKU.Player(a,{styleid:"0",client_id:"699bf17c39c022b1",vid:r,show_related:t,autoplay:!0,newPlayer:!0,events:{onPlayerReady:function(){var e;e=r,l('.dell-media-youku-video[data-guid="'+a+'"]').parent().attr("data-state","playing"),Dell.Transactional.VideoPlayer.Omniture.trackVideoStart(e)},onPlayEnd:function(){Dell.Transactional.VideoPlayer.Omniture.trackVideoComplete(r)}}})}),n||"undefined"!=typeof YKP?a&&t():l.getScript("//player.youku.com/jsapi",function(){n=!0,a&&t()}))}).on("pauseAllVideos",e)}).call(Dell.youku)}(jQuery,(window,document)),Dell.youTube=Dell.youTube||{},function(s,a){(function(){var r=!1,i="",n={};function e(){s('.dell-media-youtube-container[data-state="playing"]').attr("data-state","paused").each(function(){var e=s(this).find("iframe").attr("id");n[e]&&n[e].pauseVideo()})}function o(e){var t=e.target.getVideoData().video_id;s(a).trigger("pauseAllVideos"),s("#"+t).parent().attr("data-state","playing"),e.target.playVideo()}function l(e){var t=e.target.getVideoData().video_id;e.data===YT.PlayerState.PLAYING&&i!==t&&(s(a).trigger("pauseAllVideos"),s("#"+(i=t)).parent().attr("data-state","playing")),e.data===YT.PlayerState.PAUSED&&(s("#"+t).parent().attr("data-state","paused"),i===t&&(i=""))}s(a).one("click",".dell-media-youtube-container",function(t){var e,a;t.preventDefault(),s(t.currentTarget).attr("data-state","loading"),a="function"==typeof(e=function(){var e;e=s(t.currentTarget).find(".dell-media-youtube-video"),i=e.attr("id"),n[i]=new YT.Player(i,{videoId:i,playerVars:{autoplay:1,modestbranding:1,loop:e.attr("data-loop"),start:e.attr("data-start")},events:{onReady:o,onStateChange:l}})}),r||"undefined"!=typeof YT?a&&YT.ready(e):s.getScript("https://www.youtube.com/iframe_api",function(){r=!0,a&&YT.ready(e)})}).on("pauseAllVideos",e)}).call(Dell.youTube)}(jQuery,(window,document));