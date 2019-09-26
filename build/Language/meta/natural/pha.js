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
        name: 'Pa-Hng',
        nameT: 'Pa-Hng',
        iso3: 'pha',
        wiki: 'Pa-Hng_language',
        names: 'Baheng,Bahengmai,Man Pa Seng,Meo Lai,Pa Hng,Pa Ngng,Pa Then,Paheng,Tóng,Pà Hung,Pà Then'
    });
});
//# sourceMappingURL=pha.js.map