/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
    isDay = (interval / 720) % 2 === 1;
    interval %= 720;
    minutes += interval;
    hours = (hours + Math.floor(minutes/60)) % 24;
    minutes %= 60;
    if (isDay) hours %= 12;

    hours < 10 ? hours = "0" + hours : hours.toString;
    minutes < 10 ? minutes = "0" + minutes : minutes.toString;

    return hours + ":" + minutes;
};
