module.exports = {
	devServer: {
		port: '8080',
		proxy: {
			'/api': {
				target: 'https://open.ys7.com',
				changeOrigin: true,
				ws: true,
				pathRewrite: {
					'^/api': ''
				}
			}
		}
	}
}
