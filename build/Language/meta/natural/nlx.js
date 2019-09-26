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
        name: 'Nahali',
        nameT: 'Nahali',
        iso3: 'nlx',
        wiki: 'Kalto_language',
        names: 'Kalto,Nahal,Nahale,Nahalia'
    });
});
//# sourceMappingURL=nlx.js.map