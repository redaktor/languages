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
        name: 'Creole, Afro-Seminole',
        nameT: 'Creole, Afro-Seminole',
        iso3: 'afs',
        wiki: 'Afro-Seminole_Creole',
        names: 'Afro-Seminol Criollo,Afro-Seminole,Mascogos,Black Seminole,Seminole'
    });
});
//# sourceMappingURL=afs.js.map