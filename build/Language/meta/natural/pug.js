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
        name: 'Phuie',
        nameT: 'Phuie',
        iso3: 'pug',
        wiki: 'Puguli_language',
        names: 'Buguli,Buguri,Phuien,Phuó,Pougouli,Puguli,Pwa,Pwe,Pwie,Pwien,Pwo'
    });
});
//# sourceMappingURL=pug.js.map