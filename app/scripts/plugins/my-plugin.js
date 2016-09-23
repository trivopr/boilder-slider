
/**
 *  @name Plugin Format
 *  @description description
 *  @version 1.0
 *  @options
 *    option
 *  @events
 *    event
 *  @methods
 *    init
 *    destroy
 */
;(function($, window, undefined) {
  'use strict';

  var pluginName = 'slick-slider',
      win = $(window);

  console.log('setting Plugin Name', pluginName);
  console.log('test win:', win);

  // set arrows center on image

  // Private function
  function initSlider () {
    return true;
  }

  function Plugin(element, options) {
    this.element = $(element);
    this.options = $.extend({}, $.fn[pluginName].defaults, this.element.data(), options);
    this.init();
  }

  Plugin.prototype = {
    init: function() {
      var that = this,
          timeout;

      initSlider.call(that);

      win.on('resize.' + pluginName, function() {
        if (timeout) { clearTimeout(timeout); }
        timeout = setTimeout(function() {
          if (that.element.find('[data-src]').length) { return; }
          initSlider.call(that);
        }, 100);
      });

    },

    destroy: function() {
      this.element.off('init.' + pluginName);
      win.off('resize.' + pluginName);
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
    imgWrap: '.image',
    isCenterArrowsMobile: true,
    infinite: true,
    isNotHaveImg: false
  };

  $(function() {
    $('[data-' + pluginName + ']')[pluginName]();
  });

}(jQuery, window));
