/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    var time = {};

    method = {
        'minutes': 'Minutes',
        'hours': 'Hours',
        'days': 'Date',
        'months': 'Month',
        'years': 'FullYear'
    }

    Object.defineProperties(time, {
        'date': {
            value: new Date(date)
        },
        'value': {
            get: function() {
                // var options = {
                //     minute: '2-digit',
                //     hour: '2-digit',
                //     day: '2-digit',
                //     month: '2-digit',
                //     year: 'numeric'
                // }
                var year = this.date.getFullYear(),
                    month = this.date.getMonth() + 1,
                    day = this.date.getDate(),
                    minutes = this.date.getMinutes(),
                    hours = this.date.getHours();
                if (month < 10) month = '0' + month;
                if (day < 10) day = '0' + day;
                if (minutes < 10) minutes = '0' + minutes;
                if (hours < 10) hours = '0' + hours;

                return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes;
                // return this.date.getFullYear() + '-' + this.date.getMonth() + '-' +
                // this.date.getDate() + ' ' + this.date.getHours() + ':' + this.date.getMinutes();
                // return new Date(this.date).toLocaleString('ru', options);
            }
        },
        'add': {
            value: function(numb, unit) {
                if (numb > 0 && method.hasOwnProperty(unit)) {                  
                    this.date['set' + method[unit]](numb + this.date['get' + method[unit]]());
                    return this;
                }
                else {
                    throw new TypeError;
                }                
            }
        },
        'subtract': {
            value: function(numb, unit) {
                if (numb > 0 && method.hasOwnProperty(unit)) {
                    this.date['set' + method[unit]](-numb + this.date['get' + method[unit]]());
                    return this;
                }
                else {
                    throw new TypeError;
                }                
            }
        }
    });
    return time;
};
