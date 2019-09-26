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
        name: 'Nêlêmwa-Nixumwak',
        nameT: 'Nêlêmwa-Nixumwak',
        iso3: 'nee',
        wiki: 'Kumak_language',
        names: 'Fwa-Goumak,Koumac,Kumak'
    });
});
//# sourceMappingURL=nee.js.map