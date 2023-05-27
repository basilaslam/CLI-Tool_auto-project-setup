import ask from './ask.js';

export default async () => {
	const name = await ask({
		name: `name`,
		message: `Project name?`,
		prefix: `(kebab-case only)`
	});
	const description = await ask({
		name: `description`,
		message: `Project description?`
	});
	const version = await ask({
		name: `version`,
		message: `Project version?`,
		defaultValue: `0.0.1`
	});
	const license = await ask({
		name: `license`,
		message: `Project license?`,
		defaultValueValue: `UNLICENSED`
	});
	const authorName = await ask({
		name: `authorName`,
		message: `Project author name?`
	});
	const authorEmail = await ask({
		name: `authorEmail`,
		message: `Project author email?`
	});
	const authorUrl = await ask({
		name: `authorUrl`,
		message: `Project author URL?`
	});

	const vars = {
		name,
		description,
		version,
		license,
		authorName,
		authorEmail,
		authorUrl
	};

	return vars;
};
