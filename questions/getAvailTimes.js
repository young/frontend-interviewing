/**
 * @param {Array of Objects} input - Eg.:
 * [
 *   { name: 'Joe', hrs: ['10', '11', '12'] },
 *   { name: 'Amy', hrs: ['11'] },
 *    ...
 * ]
 * Think of hrs as starting time where user is available that hour.
 *
 * @return {Object} - We want to return an object of all available hours
 *  mapped to all users who are available in that hour. Eg.:
 * {
 *   '10': ['Joe'],
 *   '11': ['Joe', 'Amy'],
 *   '12': ['Joe'],
 * }
 */
