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
        name: 'Creole, Torres Strait',
        nameT: 'Creole, Torres Strait',
        iso3: 'tcs',
        wiki: 'Torres_Strait_Creole',
        names: 'Ap-Ne-Ap,Blaik,Broken,Cape York Creole,Creole,Torres Strait Broken,Torres Strait Pidgin English,West Torres,Yumplatok'
    });
});
//# sourceMappingURL=tcs.js.map