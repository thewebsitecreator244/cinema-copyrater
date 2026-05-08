import type { Params } from "../types/types";

export class Creator {
  element: HTMLElement | undefined;

  constructor(params: Params) {
    this.element = this.createElement(params);
    this.setClassList(params);
    this.setAttributesToElement(params);
    this.setText(params);
  }

  createElement(params: Params): HTMLElement | undefined {
    if (params.tagName) {
      const currentElement: HTMLElement = document.createElement(
        params.tagName,
      );

      return currentElement;
    }

    return undefined;
  }

  setClassList(params: Params): void {
    if (this.element && params.classList && params.classList.length > 0) {
      this.element.classList.add(...params.classList);
    }
  }

  setAttributesToElement(params: Params): void {
    if (this.element && params.attributes) {
      for (const attribute in params.attributes) {
        const attributeKey: string | number = attribute;
        const attributeValue: string | number = params.attributes[attribute];

        this.element.setAttribute(attributeKey, String(attributeValue));
      }
    }
  }

  setText(params: Params): void {
    if (this.element && params.text) {
      this.element.textContent = params.text;
    }
  }

  getTag(): HTMLElement | undefined {
    return this.element;
  }
}
