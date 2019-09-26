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
        name: 'Ngochang',
        nameT: 'Ngochang',
        iso3: 'acn',
        wiki: 'Achang_language',
        names: 'Acang,Ach’ang,Achung,Ahchan,Atsang,Maingtha,Mönghsa,Ngacang,Ngac’ang,Ngachang,Ngatsang,Ngo Chang,Xiandao,Achang,Anchan,Chung,Manmaw,Tai Sa’',
        hasDetect: true
    });
});
//# sourceMappingURL=acn.js.map