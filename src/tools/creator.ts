import type { Params } from "../types/types";

export class Creator {
  element;

  constructor(params: Params) {
    this.element = this.createElement(params);
    this.setClassList(params);
    this.setAttributesToElement(params);
    this.setText(params);
  }

  createElement(params: Params) {
    if (params.tagName) {
      const currentElement = document.createElement(params.tagName);
      return currentElement;
    }
  }

  setClassList(params: Params) {
    if (this.element && params.classList && params.classList.length > 0) {
      this.element.classList.add(...params.classList);
    }
  }

  setAttributesToElement(params: Params) {
    if (this.element && params.attributes) {
      for (const attribute in params.attributes) {
        const attibuteKey = attribute;
        const attributeValue = params.attributes[attribute];
        this.element.setAttribute(attibuteKey, attributeValue);
      }
    }
  }

  setText(params) {
    if (this.element && params.text) {
      this.element.textContent = params.text;
    }
  }

  getTag() {
    if (this.element) {
      return this.element;
    }
  }
}
