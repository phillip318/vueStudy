/**
 * Created by Administrator on 2018/2/27 0027.
 */
var list = [
   /* {
        title:'吃饭打豆豆1'
    },
    {
        title:'吃饭打豆豆2'
    }*/
];

new Vue({
       el:'.main',
       data:{
           list,
           todo:''
       },
       methods:{
           addTodo(ev){
                //向List中添加一项任务
               /*
               {title:xxx}
               * */
               this.list.push({
                   title:this.todo
               });
               this.todo = "";

           }
       }
});