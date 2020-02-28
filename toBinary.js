function binary(decimal) {
	// 256, 128, 64, 32, 16, 8, 4, 2, 1
	// output variable
	let output = ""

	// radix parseInt and toString w/ constraints
	if (decimal < 1024) {
		output = parseInt(decimal, 10).toString(2)
	}

	// return output
	return output
}
