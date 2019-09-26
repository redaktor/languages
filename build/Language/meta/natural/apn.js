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
        name: 'Apinayé',
        nameT: 'Apinayé',
        iso3: 'apn',
        wiki: 'Apinay%C3%A9_language',
        names: 'Afotigé,Aogé,Apinagé,Apinajé,Otogé,Oupinagee,Pinagé,Pinaré,Uhitische,Utinsche,Western Timbira',
        hasDetect: true
    });
});
//# sourceMappingURL=apn.js.map