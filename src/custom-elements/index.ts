import { incrementingButtonDefinition } from "./IncrementingButton";
import { ICustomElementDefinition } from "./typing";

const definitions: ICustomElementDefinition[] = [incrementingButtonDefinition];

export function defineCustomElements() {
  definitions.forEach(({ name, constructor, options }) => {
    customElements.define(name, constructor, options);
  });
}
