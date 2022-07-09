import { ICustomElementDefinition } from "./typing";

class IncrementingButton extends HTMLElement {
  button: HTMLButtonElement;
  count: number = 0;

  constructor() {
    super();
    this.button = document.createElement("button");
    this.setCount(0);
  }

  private setCount(value: number) {
    this.count = value;
    this.render();
  }

  private onClick = () => {
    this.setCount(this.count + 1);
  };

  connectedCallback() {
    this.button.addEventListener("click", this.onClick);
    this.appendChild(this.button);
  }

  disconnectedCallback() {
    this.button.removeEventListener("click", this.onClick);
  }

  render() {
    this.button.textContent = `Clicked ${this.count} times`;
  }
}

export const incrementingButtonDefinition: ICustomElementDefinition = {
  name: "incrementing-button",
  constructor: IncrementingButton,
};
