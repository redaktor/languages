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
        name: 'Yele',
        nameT: 'Yele',
        iso3: 'yle',
        wiki: 'Yele_language',
        names: 'Rossel,Yela,Yelejong,Yeletnye,Yélî Dnye,Yelidnye'
    });
});
//# sourceMappingURL=yle.js.map