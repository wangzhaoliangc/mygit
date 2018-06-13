// control
import axios from 'axios'
import { 
  baseURL,userViewAllURL,userinfoURL,serverListURL,getOneserverURL,newsListURL,getOneNewsURL
 } from 'api/unit'

//  获取用户信息
export function getUserinfo(mid) {
  const data = {};
  return axios.post(userinfoURL, {
      params: data
    }).then((res) => {
      return Promise.resolve(res.data)
    })
}
// 获取云产品数量
export function getServerData(mid) {
  const data = {};
  return axios.post(userViewAllURL, {
      params: data
    }).then((res) => {
      return Promise.resolve(res.data)
    })
}

// 获取云主机列表
export function getServerList(params){
  let data = {};
  params ? data=params : data={};
  
  return axios.post(serverListURL, data).then((res) => {
      return Promise.resolve(res.data)
    })
}
// 获取一台云主机信息
export function getServer(mid){
  const data = {
    id: mid
  }
  return axios.post(getOneserverURL, data).then((res) => {
      return Promise.resolve(res.data)
    })
}

// 获取新闻列表
export function getNewsList(params){
  let data = {};
  params ? data=params : data={};
  return axios.post(newsListURL, data)
    .then((res) => {
      return Promise.resolve(res.data);
    })
}
// 获取新闻详情
export function getNewsMsg(surl){
  let data = {
    url: surl.substr(1)
  };

  return axios({
    method: 'POST',
    url: baseURL+surl, 
    data: JSON.stringify(data),
    headers: {
      "Content-Type": 'application/json;charset=UTF-8'
    }
  }).then((res) => {
      return Promise.resolve(res.data);
    })
}