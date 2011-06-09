<?php
// $Id$

class wax_interaction extends openlayers_behavior {
  /**
   * Render.
   */
  function render(&$map) {
    drupal_add_js(drupal_get_path('module', 'wax') . '/behaviors/wax.ol.js');
    drupal_add_js(drupal_get_path('module', 'wax') . '/behaviors/wax_interaction.js');
    drupal_add_css(drupal_get_path('module', 'wax') . '/wax.css');
    return $this->options;
  }
}
