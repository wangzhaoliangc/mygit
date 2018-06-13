/*
*   开通云主机
*/
import axios from 'axios';

import { totalMoneyURL,mirrorListURL,specListURl } from 'api/unit'
// 获取所有镜像
export function getMirrorList(){
  return axios.post(mirrorListURL, {
      params: {}
    }).then((res) => {
      return Promise.resolve(res.data);
    })
}
// 获取所有规格
export function getSpecList(){
  return axios.post(specListURl, {
      params: {}
    }).then((res) => {
      return Promise.resolve(res.data);
    })
}