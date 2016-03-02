(function(window, angular, undefined) {'use strict';

var urlBase = "/api";
var authHeader = 'authorization';

/**
 * @ngdoc overview
 * @name restServices
 * @module
 * @description
 *
 * The `restServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("restServices", ['ngResource']);

/**
 * @ngdoc object
 * @name restServices.User
 * @header restServices.User
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `User` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "User",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/users/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name restServices.User#prototype$__findById__accessTokens
         * @methodOf restServices.User
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          url: urlBase + "/users/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.User#prototype$__destroyById__accessTokens
         * @methodOf restServices.User
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          url: urlBase + "/users/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name restServices.User#prototype$__updateById__accessTokens
         * @methodOf restServices.User
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          url: urlBase + "/users/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.attendClasses.findById() instead.
        "prototype$__findById__attendClasses": {
          url: urlBase + "/users/:id/attendClasses/:fk",
          method: "GET"
        },

        // INTERNAL. Use User.attendClasses.destroyById() instead.
        "prototype$__destroyById__attendClasses": {
          url: urlBase + "/users/:id/attendClasses/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.attendClasses.updateById() instead.
        "prototype$__updateById__attendClasses": {
          url: urlBase + "/users/:id/attendClasses/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.attendClasses.link() instead.
        "prototype$__link__attendClasses": {
          url: urlBase + "/users/:id/attendClasses/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.attendClasses.unlink() instead.
        "prototype$__unlink__attendClasses": {
          url: urlBase + "/users/:id/attendClasses/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.attendClasses.exists() instead.
        "prototype$__exists__attendClasses": {
          url: urlBase + "/users/:id/attendClasses/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use User.lectureClasses.findById() instead.
        "prototype$__findById__lectureClasses": {
          url: urlBase + "/users/:id/lectureClasses/:fk",
          method: "GET"
        },

        // INTERNAL. Use User.lectureClasses.destroyById() instead.
        "prototype$__destroyById__lectureClasses": {
          url: urlBase + "/users/:id/lectureClasses/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.lectureClasses.updateById() instead.
        "prototype$__updateById__lectureClasses": {
          url: urlBase + "/users/:id/lectureClasses/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.lectureClasses.link() instead.
        "prototype$__link__lectureClasses": {
          url: urlBase + "/users/:id/lectureClasses/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.lectureClasses.unlink() instead.
        "prototype$__unlink__lectureClasses": {
          url: urlBase + "/users/:id/lectureClasses/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.lectureClasses.exists() instead.
        "prototype$__exists__lectureClasses": {
          url: urlBase + "/users/:id/lectureClasses/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use User.attendCourses.findById() instead.
        "prototype$__findById__attendCourses": {
          url: urlBase + "/users/:id/attendCourses/:fk",
          method: "GET"
        },

        // INTERNAL. Use User.attendCourses.destroyById() instead.
        "prototype$__destroyById__attendCourses": {
          url: urlBase + "/users/:id/attendCourses/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.attendCourses.updateById() instead.
        "prototype$__updateById__attendCourses": {
          url: urlBase + "/users/:id/attendCourses/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.attendCourses.link() instead.
        "prototype$__link__attendCourses": {
          url: urlBase + "/users/:id/attendCourses/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.attendCourses.unlink() instead.
        "prototype$__unlink__attendCourses": {
          url: urlBase + "/users/:id/attendCourses/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.attendCourses.exists() instead.
        "prototype$__exists__attendCourses": {
          url: urlBase + "/users/:id/attendCourses/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use User.lectureCourses.findById() instead.
        "prototype$__findById__lectureCourses": {
          url: urlBase + "/users/:id/lectureCourses/:fk",
          method: "GET"
        },

        // INTERNAL. Use User.lectureCourses.destroyById() instead.
        "prototype$__destroyById__lectureCourses": {
          url: urlBase + "/users/:id/lectureCourses/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.lectureCourses.updateById() instead.
        "prototype$__updateById__lectureCourses": {
          url: urlBase + "/users/:id/lectureCourses/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.lectureCourses.link() instead.
        "prototype$__link__lectureCourses": {
          url: urlBase + "/users/:id/lectureCourses/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.lectureCourses.unlink() instead.
        "prototype$__unlink__lectureCourses": {
          url: urlBase + "/users/:id/lectureCourses/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.lectureCourses.exists() instead.
        "prototype$__exists__lectureCourses": {
          url: urlBase + "/users/:id/lectureCourses/rel/:fk",
          method: "HEAD"
        },

        /**
         * @ngdoc method
         * @name restServices.User#prototype$__get__accessTokens
         * @methodOf restServices.User
         *
         * @description
         *
         * Queries accessTokens of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/users/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.User#prototype$__create__accessTokens
         * @methodOf restServices.User
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/users/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name restServices.User#prototype$__delete__accessTokens
         * @methodOf restServices.User
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/users/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name restServices.User#prototype$__count__accessTokens
         * @methodOf restServices.User
         *
         * @description
         *
         * Counts accessTokens of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/users/:id/accessTokens/count",
          method: "GET"
        },

        // INTERNAL. Use User.attendClasses() instead.
        "prototype$__get__attendClasses": {
          isArray: true,
          url: urlBase + "/users/:id/attendClasses",
          method: "GET"
        },

        // INTERNAL. Use User.attendClasses.create() instead.
        "prototype$__create__attendClasses": {
          url: urlBase + "/users/:id/attendClasses",
          method: "POST"
        },

        // INTERNAL. Use User.attendClasses.destroyAll() instead.
        "prototype$__delete__attendClasses": {
          url: urlBase + "/users/:id/attendClasses",
          method: "DELETE"
        },

        // INTERNAL. Use User.attendClasses.count() instead.
        "prototype$__count__attendClasses": {
          url: urlBase + "/users/:id/attendClasses/count",
          method: "GET"
        },

        // INTERNAL. Use User.lectureClasses() instead.
        "prototype$__get__lectureClasses": {
          isArray: true,
          url: urlBase + "/users/:id/lectureClasses",
          method: "GET"
        },

        // INTERNAL. Use User.lectureClasses.create() instead.
        "prototype$__create__lectureClasses": {
          url: urlBase + "/users/:id/lectureClasses",
          method: "POST"
        },

        // INTERNAL. Use User.lectureClasses.destroyAll() instead.
        "prototype$__delete__lectureClasses": {
          url: urlBase + "/users/:id/lectureClasses",
          method: "DELETE"
        },

        // INTERNAL. Use User.lectureClasses.count() instead.
        "prototype$__count__lectureClasses": {
          url: urlBase + "/users/:id/lectureClasses/count",
          method: "GET"
        },

        // INTERNAL. Use User.attendCourses() instead.
        "prototype$__get__attendCourses": {
          isArray: true,
          url: urlBase + "/users/:id/attendCourses",
          method: "GET"
        },

        // INTERNAL. Use User.attendCourses.create() instead.
        "prototype$__create__attendCourses": {
          url: urlBase + "/users/:id/attendCourses",
          method: "POST"
        },

        // INTERNAL. Use User.attendCourses.destroyAll() instead.
        "prototype$__delete__attendCourses": {
          url: urlBase + "/users/:id/attendCourses",
          method: "DELETE"
        },

        // INTERNAL. Use User.attendCourses.count() instead.
        "prototype$__count__attendCourses": {
          url: urlBase + "/users/:id/attendCourses/count",
          method: "GET"
        },

        // INTERNAL. Use User.lectureCourses() instead.
        "prototype$__get__lectureCourses": {
          isArray: true,
          url: urlBase + "/users/:id/lectureCourses",
          method: "GET"
        },

        // INTERNAL. Use User.lectureCourses.create() instead.
        "prototype$__create__lectureCourses": {
          url: urlBase + "/users/:id/lectureCourses",
          method: "POST"
        },

        // INTERNAL. Use User.lectureCourses.destroyAll() instead.
        "prototype$__delete__lectureCourses": {
          url: urlBase + "/users/:id/lectureCourses",
          method: "DELETE"
        },

        // INTERNAL. Use User.lectureCourses.count() instead.
        "prototype$__count__lectureCourses": {
          url: urlBase + "/users/:id/lectureCourses/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.User#create
         * @methodOf restServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name restServices.User#upsert
         * @methodOf restServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/users",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name restServices.User#exists
         * @methodOf restServices.User
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/users/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.User#findById
         * @methodOf restServices.User
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/users/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.User#find
         * @methodOf restServices.User
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/users",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.User#findOne
         * @methodOf restServices.User
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/users/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.User#updateAll
         * @methodOf restServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/users/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name restServices.User#deleteById
         * @methodOf restServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/users/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name restServices.User#count
         * @methodOf restServices.User
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/users/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.User#prototype$updateAttributes
         * @methodOf restServices.User
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/users/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name restServices.User#login
         * @methodOf restServices.User
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/users/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name restServices.User#logout
         * @methodOf restServices.User
         *
         * @description
         *
         * Logout a user with access token
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/users/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name restServices.User#confirm
         * @methodOf restServices.User
         *
         * @description
         *
         * Confirm a user registration with email verification token
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/users/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.User#resetPassword
         * @methodOf restServices.User
         *
         * @description
         *
         * Reset password for a user with email
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/users/reset",
          method: "POST"
        },

        // INTERNAL. Use ClassAttendee.attendee() instead.
        "::get::ClassAttendee::attendee": {
          url: urlBase + "/ClassAttendees/:id/attendee",
          method: "GET"
        },

        // INTERNAL. Use ClassLecturer.lecturer() instead.
        "::get::ClassLecturer::lecturer": {
          url: urlBase + "/ClassLecturers/:id/lecturer",
          method: "GET"
        },

        // INTERNAL. Use CourseAttendee.attendee() instead.
        "::get::CourseAttendee::attendee": {
          url: urlBase + "/CourseAttendees/:id/attendee",
          method: "GET"
        },

        // INTERNAL. Use CourseLecturer.lecturer() instead.
        "::get::CourseLecturer::lecturer": {
          url: urlBase + "/CourseLecturers/:id/lecturer",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.User#getCurrent
         * @methodOf restServices.User
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/users" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name restServices.User#updateOrCreate
         * @methodOf restServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name restServices.User#update
         * @methodOf restServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name restServices.User#destroyById
         * @methodOf restServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name restServices.User#removeById
         * @methodOf restServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name restServices.User#getCachedCurrent
         * @methodOf restServices.User
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link restServices.User#login} or
         * {@link restServices.User#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A User instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name restServices.User#isAuthenticated
         * @methodOf restServices.User
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name restServices.User#getCurrentId
         * @methodOf restServices.User
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name restServices.User#modelName
    * @propertyOf restServices.User
    * @description
    * The name of the model represented by this $resource,
    * i.e. `User`.
    */
    R.modelName = "User";

    /**
     * @ngdoc object
     * @name lbServices.User.attendClasses
     * @header lbServices.User.attendClasses
     * @object
     * @description
     *
     * The object `User.attendClasses` groups methods
     * manipulating `Class` instances related to `User`.
     *
     * Call {@link lbServices.User#attendClasses User.attendClasses()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name restServices.User#attendClasses
         * @methodOf restServices.User
         *
         * @description
         *
         * Queries attendClasses of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R.attendClasses = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::get::user::attendClasses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.User.attendClasses#count
         * @methodOf restServices.User.attendClasses
         *
         * @description
         *
         * Counts attendClasses of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.attendClasses.count = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::count::user::attendClasses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.User.attendClasses#create
         * @methodOf restServices.User.attendClasses
         *
         * @description
         *
         * Creates a new instance in attendClasses of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R.attendClasses.create = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::create::user::attendClasses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.User.attendClasses#destroyAll
         * @methodOf restServices.User.attendClasses
         *
         * @description
         *
         * Deletes all attendClasses of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.attendClasses.destroyAll = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::delete::user::attendClasses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.User.attendClasses#destroyById
         * @methodOf restServices.User.attendClasses
         *
         * @description
         *
         * Delete a related item by id for attendClasses.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for attendClasses
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.attendClasses.destroyById = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::destroyById::user::attendClasses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.User.attendClasses#exists
         * @methodOf restServices.User.attendClasses
         *
         * @description
         *
         * Check the existence of attendClasses relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for attendClasses
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R.attendClasses.exists = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::exists::user::attendClasses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.User.attendClasses#findById
         * @methodOf restServices.User.attendClasses
         *
         * @description
         *
         * Find a related item by id for attendClasses.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for attendClasses
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R.attendClasses.findById = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::findById::user::attendClasses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.User.attendClasses#link
         * @methodOf restServices.User.attendClasses
         *
         * @description
         *
         * Add a related item by id for attendClasses.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for attendClasses
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R.attendClasses.link = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::link::user::attendClasses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.User.attendClasses#unlink
         * @methodOf restServices.User.attendClasses
         *
         * @description
         *
         * Remove the attendClasses relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for attendClasses
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.attendClasses.unlink = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::unlink::user::attendClasses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.User.attendClasses#updateById
         * @methodOf restServices.User.attendClasses
         *
         * @description
         *
         * Update a related item by id for attendClasses.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for attendClasses
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R.attendClasses.updateById = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::updateById::user::attendClasses"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.User.lectureClasses
     * @header lbServices.User.lectureClasses
     * @object
     * @description
     *
     * The object `User.lectureClasses` groups methods
     * manipulating `Class` instances related to `User`.
     *
     * Call {@link lbServices.User#lectureClasses User.lectureClasses()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name restServices.User#lectureClasses
         * @methodOf restServices.User
         *
         * @description
         *
         * Queries lectureClasses of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R.lectureClasses = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::get::user::lectureClasses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.User.lectureClasses#count
         * @methodOf restServices.User.lectureClasses
         *
         * @description
         *
         * Counts lectureClasses of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.lectureClasses.count = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::count::user::lectureClasses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.User.lectureClasses#create
         * @methodOf restServices.User.lectureClasses
         *
         * @description
         *
         * Creates a new instance in lectureClasses of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R.lectureClasses.create = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::create::user::lectureClasses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.User.lectureClasses#destroyAll
         * @methodOf restServices.User.lectureClasses
         *
         * @description
         *
         * Deletes all lectureClasses of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.lectureClasses.destroyAll = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::delete::user::lectureClasses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.User.lectureClasses#destroyById
         * @methodOf restServices.User.lectureClasses
         *
         * @description
         *
         * Delete a related item by id for lectureClasses.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for lectureClasses
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.lectureClasses.destroyById = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::destroyById::user::lectureClasses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.User.lectureClasses#exists
         * @methodOf restServices.User.lectureClasses
         *
         * @description
         *
         * Check the existence of lectureClasses relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for lectureClasses
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R.lectureClasses.exists = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::exists::user::lectureClasses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.User.lectureClasses#findById
         * @methodOf restServices.User.lectureClasses
         *
         * @description
         *
         * Find a related item by id for lectureClasses.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for lectureClasses
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R.lectureClasses.findById = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::findById::user::lectureClasses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.User.lectureClasses#link
         * @methodOf restServices.User.lectureClasses
         *
         * @description
         *
         * Add a related item by id for lectureClasses.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for lectureClasses
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R.lectureClasses.link = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::link::user::lectureClasses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.User.lectureClasses#unlink
         * @methodOf restServices.User.lectureClasses
         *
         * @description
         *
         * Remove the lectureClasses relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for lectureClasses
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.lectureClasses.unlink = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::unlink::user::lectureClasses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.User.lectureClasses#updateById
         * @methodOf restServices.User.lectureClasses
         *
         * @description
         *
         * Update a related item by id for lectureClasses.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for lectureClasses
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R.lectureClasses.updateById = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::updateById::user::lectureClasses"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.User.attendCourses
     * @header lbServices.User.attendCourses
     * @object
     * @description
     *
     * The object `User.attendCourses` groups methods
     * manipulating `Course` instances related to `User`.
     *
     * Call {@link lbServices.User#attendCourses User.attendCourses()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name restServices.User#attendCourses
         * @methodOf restServices.User
         *
         * @description
         *
         * Queries attendCourses of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.attendCourses = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::get::user::attendCourses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.User.attendCourses#count
         * @methodOf restServices.User.attendCourses
         *
         * @description
         *
         * Counts attendCourses of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.attendCourses.count = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::count::user::attendCourses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.User.attendCourses#create
         * @methodOf restServices.User.attendCourses
         *
         * @description
         *
         * Creates a new instance in attendCourses of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.attendCourses.create = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::create::user::attendCourses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.User.attendCourses#destroyAll
         * @methodOf restServices.User.attendCourses
         *
         * @description
         *
         * Deletes all attendCourses of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.attendCourses.destroyAll = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::delete::user::attendCourses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.User.attendCourses#destroyById
         * @methodOf restServices.User.attendCourses
         *
         * @description
         *
         * Delete a related item by id for attendCourses.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for attendCourses
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.attendCourses.destroyById = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::destroyById::user::attendCourses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.User.attendCourses#exists
         * @methodOf restServices.User.attendCourses
         *
         * @description
         *
         * Check the existence of attendCourses relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for attendCourses
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.attendCourses.exists = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::exists::user::attendCourses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.User.attendCourses#findById
         * @methodOf restServices.User.attendCourses
         *
         * @description
         *
         * Find a related item by id for attendCourses.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for attendCourses
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.attendCourses.findById = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::findById::user::attendCourses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.User.attendCourses#link
         * @methodOf restServices.User.attendCourses
         *
         * @description
         *
         * Add a related item by id for attendCourses.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for attendCourses
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.attendCourses.link = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::link::user::attendCourses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.User.attendCourses#unlink
         * @methodOf restServices.User.attendCourses
         *
         * @description
         *
         * Remove the attendCourses relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for attendCourses
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.attendCourses.unlink = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::unlink::user::attendCourses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.User.attendCourses#updateById
         * @methodOf restServices.User.attendCourses
         *
         * @description
         *
         * Update a related item by id for attendCourses.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for attendCourses
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.attendCourses.updateById = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::updateById::user::attendCourses"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.User.lectureCourses
     * @header lbServices.User.lectureCourses
     * @object
     * @description
     *
     * The object `User.lectureCourses` groups methods
     * manipulating `Course` instances related to `User`.
     *
     * Call {@link lbServices.User#lectureCourses User.lectureCourses()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name restServices.User#lectureCourses
         * @methodOf restServices.User
         *
         * @description
         *
         * Queries lectureCourses of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.lectureCourses = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::get::user::lectureCourses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.User.lectureCourses#count
         * @methodOf restServices.User.lectureCourses
         *
         * @description
         *
         * Counts lectureCourses of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.lectureCourses.count = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::count::user::lectureCourses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.User.lectureCourses#create
         * @methodOf restServices.User.lectureCourses
         *
         * @description
         *
         * Creates a new instance in lectureCourses of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.lectureCourses.create = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::create::user::lectureCourses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.User.lectureCourses#destroyAll
         * @methodOf restServices.User.lectureCourses
         *
         * @description
         *
         * Deletes all lectureCourses of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.lectureCourses.destroyAll = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::delete::user::lectureCourses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.User.lectureCourses#destroyById
         * @methodOf restServices.User.lectureCourses
         *
         * @description
         *
         * Delete a related item by id for lectureCourses.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for lectureCourses
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.lectureCourses.destroyById = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::destroyById::user::lectureCourses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.User.lectureCourses#exists
         * @methodOf restServices.User.lectureCourses
         *
         * @description
         *
         * Check the existence of lectureCourses relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for lectureCourses
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.lectureCourses.exists = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::exists::user::lectureCourses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.User.lectureCourses#findById
         * @methodOf restServices.User.lectureCourses
         *
         * @description
         *
         * Find a related item by id for lectureCourses.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for lectureCourses
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.lectureCourses.findById = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::findById::user::lectureCourses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.User.lectureCourses#link
         * @methodOf restServices.User.lectureCourses
         *
         * @description
         *
         * Add a related item by id for lectureCourses.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for lectureCourses
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.lectureCourses.link = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::link::user::lectureCourses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.User.lectureCourses#unlink
         * @methodOf restServices.User.lectureCourses
         *
         * @description
         *
         * Remove the lectureCourses relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for lectureCourses
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.lectureCourses.unlink = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::unlink::user::lectureCourses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.User.lectureCourses#updateById
         * @methodOf restServices.User.lectureCourses
         *
         * @description
         *
         * Update a related item by id for lectureCourses.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for lectureCourses
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.lectureCourses.updateById = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::updateById::user::lectureCourses"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name restServices.Slide
 * @header restServices.Slide
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Slide` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Slide",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Slides/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Slide.slideDeck() instead.
        "prototype$__get__slideDeck": {
          url: urlBase + "/Slides/:id/slideDeck",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.Slide#create
         * @methodOf restServices.Slide
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Slide` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Slides",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name restServices.Slide#upsert
         * @methodOf restServices.Slide
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Slide` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Slides",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name restServices.Slide#exists
         * @methodOf restServices.Slide
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Slides/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.Slide#findById
         * @methodOf restServices.Slide
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Slide` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Slides/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.Slide#find
         * @methodOf restServices.Slide
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Slide` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Slides",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.Slide#findOne
         * @methodOf restServices.Slide
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Slide` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Slides/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.Slide#updateAll
         * @methodOf restServices.Slide
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Slides/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name restServices.Slide#deleteById
         * @methodOf restServices.Slide
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Slides/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name restServices.Slide#count
         * @methodOf restServices.Slide
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Slides/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.Slide#prototype$updateAttributes
         * @methodOf restServices.Slide
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Slide` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Slides/:id",
          method: "PUT"
        },

        // INTERNAL. Use SlideDeck.slides.findById() instead.
        "::findById::SlideDeck::slides": {
          url: urlBase + "/SlideDecks/:id/slides/:fk",
          method: "GET"
        },

        // INTERNAL. Use SlideDeck.slides.destroyById() instead.
        "::destroyById::SlideDeck::slides": {
          url: urlBase + "/SlideDecks/:id/slides/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use SlideDeck.slides.updateById() instead.
        "::updateById::SlideDeck::slides": {
          url: urlBase + "/SlideDecks/:id/slides/:fk",
          method: "PUT"
        },

        // INTERNAL. Use SlideDeck.slides() instead.
        "::get::SlideDeck::slides": {
          isArray: true,
          url: urlBase + "/SlideDecks/:id/slides",
          method: "GET"
        },

        // INTERNAL. Use SlideDeck.slides.create() instead.
        "::create::SlideDeck::slides": {
          url: urlBase + "/SlideDecks/:id/slides",
          method: "POST"
        },

        // INTERNAL. Use SlideDeck.slides.destroyAll() instead.
        "::delete::SlideDeck::slides": {
          url: urlBase + "/SlideDecks/:id/slides",
          method: "DELETE"
        },

        // INTERNAL. Use SlideDeck.slides.count() instead.
        "::count::SlideDeck::slides": {
          url: urlBase + "/SlideDecks/:id/slides/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name restServices.Slide#updateOrCreate
         * @methodOf restServices.Slide
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Slide` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name restServices.Slide#update
         * @methodOf restServices.Slide
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name restServices.Slide#destroyById
         * @methodOf restServices.Slide
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name restServices.Slide#removeById
         * @methodOf restServices.Slide
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name restServices.Slide#modelName
    * @propertyOf restServices.Slide
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Slide`.
    */
    R.modelName = "Slide";


        /**
         * @ngdoc method
         * @name restServices.Slide#slideDeck
         * @methodOf restServices.Slide
         *
         * @description
         *
         * Fetches belongsTo relation slideDeck.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SlideDeck` object.)
         * </em>
         */
        R.slideDeck = function() {
          var TargetResource = $injector.get("SlideDeck");
          var action = TargetResource["::get::Slide::slideDeck"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name restServices.SlideDeck
 * @header restServices.SlideDeck
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `SlideDeck` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "SlideDeck",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/SlideDecks/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use SlideDeck.slides.findById() instead.
        "prototype$__findById__slides": {
          url: urlBase + "/SlideDecks/:id/slides/:fk",
          method: "GET"
        },

        // INTERNAL. Use SlideDeck.slides.destroyById() instead.
        "prototype$__destroyById__slides": {
          url: urlBase + "/SlideDecks/:id/slides/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use SlideDeck.slides.updateById() instead.
        "prototype$__updateById__slides": {
          url: urlBase + "/SlideDecks/:id/slides/:fk",
          method: "PUT"
        },

        // INTERNAL. Use SlideDeck.classes.findById() instead.
        "prototype$__findById__classes": {
          url: urlBase + "/SlideDecks/:id/classes/:fk",
          method: "GET"
        },

        // INTERNAL. Use SlideDeck.classes.destroyById() instead.
        "prototype$__destroyById__classes": {
          url: urlBase + "/SlideDecks/:id/classes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use SlideDeck.classes.updateById() instead.
        "prototype$__updateById__classes": {
          url: urlBase + "/SlideDecks/:id/classes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use SlideDeck.classes.link() instead.
        "prototype$__link__classes": {
          url: urlBase + "/SlideDecks/:id/classes/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use SlideDeck.classes.unlink() instead.
        "prototype$__unlink__classes": {
          url: urlBase + "/SlideDecks/:id/classes/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use SlideDeck.classes.exists() instead.
        "prototype$__exists__classes": {
          url: urlBase + "/SlideDecks/:id/classes/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use SlideDeck.slides() instead.
        "prototype$__get__slides": {
          isArray: true,
          url: urlBase + "/SlideDecks/:id/slides",
          method: "GET"
        },

        // INTERNAL. Use SlideDeck.slides.create() instead.
        "prototype$__create__slides": {
          url: urlBase + "/SlideDecks/:id/slides",
          method: "POST"
        },

        // INTERNAL. Use SlideDeck.slides.destroyAll() instead.
        "prototype$__delete__slides": {
          url: urlBase + "/SlideDecks/:id/slides",
          method: "DELETE"
        },

        // INTERNAL. Use SlideDeck.slides.count() instead.
        "prototype$__count__slides": {
          url: urlBase + "/SlideDecks/:id/slides/count",
          method: "GET"
        },

        // INTERNAL. Use SlideDeck.classes() instead.
        "prototype$__get__classes": {
          isArray: true,
          url: urlBase + "/SlideDecks/:id/classes",
          method: "GET"
        },

        // INTERNAL. Use SlideDeck.classes.create() instead.
        "prototype$__create__classes": {
          url: urlBase + "/SlideDecks/:id/classes",
          method: "POST"
        },

        // INTERNAL. Use SlideDeck.classes.destroyAll() instead.
        "prototype$__delete__classes": {
          url: urlBase + "/SlideDecks/:id/classes",
          method: "DELETE"
        },

        // INTERNAL. Use SlideDeck.classes.count() instead.
        "prototype$__count__classes": {
          url: urlBase + "/SlideDecks/:id/classes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.SlideDeck#create
         * @methodOf restServices.SlideDeck
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SlideDeck` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/SlideDecks",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name restServices.SlideDeck#upsert
         * @methodOf restServices.SlideDeck
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SlideDeck` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/SlideDecks",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name restServices.SlideDeck#exists
         * @methodOf restServices.SlideDeck
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/SlideDecks/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.SlideDeck#findById
         * @methodOf restServices.SlideDeck
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SlideDeck` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/SlideDecks/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.SlideDeck#find
         * @methodOf restServices.SlideDeck
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SlideDeck` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/SlideDecks",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.SlideDeck#findOne
         * @methodOf restServices.SlideDeck
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SlideDeck` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/SlideDecks/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.SlideDeck#updateAll
         * @methodOf restServices.SlideDeck
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/SlideDecks/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name restServices.SlideDeck#deleteById
         * @methodOf restServices.SlideDeck
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/SlideDecks/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name restServices.SlideDeck#count
         * @methodOf restServices.SlideDeck
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/SlideDecks/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.SlideDeck#prototype$updateAttributes
         * @methodOf restServices.SlideDeck
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SlideDeck` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/SlideDecks/:id",
          method: "PUT"
        },

        // INTERNAL. Use Slide.slideDeck() instead.
        "::get::Slide::slideDeck": {
          url: urlBase + "/Slides/:id/slideDeck",
          method: "GET"
        },

        // INTERNAL. Use SlideShow.slideDeck() instead.
        "::get::SlideShow::slideDeck": {
          url: urlBase + "/SlideShows/:id/slideDeck",
          method: "GET"
        },

        // INTERNAL. Use Class.slideDecks.findById() instead.
        "::findById::Class::slideDecks": {
          url: urlBase + "/Classes/:id/slideDecks/:fk",
          method: "GET"
        },

        // INTERNAL. Use Class.slideDecks.destroyById() instead.
        "::destroyById::Class::slideDecks": {
          url: urlBase + "/Classes/:id/slideDecks/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Class.slideDecks.updateById() instead.
        "::updateById::Class::slideDecks": {
          url: urlBase + "/Classes/:id/slideDecks/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Class.slideDecks.link() instead.
        "::link::Class::slideDecks": {
          url: urlBase + "/Classes/:id/slideDecks/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Class.slideDecks.unlink() instead.
        "::unlink::Class::slideDecks": {
          url: urlBase + "/Classes/:id/slideDecks/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Class.slideDecks.exists() instead.
        "::exists::Class::slideDecks": {
          url: urlBase + "/Classes/:id/slideDecks/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Class.slideDecks() instead.
        "::get::Class::slideDecks": {
          isArray: true,
          url: urlBase + "/Classes/:id/slideDecks",
          method: "GET"
        },

        // INTERNAL. Use Class.slideDecks.create() instead.
        "::create::Class::slideDecks": {
          url: urlBase + "/Classes/:id/slideDecks",
          method: "POST"
        },

        // INTERNAL. Use Class.slideDecks.destroyAll() instead.
        "::delete::Class::slideDecks": {
          url: urlBase + "/Classes/:id/slideDecks",
          method: "DELETE"
        },

        // INTERNAL. Use Class.slideDecks.count() instead.
        "::count::Class::slideDecks": {
          url: urlBase + "/Classes/:id/slideDecks/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name restServices.SlideDeck#updateOrCreate
         * @methodOf restServices.SlideDeck
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SlideDeck` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name restServices.SlideDeck#update
         * @methodOf restServices.SlideDeck
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name restServices.SlideDeck#destroyById
         * @methodOf restServices.SlideDeck
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name restServices.SlideDeck#removeById
         * @methodOf restServices.SlideDeck
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name restServices.SlideDeck#modelName
    * @propertyOf restServices.SlideDeck
    * @description
    * The name of the model represented by this $resource,
    * i.e. `SlideDeck`.
    */
    R.modelName = "SlideDeck";

    /**
     * @ngdoc object
     * @name lbServices.SlideDeck.slides
     * @header lbServices.SlideDeck.slides
     * @object
     * @description
     *
     * The object `SlideDeck.slides` groups methods
     * manipulating `Slide` instances related to `SlideDeck`.
     *
     * Call {@link lbServices.SlideDeck#slides SlideDeck.slides()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name restServices.SlideDeck#slides
         * @methodOf restServices.SlideDeck
         *
         * @description
         *
         * Queries slides of SlideDeck.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Slide` object.)
         * </em>
         */
        R.slides = function() {
          var TargetResource = $injector.get("Slide");
          var action = TargetResource["::get::SlideDeck::slides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.SlideDeck.slides#count
         * @methodOf restServices.SlideDeck.slides
         *
         * @description
         *
         * Counts slides of SlideDeck.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.slides.count = function() {
          var TargetResource = $injector.get("Slide");
          var action = TargetResource["::count::SlideDeck::slides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.SlideDeck.slides#create
         * @methodOf restServices.SlideDeck.slides
         *
         * @description
         *
         * Creates a new instance in slides of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Slide` object.)
         * </em>
         */
        R.slides.create = function() {
          var TargetResource = $injector.get("Slide");
          var action = TargetResource["::create::SlideDeck::slides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.SlideDeck.slides#destroyAll
         * @methodOf restServices.SlideDeck.slides
         *
         * @description
         *
         * Deletes all slides of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.slides.destroyAll = function() {
          var TargetResource = $injector.get("Slide");
          var action = TargetResource["::delete::SlideDeck::slides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.SlideDeck.slides#destroyById
         * @methodOf restServices.SlideDeck.slides
         *
         * @description
         *
         * Delete a related item by id for slides.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for slides
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.slides.destroyById = function() {
          var TargetResource = $injector.get("Slide");
          var action = TargetResource["::destroyById::SlideDeck::slides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.SlideDeck.slides#findById
         * @methodOf restServices.SlideDeck.slides
         *
         * @description
         *
         * Find a related item by id for slides.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for slides
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Slide` object.)
         * </em>
         */
        R.slides.findById = function() {
          var TargetResource = $injector.get("Slide");
          var action = TargetResource["::findById::SlideDeck::slides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.SlideDeck.slides#updateById
         * @methodOf restServices.SlideDeck.slides
         *
         * @description
         *
         * Update a related item by id for slides.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for slides
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Slide` object.)
         * </em>
         */
        R.slides.updateById = function() {
          var TargetResource = $injector.get("Slide");
          var action = TargetResource["::updateById::SlideDeck::slides"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.SlideDeck.classes
     * @header lbServices.SlideDeck.classes
     * @object
     * @description
     *
     * The object `SlideDeck.classes` groups methods
     * manipulating `Class` instances related to `SlideDeck`.
     *
     * Call {@link lbServices.SlideDeck#classes SlideDeck.classes()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name restServices.SlideDeck#classes
         * @methodOf restServices.SlideDeck
         *
         * @description
         *
         * Queries classes of SlideDeck.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R.classes = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::get::SlideDeck::classes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.SlideDeck.classes#count
         * @methodOf restServices.SlideDeck.classes
         *
         * @description
         *
         * Counts classes of SlideDeck.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.classes.count = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::count::SlideDeck::classes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.SlideDeck.classes#create
         * @methodOf restServices.SlideDeck.classes
         *
         * @description
         *
         * Creates a new instance in classes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R.classes.create = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::create::SlideDeck::classes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.SlideDeck.classes#destroyAll
         * @methodOf restServices.SlideDeck.classes
         *
         * @description
         *
         * Deletes all classes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.classes.destroyAll = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::delete::SlideDeck::classes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.SlideDeck.classes#destroyById
         * @methodOf restServices.SlideDeck.classes
         *
         * @description
         *
         * Delete a related item by id for classes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for classes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.classes.destroyById = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::destroyById::SlideDeck::classes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.SlideDeck.classes#exists
         * @methodOf restServices.SlideDeck.classes
         *
         * @description
         *
         * Check the existence of classes relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for classes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R.classes.exists = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::exists::SlideDeck::classes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.SlideDeck.classes#findById
         * @methodOf restServices.SlideDeck.classes
         *
         * @description
         *
         * Find a related item by id for classes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for classes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R.classes.findById = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::findById::SlideDeck::classes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.SlideDeck.classes#link
         * @methodOf restServices.SlideDeck.classes
         *
         * @description
         *
         * Add a related item by id for classes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for classes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R.classes.link = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::link::SlideDeck::classes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.SlideDeck.classes#unlink
         * @methodOf restServices.SlideDeck.classes
         *
         * @description
         *
         * Remove the classes relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for classes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.classes.unlink = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::unlink::SlideDeck::classes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.SlideDeck.classes#updateById
         * @methodOf restServices.SlideDeck.classes
         *
         * @description
         *
         * Update a related item by id for classes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for classes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R.classes.updateById = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::updateById::SlideDeck::classes"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name restServices.SlideShow
 * @header restServices.SlideShow
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `SlideShow` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "SlideShow",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/SlideShows/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use SlideShow.slideDeck() instead.
        "prototype$__get__slideDeck": {
          url: urlBase + "/SlideShows/:id/slideDeck",
          method: "GET"
        },

        // INTERNAL. Use SlideShow.class() instead.
        "prototype$__get__class": {
          url: urlBase + "/SlideShows/:id/class",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.SlideShow#create
         * @methodOf restServices.SlideShow
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SlideShow` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/SlideShows",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name restServices.SlideShow#upsert
         * @methodOf restServices.SlideShow
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SlideShow` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/SlideShows",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name restServices.SlideShow#exists
         * @methodOf restServices.SlideShow
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/SlideShows/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.SlideShow#findById
         * @methodOf restServices.SlideShow
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SlideShow` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/SlideShows/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.SlideShow#find
         * @methodOf restServices.SlideShow
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SlideShow` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/SlideShows",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.SlideShow#findOne
         * @methodOf restServices.SlideShow
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SlideShow` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/SlideShows/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.SlideShow#updateAll
         * @methodOf restServices.SlideShow
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/SlideShows/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name restServices.SlideShow#deleteById
         * @methodOf restServices.SlideShow
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/SlideShows/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name restServices.SlideShow#count
         * @methodOf restServices.SlideShow
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/SlideShows/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.SlideShow#prototype$updateAttributes
         * @methodOf restServices.SlideShow
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SlideShow` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/SlideShows/:id",
          method: "PUT"
        },
      }
    );



        /**
         * @ngdoc method
         * @name restServices.SlideShow#updateOrCreate
         * @methodOf restServices.SlideShow
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SlideShow` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name restServices.SlideShow#update
         * @methodOf restServices.SlideShow
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name restServices.SlideShow#destroyById
         * @methodOf restServices.SlideShow
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name restServices.SlideShow#removeById
         * @methodOf restServices.SlideShow
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name restServices.SlideShow#modelName
    * @propertyOf restServices.SlideShow
    * @description
    * The name of the model represented by this $resource,
    * i.e. `SlideShow`.
    */
    R.modelName = "SlideShow";


        /**
         * @ngdoc method
         * @name restServices.SlideShow#slideDeck
         * @methodOf restServices.SlideShow
         *
         * @description
         *
         * Fetches belongsTo relation slideDeck.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SlideDeck` object.)
         * </em>
         */
        R.slideDeck = function() {
          var TargetResource = $injector.get("SlideDeck");
          var action = TargetResource["::get::SlideShow::slideDeck"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.SlideShow#class
         * @methodOf restServices.SlideShow
         *
         * @description
         *
         * Fetches belongsTo relation class.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R.class = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::get::SlideShow::class"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name restServices.Class
 * @header restServices.Class
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Class` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Class",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Classes/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Class.slideDecks.findById() instead.
        "prototype$__findById__slideDecks": {
          url: urlBase + "/Classes/:id/slideDecks/:fk",
          method: "GET"
        },

        // INTERNAL. Use Class.slideDecks.destroyById() instead.
        "prototype$__destroyById__slideDecks": {
          url: urlBase + "/Classes/:id/slideDecks/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Class.slideDecks.updateById() instead.
        "prototype$__updateById__slideDecks": {
          url: urlBase + "/Classes/:id/slideDecks/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Class.slideDecks.link() instead.
        "prototype$__link__slideDecks": {
          url: urlBase + "/Classes/:id/slideDecks/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Class.slideDecks.unlink() instead.
        "prototype$__unlink__slideDecks": {
          url: urlBase + "/Classes/:id/slideDecks/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Class.slideDecks.exists() instead.
        "prototype$__exists__slideDecks": {
          url: urlBase + "/Classes/:id/slideDecks/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Class.chatMessages.findById() instead.
        "prototype$__findById__chatMessages": {
          url: urlBase + "/Classes/:id/chatMessages/:fk",
          method: "GET"
        },

        // INTERNAL. Use Class.chatMessages.destroyById() instead.
        "prototype$__destroyById__chatMessages": {
          url: urlBase + "/Classes/:id/chatMessages/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Class.chatMessages.updateById() instead.
        "prototype$__updateById__chatMessages": {
          url: urlBase + "/Classes/:id/chatMessages/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Class.activityLogs.findById() instead.
        "prototype$__findById__activityLogs": {
          url: urlBase + "/Classes/:id/activityLogs/:fk",
          method: "GET"
        },

        // INTERNAL. Use Class.activityLogs.destroyById() instead.
        "prototype$__destroyById__activityLogs": {
          url: urlBase + "/Classes/:id/activityLogs/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Class.activityLogs.updateById() instead.
        "prototype$__updateById__activityLogs": {
          url: urlBase + "/Classes/:id/activityLogs/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name restServices.Class#prototype$__findById__attendees
         * @methodOf restServices.Class
         *
         * @description
         *
         * Find a related item by id for attendees.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for attendees
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        "prototype$__findById__attendees": {
          url: urlBase + "/Classes/:id/attendees/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.Class#prototype$__destroyById__attendees
         * @methodOf restServices.Class
         *
         * @description
         *
         * Delete a related item by id for attendees.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for attendees
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__attendees": {
          url: urlBase + "/Classes/:id/attendees/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name restServices.Class#prototype$__updateById__attendees
         * @methodOf restServices.Class
         *
         * @description
         *
         * Update a related item by id for attendees.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for attendees
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        "prototype$__updateById__attendees": {
          url: urlBase + "/Classes/:id/attendees/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name restServices.Class#prototype$__link__attendees
         * @methodOf restServices.Class
         *
         * @description
         *
         * Add a related item by id for attendees.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for attendees
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        "prototype$__link__attendees": {
          url: urlBase + "/Classes/:id/attendees/rel/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name restServices.Class#prototype$__unlink__attendees
         * @methodOf restServices.Class
         *
         * @description
         *
         * Remove the attendees relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for attendees
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__unlink__attendees": {
          url: urlBase + "/Classes/:id/attendees/rel/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name restServices.Class#prototype$__exists__attendees
         * @methodOf restServices.Class
         *
         * @description
         *
         * Check the existence of attendees relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for attendees
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        "prototype$__exists__attendees": {
          url: urlBase + "/Classes/:id/attendees/rel/:fk",
          method: "HEAD"
        },

        /**
         * @ngdoc method
         * @name restServices.Class#prototype$__findById__lecturers
         * @methodOf restServices.Class
         *
         * @description
         *
         * Find a related item by id for lecturers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for lecturers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        "prototype$__findById__lecturers": {
          url: urlBase + "/Classes/:id/lecturers/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.Class#prototype$__destroyById__lecturers
         * @methodOf restServices.Class
         *
         * @description
         *
         * Delete a related item by id for lecturers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for lecturers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__lecturers": {
          url: urlBase + "/Classes/:id/lecturers/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name restServices.Class#prototype$__updateById__lecturers
         * @methodOf restServices.Class
         *
         * @description
         *
         * Update a related item by id for lecturers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for lecturers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        "prototype$__updateById__lecturers": {
          url: urlBase + "/Classes/:id/lecturers/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name restServices.Class#prototype$__link__lecturers
         * @methodOf restServices.Class
         *
         * @description
         *
         * Add a related item by id for lecturers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for lecturers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        "prototype$__link__lecturers": {
          url: urlBase + "/Classes/:id/lecturers/rel/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name restServices.Class#prototype$__unlink__lecturers
         * @methodOf restServices.Class
         *
         * @description
         *
         * Remove the lecturers relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for lecturers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__unlink__lecturers": {
          url: urlBase + "/Classes/:id/lecturers/rel/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name restServices.Class#prototype$__exists__lecturers
         * @methodOf restServices.Class
         *
         * @description
         *
         * Check the existence of lecturers relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for lecturers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        "prototype$__exists__lecturers": {
          url: urlBase + "/Classes/:id/lecturers/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Class.slideDecks() instead.
        "prototype$__get__slideDecks": {
          isArray: true,
          url: urlBase + "/Classes/:id/slideDecks",
          method: "GET"
        },

        // INTERNAL. Use Class.slideDecks.create() instead.
        "prototype$__create__slideDecks": {
          url: urlBase + "/Classes/:id/slideDecks",
          method: "POST"
        },

        // INTERNAL. Use Class.slideDecks.destroyAll() instead.
        "prototype$__delete__slideDecks": {
          url: urlBase + "/Classes/:id/slideDecks",
          method: "DELETE"
        },

        // INTERNAL. Use Class.slideDecks.count() instead.
        "prototype$__count__slideDecks": {
          url: urlBase + "/Classes/:id/slideDecks/count",
          method: "GET"
        },

        // INTERNAL. Use Class.chatMessages() instead.
        "prototype$__get__chatMessages": {
          isArray: true,
          url: urlBase + "/Classes/:id/chatMessages",
          method: "GET"
        },

        // INTERNAL. Use Class.chatMessages.create() instead.
        "prototype$__create__chatMessages": {
          url: urlBase + "/Classes/:id/chatMessages",
          method: "POST"
        },

        // INTERNAL. Use Class.chatMessages.destroyAll() instead.
        "prototype$__delete__chatMessages": {
          url: urlBase + "/Classes/:id/chatMessages",
          method: "DELETE"
        },

        // INTERNAL. Use Class.chatMessages.count() instead.
        "prototype$__count__chatMessages": {
          url: urlBase + "/Classes/:id/chatMessages/count",
          method: "GET"
        },

        // INTERNAL. Use Class.activityLogs() instead.
        "prototype$__get__activityLogs": {
          isArray: true,
          url: urlBase + "/Classes/:id/activityLogs",
          method: "GET"
        },

        // INTERNAL. Use Class.activityLogs.create() instead.
        "prototype$__create__activityLogs": {
          url: urlBase + "/Classes/:id/activityLogs",
          method: "POST"
        },

        // INTERNAL. Use Class.activityLogs.destroyAll() instead.
        "prototype$__delete__activityLogs": {
          url: urlBase + "/Classes/:id/activityLogs",
          method: "DELETE"
        },

        // INTERNAL. Use Class.activityLogs.count() instead.
        "prototype$__count__activityLogs": {
          url: urlBase + "/Classes/:id/activityLogs/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.Class#prototype$__get__attendees
         * @methodOf restServices.Class
         *
         * @description
         *
         * Queries attendees of Class.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        "prototype$__get__attendees": {
          isArray: true,
          url: urlBase + "/Classes/:id/attendees",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.Class#prototype$__create__attendees
         * @methodOf restServices.Class
         *
         * @description
         *
         * Creates a new instance in attendees of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        "prototype$__create__attendees": {
          url: urlBase + "/Classes/:id/attendees",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name restServices.Class#prototype$__delete__attendees
         * @methodOf restServices.Class
         *
         * @description
         *
         * Deletes all attendees of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__attendees": {
          url: urlBase + "/Classes/:id/attendees",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name restServices.Class#prototype$__count__attendees
         * @methodOf restServices.Class
         *
         * @description
         *
         * Counts attendees of Class.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__attendees": {
          url: urlBase + "/Classes/:id/attendees/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.Class#prototype$__get__lecturers
         * @methodOf restServices.Class
         *
         * @description
         *
         * Queries lecturers of Class.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        "prototype$__get__lecturers": {
          isArray: true,
          url: urlBase + "/Classes/:id/lecturers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.Class#prototype$__create__lecturers
         * @methodOf restServices.Class
         *
         * @description
         *
         * Creates a new instance in lecturers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        "prototype$__create__lecturers": {
          url: urlBase + "/Classes/:id/lecturers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name restServices.Class#prototype$__delete__lecturers
         * @methodOf restServices.Class
         *
         * @description
         *
         * Deletes all lecturers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__lecturers": {
          url: urlBase + "/Classes/:id/lecturers",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name restServices.Class#prototype$__count__lecturers
         * @methodOf restServices.Class
         *
         * @description
         *
         * Counts lecturers of Class.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__lecturers": {
          url: urlBase + "/Classes/:id/lecturers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.Class#create
         * @methodOf restServices.Class
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Classes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name restServices.Class#upsert
         * @methodOf restServices.Class
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Classes",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name restServices.Class#exists
         * @methodOf restServices.Class
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Classes/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.Class#findById
         * @methodOf restServices.Class
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Classes/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.Class#find
         * @methodOf restServices.Class
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Classes",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.Class#findOne
         * @methodOf restServices.Class
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Classes/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.Class#updateAll
         * @methodOf restServices.Class
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Classes/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name restServices.Class#deleteById
         * @methodOf restServices.Class
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Classes/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name restServices.Class#count
         * @methodOf restServices.Class
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Classes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.Class#prototype$updateAttributes
         * @methodOf restServices.Class
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Classes/:id",
          method: "PUT"
        },

        // INTERNAL. Use User.attendClasses.findById() instead.
        "::findById::user::attendClasses": {
          url: urlBase + "/users/:id/attendClasses/:fk",
          method: "GET"
        },

        // INTERNAL. Use User.attendClasses.destroyById() instead.
        "::destroyById::user::attendClasses": {
          url: urlBase + "/users/:id/attendClasses/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.attendClasses.updateById() instead.
        "::updateById::user::attendClasses": {
          url: urlBase + "/users/:id/attendClasses/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.attendClasses.link() instead.
        "::link::user::attendClasses": {
          url: urlBase + "/users/:id/attendClasses/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.attendClasses.unlink() instead.
        "::unlink::user::attendClasses": {
          url: urlBase + "/users/:id/attendClasses/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.attendClasses.exists() instead.
        "::exists::user::attendClasses": {
          url: urlBase + "/users/:id/attendClasses/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use User.lectureClasses.findById() instead.
        "::findById::user::lectureClasses": {
          url: urlBase + "/users/:id/lectureClasses/:fk",
          method: "GET"
        },

        // INTERNAL. Use User.lectureClasses.destroyById() instead.
        "::destroyById::user::lectureClasses": {
          url: urlBase + "/users/:id/lectureClasses/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.lectureClasses.updateById() instead.
        "::updateById::user::lectureClasses": {
          url: urlBase + "/users/:id/lectureClasses/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.lectureClasses.link() instead.
        "::link::user::lectureClasses": {
          url: urlBase + "/users/:id/lectureClasses/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.lectureClasses.unlink() instead.
        "::unlink::user::lectureClasses": {
          url: urlBase + "/users/:id/lectureClasses/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.lectureClasses.exists() instead.
        "::exists::user::lectureClasses": {
          url: urlBase + "/users/:id/lectureClasses/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use User.attendClasses() instead.
        "::get::user::attendClasses": {
          isArray: true,
          url: urlBase + "/users/:id/attendClasses",
          method: "GET"
        },

        // INTERNAL. Use User.attendClasses.create() instead.
        "::create::user::attendClasses": {
          url: urlBase + "/users/:id/attendClasses",
          method: "POST"
        },

        // INTERNAL. Use User.attendClasses.destroyAll() instead.
        "::delete::user::attendClasses": {
          url: urlBase + "/users/:id/attendClasses",
          method: "DELETE"
        },

        // INTERNAL. Use User.attendClasses.count() instead.
        "::count::user::attendClasses": {
          url: urlBase + "/users/:id/attendClasses/count",
          method: "GET"
        },

        // INTERNAL. Use User.lectureClasses() instead.
        "::get::user::lectureClasses": {
          isArray: true,
          url: urlBase + "/users/:id/lectureClasses",
          method: "GET"
        },

        // INTERNAL. Use User.lectureClasses.create() instead.
        "::create::user::lectureClasses": {
          url: urlBase + "/users/:id/lectureClasses",
          method: "POST"
        },

        // INTERNAL. Use User.lectureClasses.destroyAll() instead.
        "::delete::user::lectureClasses": {
          url: urlBase + "/users/:id/lectureClasses",
          method: "DELETE"
        },

        // INTERNAL. Use User.lectureClasses.count() instead.
        "::count::user::lectureClasses": {
          url: urlBase + "/users/:id/lectureClasses/count",
          method: "GET"
        },

        // INTERNAL. Use SlideDeck.classes.findById() instead.
        "::findById::SlideDeck::classes": {
          url: urlBase + "/SlideDecks/:id/classes/:fk",
          method: "GET"
        },

        // INTERNAL. Use SlideDeck.classes.destroyById() instead.
        "::destroyById::SlideDeck::classes": {
          url: urlBase + "/SlideDecks/:id/classes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use SlideDeck.classes.updateById() instead.
        "::updateById::SlideDeck::classes": {
          url: urlBase + "/SlideDecks/:id/classes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use SlideDeck.classes.link() instead.
        "::link::SlideDeck::classes": {
          url: urlBase + "/SlideDecks/:id/classes/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use SlideDeck.classes.unlink() instead.
        "::unlink::SlideDeck::classes": {
          url: urlBase + "/SlideDecks/:id/classes/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use SlideDeck.classes.exists() instead.
        "::exists::SlideDeck::classes": {
          url: urlBase + "/SlideDecks/:id/classes/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use SlideDeck.classes() instead.
        "::get::SlideDeck::classes": {
          isArray: true,
          url: urlBase + "/SlideDecks/:id/classes",
          method: "GET"
        },

        // INTERNAL. Use SlideDeck.classes.create() instead.
        "::create::SlideDeck::classes": {
          url: urlBase + "/SlideDecks/:id/classes",
          method: "POST"
        },

        // INTERNAL. Use SlideDeck.classes.destroyAll() instead.
        "::delete::SlideDeck::classes": {
          url: urlBase + "/SlideDecks/:id/classes",
          method: "DELETE"
        },

        // INTERNAL. Use SlideDeck.classes.count() instead.
        "::count::SlideDeck::classes": {
          url: urlBase + "/SlideDecks/:id/classes/count",
          method: "GET"
        },

        // INTERNAL. Use SlideShow.class() instead.
        "::get::SlideShow::class": {
          url: urlBase + "/SlideShows/:id/class",
          method: "GET"
        },

        // INTERNAL. Use ClassAttendee.class() instead.
        "::get::ClassAttendee::class": {
          url: urlBase + "/ClassAttendees/:id/class",
          method: "GET"
        },

        // INTERNAL. Use ClassLecturer.class() instead.
        "::get::ClassLecturer::class": {
          url: urlBase + "/ClassLecturers/:id/class",
          method: "GET"
        },

        // INTERNAL. Use Course.classes.findById() instead.
        "::findById::Course::classes": {
          url: urlBase + "/Courses/:id/classes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Course.classes.destroyById() instead.
        "::destroyById::Course::classes": {
          url: urlBase + "/Courses/:id/classes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Course.classes.updateById() instead.
        "::updateById::Course::classes": {
          url: urlBase + "/Courses/:id/classes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Course.classes() instead.
        "::get::Course::classes": {
          isArray: true,
          url: urlBase + "/Courses/:id/classes",
          method: "GET"
        },

        // INTERNAL. Use Course.classes.create() instead.
        "::create::Course::classes": {
          url: urlBase + "/Courses/:id/classes",
          method: "POST"
        },

        // INTERNAL. Use Course.classes.destroyAll() instead.
        "::delete::Course::classes": {
          url: urlBase + "/Courses/:id/classes",
          method: "DELETE"
        },

        // INTERNAL. Use Course.classes.count() instead.
        "::count::Course::classes": {
          url: urlBase + "/Courses/:id/classes/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name restServices.Class#updateOrCreate
         * @methodOf restServices.Class
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name restServices.Class#update
         * @methodOf restServices.Class
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name restServices.Class#destroyById
         * @methodOf restServices.Class
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name restServices.Class#removeById
         * @methodOf restServices.Class
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name restServices.Class#modelName
    * @propertyOf restServices.Class
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Class`.
    */
    R.modelName = "Class";

    /**
     * @ngdoc object
     * @name lbServices.Class.slideDecks
     * @header lbServices.Class.slideDecks
     * @object
     * @description
     *
     * The object `Class.slideDecks` groups methods
     * manipulating `SlideDeck` instances related to `Class`.
     *
     * Call {@link lbServices.Class#slideDecks Class.slideDecks()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name restServices.Class#slideDecks
         * @methodOf restServices.Class
         *
         * @description
         *
         * Queries slideDecks of Class.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SlideDeck` object.)
         * </em>
         */
        R.slideDecks = function() {
          var TargetResource = $injector.get("SlideDeck");
          var action = TargetResource["::get::Class::slideDecks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.Class.slideDecks#count
         * @methodOf restServices.Class.slideDecks
         *
         * @description
         *
         * Counts slideDecks of Class.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.slideDecks.count = function() {
          var TargetResource = $injector.get("SlideDeck");
          var action = TargetResource["::count::Class::slideDecks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.Class.slideDecks#create
         * @methodOf restServices.Class.slideDecks
         *
         * @description
         *
         * Creates a new instance in slideDecks of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SlideDeck` object.)
         * </em>
         */
        R.slideDecks.create = function() {
          var TargetResource = $injector.get("SlideDeck");
          var action = TargetResource["::create::Class::slideDecks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.Class.slideDecks#destroyAll
         * @methodOf restServices.Class.slideDecks
         *
         * @description
         *
         * Deletes all slideDecks of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.slideDecks.destroyAll = function() {
          var TargetResource = $injector.get("SlideDeck");
          var action = TargetResource["::delete::Class::slideDecks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.Class.slideDecks#destroyById
         * @methodOf restServices.Class.slideDecks
         *
         * @description
         *
         * Delete a related item by id for slideDecks.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for slideDecks
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.slideDecks.destroyById = function() {
          var TargetResource = $injector.get("SlideDeck");
          var action = TargetResource["::destroyById::Class::slideDecks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.Class.slideDecks#exists
         * @methodOf restServices.Class.slideDecks
         *
         * @description
         *
         * Check the existence of slideDecks relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for slideDecks
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SlideDeck` object.)
         * </em>
         */
        R.slideDecks.exists = function() {
          var TargetResource = $injector.get("SlideDeck");
          var action = TargetResource["::exists::Class::slideDecks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.Class.slideDecks#findById
         * @methodOf restServices.Class.slideDecks
         *
         * @description
         *
         * Find a related item by id for slideDecks.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for slideDecks
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SlideDeck` object.)
         * </em>
         */
        R.slideDecks.findById = function() {
          var TargetResource = $injector.get("SlideDeck");
          var action = TargetResource["::findById::Class::slideDecks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.Class.slideDecks#link
         * @methodOf restServices.Class.slideDecks
         *
         * @description
         *
         * Add a related item by id for slideDecks.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for slideDecks
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SlideDeck` object.)
         * </em>
         */
        R.slideDecks.link = function() {
          var TargetResource = $injector.get("SlideDeck");
          var action = TargetResource["::link::Class::slideDecks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.Class.slideDecks#unlink
         * @methodOf restServices.Class.slideDecks
         *
         * @description
         *
         * Remove the slideDecks relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for slideDecks
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.slideDecks.unlink = function() {
          var TargetResource = $injector.get("SlideDeck");
          var action = TargetResource["::unlink::Class::slideDecks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.Class.slideDecks#updateById
         * @methodOf restServices.Class.slideDecks
         *
         * @description
         *
         * Update a related item by id for slideDecks.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for slideDecks
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SlideDeck` object.)
         * </em>
         */
        R.slideDecks.updateById = function() {
          var TargetResource = $injector.get("SlideDeck");
          var action = TargetResource["::updateById::Class::slideDecks"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Class.chatMessages
     * @header lbServices.Class.chatMessages
     * @object
     * @description
     *
     * The object `Class.chatMessages` groups methods
     * manipulating `ChatMessage` instances related to `Class`.
     *
     * Call {@link lbServices.Class#chatMessages Class.chatMessages()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name restServices.Class#chatMessages
         * @methodOf restServices.Class
         *
         * @description
         *
         * Queries chatMessages of Class.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ChatMessage` object.)
         * </em>
         */
        R.chatMessages = function() {
          var TargetResource = $injector.get("ChatMessage");
          var action = TargetResource["::get::Class::chatMessages"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.Class.chatMessages#count
         * @methodOf restServices.Class.chatMessages
         *
         * @description
         *
         * Counts chatMessages of Class.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.chatMessages.count = function() {
          var TargetResource = $injector.get("ChatMessage");
          var action = TargetResource["::count::Class::chatMessages"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.Class.chatMessages#create
         * @methodOf restServices.Class.chatMessages
         *
         * @description
         *
         * Creates a new instance in chatMessages of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ChatMessage` object.)
         * </em>
         */
        R.chatMessages.create = function() {
          var TargetResource = $injector.get("ChatMessage");
          var action = TargetResource["::create::Class::chatMessages"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.Class.chatMessages#destroyAll
         * @methodOf restServices.Class.chatMessages
         *
         * @description
         *
         * Deletes all chatMessages of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.chatMessages.destroyAll = function() {
          var TargetResource = $injector.get("ChatMessage");
          var action = TargetResource["::delete::Class::chatMessages"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.Class.chatMessages#destroyById
         * @methodOf restServices.Class.chatMessages
         *
         * @description
         *
         * Delete a related item by id for chatMessages.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for chatMessages
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.chatMessages.destroyById = function() {
          var TargetResource = $injector.get("ChatMessage");
          var action = TargetResource["::destroyById::Class::chatMessages"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.Class.chatMessages#findById
         * @methodOf restServices.Class.chatMessages
         *
         * @description
         *
         * Find a related item by id for chatMessages.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for chatMessages
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ChatMessage` object.)
         * </em>
         */
        R.chatMessages.findById = function() {
          var TargetResource = $injector.get("ChatMessage");
          var action = TargetResource["::findById::Class::chatMessages"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.Class.chatMessages#updateById
         * @methodOf restServices.Class.chatMessages
         *
         * @description
         *
         * Update a related item by id for chatMessages.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for chatMessages
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ChatMessage` object.)
         * </em>
         */
        R.chatMessages.updateById = function() {
          var TargetResource = $injector.get("ChatMessage");
          var action = TargetResource["::updateById::Class::chatMessages"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Class.activityLogs
     * @header lbServices.Class.activityLogs
     * @object
     * @description
     *
     * The object `Class.activityLogs` groups methods
     * manipulating `ActivityLog` instances related to `Class`.
     *
     * Call {@link lbServices.Class#activityLogs Class.activityLogs()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name restServices.Class#activityLogs
         * @methodOf restServices.Class
         *
         * @description
         *
         * Queries activityLogs of Class.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ActivityLog` object.)
         * </em>
         */
        R.activityLogs = function() {
          var TargetResource = $injector.get("ActivityLog");
          var action = TargetResource["::get::Class::activityLogs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.Class.activityLogs#count
         * @methodOf restServices.Class.activityLogs
         *
         * @description
         *
         * Counts activityLogs of Class.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.activityLogs.count = function() {
          var TargetResource = $injector.get("ActivityLog");
          var action = TargetResource["::count::Class::activityLogs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.Class.activityLogs#create
         * @methodOf restServices.Class.activityLogs
         *
         * @description
         *
         * Creates a new instance in activityLogs of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ActivityLog` object.)
         * </em>
         */
        R.activityLogs.create = function() {
          var TargetResource = $injector.get("ActivityLog");
          var action = TargetResource["::create::Class::activityLogs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.Class.activityLogs#destroyAll
         * @methodOf restServices.Class.activityLogs
         *
         * @description
         *
         * Deletes all activityLogs of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.activityLogs.destroyAll = function() {
          var TargetResource = $injector.get("ActivityLog");
          var action = TargetResource["::delete::Class::activityLogs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.Class.activityLogs#destroyById
         * @methodOf restServices.Class.activityLogs
         *
         * @description
         *
         * Delete a related item by id for activityLogs.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for activityLogs
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.activityLogs.destroyById = function() {
          var TargetResource = $injector.get("ActivityLog");
          var action = TargetResource["::destroyById::Class::activityLogs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.Class.activityLogs#findById
         * @methodOf restServices.Class.activityLogs
         *
         * @description
         *
         * Find a related item by id for activityLogs.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for activityLogs
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ActivityLog` object.)
         * </em>
         */
        R.activityLogs.findById = function() {
          var TargetResource = $injector.get("ActivityLog");
          var action = TargetResource["::findById::Class::activityLogs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.Class.activityLogs#updateById
         * @methodOf restServices.Class.activityLogs
         *
         * @description
         *
         * Update a related item by id for activityLogs.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for activityLogs
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ActivityLog` object.)
         * </em>
         */
        R.activityLogs.updateById = function() {
          var TargetResource = $injector.get("ActivityLog");
          var action = TargetResource["::updateById::Class::activityLogs"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name restServices.ChatMessage
 * @header restServices.ChatMessage
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ChatMessage` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "ChatMessage",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/ChatMessages/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name restServices.ChatMessage#create
         * @methodOf restServices.ChatMessage
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ChatMessage` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/ChatMessages",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name restServices.ChatMessage#upsert
         * @methodOf restServices.ChatMessage
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ChatMessage` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/ChatMessages",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name restServices.ChatMessage#exists
         * @methodOf restServices.ChatMessage
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/ChatMessages/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.ChatMessage#findById
         * @methodOf restServices.ChatMessage
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ChatMessage` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/ChatMessages/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.ChatMessage#find
         * @methodOf restServices.ChatMessage
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ChatMessage` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/ChatMessages",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.ChatMessage#findOne
         * @methodOf restServices.ChatMessage
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ChatMessage` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/ChatMessages/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.ChatMessage#updateAll
         * @methodOf restServices.ChatMessage
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/ChatMessages/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name restServices.ChatMessage#deleteById
         * @methodOf restServices.ChatMessage
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/ChatMessages/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name restServices.ChatMessage#count
         * @methodOf restServices.ChatMessage
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/ChatMessages/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.ChatMessage#prototype$updateAttributes
         * @methodOf restServices.ChatMessage
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ChatMessage` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/ChatMessages/:id",
          method: "PUT"
        },

        // INTERNAL. Use Class.chatMessages.findById() instead.
        "::findById::Class::chatMessages": {
          url: urlBase + "/Classes/:id/chatMessages/:fk",
          method: "GET"
        },

        // INTERNAL. Use Class.chatMessages.destroyById() instead.
        "::destroyById::Class::chatMessages": {
          url: urlBase + "/Classes/:id/chatMessages/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Class.chatMessages.updateById() instead.
        "::updateById::Class::chatMessages": {
          url: urlBase + "/Classes/:id/chatMessages/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Class.chatMessages() instead.
        "::get::Class::chatMessages": {
          isArray: true,
          url: urlBase + "/Classes/:id/chatMessages",
          method: "GET"
        },

        // INTERNAL. Use Class.chatMessages.create() instead.
        "::create::Class::chatMessages": {
          url: urlBase + "/Classes/:id/chatMessages",
          method: "POST"
        },

        // INTERNAL. Use Class.chatMessages.destroyAll() instead.
        "::delete::Class::chatMessages": {
          url: urlBase + "/Classes/:id/chatMessages",
          method: "DELETE"
        },

        // INTERNAL. Use Class.chatMessages.count() instead.
        "::count::Class::chatMessages": {
          url: urlBase + "/Classes/:id/chatMessages/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name restServices.ChatMessage#updateOrCreate
         * @methodOf restServices.ChatMessage
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ChatMessage` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name restServices.ChatMessage#update
         * @methodOf restServices.ChatMessage
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name restServices.ChatMessage#destroyById
         * @methodOf restServices.ChatMessage
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name restServices.ChatMessage#removeById
         * @methodOf restServices.ChatMessage
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name restServices.ChatMessage#modelName
    * @propertyOf restServices.ChatMessage
    * @description
    * The name of the model represented by this $resource,
    * i.e. `ChatMessage`.
    */
    R.modelName = "ChatMessage";


    return R;
  }]);

/**
 * @ngdoc object
 * @name restServices.ActivityLog
 * @header restServices.ActivityLog
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ActivityLog` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "ActivityLog",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/ActivityLogs/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name restServices.ActivityLog#create
         * @methodOf restServices.ActivityLog
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ActivityLog` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/ActivityLogs",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name restServices.ActivityLog#upsert
         * @methodOf restServices.ActivityLog
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ActivityLog` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/ActivityLogs",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name restServices.ActivityLog#exists
         * @methodOf restServices.ActivityLog
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/ActivityLogs/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.ActivityLog#findById
         * @methodOf restServices.ActivityLog
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ActivityLog` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/ActivityLogs/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.ActivityLog#find
         * @methodOf restServices.ActivityLog
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ActivityLog` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/ActivityLogs",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.ActivityLog#findOne
         * @methodOf restServices.ActivityLog
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ActivityLog` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/ActivityLogs/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.ActivityLog#updateAll
         * @methodOf restServices.ActivityLog
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/ActivityLogs/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name restServices.ActivityLog#deleteById
         * @methodOf restServices.ActivityLog
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/ActivityLogs/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name restServices.ActivityLog#count
         * @methodOf restServices.ActivityLog
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/ActivityLogs/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.ActivityLog#prototype$updateAttributes
         * @methodOf restServices.ActivityLog
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ActivityLog` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/ActivityLogs/:id",
          method: "PUT"
        },

        // INTERNAL. Use Class.activityLogs.findById() instead.
        "::findById::Class::activityLogs": {
          url: urlBase + "/Classes/:id/activityLogs/:fk",
          method: "GET"
        },

        // INTERNAL. Use Class.activityLogs.destroyById() instead.
        "::destroyById::Class::activityLogs": {
          url: urlBase + "/Classes/:id/activityLogs/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Class.activityLogs.updateById() instead.
        "::updateById::Class::activityLogs": {
          url: urlBase + "/Classes/:id/activityLogs/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Class.activityLogs() instead.
        "::get::Class::activityLogs": {
          isArray: true,
          url: urlBase + "/Classes/:id/activityLogs",
          method: "GET"
        },

        // INTERNAL. Use Class.activityLogs.create() instead.
        "::create::Class::activityLogs": {
          url: urlBase + "/Classes/:id/activityLogs",
          method: "POST"
        },

        // INTERNAL. Use Class.activityLogs.destroyAll() instead.
        "::delete::Class::activityLogs": {
          url: urlBase + "/Classes/:id/activityLogs",
          method: "DELETE"
        },

        // INTERNAL. Use Class.activityLogs.count() instead.
        "::count::Class::activityLogs": {
          url: urlBase + "/Classes/:id/activityLogs/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name restServices.ActivityLog#updateOrCreate
         * @methodOf restServices.ActivityLog
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ActivityLog` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name restServices.ActivityLog#update
         * @methodOf restServices.ActivityLog
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name restServices.ActivityLog#destroyById
         * @methodOf restServices.ActivityLog
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name restServices.ActivityLog#removeById
         * @methodOf restServices.ActivityLog
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name restServices.ActivityLog#modelName
    * @propertyOf restServices.ActivityLog
    * @description
    * The name of the model represented by this $resource,
    * i.e. `ActivityLog`.
    */
    R.modelName = "ActivityLog";


    return R;
  }]);

/**
 * @ngdoc object
 * @name restServices.ClassAttendee
 * @header restServices.ClassAttendee
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ClassAttendee` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "ClassAttendee",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/ClassAttendees/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use ClassAttendee.attendee() instead.
        "prototype$__get__attendee": {
          url: urlBase + "/ClassAttendees/:id/attendee",
          method: "GET"
        },

        // INTERNAL. Use ClassAttendee.class() instead.
        "prototype$__get__class": {
          url: urlBase + "/ClassAttendees/:id/class",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.ClassAttendee#create
         * @methodOf restServices.ClassAttendee
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ClassAttendee` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/ClassAttendees",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name restServices.ClassAttendee#upsert
         * @methodOf restServices.ClassAttendee
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ClassAttendee` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/ClassAttendees",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name restServices.ClassAttendee#exists
         * @methodOf restServices.ClassAttendee
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/ClassAttendees/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.ClassAttendee#findById
         * @methodOf restServices.ClassAttendee
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ClassAttendee` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/ClassAttendees/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.ClassAttendee#find
         * @methodOf restServices.ClassAttendee
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ClassAttendee` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/ClassAttendees",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.ClassAttendee#findOne
         * @methodOf restServices.ClassAttendee
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ClassAttendee` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/ClassAttendees/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.ClassAttendee#updateAll
         * @methodOf restServices.ClassAttendee
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/ClassAttendees/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name restServices.ClassAttendee#deleteById
         * @methodOf restServices.ClassAttendee
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/ClassAttendees/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name restServices.ClassAttendee#count
         * @methodOf restServices.ClassAttendee
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/ClassAttendees/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.ClassAttendee#prototype$updateAttributes
         * @methodOf restServices.ClassAttendee
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ClassAttendee` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/ClassAttendees/:id",
          method: "PUT"
        },
      }
    );



        /**
         * @ngdoc method
         * @name restServices.ClassAttendee#updateOrCreate
         * @methodOf restServices.ClassAttendee
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ClassAttendee` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name restServices.ClassAttendee#update
         * @methodOf restServices.ClassAttendee
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name restServices.ClassAttendee#destroyById
         * @methodOf restServices.ClassAttendee
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name restServices.ClassAttendee#removeById
         * @methodOf restServices.ClassAttendee
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name restServices.ClassAttendee#modelName
    * @propertyOf restServices.ClassAttendee
    * @description
    * The name of the model represented by this $resource,
    * i.e. `ClassAttendee`.
    */
    R.modelName = "ClassAttendee";


        /**
         * @ngdoc method
         * @name restServices.ClassAttendee#attendee
         * @methodOf restServices.ClassAttendee
         *
         * @description
         *
         * Fetches belongsTo relation attendee.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.attendee = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::ClassAttendee::attendee"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.ClassAttendee#class
         * @methodOf restServices.ClassAttendee
         *
         * @description
         *
         * Fetches belongsTo relation class.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R.class = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::get::ClassAttendee::class"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name restServices.ClassLecturer
 * @header restServices.ClassLecturer
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ClassLecturer` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "ClassLecturer",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/ClassLecturers/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use ClassLecturer.lecturer() instead.
        "prototype$__get__lecturer": {
          url: urlBase + "/ClassLecturers/:id/lecturer",
          method: "GET"
        },

        // INTERNAL. Use ClassLecturer.class() instead.
        "prototype$__get__class": {
          url: urlBase + "/ClassLecturers/:id/class",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.ClassLecturer#create
         * @methodOf restServices.ClassLecturer
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ClassLecturer` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/ClassLecturers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name restServices.ClassLecturer#upsert
         * @methodOf restServices.ClassLecturer
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ClassLecturer` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/ClassLecturers",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name restServices.ClassLecturer#exists
         * @methodOf restServices.ClassLecturer
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/ClassLecturers/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.ClassLecturer#findById
         * @methodOf restServices.ClassLecturer
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ClassLecturer` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/ClassLecturers/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.ClassLecturer#find
         * @methodOf restServices.ClassLecturer
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ClassLecturer` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/ClassLecturers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.ClassLecturer#findOne
         * @methodOf restServices.ClassLecturer
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ClassLecturer` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/ClassLecturers/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.ClassLecturer#updateAll
         * @methodOf restServices.ClassLecturer
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/ClassLecturers/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name restServices.ClassLecturer#deleteById
         * @methodOf restServices.ClassLecturer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/ClassLecturers/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name restServices.ClassLecturer#count
         * @methodOf restServices.ClassLecturer
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/ClassLecturers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.ClassLecturer#prototype$updateAttributes
         * @methodOf restServices.ClassLecturer
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ClassLecturer` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/ClassLecturers/:id",
          method: "PUT"
        },
      }
    );



        /**
         * @ngdoc method
         * @name restServices.ClassLecturer#updateOrCreate
         * @methodOf restServices.ClassLecturer
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ClassLecturer` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name restServices.ClassLecturer#update
         * @methodOf restServices.ClassLecturer
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name restServices.ClassLecturer#destroyById
         * @methodOf restServices.ClassLecturer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name restServices.ClassLecturer#removeById
         * @methodOf restServices.ClassLecturer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name restServices.ClassLecturer#modelName
    * @propertyOf restServices.ClassLecturer
    * @description
    * The name of the model represented by this $resource,
    * i.e. `ClassLecturer`.
    */
    R.modelName = "ClassLecturer";


        /**
         * @ngdoc method
         * @name restServices.ClassLecturer#lecturer
         * @methodOf restServices.ClassLecturer
         *
         * @description
         *
         * Fetches belongsTo relation lecturer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.lecturer = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::ClassLecturer::lecturer"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.ClassLecturer#class
         * @methodOf restServices.ClassLecturer
         *
         * @description
         *
         * Fetches belongsTo relation class.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R.class = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::get::ClassLecturer::class"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name restServices.Course
 * @header restServices.Course
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Course` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Course",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Courses/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Course.classes.findById() instead.
        "prototype$__findById__classes": {
          url: urlBase + "/Courses/:id/classes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Course.classes.destroyById() instead.
        "prototype$__destroyById__classes": {
          url: urlBase + "/Courses/:id/classes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Course.classes.updateById() instead.
        "prototype$__updateById__classes": {
          url: urlBase + "/Courses/:id/classes/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name restServices.Course#prototype$__findById__attendees
         * @methodOf restServices.Course
         *
         * @description
         *
         * Find a related item by id for attendees.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for attendees
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        "prototype$__findById__attendees": {
          url: urlBase + "/Courses/:id/attendees/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.Course#prototype$__destroyById__attendees
         * @methodOf restServices.Course
         *
         * @description
         *
         * Delete a related item by id for attendees.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for attendees
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__attendees": {
          url: urlBase + "/Courses/:id/attendees/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name restServices.Course#prototype$__updateById__attendees
         * @methodOf restServices.Course
         *
         * @description
         *
         * Update a related item by id for attendees.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for attendees
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        "prototype$__updateById__attendees": {
          url: urlBase + "/Courses/:id/attendees/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name restServices.Course#prototype$__link__attendees
         * @methodOf restServices.Course
         *
         * @description
         *
         * Add a related item by id for attendees.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for attendees
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        "prototype$__link__attendees": {
          url: urlBase + "/Courses/:id/attendees/rel/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name restServices.Course#prototype$__unlink__attendees
         * @methodOf restServices.Course
         *
         * @description
         *
         * Remove the attendees relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for attendees
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__unlink__attendees": {
          url: urlBase + "/Courses/:id/attendees/rel/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name restServices.Course#prototype$__exists__attendees
         * @methodOf restServices.Course
         *
         * @description
         *
         * Check the existence of attendees relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for attendees
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        "prototype$__exists__attendees": {
          url: urlBase + "/Courses/:id/attendees/rel/:fk",
          method: "HEAD"
        },

        /**
         * @ngdoc method
         * @name restServices.Course#prototype$__findById__lecturers
         * @methodOf restServices.Course
         *
         * @description
         *
         * Find a related item by id for lecturers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for lecturers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        "prototype$__findById__lecturers": {
          url: urlBase + "/Courses/:id/lecturers/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.Course#prototype$__destroyById__lecturers
         * @methodOf restServices.Course
         *
         * @description
         *
         * Delete a related item by id for lecturers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for lecturers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__lecturers": {
          url: urlBase + "/Courses/:id/lecturers/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name restServices.Course#prototype$__updateById__lecturers
         * @methodOf restServices.Course
         *
         * @description
         *
         * Update a related item by id for lecturers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for lecturers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        "prototype$__updateById__lecturers": {
          url: urlBase + "/Courses/:id/lecturers/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name restServices.Course#prototype$__link__lecturers
         * @methodOf restServices.Course
         *
         * @description
         *
         * Add a related item by id for lecturers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for lecturers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        "prototype$__link__lecturers": {
          url: urlBase + "/Courses/:id/lecturers/rel/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name restServices.Course#prototype$__unlink__lecturers
         * @methodOf restServices.Course
         *
         * @description
         *
         * Remove the lecturers relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for lecturers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__unlink__lecturers": {
          url: urlBase + "/Courses/:id/lecturers/rel/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name restServices.Course#prototype$__exists__lecturers
         * @methodOf restServices.Course
         *
         * @description
         *
         * Check the existence of lecturers relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for lecturers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        "prototype$__exists__lecturers": {
          url: urlBase + "/Courses/:id/lecturers/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Course.classes() instead.
        "prototype$__get__classes": {
          isArray: true,
          url: urlBase + "/Courses/:id/classes",
          method: "GET"
        },

        // INTERNAL. Use Course.classes.create() instead.
        "prototype$__create__classes": {
          url: urlBase + "/Courses/:id/classes",
          method: "POST"
        },

        // INTERNAL. Use Course.classes.destroyAll() instead.
        "prototype$__delete__classes": {
          url: urlBase + "/Courses/:id/classes",
          method: "DELETE"
        },

        // INTERNAL. Use Course.classes.count() instead.
        "prototype$__count__classes": {
          url: urlBase + "/Courses/:id/classes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.Course#prototype$__get__attendees
         * @methodOf restServices.Course
         *
         * @description
         *
         * Queries attendees of Course.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        "prototype$__get__attendees": {
          isArray: true,
          url: urlBase + "/Courses/:id/attendees",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.Course#prototype$__create__attendees
         * @methodOf restServices.Course
         *
         * @description
         *
         * Creates a new instance in attendees of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        "prototype$__create__attendees": {
          url: urlBase + "/Courses/:id/attendees",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name restServices.Course#prototype$__delete__attendees
         * @methodOf restServices.Course
         *
         * @description
         *
         * Deletes all attendees of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__attendees": {
          url: urlBase + "/Courses/:id/attendees",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name restServices.Course#prototype$__count__attendees
         * @methodOf restServices.Course
         *
         * @description
         *
         * Counts attendees of Course.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__attendees": {
          url: urlBase + "/Courses/:id/attendees/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.Course#prototype$__get__lecturers
         * @methodOf restServices.Course
         *
         * @description
         *
         * Queries lecturers of Course.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        "prototype$__get__lecturers": {
          isArray: true,
          url: urlBase + "/Courses/:id/lecturers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.Course#prototype$__create__lecturers
         * @methodOf restServices.Course
         *
         * @description
         *
         * Creates a new instance in lecturers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        "prototype$__create__lecturers": {
          url: urlBase + "/Courses/:id/lecturers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name restServices.Course#prototype$__delete__lecturers
         * @methodOf restServices.Course
         *
         * @description
         *
         * Deletes all lecturers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__lecturers": {
          url: urlBase + "/Courses/:id/lecturers",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name restServices.Course#prototype$__count__lecturers
         * @methodOf restServices.Course
         *
         * @description
         *
         * Counts lecturers of Course.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__lecturers": {
          url: urlBase + "/Courses/:id/lecturers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.Course#create
         * @methodOf restServices.Course
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Courses",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name restServices.Course#upsert
         * @methodOf restServices.Course
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Courses",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name restServices.Course#exists
         * @methodOf restServices.Course
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Courses/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.Course#findById
         * @methodOf restServices.Course
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Courses/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.Course#find
         * @methodOf restServices.Course
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Courses",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.Course#findOne
         * @methodOf restServices.Course
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Courses/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.Course#updateAll
         * @methodOf restServices.Course
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Courses/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name restServices.Course#deleteById
         * @methodOf restServices.Course
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Courses/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name restServices.Course#count
         * @methodOf restServices.Course
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Courses/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.Course#prototype$updateAttributes
         * @methodOf restServices.Course
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Courses/:id",
          method: "PUT"
        },

        // INTERNAL. Use User.attendCourses.findById() instead.
        "::findById::user::attendCourses": {
          url: urlBase + "/users/:id/attendCourses/:fk",
          method: "GET"
        },

        // INTERNAL. Use User.attendCourses.destroyById() instead.
        "::destroyById::user::attendCourses": {
          url: urlBase + "/users/:id/attendCourses/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.attendCourses.updateById() instead.
        "::updateById::user::attendCourses": {
          url: urlBase + "/users/:id/attendCourses/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.attendCourses.link() instead.
        "::link::user::attendCourses": {
          url: urlBase + "/users/:id/attendCourses/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.attendCourses.unlink() instead.
        "::unlink::user::attendCourses": {
          url: urlBase + "/users/:id/attendCourses/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.attendCourses.exists() instead.
        "::exists::user::attendCourses": {
          url: urlBase + "/users/:id/attendCourses/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use User.lectureCourses.findById() instead.
        "::findById::user::lectureCourses": {
          url: urlBase + "/users/:id/lectureCourses/:fk",
          method: "GET"
        },

        // INTERNAL. Use User.lectureCourses.destroyById() instead.
        "::destroyById::user::lectureCourses": {
          url: urlBase + "/users/:id/lectureCourses/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.lectureCourses.updateById() instead.
        "::updateById::user::lectureCourses": {
          url: urlBase + "/users/:id/lectureCourses/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.lectureCourses.link() instead.
        "::link::user::lectureCourses": {
          url: urlBase + "/users/:id/lectureCourses/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.lectureCourses.unlink() instead.
        "::unlink::user::lectureCourses": {
          url: urlBase + "/users/:id/lectureCourses/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.lectureCourses.exists() instead.
        "::exists::user::lectureCourses": {
          url: urlBase + "/users/:id/lectureCourses/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use User.attendCourses() instead.
        "::get::user::attendCourses": {
          isArray: true,
          url: urlBase + "/users/:id/attendCourses",
          method: "GET"
        },

        // INTERNAL. Use User.attendCourses.create() instead.
        "::create::user::attendCourses": {
          url: urlBase + "/users/:id/attendCourses",
          method: "POST"
        },

        // INTERNAL. Use User.attendCourses.destroyAll() instead.
        "::delete::user::attendCourses": {
          url: urlBase + "/users/:id/attendCourses",
          method: "DELETE"
        },

        // INTERNAL. Use User.attendCourses.count() instead.
        "::count::user::attendCourses": {
          url: urlBase + "/users/:id/attendCourses/count",
          method: "GET"
        },

        // INTERNAL. Use User.lectureCourses() instead.
        "::get::user::lectureCourses": {
          isArray: true,
          url: urlBase + "/users/:id/lectureCourses",
          method: "GET"
        },

        // INTERNAL. Use User.lectureCourses.create() instead.
        "::create::user::lectureCourses": {
          url: urlBase + "/users/:id/lectureCourses",
          method: "POST"
        },

        // INTERNAL. Use User.lectureCourses.destroyAll() instead.
        "::delete::user::lectureCourses": {
          url: urlBase + "/users/:id/lectureCourses",
          method: "DELETE"
        },

        // INTERNAL. Use User.lectureCourses.count() instead.
        "::count::user::lectureCourses": {
          url: urlBase + "/users/:id/lectureCourses/count",
          method: "GET"
        },

        // INTERNAL. Use CourseAttendee.course() instead.
        "::get::CourseAttendee::course": {
          url: urlBase + "/CourseAttendees/:id/course",
          method: "GET"
        },

        // INTERNAL. Use CourseLecturer.course() instead.
        "::get::CourseLecturer::course": {
          url: urlBase + "/CourseLecturers/:id/course",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name restServices.Course#updateOrCreate
         * @methodOf restServices.Course
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name restServices.Course#update
         * @methodOf restServices.Course
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name restServices.Course#destroyById
         * @methodOf restServices.Course
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name restServices.Course#removeById
         * @methodOf restServices.Course
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name restServices.Course#modelName
    * @propertyOf restServices.Course
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Course`.
    */
    R.modelName = "Course";

    /**
     * @ngdoc object
     * @name lbServices.Course.classes
     * @header lbServices.Course.classes
     * @object
     * @description
     *
     * The object `Course.classes` groups methods
     * manipulating `Class` instances related to `Course`.
     *
     * Call {@link lbServices.Course#classes Course.classes()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name restServices.Course#classes
         * @methodOf restServices.Course
         *
         * @description
         *
         * Queries classes of Course.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R.classes = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::get::Course::classes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.Course.classes#count
         * @methodOf restServices.Course.classes
         *
         * @description
         *
         * Counts classes of Course.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.classes.count = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::count::Course::classes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.Course.classes#create
         * @methodOf restServices.Course.classes
         *
         * @description
         *
         * Creates a new instance in classes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R.classes.create = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::create::Course::classes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.Course.classes#destroyAll
         * @methodOf restServices.Course.classes
         *
         * @description
         *
         * Deletes all classes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.classes.destroyAll = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::delete::Course::classes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.Course.classes#destroyById
         * @methodOf restServices.Course.classes
         *
         * @description
         *
         * Delete a related item by id for classes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for classes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.classes.destroyById = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::destroyById::Course::classes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.Course.classes#findById
         * @methodOf restServices.Course.classes
         *
         * @description
         *
         * Find a related item by id for classes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for classes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R.classes.findById = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::findById::Course::classes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.Course.classes#updateById
         * @methodOf restServices.Course.classes
         *
         * @description
         *
         * Update a related item by id for classes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for classes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R.classes.updateById = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::updateById::Course::classes"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name restServices.CourseAttendee
 * @header restServices.CourseAttendee
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `CourseAttendee` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "CourseAttendee",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/CourseAttendees/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use CourseAttendee.attendee() instead.
        "prototype$__get__attendee": {
          url: urlBase + "/CourseAttendees/:id/attendee",
          method: "GET"
        },

        // INTERNAL. Use CourseAttendee.course() instead.
        "prototype$__get__course": {
          url: urlBase + "/CourseAttendees/:id/course",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.CourseAttendee#create
         * @methodOf restServices.CourseAttendee
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CourseAttendee` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/CourseAttendees",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name restServices.CourseAttendee#upsert
         * @methodOf restServices.CourseAttendee
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CourseAttendee` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/CourseAttendees",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name restServices.CourseAttendee#exists
         * @methodOf restServices.CourseAttendee
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/CourseAttendees/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.CourseAttendee#findById
         * @methodOf restServices.CourseAttendee
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CourseAttendee` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/CourseAttendees/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.CourseAttendee#find
         * @methodOf restServices.CourseAttendee
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CourseAttendee` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/CourseAttendees",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.CourseAttendee#findOne
         * @methodOf restServices.CourseAttendee
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CourseAttendee` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/CourseAttendees/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.CourseAttendee#updateAll
         * @methodOf restServices.CourseAttendee
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/CourseAttendees/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name restServices.CourseAttendee#deleteById
         * @methodOf restServices.CourseAttendee
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/CourseAttendees/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name restServices.CourseAttendee#count
         * @methodOf restServices.CourseAttendee
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/CourseAttendees/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.CourseAttendee#prototype$updateAttributes
         * @methodOf restServices.CourseAttendee
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CourseAttendee` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/CourseAttendees/:id",
          method: "PUT"
        },
      }
    );



        /**
         * @ngdoc method
         * @name restServices.CourseAttendee#updateOrCreate
         * @methodOf restServices.CourseAttendee
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CourseAttendee` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name restServices.CourseAttendee#update
         * @methodOf restServices.CourseAttendee
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name restServices.CourseAttendee#destroyById
         * @methodOf restServices.CourseAttendee
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name restServices.CourseAttendee#removeById
         * @methodOf restServices.CourseAttendee
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name restServices.CourseAttendee#modelName
    * @propertyOf restServices.CourseAttendee
    * @description
    * The name of the model represented by this $resource,
    * i.e. `CourseAttendee`.
    */
    R.modelName = "CourseAttendee";


        /**
         * @ngdoc method
         * @name restServices.CourseAttendee#attendee
         * @methodOf restServices.CourseAttendee
         *
         * @description
         *
         * Fetches belongsTo relation attendee.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.attendee = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::CourseAttendee::attendee"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.CourseAttendee#course
         * @methodOf restServices.CourseAttendee
         *
         * @description
         *
         * Fetches belongsTo relation course.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.course = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::get::CourseAttendee::course"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name restServices.CourseLecturer
 * @header restServices.CourseLecturer
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `CourseLecturer` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "CourseLecturer",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/CourseLecturers/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use CourseLecturer.lecturer() instead.
        "prototype$__get__lecturer": {
          url: urlBase + "/CourseLecturers/:id/lecturer",
          method: "GET"
        },

        // INTERNAL. Use CourseLecturer.course() instead.
        "prototype$__get__course": {
          url: urlBase + "/CourseLecturers/:id/course",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.CourseLecturer#create
         * @methodOf restServices.CourseLecturer
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CourseLecturer` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/CourseLecturers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name restServices.CourseLecturer#upsert
         * @methodOf restServices.CourseLecturer
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CourseLecturer` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/CourseLecturers",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name restServices.CourseLecturer#exists
         * @methodOf restServices.CourseLecturer
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/CourseLecturers/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.CourseLecturer#findById
         * @methodOf restServices.CourseLecturer
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CourseLecturer` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/CourseLecturers/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.CourseLecturer#find
         * @methodOf restServices.CourseLecturer
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CourseLecturer` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/CourseLecturers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.CourseLecturer#findOne
         * @methodOf restServices.CourseLecturer
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CourseLecturer` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/CourseLecturers/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.CourseLecturer#updateAll
         * @methodOf restServices.CourseLecturer
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/CourseLecturers/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name restServices.CourseLecturer#deleteById
         * @methodOf restServices.CourseLecturer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/CourseLecturers/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name restServices.CourseLecturer#count
         * @methodOf restServices.CourseLecturer
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/CourseLecturers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name restServices.CourseLecturer#prototype$updateAttributes
         * @methodOf restServices.CourseLecturer
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CourseLecturer` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/CourseLecturers/:id",
          method: "PUT"
        },
      }
    );



        /**
         * @ngdoc method
         * @name restServices.CourseLecturer#updateOrCreate
         * @methodOf restServices.CourseLecturer
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CourseLecturer` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name restServices.CourseLecturer#update
         * @methodOf restServices.CourseLecturer
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name restServices.CourseLecturer#destroyById
         * @methodOf restServices.CourseLecturer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name restServices.CourseLecturer#removeById
         * @methodOf restServices.CourseLecturer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name restServices.CourseLecturer#modelName
    * @propertyOf restServices.CourseLecturer
    * @description
    * The name of the model represented by this $resource,
    * i.e. `CourseLecturer`.
    */
    R.modelName = "CourseLecturer";


        /**
         * @ngdoc method
         * @name restServices.CourseLecturer#lecturer
         * @methodOf restServices.CourseLecturer
         *
         * @description
         *
         * Fetches belongsTo relation lecturer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.lecturer = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::CourseLecturer::lecturer"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name restServices.CourseLecturer#course
         * @methodOf restServices.CourseLecturer
         *
         * @description
         *
         * Fetches belongsTo relation course.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.course = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::get::CourseLecturer::course"];
          return action.apply(R, arguments);
        };

    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.rememberMe = undefined;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      var key = propsPrefix + name;
      if (value == null) value = '';
      storage[key] = value;
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out non urlBase requests
          if (config.url.substr(0, urlBase.length) !== urlBase) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name restServices.LoopBackResourceProvider
   * @header restServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name restServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf restServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name restServices.LoopBackResourceProvider#setUrlBase
     * @methodOf restServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
