export class doneList {
    arrDone = []
    
    neww = (listMoi) =>{
        this.arrDone.push(listMoi)
        
    }
    save  () {
        localStorage.setItem('arrList1', JSON.stringify(this.arrDone));
    }
    get(){
        if (localStorage.getItem('arrList1')) {
            this.arrDone = JSON.parse(localStorage.getItem('arrList1'));
        }
    }
    del =(i)=>{
        this.arrDone = this.arrDone.filter((list) => list.newTask !== i)
    }
    tang(){
        this.arrDone = _.orderBy(this.arrDone,['newTask'],['arc'])
    }
    giam(){
        this.arrDone = _.orderBy(this.arrDone,['newTask'],['desc'])
    }
    render = (hi) =>{
        
        let htmlConten = this.arrDone.reduce((html,i)=>{
            
            

            
            return html + `
            <li>
            <p>${i.newTask}</p>
            <div>
            <button class="btn" onclick="xoaDone('${i.newTask}')"> <i class="fa fa-trash-alt"></i></i></button>
            <button class="btn text-success" id="btn""><i class="fa fa-check-circle"></i></button>
            </div>
            </li>
            
            
            `
            
        },'')
      
        document.querySelector(hi).innerHTML = htmlConten
    }
}