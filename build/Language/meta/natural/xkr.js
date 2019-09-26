(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../meta"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const meta_1 = require("../../meta");
    exports.default = meta_1.default({
        name: 'Xakriabá',
        nameT: 'Xakriabá',
        iso3: 'xkr',
        wiki: 'Xakriab%C3%A1_language',
        names: 'Chakriaba,Chikriaba,Shacriaba'
    });
});
//# sourceMappingURL=xkr.js.map