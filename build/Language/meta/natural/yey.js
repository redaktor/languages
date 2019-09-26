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
        name: 'Yeyi',
        nameT: 'Yeyi',
        iso3: 'yey',
        wiki: 'Yeyi_language',
        names: 'Ciyei,Seyeyi,Shiyeyi,Siyei,Yeei,Yei ("Koba","Kuba","Sekoba")'
    });
});
//# sourceMappingURL=yey.js.map