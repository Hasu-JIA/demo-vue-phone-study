import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000';
axios.interceptors.response.use((res) => {
  //在这里统一拦截结果，把结果处理成res.data
  return res.data
})


//获取轮播图数据，返回promise對象
export const getSliders = () => axios.get('api/getSliders');
//獲取首頁熱門圖書
export const getHotBook = () => axios.get('api/getHotBooks');

export const getBookList = (offset) =>
 {return axios.get(`/api/getBookList/${offset}`);}
// /api/getBookList/:offset
//刪除某一本圖書
export const removeBook = (id)=>{
  return axios.delete(`/api/removeBook/${id}`);
}
//獲取圖書詳情頁
export const getDetail=(id)=>{
  return axios.get(`/api/getDetail/${id}`);
}
//修改圖書
export const updateBook=(id,data)=>{
  console.log(data);
  return axios.put(`api/updateBook/${id}`,data);
}
export const addBook=(id,data)=>{
  return axios.post(`api/addBook/${id}`,data)
}

// export const getAll=()=>{
//   return axios.all([getSliders(),getHotBook()]);
// }