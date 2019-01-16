(function () {
    'use strict';

    angular.module('app.recharge', [])

    .controller('RechargeReportCtrl', function (CheckoutSvc, IonicAlertSvc, CsvSvc, $timeout, SportSvc, LoadingSpinner) {
        var vm = this;

        vm.counts = [];
        vm.dateSelection = {};
        vm.currentYear = new Date().getFullYear();
        vm.currentMonth = new Date().getMonth() + 1;

        vm.download = _download;
        vm.getMonthCounts = _getMonthCounts;
        vm.years = _years;
		vm.onSelectSport = _onSelectSport;
		
        init();
        function init() {
			LoadingSpinner.show();
			SportSvc.getSports().then((data) => {				
				vm.sports = data;
				vm.sports.unshift({SportCodeID: '', description: 'All Sports'});
				LoadingSpinner.hide();
			}).catch( () => { 
				LoadingSpinner.hide();
			});
        }

        function _download() {
            vm.getMonthCounts();

            // Allow downloads only if there is data to download, with timeout to ensure data downloads first
            $timeout(function () {
                if (vm.counts.length > 0) {
                    CsvSvc.download(vm.counts, vm.dateSelection.month + "-" + vm.dateSelection.year + "_counts_");
                }
            }, 1200);
        }

        function _getMonthCounts() {
			LoadingSpinner.show();
            CheckoutSvc.getRechargeCounts(vm.dateSelection)
				.query()
				.then(onGetRechargeCounts, IonicAlertSvc.error);
        }

        // Hidden logic for message that says "No records found for this time period"
        function onGetRechargeCounts(response) {
			LoadingSpinner.hide();
            if (response.length > 0) {
                vm.noRecords = false;
                vm.counts = response;
            } else {
                vm.noRecords = true;
                vm.counts = [];
            }
        }
		
		function _onSelectSport() {
			console.log("Set TeamID: ", vm.selectedSport);
			vm.selectedTeamID = vm.selectedSport;
		};

        // Set up options for Select - builds array of last three years
        function _years() {
            var currentYear = new Date().getFullYear();
            var years = [];
            for (var i = 0; i < 3; i++) {
                years.unshift(currentYear - i);
            }
            return years;
        }

        vm.months = {
            January: 1,
            February: 2,
            March: 3,
            April: 4,
            May: 5,
            June: 6,
            July: 7,
            August: 8,
            September: 9,
            October: 10,
            November: 11,
            December: 12
        };

    });
})();
