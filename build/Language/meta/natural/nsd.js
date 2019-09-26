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
        name: 'Nisu, Southern',
        nameT: 'Nisu, Southern',
        iso3: 'nsd',
        wiki: 'Nisu_language',
        names: 'Nisupho,Yuan-Mo Yi'
    });
});
//# sourceMappingURL=nsd.js.map