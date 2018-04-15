'use strict';

var CardDiff = (function() {
    /**
     * 差がvalueのペアが存在する
     * @param value
     * @constructor
     */
    function CardDiff(value) {
        CardBase.call(this);
        this.value = value;
    }

    inherits(CardDiff, CardBase);
    override(CardDiff, is_match);
    override(CardDiff, _make_name);
    override(CardDiff, get_condition_str);

    return CardDiff;

    function is_match(cand_nums) {
        const len = cand_nums.length;
        var i, j;
        for (i = 0; i < len; i++) {
            for (j = 0; j < len; j++) {
                if (i === j) continue;
                var diff = cand_nums[i] - cand_nums[j];
                if (diff === this.value || diff === -this.value) {
                    return true;
                }
            }
        }
        return false;
    }

    function get_condition_str() {
        return "\\exists m,n~m\\neq n";
    }

    function _make_name() {
        return "|a_m-a_n|=" + this.value;
    }
})();
