/*"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connect = connect;

var _mongodb = _interopRequireDefault(require("mongodb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function connect() {
  return _connect.apply(this, arguments);
}

function _connect() {
  _connect = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
    var client, db;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _mongodb["default"].connect('mongodb://localhost:27017/', {
              useNewUrlParser: true
            });

          case 3:
            client = _context.sent;
            db = client.db('nodejs-restapi');
            return _context.abrupt("return", db);

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));
  return _connect.apply(this, arguments);
}

;*/

import MongoClient from 'mongodb'

export async function connect() {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017/', { useUnifiedTopology: true });
        const db = client.db('inventory_managment');
        return db;
    } catch(e) {
        console.log(e);
    }
};