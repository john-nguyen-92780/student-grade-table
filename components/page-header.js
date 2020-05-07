class PageHeader {
  constructor(headerElement) {
    this.headerElement = headerElement;
  }
  // this.updateAverage = this.updateAverage.bind(this);
  updateAverage(newAverage) {
    var averageGradeBadge = document.querySelector("span.badge");
    averageGradeBadge.textContent = newAverage;
  }
}
