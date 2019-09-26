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
    const ms = {
        id: 'ms',
        name: 'Malay',
        dependencies: ['ms_ms', 'ms_Latn']
    };
    exports.default = ms;
});
//# sourceMappingURL=ms.js.map