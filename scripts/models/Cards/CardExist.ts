'use strict';

class CardExist extends CardBase {
    public value: number;

    constructor(value: number) {
        super();
        this.value = value;
    }

    public is_match(cand_nums: number[]) {
        return cand_nums.indexOf(this.value) > -1;
    }

    public get_condition_str() {
        return '\\exists n';
    }

    protected _make_name() {
        return 'a_n=' + this.value;
    }
}
