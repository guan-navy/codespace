const https = require('https')
const cheerio = require('cheerio')
const fs = require('fs')

https.get('https://movie.douban.com/top250', (res) => {
  let html = ''

  res.on('data', (chunk) => { // 监听数据的读取
    // console.log(chunk + '');
    html += chunk
  })

  res.on('end', () => {  // 源代码获取完毕
    const $ = cheerio.load(html)
    const result = []

    $('li .item').each(function() {
      const title = $('.info .title', this).text()
      const star = $('.info .bd .rating_num', this).text()
      const pic = $('.pic img', this).attr('src')
      result.push(
        {
          title,
          star,
          pic
        }
      )
    })

    // console.log(result);
    fs.writeFile('./list.json', JSON.stringify(result), (err, data) => {
      if (err) {
        throw err
      }
      console.log('文件写入成功');
    })

  })

})