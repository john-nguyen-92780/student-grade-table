class GradeForm {
  constructor(formElement) {
    this.formElement = formElement;
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onSubmit(createGrade){
    this.createGrade = createGrade;
  }
  handleSubmit(event){
    event.preventDefault();
    var newFormData = FormData(event.target);
    newFormData.get(name, course, grade);
    this.createGrade(name, course, grade);
    event.target.reset();
  }
  }
