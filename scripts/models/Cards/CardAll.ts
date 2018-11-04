'use strict';

class CardAll extends CardBase {
    public value: number;

    /**
     * @param value
     * @constructor
     */
    constructor(value: number) {
        super();
        this.value = value;
    }

    public is_match(cand_nums: number[]): boolean {
        return cand_nums.indexOf(this.value) === -1;
    }

    public get_condition_str() {
        return '\\forall n';
    }

    protected _make_name(): string {
        return 'a_n\\neq' + this.value;
    }
}
