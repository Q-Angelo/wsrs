const darwinDirnameEnum = files => {
    const name = {
        'Desktop': '桌面',
        'Documents': '文档',
        'Downloads': '下载',
        'Movies': '视频',
        'Music': '音乐',
        'Pictures': '相册',
    }[file];

    return name || file;
};

const filterFile = (files, condition) => {
    return files.filter(f => f && f[0] == condition)
};

module.exports = {
    fileNameMapper: data => {
        if(process.platform === 'darwin'){
            const files = data.map(item => darwinDirnameEnum(item)).sort((a, b) => a < b);
            
            return filterFile(files, '.');
        }

        return data;
    }
}