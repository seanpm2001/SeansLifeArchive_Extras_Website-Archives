var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

Event.onDOMReady(function(){var b;if(b=$$(".trackP")){b.each(function(c,d){c.writeAttribute("position",d+1)
})}var a;if(a=$$(".trackH",".trackP")){a.each(function(c){c.observe("mousedown",function(e){var d=null,g=null;
if(g=e.findElement("img")){g=g.src;g=g.substring(g.lastIndexOf("/")+1,g.length)
}if(divElement=e.findElement("div a")){d=divElement.readAttribute("position")}if(g==null){if(g=e.findElement("a")){g=g.readAttribute("href")
}}if(g!=null){var f=(!d)?"h@":"p@";AC.Tracking.trackClick({prop2:(!d)?"":d,prop3:f+g+" - "+AC.Tracking.pageName()},this,"o",f+g+" - "+AC.Tracking.pageName())
}})})}});

}
/*
     FILE ARCHIVED ON 20:40:35 Jun 09, 2011 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 01:14:02 Apr 20, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 58.621 (3)
  captures_list: 273.524
  RedisCDXSource: 191.211
  exclusion.robots.policy: 0.173
  esindex: 0.01
  CDXLines.iter: 18.475 (3)
  exclusion.robots: 0.185
  load_resource: 889.646
  PetaboxLoader3.resolve: 784.396
  PetaboxLoader3.datanode: 157.562 (4)
*/