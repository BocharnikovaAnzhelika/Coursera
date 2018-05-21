// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {   

    if (command.startsWith('ADD')) {
        var name = command.slice(4, command.lastIndexOf(' ')),
        phones = command.slice(command.lastIndexOf(' ') + 1).split(',');
        if (!phoneBook.hasOwnProperty(name)) phoneBook[name] = [];
        return phones.forEach(pushToBook);

        function pushToBook(item, index) {
            phoneBook[name].push(item);
        }
    }

    if (command === 'SHOW') {
        var keys = Object.keys(phoneBook), result = [];
        for (i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (phoneBook[key].length === 0) continue;
            var phones = phoneBook[key].join(', ');
            result.push(key + ': ' + phones);
        }
        return result.sort();
    }

    if (command.startsWith('REMOVE_PHONE')) {
        var remPhone = command.slice(command.lastIndexOf(' ') + 1); 
        var keys = Object.keys(phoneBook);
        for (i = 0; i < keys.length; i++) {
            var key = keys[i];
            var phones = phoneBook[key];
            if (phones.indexOf(remPhone) != -1) {
                phones.splice(phones.indexOf(remPhone), 1);
                return true;
            }
        }
        return false;
    }
   
};
