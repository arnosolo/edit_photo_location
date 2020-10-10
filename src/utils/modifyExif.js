/* 函数: 修改元数据 */

import piexif from 'piexifjs'

export default function modifyExif(img, coordinate) {
        // 获取原来的元数据信息
        const oldExifObj = piexif.load(img);
        console.log('oldExifObj:');
        console.log(oldExifObj);

        // gps由十进制值改为分度值
        const lng = coordinate[0]
        const lat = coordinate[1]
        // 将对象复制一份,避免修改原来对象中的数据
        var exifObj = JSON.parse(JSON.stringify(oldExifObj))
        // var exifObj = oldExifObj
        exifObj.GPS[piexif.GPSIFD.GPSLatitudeRef] = lat < 0 ? 'S' : 'N';
        exifObj.GPS[piexif.GPSIFD.GPSLatitude] = piexif.GPSHelper.degToDmsRational(lat);
        exifObj.GPS[piexif.GPSIFD.GPSLongitudeRef] = lng < 0 ? 'W' : 'E';
        exifObj.GPS[piexif.GPSIFD.GPSLongitude] = piexif.GPSHelper.degToDmsRational(lng);    
        // 将修改后的信息成二进制信息
        // console.log(exifObj);
        var exifbytes = piexif.dump(exifObj)
        // 注入二进制元数据,返回注入后的图片对象
        var modifiedImg = piexif.insert(exifbytes, img)

        // 查看修改后的信息
        const newExifObj = piexif.load(modifiedImg);
        console.log('newExifObj');
        console.log(newExifObj);

        return modifiedImg

}