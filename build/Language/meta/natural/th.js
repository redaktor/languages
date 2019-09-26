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
        name: 'Thai',
        nameT: 'ไทย',
        iso1: 'th',
        iso2: 'tha',
        iso3: 'tha',
        wiki: 'Thai_language',
        OT: 'THA',
        names: 'Bangkok Thai,Central Thai,Siamese,Standard Thai,Thai Klang,Thaiklang',
        hasDetect: true
    });
});
//# sourceMappingURL=th.js.map