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
        name: 'Sanskrit',
        nameT: 'संस्कृतम्',
        iso1: 'sa',
        iso2: 'san',
        iso3: 'san',
        wiki: 'Sanskrit',
        OT: 'SAN',
        names: 'Deva Bhasha,Deva vani,Sanskrit bhasha',
        hasDetect: true
    });
});
//# sourceMappingURL=sa.js.map