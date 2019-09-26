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
        name: 'Otoro',
        nameT: 'Otoro',
        iso3: 'otr',
        wiki: 'Otoro_language',
        names: 'Dhitoro,Kawama,Kawarma,Litoro,Utoro'
    });
});
//# sourceMappingURL=otr.js.map