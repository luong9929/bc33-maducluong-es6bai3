import { hihihi, list } from "../models/list.js";
import { listItem } from "../models/models.js";

let List = new list()
let haha = new hihihi()
document.querySelector('#addItem').onclick = function(){
    let input = document.querySelector('#newTask ').value
    let listMoi = new listItem()
    listMoi.newTask = input
   
   
    console.log(listMoi.newTask)
    console.log(listMoi)
    List.themMoi(listMoi)
    List.Luu()
    List.lay()
    List.renderList('#todo')

}
window.xoalist=(i)=>{
    console.log(i)
    List.xoa(i)
   
    List.Luu()
    List.renderList('#todo')
}
document.querySelector('#two').onclick = function(){
    List.tangDan()
    List.renderList('#todo')
}
document.querySelector('#three').onclick = function(){
    List.giamDan()
    List.renderList('#todo')
}
window.onload=function(){
    List.lay()
    
    List.renderList('#todo')
    haha.get()
    haha.render('#completed')
}



window.done = (i) =>{
    
    haha.neww(i)
    console.log(i)
    haha.save() 
    haha.del(i)    
    haha.render('#completed',i)
}