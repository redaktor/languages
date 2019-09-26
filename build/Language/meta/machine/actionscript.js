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
        name: 'ActionScript',
        wiki: 'ActionScript',
        type: 'programming',
        languageId: 10,
        color: '#882B0F',
        aliases: ['actionscript 3', 'actionscript3', 'as3', 'as'],
        extensions: ['.as'],
        aceMode: 'actionscript',
        tmScope: 'source.actionscript.3'
    };
    exports.default = meta;
});
//# sourceMappingURL=actionscript.js.map