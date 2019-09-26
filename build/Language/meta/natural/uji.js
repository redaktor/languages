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
        name: 'Tanjijili',
        nameT: 'Tanjijili',
        iso3: 'uji',
        wiki: 'Jijili_language',
        names: 'Jijili,Koro,Koro Funtu of Kafin Koro,Koro Funtu of Minna,Koro Funtu of Shakoyi,Ujijili'
    });
});
//# sourceMappingURL=uji.js.map