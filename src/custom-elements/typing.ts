export interface ICustomElementDefinition {
  name: string;
  constructor: CustomElementConstructor;
  options?: ElementDefinitionOptions;
}
