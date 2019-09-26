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
        name: 'Manipuri',
        nameT: 'মৈইতৈইলোন',
        iso2: 'mni',
        iso3: 'mni',
        wiki: 'Meitei_language',
        OT: 'MNI',
        names: 'Manipuri,Meetei,Meitei Manipuri,Meithei,Kathe,Kathi,Meiteilon,Meiteiron,Meithe,Menipuri,Mitei,Mithe,Ponna'
    });
});
//# sourceMappingURL=mni.js.map