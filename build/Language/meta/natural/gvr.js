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
        name: 'Gurung',
        nameT: 'Gurung',
        iso3: 'gvr',
        wiki: 'Gurung_language',
        names: 'Gurung Kura,Gurung,Western,Tamu Kyi,Daduwa'
    });
});
//# sourceMappingURL=gvr.js.map