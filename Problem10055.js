
if (require.main === module) {
	_run();
}

function _run () {
	console.log(process.argv[3] - process.argv[2]);
}