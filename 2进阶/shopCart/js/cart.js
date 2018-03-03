/**
 * Created by Administrator on 2018/2/28 0028.
 */
var vm = new Vue({
    el:'#app',
    data:{
        productList:[],
        totalMoney:0
    },
    filters:{

    },
    mounted:function(){
        this.cartView();
    },
    methods:{
        cartView:function(){
            this.$http.get('data/cartData.json').then(function(res){
                console.log(res)
                vm.productList = res.body.result.list;
                vm.totalMoney = res.body.result.totalMoney;
            })
        }
    }
})