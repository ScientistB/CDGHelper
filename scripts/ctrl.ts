'use strict';

/**
 * コントローラクラス
 */
class CDGController {
    public static $inject = ['CDGService'];

    public show_candidate_status: boolean; // 候補の表示状態
    public card_groups: object[]; // カード
    public candidates: object[]; // 候補
    public match_candidates_num: number; // 生き残っている候補数

    constructor(private CDGService) {
        this.show_candidate_status = false;
        this.card_groups = CDGService.init_cards();
        this.candidates = [];
        CDGService.init_candidates(this.candidates);
        this.match_candidates_num = CDGService.calc_match_candidates_num(this.candidates);
    }

    // カードと一致候補数の数を更新
    public use_card(card: object) {
        this.CDGService.use_card(card, this.candidates);
        this.match_candidates_num = this.CDGService.calc_match_candidates_num(this.candidates);
    }

    // 候補の表示切り替え
    public show_candidates() {
        this.show_candidate_status = !this.show_candidate_status;
    }

    // カード名の取得
    public get_card_name(card: object): string {
        return this.CDGService.get_card_name(card);
    }

    // カードが使用済みか
    public is_used(card): boolean {
        return card.is_used();
    }

    // 残り候補数の取得
    public get_candidate_nums(candidate): number {
        return candidate.get_nums();
    }
}

angular
    .module('CDGHelper')
    .controller('CDGController', CDGController);
