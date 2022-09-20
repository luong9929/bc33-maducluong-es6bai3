
import { list , donelist } from "../models/list.js";
import { listItem } from "../models/models.js";

let List = new list();

document.querySelector("#addItem").onclick = function () {
  let input = document.querySelector("#newTask ").value;
  let listMoi = new listItem();
  listMoi.newTask = input;

  console.log(listMoi.newTask);
  console.log(listMoi);
  List.themMoi(listMoi);
  List.Luu();
  List.lay();
  List.renderList("#todo");
};
window.xoalist = (i) => {
  console.log(i);
  List.xoa(i);

  List.Luu();
  List.renderList("#todo");
};
document.querySelector("#two").onclick = function () {
  List.tangDan();
  List.renderList("#todo");
  donelist.tang();
  donelist.render("#completed");
};
document.querySelector("#three").onclick = function () {
  List.giamDan();
  List.renderList("#todo");
  donelist.giam();
  donelist.render("#completed");
};
window.onload = function () {
  List.lay();

  List.renderList("#todo");

  donelist.get();

  donelist.render("#completed");
};
window.done = (i) => {
  List.check(i);
};

window.xoaDone = (i) => {
    donelist.del(i);
    donelist.save();
    donelist.render("#completed");
};
