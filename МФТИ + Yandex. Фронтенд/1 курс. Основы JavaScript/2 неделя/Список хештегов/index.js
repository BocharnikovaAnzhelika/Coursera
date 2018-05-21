/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    var result = [];

    tweet.split(' ').filter(isHashTag);

    function isHashTag (item, index) {
        if (item.indexOf('#') != -1) {
            result.push(item.slice(1));
        }
    }

    return result;
};
