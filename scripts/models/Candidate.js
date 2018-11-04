'use strict';
/**
 * 候補数列のクラス
 */
var Candidate = /** @class */ (function () {
    /**
     * @param {Number} a1 候補の数字1つ目
     * @param {Number} a2 2つ目
     * @param {Number} a3 3つめ
     * @constructor
     */
    function Candidate(a1, a2, a3) {
        this.a1 = a1;
        this.a = [a1, a2, a3];
        this.unmatched_cards = [];
    }
    /**
     * その候補が生き残っているかどうかを返す
     */
    Candidate.prototype.alive = function () {
        return this.unmatched_cards.length === 0;
    };
    /**
     * 候補の数字を配列で返す
     * @return {Array}
     */
    Candidate.prototype.get_nums = function () {
        return this.a;
    };
    /**
     * 指定されたカードの条件が候補の数字に合っているかを返す
     * @param {Object} card 条件の書かれたCardオブジェクト
     */
    Candidate.prototype.is_match = function (card) {
        var result = card.is_match(this.a);
        if (result === false) {
            this.unmatched_cards.push(card);
        }
        return result;
    };
    return Candidate;
}());
//# sourceMappingURL=Candidate.js.map