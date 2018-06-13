<template>
    <div>
        <x-header title="等保云"></x-header>
        <div class="page-container">
            <span>404</span>
            <div>page not found</div>
            <p>
                <small>你浏览了个啥！</small>
            </p>
        </div>
    </div>
</template>
<script>
import { XHeader } from 'vux';
export default{
    name: 'NotFund',
    components: { XHeader },
    data(){
        return{
            
        }
    }
}
</script>

<style lang="less" scoped>
    .page-container {
        padding-top: 100px;
        padding-bottom: 10px;
        font-size: 30px;
        text-align: center;
        color: rgb(192, 204, 218);
        border-bottom: 1px solid #e1e1e1;
        span{
            &:first-child{
               font-size: 60px; 
            }
        }
        small{
            font-size: 18px;
        }
    }
</style>