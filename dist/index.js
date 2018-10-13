"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const timeZoneConverter = (dateTime, originalTimeZone, targetTimeZone, outputFormat = 'YYYY-MM-DD HH:mm:ss') => {
  const dateTimeStr = originalTimeZone > targetTimeZone ? (0, _moment.default)(dateTime, 'YYYY/MM/DD HH:mm:ss').subtract(originalTimeZone - targetTimeZone, 'h') : (0, _moment.default)(dateTime, 'YYYY/MM/DD HH:mm:ss').add(targetTimeZone - originalTimeZone, 'h');
  return (0, _moment.default)(dateTimeStr, outputFormat).format(outputFormat);
};

var _default = timeZoneConverter;
exports.default = _default;