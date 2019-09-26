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
        name: 'Neo-Aramaic, Western',
        nameT: 'Neo-Aramaic, Western',
        iso3: 'amw',
        wiki: 'Western_Neo-Aramaic',
        names: 'Loghtha Siryanoytha,Maalula,Neo-Western Aramaic,Siryon'
    });
});
//# sourceMappingURL=amw.js.map