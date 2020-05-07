var tableElement = document.querySelector("table");
var newGradeTable = new GradeTable(tableElement);
var headerElement = document.querySelector("header");
var newPageHeader = new PageHeader(headerElement);
var newApp = new App(newGradeTable, newPageHeader);
newApp.start();
