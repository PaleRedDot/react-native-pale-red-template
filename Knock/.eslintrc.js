module.exports = {
	root: true,
	extends: "@react-native-community",
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint"],
	overrides: [
		{
			files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
			rules: {
				"@typescript-eslint/no-shadow": ["error"],
				quotes: [2, "double"],
				"no-shadow": "off",
				"no-undef": "off",
			},
		},
	],
};
