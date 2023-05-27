import { homedir } from 'os';
import { existsSync } from 'fs';
import { join } from 'path';
import inquirer from 'inquirer';
import {to} from 'await-to-js';
import shouldCancel from 'cli-should-cancel';
import { Store } from 'data-store';

export default async ({ name, message, prefix, defaultValue }) => {
	let history = false;
	if (
		!defaultValue &&
		name !== `name` &&
		name !== `command` &&
		name !== `description`
	) {
		history = {
			autosave: true,
			store: new Store({
				path: join(
					homedir(),
					`.history/create-node-cli/${name}.json`
				)
			})
		};
	}

	
	const [error, result] = await to(
		inquirer.prompt([
			{
				type: 'input',
				name,
				message,
				prefix,
				history,
				default: defaultValue,
				validate(value, state) {
					if (state && state.name === `command`) return true;
					if (state && state.name === `name`) {
						if (existsSync(value)) {
							return `Directory already exists: ./${value}`;
						} else {
							return true;
						}
					}
					return !value ? `Please add a value.` : true;
				}
		}     
	])
	);

	if (error) {
	  // Handle the error
	  console.error('An error occurred:', error);
	}
	return result[name];
};
