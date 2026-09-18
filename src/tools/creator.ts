import type { Params } from "../types/types";

export class Creator {
  element: HTMLElement;

  constructor(params: Params) {
    this.element = this.createElement(params);
    this.setClassList(params);
    this.setAttributesToElement(params);
    this.setText(params);
  }

  private createElement(params: Params): HTMLElement {
    if (!params.tagName) {
      throw new Error("tagName is required");
    }

    return document.createElement(params.tagName);
  }

  private setClassList(params: Params): void {
    if (params.classList?.length) {
      this.element.classList.add(...params.classList);
    }
  }

  private setAttributesToElement(params: Params): void {
    if (params.attributes) {
      for (const attribute in params.attributes) {
        const attributeValue = params.attributes[attribute];

        this.element.setAttribute(attribute, String(attributeValue));
      }
    }
  }

  private setText(params: Params): void {
    if (params.text) {
      this.element.textContent = params.text;
    }
  }

  getTag(): HTMLElement {
    return this.element;
  }
}
