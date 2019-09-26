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
        name: 'Pahari-Potwari',
        nameT: 'Pahari-Potwari',
        iso3: 'phr',
        wiki: 'Pothwari',
        names: 'Mirpur,Mirpur Panjabi,Mirpur Punjabi,Mirpuri,Chibhali,Dhundi-Kairali,Pothohari,Potohari,Potwari'
    });
});
//# sourceMappingURL=phr.js.map