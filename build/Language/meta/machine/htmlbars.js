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
        name: 'HTMLBars',
        wiki: 'HTMLBars',
        type: 'markup',
        languageId: 155,
        aliases: ['hbs', 'htmlbars'],
        extensions: ['.handlebars', '.hbs'],
        aceMode: 'handlebars',
        tmScope: 'text.html.handlebars',
        group: 'HTML'
    };
    exports.default = meta;
});
//# sourceMappingURL=htmlbars.js.map