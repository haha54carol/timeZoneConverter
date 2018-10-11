"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const tzConverter = (dateTime, originalTimeZone, targetTimeZone, outputFormat = 'YYYY-MM-DD HH:mm:ss') => {
  const dateTimeStr = dateTime.concat(originalTimeZone >= 0 ? '+' : '-').concat(('0' + Math.abs(originalTimeZone)).slice(-2));
  return (0, _moment.default)(dateTimeStr).utcOffset(targetTimeZone).format(outputFormat);
};

var _default = tzConverter;
exports.default = _default;