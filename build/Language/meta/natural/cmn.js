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
        name: 'Chinese, Mandarin',
        nameT: '國語',
        iso3: 'cmn',
        wiki: 'Standard_Chinese',
        names: 'Beifang Fangyan,Guanhua,Guoyu,Hanyu,Huayu,Mandarin,Northern Chinese,Putonghua,Standard Chinese,Zhongguohua,Zhongwen,Tayok,Hoton,Hui,Hui-Zu,Hytad,Khoton,Qotong,Xui,Kuoyu',
        hasDetect: true
    });
});
//# sourceMappingURL=cmn.js.map