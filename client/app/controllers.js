/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 1/7/13
 * Time: 6:44 PM
 * To change this template use File | Settings | File Templates.
 */
TestCtrl = [
    "$scope", "Session",

    function($scope, Session){

        if (typeof Session.get('queryConfig').sort == 'undefined'){
            queryConfig = {
                sort: {dateCreated: -1}
            }
            Session.set('queryConfig', queryConfig);
        }

        Meteor.subscribe('lists', Session.get('queryConfig'));
        $scope.Lists = new Meteor.AngularCollection("lists", $scope);

        $scope.config = Session.get('queryConfig');
        $scope.lists = $scope.Lists.find({});

    }
]