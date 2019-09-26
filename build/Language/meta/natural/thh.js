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
        name: 'Tarahumara, Northern',
        nameT: 'Tarahumara, Northern',
        iso3: 'thh',
        wiki: 'Tarahumara_language',
        names: 'Arisiachi Tarahumara,Tarahumara del Norte'
    });
});
//# sourceMappingURL=thh.js.map