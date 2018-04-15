'use strict';


/**
 * 候補数列のクラス
 */
var Candidate = (function () {
    /**
     * @param {Number} a1 候補の数字1つ目
     * @param {Number} a2 2つ目
     * @param {Number} a3 3つめ
     * @constructor
     */
    function Candidate(a1, a2, a3) {
        this.a = [a1, a2, a3];
        this.unmatched_cards = [];
    }

    Candidate.prototype = {
        is_match: is_match,
        alive: alive,
        get_nums: get_nums
    };

    return Candidate;

    /**
     * 指定されたカードの条件が候補の数字に合っているかを返す
     * @param {Object} card 条件の書かれたCardオブジェクト
     */
    function is_match(card) {
        var is_match = card.is_match(this.a);
        if (is_match === false) {
            this.unmatched_cards.push(card);
        }
        return is_match;
    }

    /**
     * その候補が生き残っているかどうかを返す
     * @return {boolean}
     */
    function alive() {
        return this.unmatched_cards.length === 0;
    }

    /**
     * 候補の数字を配列で返す
     * @return {Array}
     */
    function get_nums() {
        return this.a;
    }
})();