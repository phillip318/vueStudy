/**
 * Created by Administrator on 2018/2/27 0027.
 */

var store = {
    save(key,value){
        localStorage.setItem(key,JSON.stringify(value));
    },
    fetch(key){
        return JSON.parse(localStorage.getItem(key)) || [];
    }
}

var filter = {
    all:function(list){
        return list;
    },
    finished:function(list){
        return list.filter(item=>item.isChecked)
    },
    unfinished:function(){
        return list.filter(item=>!item.isChecked)
    }
}


/*var list = [
    {
        title:'吃饭打豆豆1',
        isChecked:false
    },
    {
        title:'吃饭打豆豆2',
        isChecked:true
    }
];*/
var list = store.fetch("miaov-class");

var vm = new Vue({
       el:'.main',
       data:{
           list,
           todo:'',
           edtorTodos:'',  //记录正在编辑的数据
           beforeTitle:'',  //记录编辑旧值
           visibility:'all'  //通过这个属性值的变化对我们的数据进行筛选
       },
       watch:{
     /*    list:function(){ //监控list 是否改变
             store.save("miaov-class",this.list);
         }*/
           list:{
               handler:function(){
                   store.save("miaov-class",this.list);
               },
               deep:true
           }
       },
       computed:{
           noCheckLength(){
               return this.list.filter(function(item){
                   return !item.isChecked
               }).length;
           },
           filterList(){
               //过滤的时候有三种情况  all  finished  unfinished

               //找到了过滤函数，就返回过滤后的数据，如果没有就返回所有数据
               return filter[this.visibility]?filter[this.visibility](list):list;
           }
       },
       methods:{
           addTodo(ev){
                //向List中添加一项任务
               /*
               {title:xxx}
               * */
               this.list.push({
                   title:this.todo,
                   isChecked:false
               });
               this.todo = "";
           },
           deleteTodo(todo){
               var index = this.list.indexOf(todo);
               this.list.splice(index,1);
           },
           edtor(todo){ //编辑任务
               //开始编辑时 存储一下旧值
               this.edtorTodos = todo;
               this.beforeTitle = todo.title
           },
           edtorTodoed(todo){//修改完成
                this.edtorTodos = '';
           },
           cancel(todo){//取消编辑
               todo.title = this.beforeTitle;
               //让 input隐藏
               this.edtorTodos = '';
               this.beforeTitle = '';
           }
       },
       directives:{// 自定义指令
            "focus":{
                update(el,binding){
                    if(binding.value){
                        el.focus();
                    }
                }
            }
       }
});

function watchHashChange(){
    var hash = window.location.hash.slice(1);
    vm.visibility = hash;
}

watchHashChange();

window.addEventListener("hashchange",watchHashChange)