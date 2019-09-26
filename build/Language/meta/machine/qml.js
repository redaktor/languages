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
        name: 'Qt Meta Language (QML)',
        wiki: 'QML',
        type: 'programming',
        languageId: 305,
        color: '#44a51c',
        extensions: ['.qml', '.qbs'],
        aceMode: 'text',
        tmScope: 'source.qml'
    };
    exports.default = meta;
});
//# sourceMappingURL=qml.js.map