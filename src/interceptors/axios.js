import axios from "axios";
axios.defaults.baseURL="http://localhost:3000";
axios.interceptors.response.use(res=>res,async err=>{
    if(err.response.status==400 ){
        const response=await axios.get('/refresh');

        if(response.status==200){
            console.log(response);
            axios.defaults.headers.common['Authorization']='Bearer '+response.data.accessToken;

            return axios(err.config);
        }
    }
    return err;
});