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
        name: 'Zou',
        nameT: 'Zou',
        iso3: 'zom',
        wiki: 'Zou_language',
        OT: 'QIN',
        names: 'Jou,Pascuense,Yo,Zo,Zohâm,Zokam,Zome,Zoukam,Yos,Zomi,Zou,Zou Chin'
    });
});
//# sourceMappingURL=zom.js.map