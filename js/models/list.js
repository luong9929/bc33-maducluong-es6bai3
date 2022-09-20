import { doneList } from "./done.js";
import { listItem } from "./models.js";
export let donelist = new doneList();
export class list {
  arrList = [];

  themMoi = (listMoi) => {
    this.arrList.push(listMoi);
  };

  Luu() {
    localStorage.setItem("arrList", JSON.stringify(this.arrList));
  }
  lay() {
    if (localStorage.getItem("arrList")) {
      this.arrList = JSON.parse(localStorage.getItem("arrList"));
    }
  }

  xoa = (i) => {
    this.arrList = this.arrList.filter((list) => list.newTask !== i);
  };
  tangDan() {
    this.arrList = _.orderBy(this.arrList, ["newTask"], ["arc"]);
  }
  giamDan() {
    this.arrList = _.orderBy(this.arrList, ["newTask"], ["desc"]);
  }
  renderList = (hi) => {
    let htmlConten = this.arrList.reduce((html, i) => {
      console.log(i);
      let listMoi = new listItem();
      console.log(listMoi);

      listMoi = { ...listMoi, ...i };
      return (
        html +
        `
            <li>
            <p>${listMoi.newTask}</p>
            <div>
            <button class="btn" onclick="xoalist('${listMoi.newTask}')"> <i class="fa fa-trash-alt"></i></i></button>
            <button class="btn hihi" id="btn" onclick="done('${listMoi.newTask}')"><i class="fa fa-check-circle"></i></button>
            </div>
            </li>
            
            
            `
      );
    }, "");

    document.querySelector(hi).innerHTML = htmlConten;
  };
  check = (i) => {
    let check = this.arrList.find((task) => task.newTask === i);
    donelist.neww(check);
    donelist.save();
    donelist.get();
    donelist.render("#completed");
  };
}
