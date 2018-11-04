'use strict';
/**
 * コントローラクラス
 */
var CDGController = /** @class */ (function () {
    function CDGController(CDGService) {
        this.CDGService = CDGService;
        this.show_candidates_status = false;
        this.card_groups = CDGService.init_cards();
        this.candidates = [];
        CDGService.init_candidates(this.candidates);
        this.match_candidates_num = CDGService.calc_match_candidates_num(this.candidates);
    }
    // カードと一致候補数の数を更新
    CDGController.prototype.use_card = function (card) {
        this.CDGService.use_card(card, this.candidates);
        this.match_candidates_num = this.CDGService.calc_match_candidates_num(this.candidates);
    };
    // 候補の表示切り替え
    CDGController.prototype.show_candidates = function () {
        this.show_candidates_status = !this.show_candidates_status;
    };
    // カード名の取得
    CDGController.prototype.get_card_name = function (card) {
        return this.CDGService.get_card_name(card);
    };
    // カードが使用済みか
    CDGController.prototype.is_used = function (card) {
        return card.is_used();
    };
    // 候補の取得
    CDGController.prototype.get_candidate_nums = function (candidate) {
        return candidate.get_nums();
    };
    CDGController.$inject = ['CDGService'];
    return CDGController;
}());
angular
    .module('CDGHelper')
    .controller('CDGController', CDGController);
//# sourceMappingURL=ctrl.js.map