var tableElement = document.querySelector("table");
var newGradeTable = new GradeTable(tableElement);
var header = document.querySelector("header");
var newPageHeader = new PageHeader(header);
var newApp = new App(newGradeTable);
newApp.start();
