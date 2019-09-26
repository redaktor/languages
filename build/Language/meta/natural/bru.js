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
        name: 'Bru, Eastern',
        nameT: 'Bru, Eastern',
        iso3: 'bru',
        wiki: 'Bru_language',
        names: 'Bru Tri,Brou,Bru,Quang Tri Bru,Van Kieu',
        hasDetect: true
    });
});
//# sourceMappingURL=bru.js.map