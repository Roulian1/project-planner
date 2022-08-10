export const daysSince = (date) => {
    const now = Date.now();
    const elapsedTime = date - now;
    const dayInMiliseconds = 86400000;
    const days = Math.floor(elapsedTime / dayInMiliseconds) + 1;

    if (days > 1) {
        // returns days to date
        return `Deadline is in ${days} days.`;
    } else if (days === 1) {
        // returns days to date
        return `Deadline is tomorow.`;
    }
    else if (days < 0) {
        // returns date passed
        return 'Deadline is passed.';
    } else {
        // returns for today
        return 'Deadline is today.';
    }
};