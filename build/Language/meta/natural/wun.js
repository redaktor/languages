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
        name: 'Bungu',
        nameT: 'Bungu',
        iso3: 'wun',
        wiki: 'Bungu_language',
        names: 'Echiungu,Iciwungu,Kibungu,Ungu,Wungu'
    });
});
//# sourceMappingURL=wun.js.map