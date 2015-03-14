'use strict';

angular.module('myABS').service('absFixtures',[
    'absObject', 'absStateManagement',
    '$http', '$q',
    function(absObject, absStateManagement,
             $http, $q){

        var self = {
            data: null,
            loadFixtures: function(){
                self.state.set('loading');
                $http.get('fixtures.json').then(function(response){
                    self.data = response.data.app.fixtures;
                    self.trigger('data:loaded');
                    self.state.unset('loading');
                    self.state.set('loaded');
                });
            },
            get: function(identifier){
                if(self.state.is('loaded')){
                    return $q.when(self.data[identifier]);
                }

                var defer = $q.defer();

                self.on('data:loaded', function(){
                    defer.resolve(self.data[identifier]);
                });

                return defer.promise;
            }
        };

        absObject.addEventHandlingTo(self);
        self.state = new absStateManagement(self);

        self.loadFixtures();

        return self;
    }
]);