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
        name: 'Xârâgurè',
        nameT: 'Xârâgurè',
        iso3: 'axx',
        wiki: 'X%C3%A2r%C3%A2gur%C3%A8_language',
        names: 'Aragure,’Aragure,Borendy,Borindi,Haragure,Naa Xaragure,Thio,Xaragure'
    });
});
//# sourceMappingURL=axx.js.map