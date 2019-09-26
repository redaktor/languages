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
        name: 'Tehit',
        nameT: 'Tehit',
        iso3: 'kps',
        wiki: 'Tehit_language',
        names: 'Kaibus,Tahit,Tehid,Teminabuan'
    });
});
//# sourceMappingURL=kps.js.map