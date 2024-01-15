module.exports = {
	presets: [
		"@babel/preset-env", // Transpile modern JavaScript to older versions
		[
			"@babel/preset-react",
			{
				runtime: "automatic"
			}
		], // Support for JSX
		"@babel/preset-typescript" // Support for TypeScript
	],
	plugins: [
		"@babel/plugin-proposal-class-properties", // Enables class properties syntax
		"@babel/plugin-proposal-object-rest-spread" // Enables object rest and spread syntax
	]
};
