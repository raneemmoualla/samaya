function calculateDaysBetweenDates(startDate, endDate) {
    // Validate input
    if (!(startDate instanceof Date) || !(endDate instanceof Date))
        return "Invalid input";

    // Calculate days between dates
    var millisecondsPerDay = 86400 * 1000; // Day in milliseconds
    return Math.round((endDate.getTime() - startDate.getTime()) / millisecondsPerDay);
}
function findMax(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}