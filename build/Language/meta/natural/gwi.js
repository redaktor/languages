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
        name: 'Gwichʼin',
        nameT: 'Gwich´in',
        iso2: 'gwi',
        iso3: 'gwi',
        wiki: 'Gwich%E2%80%99in_language',
        names: 'Dinju Zhuh K’yuu,Kutchin,Loucheux,Tukudh'
    });
});
//# sourceMappingURL=gwi.js.map