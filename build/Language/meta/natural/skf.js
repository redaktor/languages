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
        name: 'Sakirabiá',
        nameT: 'Sakirabiá',
        iso3: 'skf',
        wiki: 'Mek%C3%A9ns_language',
        names: 'Mekém,Mekens,Sakirabiák,Sakirabiáp,Sakirabiát,Sakirap,Sakiriabar,Sakurabiat'
    });
});
//# sourceMappingURL=skf.js.map