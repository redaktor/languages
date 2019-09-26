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
        name: 'Server log',
        wiki: 'Server_log',
        type: 'data',
        aceMode: 'ini'
    };
    exports.default = meta;
});
//# sourceMappingURL=accesslog.js.map