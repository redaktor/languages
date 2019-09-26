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
        name: 'Piratapuyo',
        nameT: 'Piratapuyo',
        iso3: 'pir',
        wiki: 'Wanano_language',
        names: 'Pira-Tapuya,Uaiana,Uaicana,Uaikena,Uainana,Waikhara,Waikino,Waina,Urubu-Tapuya',
        hasDetect: true
    });
});
//# sourceMappingURL=pir.js.map