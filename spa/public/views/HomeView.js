import AbstractView from "./AbstractView.js"

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("general");
  }

  async getHtml(){
    return `<p>Home view</p>`;
  }
}
