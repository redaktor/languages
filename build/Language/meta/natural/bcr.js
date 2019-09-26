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
        name: 'Babine',
        nameT: 'Witsuwit’en',
        iso3: 'bcr',
        wiki: 'Babine-Witsuwit%27en_language',
        names: 'Babine Carrier,Lake Babine,Nadot’en,Nat’oot’en,Nedut’en,Northern Carrier'
    });
});
//# sourceMappingURL=bcr.js.map