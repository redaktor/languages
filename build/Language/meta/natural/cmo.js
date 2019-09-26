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
        name: 'Mnong, Central',
        nameT: 'Mnong, Central',
        iso3: 'cmo',
        wiki: 'Mnong_language',
        names: 'Budong,Bunong,Phanong,Phnong,Phong,Budang,Pnong'
    });
});
//# sourceMappingURL=cmo.js.map