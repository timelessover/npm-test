const { addBabelPlugins, override, fixBabelImports, addLessLoader, addWebpackPlugin } = require('customize-cra');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = override(
    fixBabelImports('antd', {
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        lessOptions: {
            modifyVars: {
                hack: `true; @import "${resolve("src/styles/theme.less")}";`, // Override with less file
            },
            javascriptEnabled: true,
        },
    }),
    addWebpackPlugin(new AntdDayjsWebpackPlugin()),
    ...addBabelPlugins(
        'styled-jsx/babel',
    ),
);