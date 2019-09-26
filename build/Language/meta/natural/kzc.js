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
        name: 'Kulango, Bondoukou',
        nameT: 'Kulango, Bondoukou',
        iso3: 'kzc',
        wiki: 'Kulango_language',
        names: 'Bonduku,Kolango,Koulango,Kulange,Kulango,Nkuraeng,Nkurange'
    });
});
//# sourceMappingURL=kzc.js.map