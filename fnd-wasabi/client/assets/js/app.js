(function() {
  'use strict';

  angular.module('wasabi', [
    'ui.router',
    'ngAnimate',
    'ngRoute',
    'ngTouch',

    //foundation
    'foundation',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations',

    // loopback REST
    'restServices',
    // socket.io
    'btford.socket-io',
    // device detector
    'ng.deviceDetector',

    // date picker
    // '720kb.datepicker',
    'ngQuickDate',
    'ksSwiper',
    'd3',
    'nvd3',

    // directives
    // 'nvd3ChartDirectives',

  ])
  .factory('liveIO', function($location, socketFactory) {
    // console.log($location);
    // var myIoSocket = io('localhost:3000/slide',{
    var myIoSocket = io($location.host()+':'+$location.port()+'/live',{
      transports: [
        'websocket', 
        'flashsocket', 
        'htmlfile', 
        'xhr-polling', 
        'jsonp-polling', 
        'polling'
      ]
    }).connect();

    var mySocket =  socketFactory({
      ioSocket: myIoSocket,
      prefix: 'liveIO:'
    });

    mySocket.forward('connect');
    mySocket.forward('disconnect');

    mySocket.forward('joined');
    mySocket.forward('joined-members');
    mySocket.forward('joined-primary');
    mySocket.forward('joined-secondary');
    mySocket.forward('left');

    mySocket.forward('slide-change');

    mySocket.forward('chat-send-fwd');

    mySocket.forward('rtc-init-offer');
    mySocket.forward('rtc-request-offer');
    mySocket.forward('rtc-reject-offer');
    mySocket.forward('rtc-offer');
    mySocket.forward('rtc-answer');
    mySocket.forward('rtc-candidate');
    mySocket.forward('rtc-bye');

    mySocket.forward('rtc-vidcap-reply');
    mySocket.forward('rtc-vidcap-fwd');

    return mySocket;
  })
  .factory('sockapiIO', function($location, socketFactory) {
    var myIoSocket = io($location.host()+':'+$location.port()+'/sockapi',{
      transports: [
        'websocket', 
        'flashsocket', 
        'htmlfile', 
        'xhr-polling', 
        'jsonp-polling', 
        'polling'
      ]
    }).connect();

    var mySocket =  socketFactory({
      ioSocket: myIoSocket,
      prefix: 'sockapi:'
    });

    mySocket.forward('connect');
    mySocket.forward('disconnect');

    mySocket.forward('user-names');
    mySocket.forward('user-details');

    mySocket.forward('res-course-create');

    return mySocket;
  })
  .factory('statsIO', function($location, socketFactory) {
    var myIoSocket = io($location.host()+':'+$location.port()+'/stats',{
      transports: [
        'websocket', 
        'flashsocket', 
        'htmlfile', 
        'xhr-polling', 
        'jsonp-polling', 
        'polling'
      ]
    }).connect();

    var mySocket =  socketFactory({
      ioSocket: myIoSocket,
      prefix: 'statsIO:'
    });

    mySocket.forward('connect');
    mySocket.forward('disconnect');

    mySocket.forward('stats');

    return mySocket;
  })
  .config(config)
  .run(run)
  ;


  config.$inject = ['$sceDelegateProvider', '$compileProvider', '$urlRouterProvider', '$locationProvider', 'LoopBackResourceProvider'];

  function config($sceDelegateProvider, $compileProvider, $urlProvider, $locationProvider, LoopBackResourceProvider) {

    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?:|ftp:|file:|data:image\/)/);
    $sceDelegateProvider.resourceUrlWhitelist([
      'self',
      'blob:**',
      'http://**',
      'https://**',
      'data:image**'
    ]);

    $urlProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled:false,
      requireBase: false
    });

    $locationProvider.hashPrefix('!');

    LoopBackResourceProvider.setAuthHeader('X-Access-Token');

  }

  function run() {
    FastClick.attach(document.body);
  }

})();
