/**
 * @param {String} date
 * @returns {Object}
 */


module.exports = function (date) {
    var numb, unit;
    var time = {
        date: new Date(date)
    }; 
    Object.defineProperties(time, {
        'value': {
            get: function() {
                var options = {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    timezone: 'UTC',
                    hour: '2-digit',
                    minute: '2-digit'
                  };
                return new Date(this.date).toLocaleString('ru', options);
            }
        },
        'add': {
            value: function (numb, unit) {
                if (numb < 0) {throw new TypeError;}
                    switch (unit) {
                        case 'minutes': {
                            this.date.setMinutes(this.date.getMinutes() + numb);
                            break;
                        }
                        case 'hours': {
                            this.date.setHours(this.date.getHours() + numb);
                            break;
                        }
                        case 'days': {
                            this.date.setDate(this.date.getDate() + numb);
                            break;
                        }
                        case 'months': {
                            this.date.setMonth(this.date.getMonth() + numb);
                            break;
                        }
                        case 'years': {
                            this.date.setFullYear(this.date.getFullYear() + numb);
                            break;
                        }
                        default : {
                            throw new TypeError;
                        }
                    }
                    // this.date.setMinutes(this.date.getMinutes() + this.date.getTimezoneOffset);
                    console.log(this.date);
                    return this;
            }
        },
        'subtract': {
            value: function (numb, unit) {
                if (numb < 0) {throw new TypeError;}
                    switch (unit) {
                        case 'minutes': {
                            this.date.setMinutes(this.date.getMinutes() - numb);
                            break;
                        }
                        case 'hours': {
                            this.date.setHours(this.date.getHours() - numb);
                            break;
                        }
                        case 'days': {
                            this.date.setDate(this.date.getDate() - numb);
                            break;
                        }
                        case 'months': {
                            // if (this.date.getMonth() - numb < 0) numb++;
                            this.date.setMonth(this.date.getMonth() - numb);
                            // this.date.setMonth(1-5);
                            break;
                        }
                        case 'years': {
                            this.date.setFullYear(this.date.getFullYear() - numb);
                            break;
                        }
                        default : {
                            throw new TypeError;
                        }
                    }
                    console.log(this.date);
                    return this;     
            }
        }
    })

    return time;  
};
