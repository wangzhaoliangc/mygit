// 域名
export const baseURL = '/api';             //https://www.dengbaoyun.com.cn  
//http://42.51.207.166:8081
export const loginURL = `${baseURL}/user/login`;		 	                // 用户登录
export const isLoginURL = `${baseURL}/user/islogin`;		              //  验证是否登录
export const loginOutURL = `${baseURL}/user/logout`;		              //  退出登录
export const registerSendCodeURL = `${baseURL}/user/sendCode`                     //注册发送验证码
export const registerURL = `${baseURL}/user/register`                     //注册

export const userinfoURL = `${baseURL}/user/view`;                    //  查看用户信息
export const userViewAllURL = `${baseURL}/user/viewAll`;              //  用户云主机数量状态
export const purchaseURL = `${baseURL}/user/costview`;                //  查消费记录
export const editUserinfoURL = `${baseURL}/user/update`;              // 修改用户信息
export const verifyEmailURL = `${baseURL}/user/isEmailRepeat`;        // 验证邮箱是否重复
export const verifyPhoneURL = `${baseURL}/user/isPhoneRepeat`;        // 验证手机号是否重复
export const serverStartupURL = `${baseURL}/order/add`;               //  开通云主机
export const myCloudServerListsURL =`${baseURL}/cloudserver/list`     //  用户自己的云主机
export const lookUserInfoURL = `${baseURL}/cloudserver/getOne`		  //	查看一条服务器信息
export const selectSpecURL = `${baseURL}/cloudserver/spec`            // 选择规格时的获取所有规格


export const calcMoneyURL = `${baseURL}/cloudserver/caculate`             // 计算云主机价格
export const opreateServerURL = `${baseURL}/cloudserver/operate`	      //  开机+关机+重启
export const createSnapshootURL = `${baseURL}/cloudserver/snop`           //  创建快照
export const editCommentURL = `${baseURL}/cloudserver/update`		      //	修改备注
export const opreateRecordURL = `${baseURL}/cloudserver/operationLog`     //  查看操作日志


export const mirrorListURL = `${baseURL}/cloudserver/mirrors`	    //  所有镜像
export const specListURl = `${baseURL}/cloudserver/spec`		    //  获取所有规格
export const serverListURL = `${baseURL}/cloudserver/list`          //  所有云服务器列表
export const getOneserverURL = `${baseURL}/cloudserver/getOne`	    //	查看一条服务器信息

export const newsListURL = `${baseURL}/news/list`                   //  所有新闻
export const getOneNewsURL = `${baseURL}/news/getOne`               //  获取新闻详情
export const getOrdersURL = `${baseURL}/order/list`                 //获取订单列表

export const payRecharge = `${baseURL}/order/alipay/wap/recharge`   //充值余额
export const aliPay = `${baseURL}/order/alipay/wap/topay`           //支付宝支付
export const wxPay = `${baseURL}/order/wx/topay`                    //微信支付
export const rePay = `${baseURL}/order/topay`                       //余额支付
export const updateOrder =`${baseURL}/order/update`                 //作废订单

export const addSafe =`${baseURL}/securityGroup/add`                //增加安全组
export const SafeList =`${baseURL}/securityGroup/list`              //安全组列表
export const deleSafeGroup =`${baseURL}/securityGroup/delete`        //删除安全组

export const SafeRuleList =`${baseURL}/securityRule/list`           //安全组规则列表
export const deleSafeRule =`${baseURL}/securityRule/delete`         //删除安全组规则
export const addSafeRule =`${baseURL}/securityRule/add`             //添加安全组规则