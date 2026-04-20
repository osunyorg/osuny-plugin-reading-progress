window.osuny = window.osuny || {};

window.osuny.PluginReadingProgress = function (element) {
    this.element = element;
    this.bar = this.element.querySelector('.osuny-reading-progress__bar');
    this.listen();
};

window.osuny.PluginReadingProgress.prototype.listen = function () {
    window.addEventListener('scroll', this.update.bind(this));
    window.addEventListener('resize', this.update.bind(this));
};

window.osuny.PluginReadingProgress.prototype.update = function () {
    var page = document.documentElement,
        footerHeight = document.querySelector('footer#document-footer').offsetHeight,
        progression = page.scrollTop / Math.max(0, (page.scrollHeight - footerHeight) - page.clientHeight);

    this.bar.style.width = progression * 100 + "%";
};

window.osuny.page.registerComponent({
    name: 'plugin-reading-progress',
    selector: '.osuny-reading-progress',
    klass: window.osuny.PluginReadingProgress
});