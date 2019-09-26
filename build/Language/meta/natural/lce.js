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
        name: 'Sekak',
        nameT: 'Sekak',
        iso3: 'lce',
        wiki: 'Loncong_language',
        names: 'Lonchong,Loncong,Lontjong,Orang Laut,Orang Sawang,Sawang,Seka,Sekah'
    });
});
//# sourceMappingURL=lce.js.map