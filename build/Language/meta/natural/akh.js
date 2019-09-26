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
        name: 'Angal Heneng',
        nameT: 'Angal Heneng',
        iso3: 'akh',
        wiki: 'Angal_language',
        names: 'Agarar,Augu,Katinja,Wage,West Angal Heneng,West Mendi'
    });
});
//# sourceMappingURL=akh.js.map