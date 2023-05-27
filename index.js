#!/usr/bin/env node

/**
 * project-setup
 * ready to use project setup in one click
 *
 * @author Basil Aslam <----->
 */
import init from './utils/init.js';
import cli from './utils/cli.js';
import log from './utils/log.js';
import generat from './utils/generate.js';

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);
	debug && log(flags);


await generat()
})();
