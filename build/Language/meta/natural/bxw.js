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
        name: 'Bankagooma',
        nameT: 'Bankagooma',
        iso3: 'bxw',
        wiki: 'Banka_language',
        names: 'Banka,Bankagoma,Bankagoroma,Bankaje,Samogho'
    });
});
//# sourceMappingURL=bxw.js.map