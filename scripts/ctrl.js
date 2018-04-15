(function() {
    'use strict';

    angular
        .module('CDGHelper')
        .controller('CDGCtrl', CDGCtrl);

    CDGCtrl.$inject = ['CDGService'];
    function CDGCtrl(CDGService) {
        var vm = this;

        // functions
        vm.use_card = use_card;
        vm.show_candidates = show_candidates;
        vm.get_card_name = get_card_name;
        vm.is_used = is_used;
        vm.get_candidate_nums = get_candidate_nums;

        init();

        function init() {
            // 表示状態
            vm.show_candidates_status = false;

            // カードの初期化
            vm.card_groups = CDGService.init_cards();

            // 候補の初期化
            vm.candidates = [];
            CDGService.init_candidates(vm.candidates);

            // 一致する候補数の初期化
            vm.match_candidates_num = CDGService.calc_match_candidates_num(vm.candidates);
        }

        // カードと一致候補数の数を更新
        function use_card(card) {
            CDGService.use_card(card, vm.candidates);
            vm.match_candidates_num = CDGService.calc_match_candidates_num(vm.candidates);
        }

        function show_candidates() {
            vm.show_candidates_status = !vm.show_candidates_status;
        }

        function get_card_name(card) {
            return CDGService.get_card_name(card);
        }

        function is_used(card) {
            return card.is_used();
        }

        function get_candidate_nums(cand) {
            return cand.get_nums();
        }
    }
})();

