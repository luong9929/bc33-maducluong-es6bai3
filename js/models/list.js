import { listItem } from "./models.js"

export class list {
    arrList = []
    
    
    themMoi = (listMoi) =>{
        this.arrList.push(listMoi)
    }
   
    Luu  () {
        localStorage.setItem('arrList', JSON.stringify(this.arrList));
    }
    lay(){
        if (localStorage.getItem('arrList')) {
            this.arrList = JSON.parse(localStorage.getItem('arrList'));
        }
    }
    
    xoa =(i)=>{
        this.arrList = this.arrList.filter(list => list.newTask !== i)
    }
    tangDan(){
        this.arrList = _.orderBy(this.arrList,['newTask'],['arc'])
    }
    giamDan(){
        this.arrList = _.orderBy(this.arrList,['newTask'],['desc'])
    }
    renderList = (hi) =>{
        
        let htmlConten = this.arrList.reduce((html,i)=>{
            let listMoi = new listItem()
            console.log(listMoi)

            listMoi = { ...listMoi, ...i }
            return html + `
            <li>
            <p>${listMoi.newTask}</p>
            <div>
            <button class="btn" onclick="xoalist('${listMoi.newTask}')"> <i class="fa fa-trash-alt"></i></i></button>
            <button class="btn hihi" id="btn" onclick="done('${listMoi.newTask}')"><i class="fa fa-check-circle"></i></button>
            </div>
            </li>
            
            
            `
            
        },'')
      
        document.querySelector(hi).innerHTML = htmlConten
    }
}

export class hihihi {
    arrhihi = []
    
    neww = (listMoi) =>{
        this.arrhihi.push(listMoi)
        
    }
    save  () {
        localStorage.setItem('arrList1', JSON.stringify(this.arrhihi));
    }
    get(){
        if (localStorage.getItem('arrList1')) {
            this.arrhihi = JSON.parse(localStorage.getItem('arrList1'));
        }
    }
    del =(i)=>{
        this.arrList = this.arrhihi.filter(list => list.newTask !== i)
    }
    render = (hi) =>{
        
        let htmlConten = this.arrhihi.reduce((html,i)=>{
            let old = new listItem()
            console.log(old.newTask)

            old = { ...old, ...i }
            return html + `
            <li>
            <p>${old.newTask}</p>
            <div>
            <button class="btn" onclick="xoalist('${old.newTask}')"> <i class="fa fa-trash-alt"></i></i></button>
            <button class="btn text-success" id="btn""><i class="fa fa-check-circle"></i></button>
            </div>
            </li>
            
            
            `
            
        },'')
      
        document.querySelector(hi).innerHTML = htmlConten
    }
}