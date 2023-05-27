import inquirer from 'inquirer'
import setupAndDownload from './setupAndDownload.js'
export default async () =>{

	const { projectSetup } = await inquirer.prompt([{
		type: "list",
		message:"choose the appropriate project setup :-",
		name : "projectSetup",
		choices : ['node-express typescript setup', 
				   'react-tailwind typescript setup',
				   'sample setup']
	}])

	
	await setupAndDownload(projectSetup)
	
}