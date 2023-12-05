<template>
    <div class="container">
        <div class="nav">
            <div class="time">{{ localTime }}</div>
            <div class="city">切换城市</div>
        </div>

        <div class="city-info">
            <div class="city-name">{{ weatherData.city }}</div>
            <p class="weather">{{ weatherData.weather }}</p>
            <h2 class="temp">
                <em>{{ weatherData.temperature }}</em>℃
            </h2>
            <div class="detail">
                <span>风力：{{ weatherData.windPower }}级</span> |
                <span>风向：{{ weatherData.windDirection }}</span> |
                <span>空气湿度：{{ weatherData.humidity }}</span>
            </div>
        </div>

    </div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader';
export default {
    data() {
        return {
            localDate: '',
            localTime: '00',
            city: '城市',
            weatherData: {}
        }
    },
    created() {
        setInterval(() => {
            this.localTime = new Date().toLocaleTimeString()
            this.localDate = new Date().toLocaleDateString()
        }, 1000)
        this.initAmap(); // 修改此处
    },
    methods: {
        initAmap() {
            let that = this
            AMapLoader.load({
                key: "850c8cd6e4ed7d86cc80a825f723ca17",
                version: "2.0",
                plugins: ['AMap.CitySearch'], // 修改此处
            }).then((AMap) => {
                AMap.plugin('AMap.CitySearch', function () {
                    var citySearch = new AMap.CitySearch()
                    citySearch.getLocalCity(function (status, result) {
                        if (status === 'complete' && result.info === 'OK') {
                            console.log(result.city);
                            //加载天气查询插件
                            AMap.plugin('AMap.Weather', function () {
                                //创建天气查询实例
                                var weather = new AMap.Weather();

                                //执行实时天气信息查询
                                weather.getLive(result.city, function (err, data) {
                                    that.weatherData = data
                                });
                            });
                        }
                    })
                })
            })
        }
    }
}
</script>

<style lang="css" scoped>
.container {
    min-height: 100vh;
    background-color: rgb(0, 0, 0);
    opacity: 0.8;
    color: #fff;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-image: url('https://n.sinaimg.cn/sinacn10114/0/w1920h1280/20200303/5939-iqfqmat8229319.jpg');
    background-size: cover;

}

.city {
    float: right;
}

.time {
    float: left;
}

.nav {
    overflow: auto;
    padding: 10px;
}

.city-info {
    text-align: center;
}

.temp {
    font-size: 30px;
}

.temp em {
    font-style: normal;
    font-size: 45px;
}
</style>