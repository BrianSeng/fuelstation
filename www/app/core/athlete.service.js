(function () {
    'use strict';

    angular.module('app.core')

    .factory('AthleteSvc', function ($http, $resource, $cacheFactory, ApiEndpoint) {
      var url = 'https://dbc18a3k05.execute-api.us-west-2.amazonaws.com/ademo/athletes/';
        var service = {
            getAthlete: _getAthlete,
            getAthletesBySport: _getAthletesBySport,
            athleteApi: _athleteApi,
			saveAthlete: _saveAthlete,
			deleteAthlete: _deleteAthlete
        };

        return service;

        function _athleteApi() {
            // return $resource(ApiEndpoint.url + 'StudentSport/:schoolsidnumber', {
            //     schoolsidnumber: "@id"
            // });
        }

        function _getAthlete(id) {
            // return service.athleteApi().query({
            //     schoolsidnumber: id
            // });
            return $http.get(url + id)
                .then(function(result){
                    return result.data.athletes; // API returns data in 'athletes' property
                });
        }

        function _getAthletesBySport(sportCode){
           return $http.get(url + "?filter=" + sportCode)
               .then(function(result){
                   return result.data.athletes;
               });
        }
		
		function _saveAthlete(athlete) {
			return $http.post(url, athlete)
				.then(function(result) {
					console.log('athlete saved');
					return result;
				});
		}
		
		function _deleteAthlete(id) {
			return $http.delete(url + id)
				.then(function(result) {
					console.log('athlete deleted');
					return result;
				});
		}
    });
})();
