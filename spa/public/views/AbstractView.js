export default class {
  constructor() {
    // this.mobile = navigator.userAgentData.mobile;
    this.mobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  }
  setTitle(title) {
    document.title = title;
  }
  async getHtml() {
    return "";  
  }
}
