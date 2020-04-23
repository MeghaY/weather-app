export const farenheitToCelcius = (farenheitTemp) => {
    return Math.floor((farenheitTemp - 32) * 5 / 9) ;
};

export function metersToMiles(meters) {
    return Math.floor(meters * 0.00062137);
}