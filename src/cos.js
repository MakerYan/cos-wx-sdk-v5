'use strict';

var util = require('./util');
var event = require('./event');
var task = require('./task');
var base = require('./base');

var defaultOptions = {
    SecretId: '',
    SecretKey: '',
    FileParallelLimit: 3,
    ChunkParallelLimit: 3,
    ChunkSize: 1024 * 1024,
    ProgressInterval: 1000,
    Domain: '',
    ServiceDomain: '',
};

// 对外暴露的类
var COS = function (options) {
    this.options = util.extend(util.clone(defaultOptions), options || {});
    event.init(this);
    task.init(this);
};

util.extend(COS.prototype, base);

COS.getAuthorization = util.getAuth;
COS.version = '0.4.0';

module.exports = COS;
