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
        name: 'Sisaala, Western',
        nameT: 'Sisaala, Western',
        iso3: 'ssl',
        wiki: 'Sisaala_language',
        names: 'Busillu Sisala,Hissala,Issala,Sisai'
    });
});
//# sourceMappingURL=ssl.js.map