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