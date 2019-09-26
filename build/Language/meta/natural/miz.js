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
        name: 'Mixtec, Coatzospan',
        nameT: 'Mixtec, Coatzospan',
        iso3: 'miz',
        wiki: 'Coatzospan_Mixtec',
        names: 'Mixteco de Coatzóspan,Mixteco de San Juan Coatzospan,Teotitlán Mixtec,Tu’un davi'
    });
});
//# sourceMappingURL=miz.js.map