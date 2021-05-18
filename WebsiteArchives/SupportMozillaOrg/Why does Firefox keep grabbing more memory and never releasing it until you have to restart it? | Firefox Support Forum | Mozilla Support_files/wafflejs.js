(function(){
  var FLAGS = {
    'karma': true,'ethnio-all': false,'surveygizmo': false,'search-ab': true,'optimizely': false,'new_aaq': false,'experiment_fxa_cta_topbar': true,'ux_experiment_1': false,'instant_search_v2': true
    },
    SWITCHES = {
    'wiki-rebuild-on-demand': false,'karma': true,'users-dont-limit-by-login': true,'treejack': false,'ux_experiment_1': false,'fxa-banner-test': false,'blocklist_deactivates_users': false,'disallow_all_links': false
    },
    SAMPLES = {
    'inproduct-https': true,'refresh-survey': true
    };
  window.waffle = {
    "flag_is_active": function waffle_flag(flag_name) {
      
      return !!FLAGS[flag_name];
    },
    "switch_is_active": function waffle_switch(switch_name) {
      
      return !!SWITCHES[switch_name];
    },
    "sample_is_active": function waffle_sample(sample_name) {
      
      return !!SAMPLES[sample_name];
    },
    "FLAGS": FLAGS,
    "SWITCHES": SWITCHES,
    "SAMPLES": SAMPLES
  };
})();
