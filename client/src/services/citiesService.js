const cities = [
    {
        _id: 1,
        name: 'Seattle',
        state: 'WA',
        countryCode: 'ISO 3166-2:US',
        latitude: '47.608013',
        longitude: '-122.335167'
    },
    {
        _id: 2,
        name: 'New York',
        state: 'NY',
        countryCode: 'ISO 3166-2:US',
        latitude: '40.730610',
        longitude: '-73.935242'
    },
    {
        _id: 3,
        name: 'Chicago',
        state: 'IL',
        countryCode: 'ISO 3166-2:US',
        latitude: '41.881832',
        longitude: '-87.623177'
    },
    {
        _id: 4,
        name: 'Los Angeles',
        state: 'CA',
        countryCode: 'ISO 3166-2:US',
        latitude: '34.052235',
        longitude: '-118.243683'
    },
    {
        _id: 5,
        name: 'Miami',
        state: 'FL',
        countryCode: 'ISO 3166-2:US',
        latitude: '25.761681',
        longitude: '-80.191788'
    }
];

export const getCities = () => {
    return cities;
};

const getLatLong = () => {
};