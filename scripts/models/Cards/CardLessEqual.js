'use strict';

var CardLessEqual = (function () {
    /**
     * left ≦ right
     * @param {number} left 左辺値
     * @param {number} right 右辺値
     * @constructor
     */
    function CardLessEqual(left, right) {
        CardBase.call(this);
        this.left = left;
        this.right = right;
    }

    inherits(CardLessEqual, CardBase);
    override(CardLessEqual, is_match);
    override(CardLessEqual, _make_name);
    override(CardLessEqual, get_condition_str);

    return CardLessEqual;

    function is_match(cand_nums) {
        return cand_nums[this.left-1] <= cand_nums[this.right-1];
    }

    function get_condition_str() {
        return "\\leq";
    }

    function _make_name() {
        return "a_" + this.left + "\\leq a_" + this.right;
    }
})();