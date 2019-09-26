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
        name: 'Bilba',
        nameT: 'Bilba',
        iso3: 'bpz',
        wiki: 'Bilba_language',
        names: 'Belubaa,Bilbaa,Eastern Rote,Rote,Rote Timur,Roti,Rotinese'
    });
});
//# sourceMappingURL=bpz.js.map