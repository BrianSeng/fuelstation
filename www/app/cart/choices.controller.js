(function () {
    'use strict';

    angular.module('app.studentChoices', [])

    .controller('StudentChoicesCtrl', function (ChoiceSvc, AccountSvc, OrderSvc, $state, CheckoutSvc, $ionicSideMenuDelegate, $ionicPopup, IonicAlertSvc, $interval, $scope) {
        var vm = this;

        var timer;

        vm.accountSvc = AccountSvc;
        vm.choiceSvc = ChoiceSvc;
        vm.orderItems = OrderSvc.orderItems;
        vm.timeRemaining = 120;

        vm.cancel = _cancel;
        vm.onOrderClick = _onOrderClick;
        vm.orderItem = _orderItem;
        vm.removeItem = _removeItem;
        vm.toggleLeft = _toggleLeft;
		vm.typeButton = _typeButton;

        init();

        function init() {
            // Start counting down timer, which was initialized to 120 above
            timer = $interval(function () {
                vm.timeRemaining--;
                vm.seconds = vm.timeRemaining < 10 ? "0" + vm.timeRemaining : vm.timeRemaining;

                if (vm.timeRemaining === 0) {
                    $interval.cancel(timer);

                    var opts = {};
                    opts.title = "You have been logged out due to inactivity.";
                    opts.shouldClearID = true;
                    opts.redirect = 'tab.studentID';

                    IonicAlertSvc.alert(opts);
                }
            }, 1000);
			console.log(vm.choiceSvc.types);
        }

        // Cancel timer when controller is destroyed (i.e. when route changes), otherwise timer continues even if user has already been logged out
        $scope.$on('$destroy', function () {
            $interval.cancel(timer);
        });


        function _cancel() {
            var msg = {
                template: "Are you sure you want to cancel this order?"
            };

            var onConfirmFn = function () {
                $state.go('tab.studentID', null, {
                    reload: true
                });
            }

            IonicAlertSvc.confirm(msg, onConfirmFn);
        }

        function _onOrderClick() {
            resetTimer();

            if (!AccountSvc.athleteData || !AccountSvc.athleteData[0]) {
                var opts = {};
                opts.title = "Athlete data error.";
                opts.AcctSvc_athleteData = AccountSvc.athleteData;
                opts.OrderItems = OrderSvc.orderItems;

                IonicAlertSvc.alert(opts);
            }

            if (OrderSvc.orderItems.length >= 1) {
                try {
                    CheckoutSvc.processCheckout(OrderSvc.orderItems, AccountSvc.athleteData[0].AthleteID);
                } catch (err) {
                    IonicAlertSvc.alert(err);
                }
            }
        }

        function _orderItem(item, isSnack, debit) {
            resetTimer();

            // Clone the item that was added to cart to keep track of whether it is a snack or not. If choice is not cloned first, the snack attribute will remain even if the athlete selects it as pre/post
            var itemClone = _.clone(item);
            itemClone.orderType = debit;

            if (isSnack) {
				if(!_doNotCount(item)) {
					AccountSvc.monthSnacksRemaining--;
					AccountSvc.daySnacksRemaining--;
					itemClone.isSnack = true;
					AccountSvc.snackCount++;
				}
            } else {
                itemClone.isSnack = false;
				if (!_doNotCount(item)) {
					if (debit === 'pre') AccountSvc.preCount++;
					if (debit === 'post') AccountSvc.postCount++;
					if (debit === 'fbshake') AccountSvc.shakeCount++;
					if (debit === 'snack') AccountSvc.snackCount++;
					if (debit === 'staff') AccountSvc.staffCount++;
				}
            }

            OrderSvc.addItem(itemClone);
            AccountSvc.updateHiddenCategories(OrderSvc.orderItems);
        }
		
		//inserted as a utility to abstract the logic of NOT counting items
		// 20190113 - added the coach accountType to allow unlimited
		function _doNotCount(item) {
			return item.isFree || AccountSvc.athleteData[0].isCoach;
		}		

        function _removeItem(index) {
            resetTimer();
			
			//update cart counts if the item is not one that is counted
			if (!_doNotCount(OrderSvc.orderItems[index])) {
			
				if (OrderSvc.orderItems[index].isSnack) {
					if (AccountSvc.monthSnacksRemaining < AccountSvc.monthSnacksLimit) {
						AccountSvc.monthSnacksRemaining++;
					}
					if (AccountSvc.daySnacksRemaining < AccountSvc.daySnacksLimit) {
						AccountSvc.daySnacksRemaining++;
					}
				}

				switch(OrderSvc.orderItems[index].orderType) {
					case 'pre':
						AccountSvc.preCount--;
						break;
					case 'post':
						AccountSvc.postCount--;
						break;
                    case 'fbshake':
						AccountSvc.shakeCount--;
						break;
					case 'staff':
						AccountSvc.staffCount--;
						break;
					case 'snack':
						AccountSvc.snackCount--;
						break;
			   }
			}

            OrderSvc.removeItem(index);
            AccountSvc.updateHiddenCategories(OrderSvc.orderItems);
        }

        function resetTimer() {
            vm.timeRemaining = 120;
        }

        function _toggleLeft() {
            $ionicSideMenuDelegate.toggleLeft();
        }
		
		function _typeButton(type) {
            if (type === 0) {
                return "";
            } else if (type === 1) {
                return "button-calm";
            } else if (type === 2) {
                return "button-positive";
            } else if (type === 3) {
                return "button-balanced";
            } else if (type === 4) {
                return "button-energized";
            } else if (type === 5) {
                return "button-royal";
            } else if (type === 6) {
                return "button-positive";
            }
		}
    });
})();
