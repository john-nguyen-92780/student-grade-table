class GradeForm {
  constructor(formElement) {
    this.formElement = formElement;
    this.formElement.addEventListener("submit", this.handleSubmit.bind(this));
  }
  onSubmit(createGrade){
    this.createGrade = createGrade;
  }
  handleSubmit(event){
    event.preventDefault();
    console.log("hi");
    var newFormData = new FormData(event.target);
    var name = newFormData.get("name");
    var course = newFormData.get("course");
    var grade = newFormData.get("grade");
    this.createGrade(name, course, grade);
    event.target.reset();
  }
}
