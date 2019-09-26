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
        name: 'Zarma',
        nameT: 'Zarma',
        iso3: 'dje',
        wiki: 'Zarma_language',
        OT: 'DJR',
        names: 'Adzerma,Djerma,Dyabarma,Dyarma,Dyerma,Zabarma,Zarbarma,Zarmaci,Zerma',
        hasDetect: true
    });
});
//# sourceMappingURL=dje.js.map