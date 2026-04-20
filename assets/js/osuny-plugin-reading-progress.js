window.osuny = window.osuny || {};

window.osuny.PluginReadingProgress = function (element) {
    this.element = element;
    this.bar = this.element.querySelector('.osuny-reading-progress__bar');
    this.pageFooter = document.querySelector('footer#document-footer');
    this.listen();
};

window.osuny.PluginReadingProgress.prototype.listen = function () {
    window.addEventListener('scroll', this.update.bind(this));
    window.addEventListener('resize', this.update.bind(this));
};

window.osuny.PluginReadingProgress.prototype.update = function () {
    var page = document.documentElement,
        scroll = window.pageYOffset || page.scrollTop,
        footerHeight = this.pageFooter ? this.pageFooter.offsetHeight : 0,
        progression = scroll / Math.max(0, (page.scrollHeight - footerHeight) - page.clientHeight);

    this.bar.style.width = progression * 100 + "%";
};

window.osuny.page.registerComponent({
    name: 'plugin-reading-progress',
    selector: '.osuny-reading-progress',
    klass: window.osuny.PluginReadingProgress
});