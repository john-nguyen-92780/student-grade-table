class GradeTable {
  constructor(tableElement){
    this.tableElement = tableElement;
  }
  updateGrades(grades) {
    var tbody = this.tableElement.querySelector("tbody");
    tbody.innerHTML = "";
    for (var i = 0; i < grades.length; i++) {
      var newTr = document.createElement("tr");
      var studentName = document.createElement("td");
      var studentCourse = document.createElement("td");
      var studentGrade = document.createElement("td");
      var operationColumn = document.createElement("td");
      studentName.textContent = grades[i].name;
      studentCourse.textContent = grades[i].course;
      studentGrade.textContent = grades[i].grade;
      newTr.appendChild(studentName);
      newTr.appendChild(studentCourse);
      newTr.appendChild(studentGrade);
      newTr.appendChild(operationColumn);
      tbody.appendChild(newTr);
    }
    console.log("get grades");
  }
  onDeleteClick(deleteGrade) {
    this.deleteGrade();
  }
  renderGradeRow(data, deleteGrade) {
    var tbody = this.tableElement.querySelector("tbody");
    for (var i = 0; i < data.length; i++) {
      var newTr = document.createElement("tr");
      var studentName = document.createElement("td");
      var studentCourse = document.createElement("td");
      var studentGrade = document.createElement("td");
      var operationColumn = document.createElement("td");
      var deleteButton = document.createElement("button");
      var deleteButtonClickEventListener = deleteButton.addEventListener("click", this.deleteGrade(data[i].id));
      studentName.textContent = data[i].name;
      studentCourse.textContent = data[i].course;
      studentGrade.textContent = data[i].grade;
      deleteButton.textContent = "DELETE";
      operationColumn.appendChild(deleteButton);
      newTr.appendChild(studentName);
      newTr.appendChild(studentCourse);
      newTr.appendChild(studentGrade);
      newTr.appendChild(operationColumn);
      return newTr;
    }
  }
}
