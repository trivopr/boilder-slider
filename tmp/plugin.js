/**
 *  @name plugin
 *  @description description
 *  @version 1.0
 *  @options
 *    option
 *  @events
 *    event
 *  @methods
 *    init
 *    publicMethod
 *    destroy
 */

;(function($, window, undefined) {
  'use strict';

  var pluginName = 'plugin';
  var privateVar = null;

  var onClick = function(el, options) {
    // to do
  };

  var onMouseOut = function(el, options) {
    // to do
  };

  var parseData = function(data) {
    // to do
  };



  function Plugin(element, options) {
    this.element = $(element);
    this.options = $.extend({}, $.fn[pluginName].defaults, this.element.data(), options);
    this.init();

    //this.parseData()

    //privateMethod();
  }

  Plugin.prototype = {
    init: function() {
      var that = this;
      this.vars = {
        key: 'value'

      };
      // initialize
      
      // add events
      this.element.find('.btn').on('click', function() {
        onClick();
      });
    },

    open: function(params) {

      
    },

    close: function(params) {
      
    },
    
    destroy: function() {
      // remove events
      // deinitialize
      $.removeData(this.element[0], pluginName);
    }
  };

  $.fn[pluginName] = function(options, params) {
    return this.each(function() {
      var instance = $.data(this, pluginName);
      if (!instance) {
        $.data(this, pluginName, new Plugin(this, options));
      } else if (instance[options]) {
        instance[options](params);
      }
    });
  };

  $.fn[pluginName].defaults = {
    time: 1000,
    key: 'value',
    onCallback: null
  };

  $(function() {
    $('[data-' + pluginName + ']').on('customEvent', function() {
      // to do
    });

    $('[data-' + pluginName + ']')[pluginName]({
      key: 'custom'
    });
  });

}(jQuery, window));
