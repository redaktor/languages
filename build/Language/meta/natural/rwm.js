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
        name: 'Amba (Uganda)',
        nameT: 'Amba (Uganda)',
        iso3: 'rwm',
        wiki: 'Amba_language_(Bantu)',
        names: 'Hambo,Humu,KiHumu,Kuamba,Kwamba,Ruwenzori Kibira,Rwamba,Bulebule,Hamba,Kihumu,Ku-Amba,Lubulebule,Lwamba'
    });
});
//# sourceMappingURL=rwm.js.map