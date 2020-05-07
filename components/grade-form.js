class GradEForm {
  constructor(formElement) {
    this.formElement = formElement;
  }
  onSubmit(createGrade){
    this.createGrade = createGrade;
  }
  handleSubmit(event){
    event.preventDefault(){
      console.log("hello from preventDefault() inside handleSubmit()")
    }
  }
}
