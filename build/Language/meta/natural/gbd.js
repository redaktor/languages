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
        name: 'Karadjeri',
        nameT: 'Karadjeri',
        iso3: 'gbd',
        wiki: 'Garadjari_language',
        names: 'Garadjari,Garadjiri,Garadyari,Gard’are,Guradjara,Karajarri,Karrajarri'
    });
});
//# sourceMappingURL=gbd.js.map