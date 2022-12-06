const path = `${__dirname}/demo.txt`;

try {
	const contents = await fs.readFile(path);
	core.print('\x1b[35mfile contents: \x1b[0m');
	console.log('read', path, '\n' + contents);
} catch (err) {
	console.error('Unable to read file', path, err);
}
