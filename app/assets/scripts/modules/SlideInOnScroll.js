import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class SlideInOnScroll {
  constructor(els, offset) {
    this.itemsToSlideIn = els;
    this.offsetPercentage = offset;
    this.hideInitialy();
    this.createWaypoints();
  }

  hideInitialy() {
    this.itemsToSlideIn.addClass("slide-in-item");
  }

  createWaypoints() {
    var that = this;
    this.itemsToSlideIn.each(function() {
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function() {
          $(currentItem).addClass("slide-in-item--is-visible");
        },
        offset: that.offsetPercentage
      });
    });
  }
}

export default SlideInOnScroll;