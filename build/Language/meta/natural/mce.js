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
        name: 'Mixtec, Itundujia',
        nameT: 'Mixtec, Itundujia',
        iso3: 'mce',
        wiki: 'Atatl%C3%A1huca%E2%80%93San_Miguel_Mixtec',
        names: 'Eastern Putla Mixtec,Mixteco de Santa Cruz Itundujia,Tu’un savi'
    });
});
//# sourceMappingURL=mce.js.map