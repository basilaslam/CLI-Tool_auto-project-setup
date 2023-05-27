import path from 'path';
import ora from 'ora';
import fs from 'fs'
import {execa} from 'execa';
import questions from "./questions.js"
import copy from 'copy-template-dir';
import chalk from 'chalk';
import getPkgs from './getPkgs.js'
import alert from 'cli-alerts'
import { execSync } from'child_process';

const { green: g, yellow: y, dim: d } = chalk;
const spinner = ora({ text: '' });

const __dirname =fs.realpathSync('.');
console.log(__dirname)
export default async (setupName) =>{
	let projectName = setupName.split('-').map(el => el.split(' ')).flat().join('-')
	const vars = await questions();
	const outDir = vars.name;
	const inDirPath = path.join(__dirname, `./template/${projectName}`);
	const outDirPath = path.join(process.cwd(), outDir);
	async function cb(err, createdFiles){
		if(err) throw err

		console.log(d(`\nCreating files in${g(`./${outDir}`)} directory` ))

		createdFiles.forEach(filePath => {
			const fileName = path.basename(filePath);
			console.log(`${g(`CREATED `)} ${fileName}`)
		});

		console.log()
		spinner.start(`${y(`DEPENDENCIES`)} installing...\n\n${d('it may take a while....')}`)
		process.chdir(outDirPath)

		const pkgs = getPkgs(projectName)

		execSync('git init')
		await execa(`npm`, [`install`, ...pkgs.pkg]);
	    await execa('npm', ['install', '--save-dev', ...pkgs.devPkg]);
		await execa(`npm`, [`dedupe`]);
		spinner.succeed(`${g(`DEPENDENCIES`)} installed!`);

		alert({
			type: `success`,
			name: `ALL DONE`,
			msg: `\n\n${createdFiles.length} files created in ${d(
				`./${outDir}`
			)} directory`
		});

	}


	copy(inDirPath, outDirPath, vars, cb)
}