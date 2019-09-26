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
        name: 'Bishnupriya',
        nameT: 'বিষ্ণুপ্রিয়া মণিপুরী',
        iso3: 'bpy',
        wiki: 'Bishnupriya_Manipuri_language',
        names: 'Bishnupria,Bishnupriya Manipuri,Bishnupuriya,Bisna Puriya,Bishnupria Manipuri'
    });
});
//# sourceMappingURL=bpy.js.map