var tableElement = document.querySelector("table");
var newGradeTable = new GradeTable(tableElement);
var headerElement = document.querySelector("header");
var newPageHeader = new PageHeader(headerElement);
var gradeFormElement = document.querySelector("form");
var newGradeForm = new GradeForm(gradeFormElement);
var newApp = new App(newGradeTable, newPageHeader);
newApp.start();
