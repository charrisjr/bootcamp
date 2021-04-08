function returnDay(number) {
    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    if (number < 1 || number > 7) {
        return null;
    } else {
    return weekdays[number-1];// adjust position by 1
    }
}