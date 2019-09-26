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
        name: 'Tai Dam',
        nameT: 'ꪺꪕꪒꪾ',
        iso3: 'blt',
        wiki: 'Tai_Dam_language',
        names: 'Black Tai,Hei Dai,Jinping Dai,Tailam,Tailon,Tai Noir,Thai Den,Tai Do,Táy-Dam,Thái Den',
        hasDetect: true
    });
});
//# sourceMappingURL=blt.js.map