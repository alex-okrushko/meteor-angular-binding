/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 1/7/13
 * Time: 6:44 PM
 * To change this template use File | Settings | File Templates.
 */


var app = angular.module('meteorapp', []).
    config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when('/', {controller: TestCtrl,templateUrl:'partials/test.html'});
}]);

app.service('Session', function($rootScope){
    var self = this;
    self.objects = {};
    self.get = function(name){
        self.objects[name] = {"value" : Session.get(name)};
        Meteor.autorun(function() {
            var i = Session.get(name);
            if(self.objects[name].value != i){
                if (!$rootScope.$$phase){
                    $rootScope.$apply(function(){
                        self.objects[name].value = i;
                    });
                }
            }
        });
        return self.objects[name];
    }
    self.set = function(name,value){
        self.objects[name].value  = value;
        Session.set(name,value);
    }
    return self;
});