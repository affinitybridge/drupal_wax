<?php
// $Id$

class wax_interaction extends openlayers_behavior {
  /**
   * Override of options_init().
   */
  function options_init() {
    $options = parent::options_init();
    return $options;
  }

  /**
   * Override of options_form().
   */
  function options_form() {
    $form = parent::options_form();
    return $form;
  }
  
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
