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
        name: 'Koromfé',
        nameT: 'Koromfé',
        iso3: 'kfz',
        wiki: 'Koromfe_language',
        names: 'Fula,Fulse,Koromba,Kouroumba,Kuruma,Kurumba,Kurumfe,Foula,Foulse,Kurum-Korey,Tellem'
    });
});
//# sourceMappingURL=kfz.js.map