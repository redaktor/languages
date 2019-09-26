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
        name: 'Aweer',
        nameT: 'Aweer',
        iso3: 'bob',
        wiki: 'Aweer_language',
        names: 'Aweera,Bon,Ogoda,Waboni,Wata-Bala ("Boni","Sanye")'
    });
});
//# sourceMappingURL=bob.js.map