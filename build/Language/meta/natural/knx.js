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
        name: 'Kendayan',
        nameT: 'Kendayan',
        iso3: 'knx',
        wiki: 'Kendayan_language',
        names: 'Baicit,Damea,Kanayatn,Kendayan Dayak,Kendayan-Ambawang,Salako,Kenayatn,Kendayan,Salakau,Selakau,Selako,Silakau'
    });
});
//# sourceMappingURL=knx.js.map