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
        name: 'Yurutí',
        nameT: 'Yurutí',
        iso3: 'yui',
        wiki: 'Wajiara_language',
        names: 'Juruti,Juruti-Tapuia,Luruty-Tapuya,Wajiaraye,Yuriti-Tapuia,Juriti,Juriti-Tapuia,Patsoka,Totsoca,Wadzana,Waijiara masa-wadyana,Waikana,Waimasá,Wayhara,Yuriti,Yuruti,Yuruti-Tapuya,Yurutiye'
    });
});
//# sourceMappingURL=yui.js.map