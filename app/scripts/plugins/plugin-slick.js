
/**
 *  @name slider
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

  var options = {
    designerListing: {
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    },
    homeBanner: {
      isCenterArrowsMobile: false,
      autoplay: true,
      autoplaySpeed: 3000
    },
    ourApproach: {
      isCenterArrowsMobile: false,
      autoplay: true,
      autoplaySpeed: 10000
    },
    services: {
      isNotInitDesktop: true,
      slidesToShow: 3,
      responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 1
        }
      }]
    },
    news: {
      autoplay: true,
      autoplaySpeed: 1500
    },
    otherFavorites: {
      slidesToShow: 4,
      responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      }]
    },
    theGoods: {
      slidesToShow: 3,
      responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      }]
    },
    followUs: {
      slidesToShow: 4,
      responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 1
        }
      }]
    }
  };

  // set arrows center on image
  var setArrowsCenter = function() {
    if (!this.options.isCenterArrowsMobile) { return; }
    var activeItem = this.element.find('.slick-active').eq(0),
        img = activeItem.find(this.options.imgWrap),
        marginTop = !isNaN(parseInt(activeItem.css('margin-top'))) ?
                      parseInt(activeItem.css('margin-top')) : 0,
        arrows = this.element.find('.slick-arrow'),
        topArrows = (img.outerHeight() - arrows.eq(0).height()) / 2  + marginTop;

    if (window.Site.isMobile()) {
      arrows.css({
        top: topArrows,
        marginTop: 0,
        '-webkit-transform': 'translate(0, 0)',
        transform: 'translate(0, 0)'
      });
    } else {
      arrows.css({
        top: '',
        marginTop: '',
        '-webkit-transform': '',
        transform: ''
      });
    }
  };

  var initSlider = function() {
    var that = this;
    that.element.off('init.' + pluginName)
      .on('init.' + pluginName, function() {
        setTimeout(function() {
          setArrowsCenter.call(that);
        }, 700);
      });

    if (window.Site.isMobile()) {
      if (!that.element.hasClass('slick-initialized')) {
        that.element.slick(that.options);
      } else {
        setArrowsCenter.call(that);
      }
    } else {

      if (that.options.isNotInitDesktop && that.element.hasClass('slick-initialized')) {
        that.element.slick('unslick');
      } else if (!that.options.isNotInitDesktop && !that.element.hasClass('slick-initialized')) {
        that.element.slick(that.options);
      }
    }
  };

  var setDataOptions = function() {
    this.options = $.extend({}, this.options, this.element.data(pluginName));
    if (typeof this.options.typeSlide !== 'undefined') {
      this.options = $.extend({}, this.options, options[this.options.typeSlide]);
    }
  };

  function Plugin(element, options) {
    this.element = $(element);
    this.options = $.extend({}, $.fn[pluginName].defaults, this.element.data(), options);
    this.init();
  }

  Plugin.prototype = {
    init: function() {
      var that = this,
          timeout;

      setDataOptions.call(that);

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
