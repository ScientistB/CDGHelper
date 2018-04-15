'use strict';

var CardAll = (function() {
    /**
     * @param value
     * @constructor
     */
    function CardAll(value) {
        CardBase.call(this);
        this.value = value;
    }

    inherits(CardAll, CardBase);
    override(CardAll, is_match);
    override(CardAll, _make_name);
    override(CardAll, get_condition_str);

    return CardAll;

    function is_match(cand_nums) {
        return cand_nums.indexOf(this.value) === -1;
    }

    function get_condition_str() {
        return "\\forall n";
    }

    function _make_name() {
        return "a_n\\neq" + this.value;
    }
})();
