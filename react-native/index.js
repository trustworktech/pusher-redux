'use strict';

var Pusher = require('pusher-js/react-native');
var pusherRedux = require('../lib/pusher-redux');
pusherRedux.setPusherClient(Pusher);
module.exports = pusherRedux;