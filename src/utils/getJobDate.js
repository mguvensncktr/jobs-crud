import moment from 'moment';

export const getJobDate = (job_start_date, job_end_date) => {
    const currentDate = new Date().getTime();
    const jobStartDate = new Date(
        job_start_date.replaceAll('-', "/")
    ).getTime();
    const jobEndDate = new Date(job_end_date.replaceAll('-', "/")).getTime();
    if (currentDate < jobStartDate) {
        const diffInMs = jobStartDate - currentDate;
        const days = Math.ceil(diffInMs / (1000 * 3600 * 24));
        return `${days} gün sonra yayınlanacak`;
    } else if (currentDate >= jobStartDate && currentDate <= jobEndDate) {
        const diffInMs = currentDate - jobStartDate;
        const days = Math.ceil(diffInMs / (1000 * 3600 * 24));
        return `${days} gündür yayında`;
    } else {
        const diffInMs = currentDate - jobEndDate;
        const days = Math.ceil(diffInMs / (1000 * 3600 * 24));
        return `${days} gün önce yayından kaldırılmış`;
    }
};

export const getJobDateWithMomentJS = (job_start_date, job_end_date) => {
    const currentDate = moment();
    const jobStartDate = moment(job_start_date, "YYYY-MM-DD HH:mm");
    const jobEndDate = moment(job_end_date, "YYYY-MM-DD HH:mm");

    if (currentDate.isBefore(jobStartDate)) {
        const days = jobStartDate.diff(currentDate, 'days');
        return `${days} gün sonra yayınlanacak`;
    } else if (currentDate.isBetween(jobStartDate, jobEndDate)) {
        const days = currentDate.diff(jobStartDate, 'days');
        return `${days} gündür yayında`;
    } else {
        const days = currentDate.diff(jobEndDate, 'days');
        return `${days} gün önce yayından kaldırılmış`;
    }
}