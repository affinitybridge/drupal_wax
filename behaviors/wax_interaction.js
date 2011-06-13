(function($) {
Drupal.behaviors.openlayers_behavior_navigation = {
  'attach': function(context, settings) {
    var data = $(context).data('openlayers');
    if (data && data.map.behaviors['wax_interaction']) {
      // Have to add Navigation here, otherwise has a weird conflict.
      var options = {
        'zoomWheelEnabled': false
      };
      var control = new OpenLayers.Control.Navigation(options);
      data.openlayers.addControl(control);
      control.activate();

      // Actually add wax.
      data.openlayers.addControl(new wax.ol.Interaction());
    }
  }
};
})(jQuery);