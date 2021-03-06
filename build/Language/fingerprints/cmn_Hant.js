(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const cmn = {
        id: 'cmn',
        name: 'Chinese, Mandarin (Traditional)',
        trigrams: {
            '。人人': 27,
            '人人有': 19,
            '的权利': 17,
            '有权享': 13,
            '人有权': 13,
            '权利和': 10,
            '利和自': 9,
            '和自由': 9,
            '的自由': 9,
            '。任何': 9,
            '任何人': 9,
            '权享受': 9,
            '权利。': 9,
            '利。人': 8,
            '联合国': 8,
            '的任何': 8,
            '自由的': 7,
            '的社会': 6,
            '本宣言': 6,
            ' 鉴于': 6,
            '教育应': 5,
            ' 有权': 5,
            '自由 ': 5,
            '何人的': 4,
            '人不得': 4,
            '保护 ': 4,
            '权利 ': 4,
            '和基本': 4,
            '何人不': 4,
            '权享有': 4,
            '这些权': 3,
            '自由。': 3,
            '些权利': 3,
            ' 无论': 3,
            ' 并应': 3,
            '得任意': 3,
            '的承认': 3,
            '平等的': 3,
            ' 并有': 3,
            '并有权': 3,
            '不得任': 3,
            '尊严和': 3,
            '国家的': 3,
            '权利的': 3,
            ' 不受': 3,
            '受法律': 3,
            '任何歧': 3,
            '人人在': 3,
            '的国家': 3,
            '何歧视': 3,
            '自由和': 3,
            ' 包括': 3,
            '的情况': 3,
            '得加以': 3,
            '保障。': 3,
            '不得加': 3,
            '国际的': 3,
            '和国际': 3,
            '领土的': 3,
            '社会的': 3,
            '会员国': 3,
            ' 不得': 3,
            '鉴于对': 3,
            '社会保': 3,
            '宣言所': 3,
            '对人权': 3,
            '言所载': 3,
            '所载的': 3,
            '宣言》': 3,
            '教育的': 3,
            '和平的': 2,
            '应促进': 2,
            '选择的': 2,
            '进各国': 2,
            '促进各': 2,
            '有权自': 2,
            '。教育': 2,
            '的尊重': 2,
            '由的尊': 2,
            '本自由': 2,
            '基本自': 2,
            '权自由': 2,
            '权和基': 2,
            '人权和': 2,
            '产生的': 2,
            '人平等': 2,
            '的精神': 2,
            '护。人': 2,
            '保护。': 2,
            '享受保': 2,
            '的和国': 2,
            '充分实': 2,
            '分实现': 2,
            '人人对': 2,
            '时 有': 2,
            '情况下': 2,
            '他的个': 2,
            '制的情': 2,
            '在其他': 2,
            '的个性': 2,
            '生活水': 2,
            '的生活': 2,
            '所需的': 2,
            '和家属': 2,
            '人和家': 2,
            '本人和': 2,
            '他本人': 2,
            '组织和': 2,
            '障。人': 2,
            '会保障': 2,
            '合适的': 2,
            '和合适': 2,
            '正和合': 2,
            '《宣言': 2,
            '鉴于各': 2,
            '公正和': 2,
            '受公正': 2,
            '享受公': 2,
            '每一个': 2,
            '歧视。': 2,
            '的发展': 2,
            '他的权': 2,
            '受任何': 2,
            '不受任': 2,
            '法律所': 2,
            '由选择': 2,
            '自由选': 2,
            '、自由': 2,
            '家努力': 2,
            '国家努': 2,
            '过国家': 2,
            '通过国': 2,
            '限制的': 2,
            '种权利': 2,
            '社会和': 2,
            '目的在': 2,
            '的在于': 2,
            '并颁布': 2,
            '过并颁': 2,
            '受社会': 2,
            ' 作为': 2,
            '通过并': 2,
            '普遍和': 2,
            '基础 ': 2,
            '的基础': 2,
            '人民的': 2,
            '有平等': 2,
            '承认和': 2,
            '国大会': 2,
            '合国大': 2,
            '尊重 ': 2,
            '重 并': 2,
            '社会中': 2,
            '由。人': 2,
            '在任何': 2,
            '有主张': 2,
            '利包括': 2,
            '权利包': 2,
            '项权利': 2,
            '于对人': 2,
            '此项权': 2,
            ' 此项': 2,
            '仰的自': 2,
            '信仰的': 2,
            '或信仰': 2,
            '教或信': 2,
            '宗教或': 2,
            '的宗教': 2,
            '他的宗': 2,
            '意剥夺': 2,
            '任意剥': 2,
            '违背联': 2,
            '背联合': 2,
            '的财产': 2,
            '合国的': 2,
            '所有权': 2,
            '的保护': 2,
            '国的宗': 2,
            '。他们': 2,
            '国籍或': 2,
            '、国籍': 2,
            '种族、': 2,
            '的宗旨': 2,
            '击。人': 2,
            '攻击。': 2,
            '以免受': 2,
            ' 以免': 2,
            '护 以': 2,
            '宗旨和': 2,
            '享受法': 2,
            '旨和原': 2,
            '和原则': 2,
            '刑事罪': 2,
            '国家法': 2,
            '何行为': 2,
            '任何行': 2,
            '有权被': 2,
            '的一切': 2,
            '有权由': 2,
            '有效的': 2,
            '等保护': 2,
            '平等保': 2,
            '领土、': 2,
            '的政治': 2,
            '土的政': 2,
            '宣言的': 2,
            '或领土': 2,
            '家或领': 2,
            '国家或': 2,
            '或其他': 2,
            '关系的': 2,
            '良心 ': 2,
            '遵行 ': 2,
            '和遵行': 2,
            '的人民': 2,
            '言的任': 2,
            '各会员': 2,
            '促进对': 2,
            '宣言 ': 2,
            '一个人': 2,
            '权宣言': 2,
            '人权宣': 2,
            '界人权': 2,
            '世界人': 2,
            '的普遍': 2,
            '由的普': 2,
            '任何国': 2,
            '何国家': 2,
            '有必要': 2,
            ' 联合': 1,
            '鉴于为': 1,
            '于为使': 1,
            '为使人': 1,
            '使人类': 1,
            '人类不': 1,
            '类不致': 1,
            '不致迫': 1,
            '致迫不': 1,
            '迫不得': 1,
            '不得已': 1,
            '得已铤': 1,
            '已铤而': 1,
            '铤而走': 1,
            '而走险': 1,
            '走险对': 1,
            '险对暴': 1,
            '对暴政': 1,
            '暴政和': 1,
            '政和压': 1,
            '和压迫': 1,
            '压迫进': 1,
            '迫进行': 1,
            '进行反': 1,
            '行反叛': 1,
            '反叛 ': 1,
            '叛 有': 1,
            ' 有必': 1,
            '必要使': 1,
            '要使人': 1,
            '使人权': 1,
            '人权受': 1,
            '权受法': 1,
            '受法治': 1,
            '法治的': 1,
            '治的保': 1,
            '护 鉴': 1,
            '鉴于有': 1,
            '于有必': 1,
            '望 鉴': 1,
            '必要促': 1,
            '要促进': 1,
            '各国间': 1,
            '国间友': 1,
            '间友好': 1,
            '友好关': 1,
            '好关系': 1,
            '系的发': 1,
            '发展 ': 1,
            '展 鉴': 1,
            '于各联': 1,
            '各联合': 1,
            '合国国': 1,
            '国国家': 1,
            '家的人': 1,
            '人民已': 1,
            '民已在': 1,
            '已在联': 1,
            '在联合': 1,
            '合国宪': 1,
            '国宪章': 1,
            '宪章中': 1,
            '章中重': 1,
            '中重申': 1,
            '重申他': 1
        }
    };
    exports.default = cmn;
});
//# sourceMappingURL=cmn_Hant.js.map