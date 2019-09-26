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
        name: 'Mixtec, San Miguel Piedras',
        nameT: 'Mixtec, San Miguel Piedras',
        iso3: 'xtp',
        wiki: 'San_Miguel_Piedras_Mixtec',
        names: 'Mixteco de San Miguel Piedras,Tu’un savi'
    });
});
//# sourceMappingURL=xtp.js.map