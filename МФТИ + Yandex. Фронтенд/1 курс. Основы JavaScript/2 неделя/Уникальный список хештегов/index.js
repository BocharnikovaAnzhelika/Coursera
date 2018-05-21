/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    var result = [];
    hashtags.filter(isUniqueHashtag);

    function isUniqueHashtag(item, index) {
        item = item.toLowerCase();
        if (result.indexOf(item) === -1) {
            result.push(item);
        }
    }

    return result.join(', ');
};
