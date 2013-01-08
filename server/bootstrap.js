/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 1/7/13
 * Time: 6:41 PM
 * To change this template use File | Settings | File Templates.
 */
// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
    console.log(Lists.find().count());
    if (Lists.find().count() === 0) {
        //initial data

        for (var i = 0; i < 10; i++) {
            Lists.insert({number: i,
                dateCreated: new Date().toJSON()});
        }
    }
});