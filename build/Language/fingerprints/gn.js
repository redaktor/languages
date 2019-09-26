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
    const gn = {
        id: 'gn',
        name: 'Guarani',
        dependencies: ['gn_gn', 'gui']
    };
    exports.default = gn;
});
//# sourceMappingURL=gn.js.map