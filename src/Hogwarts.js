import React from "react";
import whoseHouse from "./houses/HagridsHouse";
import HooflePoof from "./houses/Hufflepuff";
import {colors, gryffMascot } from "./houses/Gryffindor";

GryffFunctions.colors();
// => 'Scarlet and Gold'

GryffFunctions.gryffMascot();
// => 'The Lion'

GryffFunctions.values();
// => ReferenceError: values is not defined

function Hogwarts() {
  whoseHouse();

  return (
    <div>
      <HooflePoof />
      {/*
				Will render `NOBODY CARES ABOUT US`, even though we renamed `Hufflepuff`
				to `HooflePoof`
			*/}
    </div>
  );
}

export default Hogwarts
