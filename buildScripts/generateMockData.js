import jsf from "json-schema-faker";
import { schema } from "./mockDataSchema";
import fs from "fs";
import chalk from "chalk";

// Extend JSF with the fake libs you want to use.
jsf.extend("faker", () => require("faker"));

const json = JSON.stringify(jsf.generate(schema));

fs.writeFile("./src/api/db.json", json, function (err) {
	if (err) {
		return console.log(chalk.red(err));
	} else {
		console.log(chalk.green("Mock data generated."));
	}
});
