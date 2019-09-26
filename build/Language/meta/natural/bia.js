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
        name: 'Badimaya',
        nameT: 'Badimaya',
        iso3: 'bia',
        wiki: 'Badimaya_language',
        names: 'Parti-Maya,Widimaya'
    });
});
//# sourceMappingURL=bia.js.map