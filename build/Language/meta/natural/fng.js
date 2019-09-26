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
        name: 'Fanagalo',
        nameT: 'Fanagalo',
        iso3: 'fng',
        wiki: 'Fanagalo',
        names: 'Basic Zulu,Fanagoloi,Isilololo,Isipiki,Lololo,Piki,Silunguboi,Chikabanga ("Fanagalo","Fanakalo","Fanekolo","Isikula")'
    });
});
//# sourceMappingURL=fng.js.map