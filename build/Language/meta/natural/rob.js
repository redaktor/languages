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
        name: 'Tae’',
        nameT: 'Tae’',
        iso3: 'rob',
        wiki: 'Tae%E2%80%99_language',
        names: 'East Toraja,Luwu’,Luwu-Rongkong,Rongkong,Rongkong-Luwu,Tae’ Tae’,Taeq,Toraja Timur,Toware ("Toala’")'
    });
});
//# sourceMappingURL=rob.js.map