'use strict';

/**
 * コントローラクラス
 */
class CDGController {
    public show_candidates_status: boolean; // 候補の表示状態
    public card_groups: CardBase[][]; // カード
    public candidates: Candidate[]; // 候補
    public match_candidates_num: number; // 生き残っている候補数

    constructor() {
        this.show_candidates_status = false;
        this.card_groups = CDGService.init_cards();
        this.candidates = [];
        CDGService.init_candidates(this.candidates);
        this.match_candidates_num = CDGService.calc_match_candidates_num(this.candidates);
    }

    // カードと一致候補数の数を更新
    public use_card(card: CardBase): void {
        CDGService.use_card(card, this.candidates);
        this.match_candidates_num = CDGService.calc_match_candidates_num(this.candidates);
    }

    // 候補の表示切り替え
    public show_candidates(): void {
        this.show_candidates_status = !this.show_candidates_status;
    }

    // カード名の取得
    public get_card_name(card: CardBase): string {
        return CDGService.get_card_name(card);
    }

    // カードが使用済みか
    public is_used(card: CardBase): boolean {
        return card.is_used();
    }

    // 候補の取得
    public get_candidate_nums(candidate: Candidate): number[] {
        return candidate.get_nums();
    }
}

angular
    .module('CDGHelper')
    .controller('CDGController', CDGController);
