cmd.spawn('rustc -V').then((output) => {
	core.print(output);
});
