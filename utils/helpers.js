var moment = require('moment');
moment().format();

(function () { var countdown, moment, ref, ref1, slice = [].slice; countdown = (ref = typeof require === "function" ? require("countdown") : void 0) != null ? ref : this.countdown; moment = (ref1 = typeof require === "function" ? require("moment") : void 0) != null ? ref1 : this.moment; moment.fn.countdown = function () { var args, other; other = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : []; return countdown.apply(null, [this.toDate(), moment(other).toDate()].concat(slice.call(args))) } }).call(this);


module.exports = {
    format_time: (date) => {
        // return date.toLocaleTimeString();
        return moment(date).format('h:mm:ss a');
    },
    format_date: (date) => {
        return moment(date).format('MMMM Do YYYY, h:mm:ss a');
    },
    week_countdown: () => {
        return moment().endOf('week').countdown().toString();
    },
};
