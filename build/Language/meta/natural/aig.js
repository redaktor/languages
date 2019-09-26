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
        name: 'Creole English, Antigua and Barbuda',
        nameT: 'Creole English, Antigua and Barbuda',
        iso3: 'aig',
        wiki: 'Leeward_Caribbean_Creole_English',
        names: 'Leeward Caribbean Creole,Leeward Caribbean Creole English,Kittitian Creole English,Sint Maarten Creole English'
    });
});
//# sourceMappingURL=aig.js.map