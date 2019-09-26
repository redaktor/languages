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
        name: 'Yora',
        nameT: 'Yora',
        iso3: 'mts',
        wiki: 'Yaminawa_language',
        names: 'Manu Park Panoan,Nahua,Parquenahua,Yoranahua,Yura'
    });
});
//# sourceMappingURL=mts.js.map