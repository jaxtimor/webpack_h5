const apps = [
    {
        moduleName:'a',
        entryJs:'a/index.js',
        entryHtml:'a/index.html'
    },
    {
        moduleName:'b',
        entryJs:'b/index.js',
        entryHtml:'b/index.html'
    },
    {
        moduleName:'c',
        entryJs:'c/index.js',
        entryHtml:'c/index.html',
        extract:{
            vendor:['lodash']
        }
    }
]

module.exports = apps