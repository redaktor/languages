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
    const no = {
        id: 'no',
        name: 'Norwegian',
        dependencies: ['no_no', 'nb', 'nn']
    };
    exports.default = no;
});
//# sourceMappingURL=no.js.map