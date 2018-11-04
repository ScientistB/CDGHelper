'use strict';

class CardDiffEqualPair extends CardBase {
    constructor() {
        super();
    }

    public is_match(cand_nums: number[]) {
        const len = cand_nums.length;
        for (let l = 0; l < len; l++) {
            for (let n = 0; n < len; n++) {
                // この条件を先に見るためにmのループを後にしている
                if (l === n) continue;

                for (let m = 0; m < len; m++) {
                    let d1 = cand_nums[l] - cand_nums[m];
                    if (d1 < 0) d1 = -d1;
                    let d2 = cand_nums[m] - cand_nums[n];
                    if (d2 < 0) d2 = -d2;
                    if (d1 === d2) return true;
                }
            }
        }
        return false;
    }

    public get_condition_str() {
        return '';
    }

    protected _make_name() {
        return '\\exists l,m,n~l\\neq n~|a_l-a_m|=|a_m-a_n|';
    }
}
