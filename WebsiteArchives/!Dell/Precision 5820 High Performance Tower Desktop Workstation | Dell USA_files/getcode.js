
;(function(doc, win) {
    var ENV = {"UserIPs":{"HTTP-X-FORWARDED-FOR":"68.189.135.119, 10.2.128.49","HTTP-X-REAL-IP":"10.2.128.49","IP_ADDRESS":"","REMOTE_ADDR":"127.0.0.1:49868","VAST-X-DEVICE-*":"","VAST-X-DEVICE-ACCEPT-LANGUAGE":"","VAST-X-DEVICE-IP":"","VAST-X-DEVICE-REFERER":"","VAST-X-DEVICE-USER-AGENT":""},"ad_id":106996,"additionEngagements":"","additionRetargeting":"","additionTrackers":"","brand_id":521,"brand_name":"Arctic Gardens","busted":false,"campaign_name":"True Intent Website Tracker","category_id":14,"category_name":"Arts \u0026 Entertainment","cb_labels":null,"clickTag":"","cookieid":"9OxYh8lJMRrF","customMacros":{"a":"dell.com"},"d_src":"152904","debugIP":"","demdexURL":"https://crucialinteractive.demdex.net/event","disableTracking":false,"dyno_conditions":null,"dyno_tag_values":{"cookie":{},"query":{},"zone":{}},"expandOnLoad":0,"expandedShare":false,"fingerprint":"","fromUrl":"aHR0cHM6Ly93d3cuZGVsbC5jb20vZW4tdXMvd29yay9zaG9wL2Rlc2t0b3BzLWFsbC1pbi1vbmUtcGNzL3ByZWNpc2lvbi01ODIwLXRvd2VyLXdvcmtzdGF0aW9uL3NwZC9wcmVjaXNpb24tNTgyMC13b3Jrc3RhdGlvbi94Y3RvcHQ1ODIwdXM/Y29uZmlndXJhdGlvbmlkPTc1ZDNiMGQ1LWRkMjUtNGJjNC04NjNlLWIxY2M2YTdhOGQ5Zg==","ifr":false,"iframe_type":"non-iframe","interstitial":false,"io_id":5899,"io_line_id":3105,"io_line_title":"test name","isSF":"nosf","layout":"desktop","lid":"a_dell.com","lid_domain":"a_dell.com-*-dell.com","ltype":2,"nC":"","noMRAID":true,"optout":false,"ph_id":"cbox_ph_2841259","po_line_title":"","ref":"aHR0cHM6Ly93d3cuZGVsbC5jb20v","rule_id":0,"sid":"cd73ed52c49c4a988c0e3ba46fed8a44","soft_rule_ids":[],"sourceUrl":"","sw_id":0,"tabToOpenOnExpansion":"0","testClientTrackers":false,"uaCheckData":{"IEVersion":"","OS":"Ubuntu","browserName":"Firefox","browserVersion":"88.0","engineName":"Gecko","engineVersion":"20100101","isAndroid":false,"isBlackBerry":false,"isBot":false,"isChrome":false,"isEdge":false,"isFirefox":true,"isIE":false,"isIE10":false,"isIE11":false,"isIE7":false,"isIE8":false,"isIE9":false,"isIOS":false,"isMobile":false,"isOpera":false,"isSafari":false,"isWindows":false,"isWindowsDesktop":false,"isWindowsMobile":false,"mozillaVersion":"5.0","platform":"X11","userAgent":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:88.0) Gecko/20100101 Firefox/88.0"},"website_domain":"dell.com","zoneAdditionEngagements":"","zoneAdditionTrackers":"","zone_id":74232};
    var params = {"customMarkers":{"a":"dell.com"},"trackers":""}
;
    (function(){var f=doc.createElement('iframe'),c,tc=params.trackers,cm=params.customMacros,ts=parseInt(Date.now()/1000,10),pt=win.location.protocol;doc.body.appendChild(f);var devCookie=doc&&doc.cookie&&doc.cookie.indexOf('cBoxDev')!==-1;if(tc){tc=tc.replace(/\[timestamp\]/ig,ts);if(pt==='https:'){tc=tc.replace(/^http:/g,pt);}
if(devCookie){tc=tc.replace('am.contobox.com','localhost:8443');}
tc=tc.replace(/%%ZONE_ID%%/g,ENV.zone_id);tc=tc.replace(/%%AD_ID%%/g,ENV.ad_id);tc=tc.replace(/%%SOURCE_URL%%/g,ENV.sourceUrl);tc=tc.replace(/%%CLICK_TAG%%/g,ENV.clickTag);tc=tc.replace(/%%USER_COOKIE_ID%%/g,ENV.cookieid);tc=tc.replace(/%%IS_MOBILE%%/g,ENV.isMobile);if(cm){for(var k in cm){if(cm.hasOwnProperty(k)){tc=tc.replace(new RegExp("%%contobox_"+k+"%%","g"),cm[k]);}}}}
f.style.visibility='hidden';f.setAttribute('width',1);f.setAttribute('height',1);f.setAttribute('frameborder','no');f.setAttribute('scrolling','no');c=f.contentWindow.document;c.open('text/html','replace');c.write('<!DOCTYPE html><html><head></head><body>'+tc+'</body></html>');c.close();})();
})(document, window);
