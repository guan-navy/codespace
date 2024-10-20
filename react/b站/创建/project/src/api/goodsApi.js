import axiosInstance from './axiosConfig';

export const getList = (params = '') => {
    const {
        date = '',
        name = '',
        status = ''
    } = params;

    return axiosInstance.get('/list', {
        params: {
            date,
            name,
            status: status || ''
        }
    });
};


