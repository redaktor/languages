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
        name: 'Gaelic, Scottish',
        nameT: 'Gàidhlig',
        iso1: 'gd',
        iso2: 'gla',
        iso3: 'gla',
        wiki: 'Scottish_Gaelic',
        OT: 'GAE',
        names: 'Albannach Gàidhlig,Gàidhlig na h-Alba,Gaelic,Scots Gaelic',
        hasDetect: true
    });
});
//# sourceMappingURL=gla.js.map