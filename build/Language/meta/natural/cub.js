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
        name: 'Cubeo',
        nameT: 'Cubeo',
        iso3: 'cub',
        wiki: 'Cubeo_language',
        names: 'Cubeu,Cuveo,Hehenawa,Kobeua,Kobewa,Kobéwa,Kubeo,Kubewa,Kubwa,Pamié,Pamiwa,Hipnwa'
    });
});
//# sourceMappingURL=cub.js.map