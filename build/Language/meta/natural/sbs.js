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
        name: 'Subiya',
        nameT: 'Subiya',
        iso3: 'sbs',
        wiki: 'Kuhane_language',
        names: 'Chikuhane,Echisubia,Ikuhane,Kuahane,Kwahane,Sesubea,Subia,Subiya,Supia,Chikuahane,Chikwahane,Ciikuhane,Mbalangwe'
    });
});
//# sourceMappingURL=sbs.js.map