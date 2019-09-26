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
        name: 'Dubli',
        nameT: 'Dubli',
        iso3: 'dub',
        wiki: 'Dubli_language',
        names: 'Dubala,Dubla,Rathod,Talavia'
    });
});
//# sourceMappingURL=dub.js.map