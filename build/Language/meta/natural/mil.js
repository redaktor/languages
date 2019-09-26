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
        name: 'Mixtec, Peñoles',
        nameT: 'Mixtec, Peñoles',
        iso3: 'mil',
        wiki: 'Estetla_Mixtec',
        names: 'Eastern Mixtec,Mixteco de Santa María Peñoles,Tu’un savi',
        hasDetect: true
    });
});
//# sourceMappingURL=mil.js.map