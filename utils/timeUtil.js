const templates = {
    prefix: '',
    suffix: ' ago',
    seconds: 'less than a minute',
    minute: 'about a minute',
    minutes: '%d minutes',
    hour: 'about an hour',
    hours: 'about %d hours',
    day: 'a day',
    days: '%d days',
    month: 'about a month',
    months: '%d months',
    year: 'about a year',
    years: '%d years',
};

/**
 *
 * @param {String} t - Template Name
 * @param {Number} n - Time unit e.g. 5, 3
 */
const template = (t, n) => {
    return templates[t] && templates[t].replace(/%d/i, Math.abs(Math.round(n)));
};

const getTemplate = ({ seconds, minutes, hours, days, years }) => {
    return (
        templates.prefix +
        ((seconds < 45 && template('seconds', seconds)) ||
            (seconds < 90 && template('minute', 1)) ||
            (minutes < 45 && template('minutes', minutes)) ||
            (minutes < 90 && template('hour', 1)) ||
            (hours < 24 && template('hours', hours)) ||
            (hours < 42 && template('day', 1)) ||
            (days < 30 && template('days', days)) ||
            (days < 45 && template('month', 1)) ||
            (days < 365 && template('months', days / 30)) ||
            (years < 1.5 && template('year', 1)) ||
            template('years', years)) +
        templates.suffix
    );
};

/**
 *
 * @param {Number} time - Timestamp in seconds
 * @returns {String} - e.g `4 hours aga`
 */
const timeSince = time => {
    if (!time) return null;

    const timeUnits = {};
    const now = new Date();
    timeUnits.seconds = now.getTime() * 0.001 - time;
    timeUnits.minutes = timeUnits.seconds / 60;
    timeUnits.hours = timeUnits.minutes / 60;
    timeUnits.days = timeUnits.hours / 24;
    timeUnits.years = timeUnits.days / 365;

    return getTemplate(timeUnits);
};

export default timeSince;
