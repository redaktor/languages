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
        name: 'Jamaican Creole',
        nameT: 'Jamaican Creole',
        iso3: 'jam',
        wiki: 'Jamaican_Patois',
        names: 'Limonese Creole,Southwestern Caribbean Creole English,Bongo Talk,Jamiekan,Limon Creole English,Patois,Patwa,Quashie Talk,Western Caribbean Creole,Guari Guari',
        hasDetect: true
    });
});
//# sourceMappingURL=jam.js.map