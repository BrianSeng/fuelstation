(function () {
   'use strict';
	
	var serviceName = "ItemsSvc";

   angular.module('app.items')

   .factory(serviceName, function ($http) {
      var service = {
		  getSummary: _getSummary,
		  getItems: _getItems
      };

      var url = 'https://ch9a4pr7ia.execute-api.us-west-2.amazonaws.com/demo/report/checkouts/items/';

      return service;

      function _getSummary(start, end, items) {
	  	var qry = (!items)?'':`?filter=${items}`;
		console.log(serviceName, url + start + '/' + end + qry);
		return $http.get(url + start + '/' + end + qry)
			.then(function(result){
					return result.data;
			});
      }
	   
	   function _getItems() {
		   return [
        {
            "ChoiceID": 10,
            "CategoryID": 3,
            "name": "Honey Stinger Chews",
            "description": null,
            "type": 1,
            "isActive": true,
            "isPre": true,
            "isPost": false,
            "isHydration": false,
            "isStaff": true,
            "isSnack": false,
            "isFree": false,
            "createdAt": "2017-03-27T00:01:17.000Z",
            "updatedAt": "2018-01-11T14:25:25.000Z"
        },
        {
            "ChoiceID": 62,
            "CategoryID": 3,
            "name": "Honey Stinger Waffle",
            "description": null,
            "type": 1,
            "isActive": true,
            "isPre": true,
            "isPost": false,
            "isHydration": false,
            "isStaff": true,
            "isSnack": false,
            "isFree": false,
            "createdAt": "2017-03-27T00:01:17.000Z",
            "updatedAt": "2017-08-17T22:37:45.000Z"
        },
        {
            "ChoiceID": 67,
            "CategoryID": 2,
            "name": "Pistachios",
            "description": null,
            "type": 0,
            "isActive": true,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": true,
            "isFree": false,
            "createdAt": "2017-03-27T00:01:17.000Z",
            "updatedAt": "2017-12-06T00:00:42.000Z"
        },
        {
            "ChoiceID": 68,
            "CategoryID": 2,
            "name": "Cashews",
            "description": null,
            "type": 0,
            "isActive": true,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": true,
            "isFree": false,
            "createdAt": "2017-03-27T00:01:17.000Z",
            "updatedAt": "2017-11-08T15:21:41.000Z"
        },
        {
            "ChoiceID": 1194,
            "CategoryID": 6,
            "name": "Hard Boiled Eggs",
            "description": null,
            "type": 0,
            "isActive": true,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": true,
            "isFree": false,
            "createdAt": "2017-03-27T00:01:17.000Z",
            "updatedAt": "2017-12-01T22:27:09.000Z"
        },
        {
            "ChoiceID": 1195,
            "CategoryID": 6,
            "name": "String Cheese",
            "description": null,
            "type": 0,
            "isActive": true,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": true,
            "isFree": false,
            "createdAt": "2017-03-27T00:01:17.000Z",
            "updatedAt": "2017-06-26T13:31:39.000Z"
        },
        {
            "ChoiceID": 3194,
            "CategoryID": 6,
            "name": "Hummus",
            "description": null,
            "type": 0,
            "isActive": false,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": true,
            "isFree": true,
            "createdAt": "2017-03-27T00:01:17.000Z",
            "updatedAt": "2018-01-23T02:04:11.000Z"
        },
        {
            "ChoiceID": 3208,
            "CategoryID": 1,
            "name": "Almonds",
            "description": null,
            "type": 0,
            "isActive": true,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": true,
            "isFree": false,
            "createdAt": "2017-06-14T21:21:53.000Z",
            "updatedAt": "2017-11-08T17:11:21.000Z"
        },
        {
            "ChoiceID": 3210,
            "CategoryID": 1,
            "name": "Applesauce",
            "description": null,
            "type": 0,
            "isActive": true,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": true,
            "isFree": false,
            "createdAt": "2017-06-14T21:21:53.000Z",
            "updatedAt": "2018-01-23T17:02:48.000Z"
        },
        {
            "ChoiceID": 3211,
            "CategoryID": 1,
            "name": "Bagel",
            "description": null,
            "type": 0,
            "isActive": true,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": true,
            "isFree": false,
            "createdAt": "2017-06-14T21:21:53.000Z",
            "updatedAt": "2017-07-07T19:04:21.000Z"
        },
        {
            "ChoiceID": 3213,
            "CategoryID": 1,
            "name": "Beef Jerky (@farm stand)",
            "description": null,
            "type": 0,
            "isActive": true,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": true,
            "isFree": false,
            "createdAt": "2017-06-14T21:21:53.000Z",
            "updatedAt": "2018-01-25T23:08:01.000Z"
        },
        {
            "ChoiceID": 3215,
            "CategoryID": 1,
            "name": "Cheribundi",
            "description": null,
            "type": 2,
            "isActive": true,
            "isPre": false,
            "isPost": true,
            "isHydration": false,
            "isStaff": true,
            "isSnack": false,
            "isFree": false,
            "createdAt": "2017-06-14T21:21:53.000Z",
            "updatedAt": "2017-09-25T20:24:48.000Z"
        },
        {
            "ChoiceID": 3216,
            "CategoryID": 1,
            "name": "Chocolate Milk",
            "description": null,
            "type": 2,
            "isActive": true,
            "isPre": false,
            "isPost": true,
            "isHydration": false,
            "isStaff": false,
            "isSnack": false,
            "isFree": false,
            "createdAt": "2017-06-14T21:21:53.000Z",
            "updatedAt": "2017-11-08T15:21:49.000Z"
        },
        {
            "ChoiceID": 3217,
            "CategoryID": 1,
            "name": "CLEAN",
            "description": null,
            "type": 2,
            "isActive": true,
            "isPre": false,
            "isPost": true,
            "isHydration": false,
            "isStaff": true,
            "isSnack": false,
            "isFree": false,
            "createdAt": "2017-06-14T21:21:53.000Z",
            "updatedAt": "2017-08-17T22:36:42.000Z"
        },
        {
            "ChoiceID": 3218,
            "CategoryID": 1,
            "name": "Clif",
            "description": null,
            "type": 2,
            "isActive": true,
            "isPre": true,
            "isPost": true,
            "isHydration": false,
            "isStaff": true,
            "isSnack": false,
            "isFree": false,
            "createdAt": "2017-06-14T21:21:53.000Z",
            "updatedAt": "2017-11-09T14:52:08.000Z"
        },
        {
            "ChoiceID": 3219,
            "CategoryID": 1,
            "name": "Come Ready",
            "description": null,
            "type": 2,
            "isActive": true,
            "isPre": false,
            "isPost": true,
            "isHydration": false,
            "isStaff": true,
            "isSnack": false,
            "isFree": false,
            "createdAt": "2017-06-14T21:21:53.000Z",
            "updatedAt": "2017-08-17T22:37:15.000Z"
        },
        {
            "ChoiceID": 3221,
            "CategoryID": 1,
            "name": "Sandwich Half - Ham",
            "description": null,
            "type": 0,
            "isActive": false,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": true,
            "isFree": false,
            "createdAt": "2017-06-14T21:21:53.000Z",
            "updatedAt": "2018-01-22T15:28:02.000Z"
        },
        {
            "ChoiceID": 3222,
            "CategoryID": 1,
            "name": "Gatorade Fuel Bar",
            "description": null,
            "type": 1,
            "isActive": true,
            "isPre": true,
            "isPost": false,
            "isHydration": false,
            "isStaff": true,
            "isSnack": false,
            "isFree": false,
            "createdAt": "2017-06-14T21:21:53.000Z",
            "updatedAt": "2017-11-07T23:49:31.000Z"
        },
        {
            "ChoiceID": 3223,
            "CategoryID": 1,
            "name": "Gatorade Whey Bar",
            "description": null,
            "type": 2,
            "isActive": true,
            "isPre": false,
            "isPost": true,
            "isHydration": false,
            "isStaff": true,
            "isSnack": false,
            "isFree": false,
            "createdAt": "2017-06-14T21:21:53.000Z",
            "updatedAt": "2017-11-09T02:06:53.000Z"
        },
        {
            "ChoiceID": 3233,
            "CategoryID": 1,
            "name": "Kashi Bar",
            "description": null,
            "type": 0,
            "isActive": true,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": true,
            "isFree": false,
            "createdAt": "2017-06-14T21:21:53.000Z",
            "updatedAt": "2017-06-28T18:33:32.000Z"
        },
        {
            "ChoiceID": 3234,
            "CategoryID": 1,
            "name": "Kashi Cereal",
            "description": null,
            "type": 0,
            "isActive": true,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": true,
            "isFree": false,
            "createdAt": "2017-06-14T21:21:53.000Z",
            "updatedAt": "2017-06-22T14:50:30.000Z"
        },
        {
            "ChoiceID": 3236,
            "CategoryID": 1,
            "name": "KiZE",
            "description": null,
            "type": 0,
            "isActive": true,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": true,
            "isSnack": true,
            "isFree": false,
            "createdAt": "2017-06-14T21:21:53.000Z",
            "updatedAt": "2017-09-26T14:59:24.000Z"
        },
        {
            "ChoiceID": 3237,
            "CategoryID": 1,
            "name": "Luna",
            "description": null,
            "type": 2,
            "isActive": true,
            "isPre": false,
            "isPost": true,
            "isHydration": false,
            "isStaff": true,
            "isSnack": false,
            "isFree": false,
            "createdAt": "2017-06-14T21:21:53.000Z",
            "updatedAt": "2017-11-08T00:56:33.000Z"
        },
        {
            "ChoiceID": 3238,
            "CategoryID": 1,
            "name": "Luna Protein",
            "description": null,
            "type": 2,
            "isActive": true,
            "isPre": false,
            "isPost": true,
            "isHydration": false,
            "isStaff": true,
            "isSnack": false,
            "isFree": false,
            "createdAt": "2017-06-14T21:21:53.000Z",
            "updatedAt": "2018-01-12T21:00:18.000Z"
        },
        {
            "ChoiceID": 3239,
            "CategoryID": 1,
            "name": "Milk",
            "description": null,
            "type": 0,
            "isActive": true,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": true,
            "isFree": false,
            "createdAt": "2017-06-14T21:21:53.000Z",
            "updatedAt": "2017-06-28T18:33:58.000Z"
        },
        {
            "ChoiceID": 3241,
            "CategoryID": 1,
            "name": "Nature Valley Sweet & Salty",
            "description": null,
            "type": 1,
            "isActive": true,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": true,
            "isFree": false,
            "createdAt": "2017-06-14T21:21:53.000Z",
            "updatedAt": "2017-11-01T00:13:00.000Z"
        },
        {
            "ChoiceID": 3242,
            "CategoryID": 1,
            "name": "Nature Valley Crunchy",
            "description": null,
            "type": 1,
            "isActive": true,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": true,
            "isFree": false,
            "createdAt": "2017-06-14T21:21:53.000Z",
            "updatedAt": "2017-11-01T00:12:47.000Z"
        },
        {
            "ChoiceID": 3244,
            "CategoryID": 1,
            "name": "Orgain - Chocolate",
            "description": null,
            "type": 2,
            "isActive": true,
            "isPre": false,
            "isPost": true,
            "isHydration": false,
            "isStaff": true,
            "isSnack": false,
            "isFree": false,
            "createdAt": "2017-06-14T21:21:53.000Z",
            "updatedAt": "2017-11-30T21:34:37.000Z"
        },
        {
            "ChoiceID": 3245,
            "CategoryID": 1,
            "name": "Orgain - Strawberry",
            "description": null,
            "type": 2,
            "isActive": true,
            "isPre": false,
            "isPost": true,
            "isHydration": false,
            "isStaff": true,
            "isSnack": false,
            "isFree": false,
            "createdAt": "2017-06-14T21:21:53.000Z",
            "updatedAt": "2017-08-17T22:38:36.000Z"
        },
        {
            "ChoiceID": 3246,
            "CategoryID": 1,
            "name": "Orgain - Vanilla",
            "description": null,
            "type": 2,
            "isActive": true,
            "isPre": false,
            "isPost": true,
            "isHydration": false,
            "isStaff": true,
            "isSnack": false,
            "isFree": false,
            "createdAt": "2017-06-14T21:21:53.000Z",
            "updatedAt": "2017-08-17T22:38:42.000Z"
        },
        {
            "ChoiceID": 3247,
            "CategoryID": 1,
            "name": "Orgain (Vegan) - Chocolate",
            "description": null,
            "type": 2,
            "isActive": true,
            "isPre": false,
            "isPost": true,
            "isHydration": false,
            "isStaff": true,
            "isSnack": false,
            "isFree": false,
            "createdAt": "2017-06-14T21:21:53.000Z",
            "updatedAt": "2017-11-30T01:21:12.000Z"
        },
        {
            "ChoiceID": 3248,
            "CategoryID": 1,
            "name": "Orgain (Vegan) - Vanilla",
            "description": null,
            "type": 2,
            "isActive": true,
            "isPre": false,
            "isPost": true,
            "isHydration": false,
            "isStaff": true,
            "isSnack": false,
            "isFree": false,
            "createdAt": "2017-06-14T21:21:53.000Z",
            "updatedAt": "2017-09-26T14:57:06.000Z"
        },
        {
            "ChoiceID": 3249,
            "CategoryID": 1,
            "name": "Overnight Oats - Peanut Butter",
            "description": null,
            "type": 0,
            "isActive": false,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": true,
            "isFree": false,
            "createdAt": "2017-06-14T21:21:53.000Z",
            "updatedAt": "2018-01-25T22:51:12.000Z"
        },
        {
            "ChoiceID": 3250,
            "CategoryID": 1,
            "name": "Parfait - Strawberry",
            "description": null,
            "type": 0,
            "isActive": false,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": true,
            "isFree": false,
            "createdAt": "2017-06-14T21:21:53.000Z",
            "updatedAt": "2018-01-19T00:37:05.000Z"
        },
        {
            "ChoiceID": 3252,
            "CategoryID": 1,
            "name": "PB&J",
            "description": null,
            "type": 0,
            "isActive": true,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": true,
            "isFree": false,
            "createdAt": "2017-06-14T21:21:53.000Z",
            "updatedAt": "2017-11-01T00:13:43.000Z"
        },
        {
            "ChoiceID": 3255,
            "CategoryID": 1,
            "name": "Pretzels",
            "description": null,
            "type": 0,
            "isActive": true,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": true,
            "isFree": false,
            "createdAt": "2017-06-14T21:21:53.000Z",
            "updatedAt": "2017-11-07T23:29:30.000Z"
        },
        {
            "ChoiceID": 3256,
            "CategoryID": 1,
            "name": "PROBAR Base",
            "description": null,
            "type": 2,
            "isActive": true,
            "isPre": false,
            "isPost": true,
            "isHydration": false,
            "isStaff": true,
            "isSnack": false,
            "isFree": false,
            "createdAt": "2017-06-14T21:21:53.000Z",
            "updatedAt": "2017-08-17T22:38:52.000Z"
        },
        {
            "ChoiceID": 3257,
            "CategoryID": 1,
            "name": "PROBAR Meal",
            "description": null,
            "type": 0,
            "isActive": true,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": true,
            "isSnack": true,
            "isFree": false,
            "createdAt": "2017-06-14T21:21:53.000Z",
            "updatedAt": "2017-11-30T21:32:33.000Z"
        },
        {
            "ChoiceID": 3261,
            "CategoryID": 1,
            "name": "Trail Mix",
            "description": null,
            "type": 0,
            "isActive": true,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": true,
            "isFree": false,
            "createdAt": "2017-06-14T21:21:53.000Z",
            "updatedAt": "2018-01-25T01:50:31.000Z"
        },
        {
            "ChoiceID": 3288,
            "CategoryID": 6,
            "name": "Peanuts",
            "description": null,
            "type": 0,
            "isActive": true,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": true,
            "isFree": false,
            "createdAt": "2017-06-23T00:51:18.000Z",
            "updatedAt": "2017-07-12T19:41:55.000Z"
        },
        {
            "ChoiceID": 3291,
            "CategoryID": 6,
            "name": "Cut Fruit (container)",
            "description": null,
            "type": 0,
            "isActive": true,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": true,
            "isFree": false,
            "createdAt": "2017-06-23T04:02:00.000Z",
            "updatedAt": "2018-01-17T14:09:21.000Z"
        },
        {
            "ChoiceID": 3299,
            "CategoryID": 6,
            "name": "Banana",
            "description": null,
            "type": 0,
            "isActive": true,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": true,
            "isFree": true,
            "createdAt": "2017-06-29T19:41:32.000Z",
            "updatedAt": "2018-01-10T23:23:25.000Z"
        },
        {
            "ChoiceID": 3305,
            "CategoryID": 6,
            "name": "88 Acres (Nut FREE)",
            "description": null,
            "type": 0,
            "isActive": true,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": true,
            "isFree": false,
            "createdAt": "2017-07-07T13:01:48.000Z",
            "updatedAt": "2018-01-17T23:09:22.000Z"
        },
        {
            "ChoiceID": 3307,
            "CategoryID": 6,
            "name": "Wrap (Half) - Chicken Caesar",
            "description": null,
            "type": 0,
            "isActive": false,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": true,
            "isFree": false,
            "createdAt": "2017-07-18T13:13:48.000Z",
            "updatedAt": "2018-01-16T15:10:21.000Z"
        },
        {
            "ChoiceID": 3308,
            "CategoryID": 6,
            "name": "Nature Valley Fruit & Nut",
            "description": null,
            "type": 1,
            "isActive": true,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": true,
            "isFree": false,
            "createdAt": "2017-08-02T02:34:40.000Z",
            "updatedAt": "2017-11-01T00:12:53.000Z"
        },
        {
            "ChoiceID": 3309,
            "CategoryID": 6,
            "name": "Parfait - Blueberry",
            "description": null,
            "type": 0,
            "isActive": true,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": true,
            "isFree": false,
            "createdAt": "2017-08-02T02:36:01.000Z",
            "updatedAt": "2018-01-25T14:14:57.000Z"
        },
        {
            "ChoiceID": 3311,
            "CategoryID": 6,
            "name": "Oatmeal - Hot",
            "description": null,
            "type": 0,
            "isActive": true,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": true,
            "isFree": false,
            "createdAt": "2017-08-03T15:41:38.000Z",
            "updatedAt": "2017-10-31T23:57:40.000Z"
        },
        {
            "ChoiceID": 3312,
            "CategoryID": 6,
            "name": "Overnight Oats - Blueberry",
            "description": null,
            "type": 0,
            "isActive": false,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": true,
            "isFree": false,
            "createdAt": "2017-08-03T15:42:15.000Z",
            "updatedAt": "2018-01-22T15:27:38.000Z"
        },
        {
            "ChoiceID": 3313,
            "CategoryID": 6,
            "name": "Parfait - Peach",
            "description": null,
            "type": 0,
            "isActive": false,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": true,
            "isFree": false,
            "createdAt": "2017-08-03T15:42:53.000Z",
            "updatedAt": "2018-01-24T14:29:18.000Z"
        },
        {
            "ChoiceID": 3314,
            "CategoryID": 6,
            "name": "Wrap (Half) - Chicken Hummus",
            "description": null,
            "type": 0,
            "isActive": false,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": true,
            "isFree": false,
            "createdAt": "2017-08-03T15:43:51.000Z",
            "updatedAt": "2018-01-22T15:28:10.000Z"
        },
        {
            "ChoiceID": 3315,
            "CategoryID": 6,
            "name": "Parfait - Cherry",
            "description": null,
            "type": 2,
            "isActive": false,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": true,
            "isFree": false,
            "createdAt": "2017-08-09T15:15:31.000Z",
            "updatedAt": "2017-11-01T00:13:24.000Z"
        },
        {
            "ChoiceID": 3316,
            "CategoryID": 6,
            "name": "Sandwich Half - Turkey",
            "description": null,
            "type": 0,
            "isActive": false,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": true,
            "isFree": false,
            "createdAt": "2017-08-10T16:38:07.000Z",
            "updatedAt": "2018-01-18T00:50:11.000Z"
        },
        {
            "ChoiceID": 3317,
            "CategoryID": 6,
            "name": "Overnight Oats - Cinnamon Banana",
            "description": null,
            "type": 0,
            "isActive": false,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": true,
            "isFree": false,
            "createdAt": "2017-08-15T23:12:01.000Z",
            "updatedAt": "2017-08-21T15:33:53.000Z"
        },
        {
            "ChoiceID": 3318,
            "CategoryID": 6,
            "name": "Wrap (Half) - BBQ Chicken",
            "description": null,
            "type": 0,
            "isActive": false,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": true,
            "isFree": false,
            "createdAt": "2017-08-15T23:19:33.000Z",
            "updatedAt": "2018-01-11T23:15:56.000Z"
        },
        {
            "ChoiceID": 3319,
            "CategoryID": 6,
            "name": "Overnight Oats - Cherry",
            "description": null,
            "type": 0,
            "isActive": false,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": true,
            "isFree": false,
            "createdAt": "2017-09-13T23:27:43.000Z",
            "updatedAt": "2017-10-23T13:13:54.000Z"
        },
        {
            "ChoiceID": 3320,
            "CategoryID": 6,
            "name": "Chobani",
            "description": null,
            "type": 0,
            "isActive": true,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": true,
            "isFree": false,
            "createdAt": "2017-09-14T17:48:48.000Z",
            "updatedAt": "2018-01-23T22:05:07.000Z"
        },
        {
            "ChoiceID": 3322,
            "CategoryID": 6,
            "name": "Post-Lift Shake (Team Lift)",
            "description": null,
            "type": 2,
            "isActive": true,
            "isPre": false,
            "isPost": true,
            "isHydration": false,
            "isStaff": false,
            "isSnack": false,
            "isFree": false,
            "createdAt": "2017-09-25T16:10:05.000Z",
            "updatedAt": "2017-12-08T19:46:43.000Z"
        },
        {
            "ChoiceID": 3323,
            "CategoryID": 6,
            "name": "Carrots",
            "description": null,
            "type": 0,
            "isActive": true,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": true,
            "isFree": true,
            "createdAt": "2017-09-25T21:07:57.000Z",
            "updatedAt": "2018-01-09T02:42:12.000Z"
        },
        {
            "ChoiceID": 3324,
            "CategoryID": 6,
            "name": "KIND",
            "description": null,
            "type": 0,
            "isActive": true,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": true,
            "isFree": false,
            "createdAt": "2017-09-26T15:39:14.000Z",
            "updatedAt": "2018-01-09T22:03:23.000Z"
        },
        {
            "ChoiceID": 3325,
            "CategoryID": 6,
            "name": "Apple",
            "description": null,
            "type": 0,
            "isActive": true,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": true,
            "isSnack": true,
            "isFree": true,
            "createdAt": "2017-10-30T21:41:48.000Z",
            "updatedAt": "2018-01-08T16:28:32.000Z"
        },
        {
            "ChoiceID": 3326,
            "CategoryID": 6,
            "name": "Pear",
            "description": null,
            "type": 0,
            "isActive": false,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": true,
            "isFree": true,
            "createdAt": "2017-11-02T16:16:39.000Z",
            "updatedAt": "2017-12-08T23:06:04.000Z"
        },
        {
            "ChoiceID": 3327,
            "CategoryID": 6,
            "name": "Bread- 2 slices",
            "description": null,
            "type": 0,
            "isActive": true,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": true,
            "isFree": false,
            "createdAt": "2017-11-03T13:33:49.000Z",
            "updatedAt": "2017-11-08T20:01:17.000Z"
        },
        {
            "ChoiceID": 3328,
            "CategoryID": 6,
            "name": "Orange",
            "description": null,
            "type": 0,
            "isActive": true,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": true,
            "isFree": true,
            "createdAt": "2017-11-07T17:22:39.000Z",
            "updatedAt": "2017-11-14T22:17:46.000Z"
        },
        {
            "ChoiceID": 3329,
            "CategoryID": 6,
            "name": "Asian Pear",
            "description": null,
            "type": 0,
            "isActive": false,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": true,
            "isFree": true,
            "createdAt": "2017-11-08T15:13:39.000Z",
            "updatedAt": "2017-12-08T23:04:55.000Z"
        },
        {
            "ChoiceID": 3331,
            "CategoryID": 6,
            "name": "Sandwich Half- Chicken Pesto",
            "description": null,
            "type": 0,
            "isActive": false,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": true,
            "isFree": false,
            "createdAt": "2018-01-17T23:11:36.000Z",
            "updatedAt": "2018-01-24T17:00:23.000Z"
        },
        {
            "ChoiceID": 3332,
            "CategoryID": 6,
            "name": "Sandwich Half- Veggie Delight (Vegan)",
            "description": null,
            "type": 0,
            "isActive": true,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": true,
            "isFree": false,
            "createdAt": "2018-01-17T23:12:58.000Z",
            "updatedAt": "2018-01-23T17:02:20.000Z"
        },
        {
            "ChoiceID": 3333,
            "CategoryID": 6,
            "name": "Sandwich Half- Turkey Avocado",
            "description": null,
            "type": 0,
            "isActive": false,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": false,
            "isFree": false,
            "createdAt": "2018-01-17T23:14:07.000Z",
            "updatedAt": "2018-01-25T21:57:28.000Z"
        },
        {
            "ChoiceID": 3334,
            "CategoryID": 6,
            "name": "Pasta Salad",
            "description": null,
            "type": 0,
            "isActive": true,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": false,
            "isFree": false,
            "createdAt": "2018-01-17T23:15:30.000Z",
            "updatedAt": "2018-01-25T14:15:11.000Z"
        },
        {
            "ChoiceID": 3335,
            "CategoryID": 6,
            "name": "Salad - Quinoa",
            "description": null,
            "type": 0,
            "isActive": true,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": false,
            "isFree": false,
            "createdAt": "2018-01-17T23:17:36.000Z",
            "updatedAt": "2018-01-25T14:15:24.000Z"
        },
        {
            "ChoiceID": 3336,
            "CategoryID": 6,
            "name": "Sandwich Half- Roast Beef",
            "description": null,
            "type": 0,
            "isActive": true,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": false,
            "isFree": false,
            "createdAt": "2018-01-17T23:18:00.000Z",
            "updatedAt": "2018-01-25T14:15:33.000Z"
        },
        {
            "ChoiceID": 3337,
            "CategoryID": 6,
            "name": "Overnight Oats- Banana",
            "description": null,
            "type": 0,
            "isActive": false,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": false,
            "isFree": false,
            "createdAt": "2018-01-17T23:18:40.000Z",
            "updatedAt": "2018-01-17T23:18:40.000Z"
        },
        {
            "ChoiceID": 3338,
            "CategoryID": 6,
            "name": "Wrap (Half)- Buffalo Chicken",
            "description": null,
            "type": 0,
            "isActive": false,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": false,
            "isFree": false,
            "createdAt": "2018-01-17T23:19:19.000Z",
            "updatedAt": "2018-01-19T14:21:18.000Z"
        },
        {
            "ChoiceID": 3339,
            "CategoryID": 6,
            "name": "Salad - Corn & Black Beans",
            "description": null,
            "type": 0,
            "isActive": false,
            "isPre": false,
            "isPost": false,
            "isHydration": false,
            "isStaff": false,
            "isSnack": false,
            "isFree": false,
            "createdAt": "2018-01-23T16:34:56.000Z",
            "updatedAt": "2018-01-24T14:29:27.000Z"
        }
    ];
	   }
	   
   });
})();
