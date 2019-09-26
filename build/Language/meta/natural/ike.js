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
        name: 'Inuktitut, Eastern Canadian',
        nameT: 'Inuktitut, Eastern Canadian',
        iso3: 'ike',
        wiki: 'Inuktitut',
        names: 'Canadian Inuit,Inuit,Inuit of Quebec ("Eastern Arctic Eskimo","Eastern Canadian Eskimo")',
        hasDetect: true
    });
});
//# sourceMappingURL=ike.js.map