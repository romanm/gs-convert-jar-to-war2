function GlobalCtrl($scope) {
//	console.log("ContentCtrl init");
	$scope.showPreferencesPanel = function(){
		var text="showPreferencesPanel";
		console.log(text);
		$scope.initSlidePanel("UserPreferences");
	}
	$scope.initSlidePanel = function (url){
		$scope.showWaitDialog();
	}
	$scope.showWaitDialog = function(){
    	$('#pleaseWaitDialog').modal({backdrop: 'static'});
    };
    $scope.showDialog = function(){
    	console.log("showDialog");
    	$("#dialog").dialog();
    }
}
//function ContentCtrl($scope, $rootScope, $compile, $http, exaService, Data) {
function ContentCtrl($scope) {
}
function FooterCtrl($scope) {
    $scope.links = [{ text: 'EXA Web Site', ref: 'http://www.exa.com/index.html', splitter: ' | '},
                    { text: 'Support', ref: 'http://www.exa.com/technical-support.html', splitter: ' | '},
                    { text: 'Contact', ref: 'http://www.exa.com/worldwide-offices.html', splitter: ''}]
}
