import axiosClient from './axiosClient';

const categoryApi ={
    getSubmenu: (param) => {
        const url ="/SubMenu";  // Nếu params là 1 string != null thì url = `Submenu/${param}`
        return axiosClient.get(url);
    },
    postCategory:(params) => {
        const url= '/Categories';
        return axiosClient.post(url, {params});
    }
}

export default categoryApi;