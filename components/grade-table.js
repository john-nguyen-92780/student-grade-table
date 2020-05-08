class GradeTable {
  constructor(tableElement, noGradesElement){
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }
  updateGrades(grades) {
    var tbody = this.tableElement.querySelector("tbody");
    tbody.innerHTML = "";
    for (var i = 0; i < grades.length; i++) {
      this.renderGradeRow(grades[i], this.deleteGrade);
    }
    console.log("get grades");
    if (grades) {
      noGradesElement.classList.add("d-none");
    } else {
      noGradesElement.classList.remove("d-none");
    }
  }
  onDeleteClick(deleteGrade) {
    this.deleteGrade;
  }
  renderGradeRow(data, deleteGrade) {
      var newTr = document.createElement("tr");
      var studentName = document.createElement("td");
      var studentCourse = document.createElement("td");
      var studentGrade = document.createElement("td");
      var operationColumn = document.createElement("td");
      var deleteButton = document.createElement("button");
      var deleteButtonClickEventListener = deleteButton.addEventListener("click", deleteGrade(data.id));
      studentName.textContent = data.name;
      studentCourse.textContent = data.course;
      studentGrade.textContent = data.grade;
      deleteButton.textContent = "DELETE";
      deleteButton.classList.add("btn btn-outline-dark");
      operationColumn.appendChild(deleteButton);
      newTr.appendChild(studentName);
      newTr.appendChild(studentCourse);
      newTr.appendChild(studentGrade);
      newTr.appendChild(operationColumn);
      return newTr;
  }
}
