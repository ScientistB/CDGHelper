'use strict';

var CardDiffEqualPair = (function() {
    function CardDiffEqualPair() {
        CardBase.call(this);
    }

    inherits(CardDiffEqualPair, CardBase);
    override(CardDiffEqualPair, is_match);
    override(CardDiffEqualPair, _make_name);
    override(CardDiffEqualPair, get_condition_str);

    return CardDiffEqualPair;

    function is_match(cand_nums) {
        var len = cand_nums.length;
        var l, m, n;
        for (l = 0; l < len; l++) {
            for (n = 0; n < len; n++) {
                if (l === n) continue;// この条件を先に見るためにmのループを後にしている
                for (m = 0; m < len; m++) {
                    var d1 = cand_nums[l] - cand_nums[m];
                    if (d1 < 0) d1 = -d1;
                    var d2 = cand_nums[m] - cand_nums[n];
                    if (d2 < 0) d2 = -d2;
                    if (d1 === d2) return true;
                }
            }
        }
        return false;
    }

    function get_condition_str() {
        return "";
    }

    function _make_name() {
        return "\\exists l,m,n~l\\neq n~|a_l-a_m|=|a_m-a_n|";
    }
})();
