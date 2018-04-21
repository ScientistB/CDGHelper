'use strict';

var CardLessThan = (function() {
    /**
     * left < right
     * @param {Number} left 左辺値
     * @param {Number} right 右辺値
     * @constructor
     */
    function CardLessThan(left, right) {
        CardBase.call(this);
        this.left = left;
        this.right = right;
    }

    inherits(CardLessThan, CardBase);
    override(CardLessThan, is_match);
    override(CardLessThan, get_condition_str);
    override(CardLessThan, _make_name);

    return CardLessThan;

    function is_match(cand_nums) {
        return cand_nums[this.left-1] < cand_nums[this.right-1];
    }

    function get_condition_str() {
        return "<";
    }

    function _make_name() {
        return "a_" + this.left + "<" + "a_" + this.right;
    }
})();
