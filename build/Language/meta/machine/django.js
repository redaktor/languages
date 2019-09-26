(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const meta = {
        name: 'Django',
        wiki: 'Django_(web_framework)',
        type: 'markup',
        languageId: 147,
        aliases: ['django', 'html+django/jinja', 'html+jinja', 'htmldjango', 'njk', 'nunjucks'],
        extensions: ['.jinja', '.mustache', '.njk'],
        aceMode: 'django',
        tmScope: 'text.html.django',
        codemirrorMode: 'django',
        codemirrorMimeType: 'text/x-django',
        group: 'HTML'
    };
    exports.default = meta;
});
//# sourceMappingURL=django.js.map