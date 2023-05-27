import welcome from 'cli-welcome';
import packageJson from './../package.json' assert { type: 'json' };
import unhandled from 'cli-handle-unhandled';
const { description: _description, version: _version } = packageJson;


export default  ({ clear = true }) => {
	unhandled();
	welcome({
		title: `automatic-project-setup`,
		tagLine: `by Basil Aslam`,
		description: _description,
		version: _version,
		bgColor: '#36BB09',
		color: '#000000',
		bold: true,
		clear
	});
};
