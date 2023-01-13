import moment from 'moment';

export const getJobDate = (job_start_date, job_end_date) => {
    let currentDate = new Date().getTime();
    let startDate = new Date(
        job_start_date.replace(/-/g, "/") + ":00"
    ).getTime();
    let endDate = new Date(job_end_date.replace(/-/g, "/") + ":00").getTime();
    if (currentDate < startDate) {
        let diff = startDate - currentDate;
        let days = Math.ceil(diff / (1000 * 3600 * 24));
        return `${days} gün sonra yayınlanacak`;
    } else if (currentDate >= startDate && currentDate <= endDate) {
        let diff = currentDate - startDate;
        let days = Math.ceil(diff / (1000 * 3600 * 24));
        return `${days} gündür yayında`;
    } else {
        let diff = currentDate - endDate;
        let days = Math.ceil(diff / (1000 * 3600 * 24));
        return `${days} gün önce yayından kaldırılmış`;
    }
};

export const getJobDateWithMomentJS = (job_start_date, job_end_date) => {
    let currentDate = moment();
    let startDate = moment(job_start_date, "YYYY-MM-DD HH:mm");
    let endDate = moment(job_end_date, "YYYY-MM-DD HH:mm");

    if (currentDate.isBefore(startDate)) {
        let diff = startDate.diff(currentDate, 'days');
        return `${diff} gün sonra yayınlanacak`;
    } else if (currentDate.isBetween(startDate, endDate)) {
        let diff = currentDate.diff(startDate, 'days');
        return `${diff} gündür yayında`;
    } else {
        let diff = currentDate.diff(endDate, 'days');
        return `${diff} gün önce yayından kaldırılmış`;
    }
}