var tableElement = document.querySelector("table");
var noGradesElement = document.getElementById("grades-notifier");
var newGradeTable = new GradeTable(tableElement, noGradesElement);
var headerElement = document.querySelector("header");
var newPageHeader = new PageHeader(headerElement);
var gradeFormElement = document.querySelector("form");
var newGradeForm = new GradeForm(gradeFormElement);
var newApp = new App(newGradeTable, newPageHeader, newGradeForm);
newApp.start();
$('.btn').mouseup(function () { this.blur() }); //to remove focus from button after click
