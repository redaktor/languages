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
        name: 'Makhuwa-Marrevone',
        nameT: 'Makhuwa-Marrevone',
        iso3: 'xmc',
        wiki: 'Makhuwa_language',
        names: 'Coastal Makhuwa,Emaka,Maca,Maka,Makua-Marevone,Marevone,Marrevone,South Maca'
    });
});
//# sourceMappingURL=xmc.js.map