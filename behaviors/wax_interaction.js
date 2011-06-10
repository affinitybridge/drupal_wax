(function($) {
Drupal.behaviors.openlayers_behavior_navigation = {
  'attach': function(context, settings) {
    var data = $(context).data('openlayers');
    if (data && data.map.behaviors['wax_interaction']) {
      data.openlayers.addControl(new wax.ol.Interaction());
    }
  }
};
})(jQuery);