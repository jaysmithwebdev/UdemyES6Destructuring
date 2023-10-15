// import animals, { useAnimals } from "./data";

// const [cat, dog] = animals;

// const { name, sound } = cat;

// to change names for objects:
// const { name: catName, sound: catSound } = cat;

// to add a default value incase none is present in the object:
// const { name = "Fluffy", sound = "Purr" } = cat;
// these values won't be used here as there is data in the object, "cat" and "meow" would still be stored

// nested values - nest the destructures:
// const {
// 	name,
// 	sound,
// 	feedingRequirements: { food, water }
// } = cat;

// console.log(food); // prints "2"

// const [animal, makeSound] = useAnimals(cat);
// console.log(animal);
// makeSound();

// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [tesla, honda] = cars;
const {
	speedStats: { topSpeed: teslaTopSpeed }
} = tesla;
const {
	speedStats: { topSpeed: hondaTopSpeed }
} = honda;
const {
	coloursByPopularity: [teslaTopColour]
} = tesla;
const {
	coloursByPopularity: [hondaTopColour]
} = honda;

ReactDOM.render(
	<table>
		<tr>
			<th>Brand</th>
			<th>Top Speed</th>
		</tr>
		<tr>
			<td>{tesla.model}</td>
			<td>{teslaTopSpeed}</td>
			<td>{teslaTopColour}</td>
		</tr>
		<tr>
			<td>{honda.model}</td>
			<td>{hondaTopSpeed}</td>
			<td>{hondaTopColour}</td>
		</tr>
	</table>,
	document.getElementById("root")
);
