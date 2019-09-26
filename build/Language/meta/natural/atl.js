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
        name: 'Agta, Mt. Iraya',
        nameT: 'Agta, Mt. Iraya',
        iso3: 'atl',
        wiki: 'Mount_Iraya_Agta_language',
        names: 'Inagta of Mt. Iraya,Itbeg Rugnot,Lake Buhi,Rugnot of Lake Buhi East'
    });
});
//# sourceMappingURL=atl.js.map