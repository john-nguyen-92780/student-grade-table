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
}
