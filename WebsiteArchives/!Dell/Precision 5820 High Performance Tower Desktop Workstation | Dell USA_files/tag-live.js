(function(networkId) {
var cacheLifetimeDays = 30;

var customDataWaitForConfig = [
  { on: function() { return Invoca.Client.parseCustomDataField("business_unit", "Last", "URLParam", ""); }, paramName: "business_unit", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("calling_page", "Last", "JavascriptDataLayer", "Dell.Metrics.sc.pagename || location.href"); }, paramName: "calling_page", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("circulation", "Last", "URLParam", ""); }, paramName: "circulation", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("country", "Last", "JavascriptDataLayer", "window.location.href.split('/')[3]"); }, paramName: "country", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("dgc", "Last", "URLParam", ""); }, paramName: "dgc", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("gclid", "Last", "URLParam", ""); }, paramName: "gclid", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("gcm_uid", "Last", "URLParam", ""); }, paramName: "gcm_uid", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("landing_page", "First", "JavascriptDataLayer", "location.href"); }, paramName: "landing_page", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("logged_in_user", "Last", "JavascriptDataLayer", "Invoca.Client.checkIfLoggedInUser()"); }, paramName: "logged_in_user", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("mcid", "Last", "URLParam", ""); }, paramName: "mcid", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("msclkid", "Last", "URLParam", ""); }, paramName: "msclkid", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("optional_parameters", "Last", "JavascriptDataLayer", "window.location.search"); }, paramName: "optional_parameters", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("page_name", "Last", "JavascriptDataLayer", "location.origin+location.pathname"); }, paramName: "page_name", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("print_media", "Last", "URLParam", ""); }, paramName: "print_media", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("sb_theme", "Last", "URLParam", ""); }, paramName: "sb_theme", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("utm_campaign", "Last", "URLParam", ""); }, paramName: "utm_campaign", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("utm_content", "Last", "URLParam", ""); }, paramName: "utm_content", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("utm_medium", "Last", "URLParam", ""); }, paramName: "utm_medium", fallbackValue: function() { return Invoca.PNAPI.currentPageSettings.poolParams.utm_medium || null; } },
  { on: function() { return Invoca.Client.parseCustomDataField("utm_source", "Last", "URLParam", ""); }, paramName: "utm_source", fallbackValue: function() { return Invoca.PNAPI.currentPageSettings.poolParams.utm_source || null; } },
  { on: function() { return Invoca.Client.parseCustomDataField("valid_dates", "Last", "URLParam", ""); }, paramName: "valid_dates", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("Vehicle", "Last", "URLParam", ""); }, paramName: "Vehicle", fallbackValue: null }
];

var defaultCampaignId = "551982";

var destinationSettings = {
  paramName: "invoca_detected_destination",
  matchLocalNumbers: false,
  matchTollFreeNumbers: true,
  allowOverflow: true
};

var numbersToReplace = {
  "+18883462289": null,
  "+18004563355": null,
  "+18773023355": null,
  "+18007578442": null,
  "+18006859224": null,
  "+18002893355": "578202",
  "+18002913355": "578202",
  "+18773298571": "578202",
  "+18002543692": "578202",
  "+18776053355": "578202",
  "+18662123355": "578202",
  "+18004332392": "578202",
  "+18009993355": "578202",
  "+18777173355": "578202",
  "+18006958133": "578202",
  "+18775813355": "578202",
  "+18889763355": "578202",
  "+18666665719": "578202",
  "+18885295792": "578202",
  "+18667579823": "578202",
  "+18775563355": "578202",
  "+18776411850": "578202",
  "+18772913355": "578202",
  "+18777023355": "551982",
  "+18667006292": "551982",
  "+18666345657": "551982",
  "+18887143355": "551982"
};

var organicSources = false;

var reRunAfter = null;

var requiredParams = null;

var resetCacheOn = [];

var waitFor = 0;

