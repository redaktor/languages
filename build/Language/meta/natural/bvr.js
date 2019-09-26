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
        name: 'Burarra',
        nameT: 'Burarra',
        iso3: 'bvr',
        wiki: 'Burarra_language',
        names: 'Anbarra,Barera,Bawera,Burada,Bureda,Burera,Gidjingaliya Gujingalia,Gujalabiya,Gun-Guragone,Jikai,Tchikai'
    });
});
//# sourceMappingURL=bvr.js.map