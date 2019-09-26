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
        name: 'Raji',
        nameT: 'Raji',
        iso3: 'rji',
        wiki: 'Raji_language',
        names: 'Ban Raji,Janggali,Phaan Bhaasaa,Phaan Boli,Rajibar,Rawati,Rjya'
    });
});
//# sourceMappingURL=rji.js.map