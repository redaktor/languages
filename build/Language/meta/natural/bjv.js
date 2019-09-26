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
        name: 'Nangnda',
        nameT: 'Nangnda',
        iso3: 'bjv',
        wiki: 'Doba_language',
        names: 'Bediondo,Bediondo Mbai,Bédjonde,Bedjondo,Mbay Bediondo,Mbay Bejondo',
        hasDetect: true
    });
});
//# sourceMappingURL=bjv.js.map