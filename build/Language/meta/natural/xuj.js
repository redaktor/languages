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
        name: 'Kurumba, Jennu',
        nameT: 'Kurumba, Jennu',
        iso3: 'xuj',
        wiki: 'Kurumba_language',
        names: 'Jen Kurumba,Jennu Kurumba,Jennu Nudi,Kattu Nayaka,Naik Kurumba,Naikan,Nonstandard Kannada,Shola Nayakan,Ten Kurumba'
    });
});
//# sourceMappingURL=xuj.js.map