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
        name: 'Orya',
        nameT: 'Orya',
        iso3: 'ury',
        wiki: 'Orya_language',
        names: 'Oria,Uria,Warpok,Warpu'
    });
});
//# sourceMappingURL=ury.js.map