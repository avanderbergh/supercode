const withCSS = require("@zeit/next-css");
const withTM = require("next-transpile-modules");
const withImages = require("next-images");

module.exports = withImages(
	withCSS(
		withTM({
			cssLoaderOptions: {
				url: false
			},
			transpileModules: ["react-multi-carousel"],
			webpack: cfg => {
				cfg.module.rules.push({
					test: /\.md$/,
					loader: "frontmatter-markdown-loader",
					options: { mode: ["react-component"] }
				});
				return cfg;
			}
		})
	)
);
