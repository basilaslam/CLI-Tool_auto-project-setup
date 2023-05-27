

export default (projectName)=>{

	const pkg = [
		"dotenv@latest",
		"express@latest"
	]
	const devPkg = [
		"@types/express",
		"@types/node",
		"@typescript-eslint/eslint-plugin",
		"@typescript-eslint/parser",
		"eslint",
		"eslint-config-prettier",
		"eslint-config-standard-with-typescript",
		"eslint-plugin-import",
		"eslint-plugin-n",
		"eslint-plugin-prettier",
		"eslint-plugin-promise",
		"eslint-plugin-sort-destructure-keys",
		"prettier",
		"ts-node",
		"typescript"
	]
	
	switch (projectName){
		case 'node-express-typescript-setup':
			return {
				pkg ,
			devPkg
		}
	}




}