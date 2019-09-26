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
        name: 'Oriya, Adivasi',
        nameT: 'Oriya, Adivasi',
        iso3: 'ort',
        wiki: 'Odia_language',
        names: 'Adivasi,Adiwasi Oriya,Desiya,Kotia,Kotia Oriya,Kotiya,Tribal Oriya'
    });
});
//# sourceMappingURL=ort.js.map