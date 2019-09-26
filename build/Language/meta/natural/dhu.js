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
        name: 'Dhurga',
        nameT: 'Dhurga',
        iso3: 'dhu',
        wiki: 'Dhurga_language',
        names: 'Dhu’rga,Dhuurga,Durga,Duurga,Tharumba,Thaua,Thoorga,Thurga'
    });
});
//# sourceMappingURL=dhu.js.map