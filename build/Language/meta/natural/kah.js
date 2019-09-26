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
        name: 'Kara (Central African Republic)',
        nameT: 'Kara (Central African Republic)',
        iso3: 'kah',
        wiki: 'Fer_language',
        names: 'Dam Fer,Fer,Fertit'
    });
});
//# sourceMappingURL=kah.js.map