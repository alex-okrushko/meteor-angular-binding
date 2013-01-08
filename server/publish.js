/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 1/7/13
 * Time: 6:47 PM
 * To change this template use File | Settings | File Templates.
 */
Lists = new Meteor.Collection("lists");

Meteor.publish('lists', function (queryConfig) {
    return Lists.find({}, queryConfig);
});