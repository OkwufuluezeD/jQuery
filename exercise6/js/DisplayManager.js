'use strict'

class DisplayManager {

  //DisplayManager constructor
  constructor($blog) {
    this._$blog = $blog;
    this._init();
  }

  _init() {
    this._addEventListenerToBlog();
  }

  _addEventListenerToBlog() {
    this._$blog.on('click', (eventObject) => {
      eventObject.preventDefault();
      const $target = $(eventObject.target);
      $target.is('a') ? this._toggleExcerpt($target) : null;
    });
  }

  _toggleExcerpt(target) {
    const $targetExcerpt = target.parents('h3').siblings('p.excerpt');
    this._slideUpExcerpts(target);
    $targetExcerpt.slideDown(1000);
  }

  _slideUpExcerpts(target) {
    target
      .closest('li')
      .siblings('li')
      .children('p.excerpt')
      .slideUp(1000);
  }
}

$(() => {
  const $blog = $('#blog');
  new DisplayManager($blog);
});

