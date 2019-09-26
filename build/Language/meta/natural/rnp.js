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
        name: 'Rongpo',
        nameT: 'Rongpo',
        iso3: 'rnp',
        wiki: 'Rongpo_language',
        names: 'Rang Po Bhasa,Rangkas,Rangpa ("Manchhi Bhassa","Marchha","Marchha Pahari","Tolchha")'
    });
});
//# sourceMappingURL=rnp.js.map