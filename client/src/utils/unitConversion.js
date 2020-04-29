export const farenheitToCelcius = (farenheitTemp) => {
    return Math.floor((farenheitTemp - 32) * 5 / 9) ;
};

export function metersToMiles(meters) {
    return Math.floor(meters * 0.00062137);
}

export function dateConversion(date) {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const today = new Date(date * 1000);
    return days[today.getDay()];
}

export function timeConversion(date) {
    const today = new Date(date * 1000);
    return today.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true});
}