var customCodeIsSet = (function() {
  Invoca.Client.customCode = function(options) {
    options.autoRun = false;

options.integrations.adobeAnalytics = {
  username: "4DD80861515CAB990A490D45@AdobeOrg",
};

var chatButton = document.querySelector("#contact-drawer");

Invoca.Tools.allowedClientSideParams([
"gclid",
"msclkid",
"utm_medium",
"utm_source",
"dgc",
"gcm_uid"
]);

function buildVehicleSource() {
  
  var referralDomain = Invoca.Tools.parseDomainFromFullUrl(Invoca.referrer).slice(1);
  var currentDomain  = Invoca.Tools.parseDomainFromFullUrl(location.href).slice(1);
  
  // look for paid search indicated by gclid present or previously present
  if (Invoca.Tools.readUrl("gclid") || Invoca.Tools.readInvocaData("gclid")) {
    return ["paid search", "paid search", "google.com"];
    
  // look for paid search indicated by msclkid present or previously present
  } else if (Invoca.Tools.readUrl("msclkid")|| Invoca.Tools.readInvocaData("msclkid")) {
    return ["paid search", "paid search", "bing.com"];
  
  } else if (referralDomain !== currentDomain) {
    return Invoca.Tools.parseReferrer({
      "google.com": ["Natural Search", "organic", "google.com"],
      "bing.com":   ["Natural Search", "organic", "bing.com"],
      "yahoo.com":  ["Natural Search", "organic", "yahoo.com"],
      "":           ["Direct Load", "direct", "direct"]
    }, ["Referred", "Referred", referralDomain], null, "topLevelDomain");
  
  } else if (Invoca.Tools.readInvocaData("utm_medium")) {
    return [Invoca.Tools.readInvocaData("dgc"), Invoca.Tools.readInvocaData("utm_medium"), Invoca.Tools.readInvocaData("utm_source")];
    
  } else {
    return ["Undetermined", "Internal Referral", referralDomain];
  }
}

var vehicleSource = buildVehicleSource();

options.poolParams={
  dgc: Invoca.Tools.readUrl("dgc") || vehicleSource[0],
  utm_medium: Invoca.Tools.readUrl("utm_medium") || vehicleSource[1],
  utm_source: Invoca.Tools.readUrl("utm_source") || vehicleSource[2]
};

function useGCM() {
  if (Invoca.Tools.readUrl("gclid") || Invoca.Tools.readInvocaData("gclid")) {
    return null;
  } else {
    return Invoca.Tools.readUrl("gcm_uid") || 
           Invoca.Tools.readCookie("gcm_uid") ||
           Invoca.Tools.readInvocaData("gcm_uid");
  }
}

Invoca.Client.checkConditionToRunInvoca = function() {
  if (options.poolParams.dgc !== "Direct Load") {
    return true;
  } else {
    return false;
  }
};

Invoca.Client.checkIfLoggedInUser = function() {
  if (Invoca.Tools.readCookie('GAAuth')) {
    return 'Logged In';
  } else {
    return 'Not Logged In';
  }
};

options.poolParams.gcm_uid = useGCM();

options.autoRun = Invoca.Client.checkConditionToRunInvoca();

if (chatButton && options.autoRun) {
    chatButton.addEventListener("mouseover", function() {
      Invoca.PNAPI.run();
  });
}

return options;
  };

  return true;
})();

var generatedOptions = {
  autoSwap:            false,
  cookieDays:          cacheLifetimeDays,
  country:             "US",
  defaultCampaignId:   defaultCampaignId,
  destinationSettings: destinationSettings,
  disableUrlParams:    [],
  doNotSwap:           [],
  maxWaitFor:          waitFor,
  networkId:           networkId || null,
  numberToReplace:     numbersToReplace,
  organicSources:      organicSources,
  poolParams:          {},
  reRunAfter:          reRunAfter,
  requiredParams:      requiredParams,
  resetCacheOn:        resetCacheOn,
  waitForData:         customDataWaitForConfig
};

Invoca.Client.startFromWizard(generatedOptions);

})(1725);
