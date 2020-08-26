
function addListElement(){
  console.log("funziona tasto");
  var target = $("#new-task");
  var text = target.val();
  target.val("");
  console.log(text);
  $.ajax({
    url:"http://157.230.17.132:3015/todos",
    method:"POST",
    data: {
      text:text
    },
    success: function (data) {
      console.log("data",data);
      getList();
    },
    error: function (error) {
      console.log("error",error);
    }
  });
}
function addEventListener() {
  var addBtn = $("#add");

  addBtn.click(addListElement);

}
function printList(tasks) {
  var template = $("#template").html();
  var compiled = Handlebars.compile(template);
  var target = $("#list");
  target.text("");

  for (var i = 0; i < tasks.length; i++) {
    var task = tasks[i];
    var taskHtml = compiled(task);
    target.append(taskHtml);

  }
}
function getList() {
  $.ajax({
   url:"http://157.230.17.132:3015/todos",
   method:"GET",
   success: function(data){
     printList(data);

   },
   error: function (error) {
     console.log("error",error);
   }
 });
}

function init() {
  getList();
  addEventListener();
}
$(document).ready(init);
