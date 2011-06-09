// Remember you will need at least jQuery > 1.4 to make this work ($.proxy()
// was the first missing dependency).
Drupal.behaviors.wax_interaction = function(context) {
  var data = $(context).data('openlayers');
  if (data && data.map.behaviors['wax_interaction']) {
    data.openlayers.addControl(new wax.ol.Interaction());
  }
};
