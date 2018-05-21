/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */


function query(collection) {
    var options = [].slice.call(arguments, 1),
        answer = collection.slice();
    //фильтруем
    for (var i = 0; i < options.length; i++) {
        if (!Array.isArray(options[i])) {
            var currFilter = options[i],
                nameOfProperty = Object.keys(currFilter)[0],
                valuesOfProperty = currFilter[nameOfProperty],
                prevCollection = answer.slice(),
                currCollection = [];
            
            currCollection = prevCollection.filter(filterForFilter);

            function filterForFilter(itemOfCollect) {
                if (itemOfCollect[nameOfProperty] != undefined) {
                    return valuesOfProperty.some(someForFilter);

                    function someForFilter(valueOfPoperty) {
                        return valueOfPoperty === itemOfCollect[nameOfProperty];
                    }
                }
            }            
            answer = currCollection.slice();
        }
    }

    //селектим
    for (var i=0; i < options.length; i++) {
        if (Array.isArray(options[i])) {
            var currSelect = options[i];
            prevCollection = answer.slice();
            currCollection = [];

            currCollection = prevCollection.map(mapForSelect);
            
            function mapForSelect(itemOfCollect) {
                var tempRes = {};
                currSelect.forEach(forEachForSelect);
                return tempRes;

                function forEachForSelect(propertyForSelect) {
                    if (itemOfCollect[propertyForSelect] != undefined) {
                        tempRes[propertyForSelect] = itemOfCollect[propertyForSelect];
                    }
                }
            }
            answer = currCollection.slice();
        }
    }
    return answer;
}

/**
 * @params {String[]}
 */
function select() {
    return [].slice.call(arguments);
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    var result = {};
    result[property] = values;
    return result;
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};