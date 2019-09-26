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
        name: 'Kurumba, Kannada',
        nameT: 'Kurumba, Kannada',
        iso3: 'kfi',
        wiki: 'Kurumba_language',
        names: 'Canarese,Korambar,Kuramwari,Kuremban,Kuruba,Kuruban,Kurubar,Kurubas Kuruma,Kuruman,Kurumans,Kurumar,Kurumba,Kurumban,Kurumbar,Kurumbas,Kurumvari,Palu Kurumba,Southern Nonstandard Kannada'
    });
});
//# sourceMappingURL=kfi.js.map