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
        name: 'Laomian',
        nameT: 'Laomian',
        iso3: 'lwm',
        wiki: 'Bisu_language',
        names: 'Bisu,Guba,Lawa,Lawmeh,Lua,Mbi,Mibisu,Misu,Pin'
    });
});
//# sourceMappingURL=lwm.js.map