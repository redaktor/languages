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
        name: 'Mixtec, Apasco-Apoala',
        nameT: 'Mixtec, Apasco-Apoala',
        iso3: 'mip',
        wiki: 'Apoala_Mixtec',
        names: 'Apasco Mixtec,Apoala Mixtec,Mixteco de Santiago Apoala,Northern Nochixtlán Mixtec'
    });
});
//# sourceMappingURL=mip.js.map