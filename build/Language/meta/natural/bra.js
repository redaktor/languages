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
        name: 'Braj',
        nameT: 'Braj',
        iso2: 'bra',
        iso3: 'bra',
        wiki: 'Braj_Bhasha',
        OT: 'BRI',
        names: 'Antarbedi,Antarvedi,Bijbhasha,Braj,Braj Bhakha,Bri,Brij Bhasha,Briju,Bruj'
    });
});
//# sourceMappingURL=bra.js.map