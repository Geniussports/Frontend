;(function () {

	'user strict'

	angular.module('GeniusSports')

	.controller('TabCtrl', function () {
			//initialize tab1 when loaded
				this.tab = 1;
    		//sets tab
    		this.selectTab = function (setTab){
    			this.tab = setTab;    		
    		};
    		//determines which tab is selected and returns that tab to be true
    		this.isSelected = function(checkTab) {
    			return this.tab === checkTab;
    		};
  		});

}());
