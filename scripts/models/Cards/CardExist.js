'use strict';

var CardExist = (function() {
    function CardExist(value) {
        CardBase.call(this);
        this.value = value;
    }

    inherits(CardExist, CardBase);
    override(CardExist, is_match);
    override(CardExist, _make_name);
    override(CardExist, get_condition_str);

    return CardExist;

    function is_match(cand_nums) {
        return cand_nums.indexOf(this.value) > -1;
    }

    function get_condition_str() {
        return "\\exists n";
    }

    function _make_name() {
        return "a_n=" + this.value;
    }
})();
