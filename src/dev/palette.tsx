import {
  Category,
  Component,
  Variant,
  Palette,
} from "@react-buddy/ide-toolbox";
import ChakraPalette from "@react-buddy/palette-chakra-ui";
import { Fragment } from "react";

export const PaletteTree = () => (
  <Palette>
    <Category name="App">
      <Component name="Loader">
        <Variant>
          <ExampleLoaderComponent/>
        </Variant>
      </Component>
    </Category>
    <ChakraPalette/>
  </Palette>
);

export function ExampleLoaderComponent() {
  return (
    <Fragment>Loading...</Fragment>
  );
}
