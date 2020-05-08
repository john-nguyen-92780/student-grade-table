class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
  }
  handleGetGradesError(error) {
    console.error(error);
  }
  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades)
    var addedStudentGrades = 0;
    for (var i = 0; i < grades.length; i++) {
      addedStudentGrades += grades[i].grade;
    }
    var newAverage = addedStudentGrades / grades.length;
    this.pageHeader.updateAverage(newAverage);
  }
  getGrades() {
    $.ajax({
      method: "GET",
      url: "https://sgt.lfzprototypes.com/api/grades",
      headers: { "X-Access-Token": "2HaPoWNJ" },
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError,
    })
  }
  start() {
    this.gradeForm.onSubmit(this.createGrade);
    this.getGrades;
  }
  createGrade(name, course, grade){
    console.log(name + "s course: " + course + ", and course grade: " + grade + ".");
    $.ajax({
      method: "POST",
      url: "https://sgt.lfzprototypes.com/api/grades",
      headers: { "X-Access-Token": "2HaPoWNJ" },
      data: {
        "name": name,
        "course": course,
        "grade": grade
      },
      success: this.handleCreateGradeSuccess,
      error: this.handleCreateGradeError,
    })
  }
  handleCreateGradeError(error) {
    console.error(error);
  }
  handleCreateGradeSuccess() {
    this.getGrades;
    console.log("success");
  }
}
