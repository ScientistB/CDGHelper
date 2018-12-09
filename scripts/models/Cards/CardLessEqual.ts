'use strict';

class CardLessEqual extends CardBase {
    /**
     * left ≦ right
     * @param left 左辺値
     * @param right 右辺値
     * @constructor
     */
    constructor(public left, public right) {
        super();
    }

    public is_match(cand_nums) {
        return cand_nums[this.left - 1] <= cand_nums[this.right - 1];
    }

    public get_condition_str() {
        return '\\leq';
    }

    protected _make_name() {
        return 'a_' + this.left + '\\leq a_' + this.right;
    }
}
