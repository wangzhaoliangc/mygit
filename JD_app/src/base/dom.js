import { allObj } from '../api/config.js'
import Vue from 'vue'
export function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

export function addClass(el, className) {
  if (hasClass(el, className)) {
    return
  }

  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

export function getOrder(arr) {
  console.log(typeof(arr))
  if(!arr){
    return
  }
    if(arr.length >=0){
      arr.forEach((order)=>{
        if(!order.pay_status && !order.delete_status){
          Vue.set(order,"npay",true)
        }
          order.order_type =  allObj.typeObj[order.order_type] 
          order.pay_status =  allObj.payObj[order.pay_status]
          order.delete_status = allObj.deleteObj[order.delete_status]
      })
  }else {
     if(!arr.pay_status && !arr.delete_status){
        Vue.set(arr,"npay",true)
      }

      arr.order_type =  allObj.typeObj[arr.order_type] 
      arr.pay_status =  allObj.payObj[arr.pay_status]
      arr.delete_status = allObj.deleteObj[arr.delete_status]
      console.log(arr)
  }
   
	
}