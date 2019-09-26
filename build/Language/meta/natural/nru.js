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
        name: 'Narua',
        nameT: 'Narua',
        iso3: 'nru',
        wiki: 'Naxi_language',
        names: 'Eastern Naxi,Meng yu,Moso,Mosso,Mosuo,Musuo yu,Na,Naru,Nazu'
    });
});
//# sourceMappingURL=nru.js.map