'use strict';

var CardNotEqual = (function() {
    /**
     * left ≠ right
     * @param {Number} left 左辺値
     * @param {Number} right 右辺値
     * @constructor
     */
    function CardNotEqual(left, right) {
        CardBase.call(this);
        this.left = left;
        this.right = right;
    }

    inherits(CardNotEqual, CardBase);
    override(CardNotEqual, is_match);
    override(CardNotEqual, get_condition_str);
    override(CardNotEqual, _make_name);

    return CardNotEqual;

    function is_match(cand_nums) {
        return cand_nums[this.left-1] !== cand_nums[this.right-1];
    }

    function get_condition_str() {
        return "\\neq";
    }

    function _make_name() {
        return "a_" + this.left + "\\neq a_" + this.right;
    }
})();
