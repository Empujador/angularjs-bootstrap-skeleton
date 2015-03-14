'use strict';

/**
 * @ngdoc object
 * @name absStateManagement
 * @description
 * States Management Object<br />
 * Helper Object to set and unset different stats in objects
 *
 * @requires absObject
 *
 * @todo check whitelist functionality
 */
angular.module('myABS').factory('absStateManagement',[
    'absObject',
    function(absObject) {

        function absStateManagement(whitelist){

            /**
             * @ngdoc property
             * @propertyOf absStateManagement
             *
             * @name self
             * @description
             * Array to handle states in Methods
             *
             * @type {Array} self New states array
             */
            var self = new Array();

            absObject.addEventHandlingTo(self);

            /**
             * @ngdoc method
             * @methodOf absStateManagement
             *
             * @name set
             * @description
             * set a state if not exists
             *
             * @param {String} state Example 'new' or 'loading'
             */
            self.set = function(state){
                if(typeof state == 'string' && state.length > 0){
                    if(self.indexOf(state) == -1){
                        self.push(state);

                        self.trigger('change');
                    }
                }
                return self
            };

            /**
             * @ngdoc method
             * @methodOf absStateManagement
             *
             * @name unset
             * @description
             * unset a state, remove from state Array
             *
             * @param {String} state Example 'new' or 'loading'
             */
            self.unset = function(state){
                if(typeof state == 'string' && state.length > 0) {
                    if (self.indexOf(state) != -1) {
                        self.splice(self.indexOf(state), 1);

                        self.trigger('change');
                    }
                }
                return self
            };

            /**
             * @ngdoc method
             * @methodOf absStateManagement
             *
             * @name is
             * @description
             * check if a state is in states array
             * return boolean
             *
             * @param {String} state Example 'new' or 'loading'
             * @returns {Boolean} bool Indicator if state exists in states array
             */
            self.is = function(state){
                if(typeof state == 'string' && state.length > 0) {
                    return self.indexOf(state) != -1;
                }
                return false;
            };

            return self;
        }

        return absStateManagement;
    }
]);