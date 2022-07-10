import { html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement("incrementing-button")
export class IncrementingButton extends LitElement {
  @state()
  count: number;

  constructor() {
    super();
    this.count = 0;
  }

  private increment = () => {
    this.count += 1;
  };

  render() {
    return html`<button @click="${this.increment}">
      Clicked ${this.count} times
    </button>`;
  }
}
