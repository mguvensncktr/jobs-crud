import { getJobDate } from '../utils/getJobDate';

describe('getJobDate test', () => {
    it('should return the correct information for jobs that have not started', () => {
        const job_start_date = '2023-02-01'
        const job_end_date = '2023-03-31'
        const result = getJobDate(job_start_date, job_end_date)
        expect(result).toContain(' gün sonra yayınlanacak')
    })

    it('should return the correct information for jobs that are currently active', () => {
        const job_start_date = '2023-01-01'
        const job_end_date = '2023-03-31'
        const result = getJobDate(job_start_date, job_end_date)
        expect(result).toContain(' gündür yayında')
    })

    it('should return the correct information for jobs that have been removed', () => {
        const job_start_date = '2022-12-01'
        const job_end_date = '2023-01-01'
        const result = getJobDate(job_start_date, job_end_date)
        expect(result).toContain(' gün önce yayından kaldırılmış')
    })
})