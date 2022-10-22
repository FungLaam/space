let vue = new Vue({
    el: '#app',
    data() {
        return {
            tags: [{
                    title: '林业专家',
                    id: 'forestry'
                },
                {
                    title: '草业专家',
                    id: 'grass'
                },
                {
                    title: '企业概况',
                    id: 'enterprise'
                },
                {
                    title: '个体用户',
                    id: 'user'
                },
                {
                    title: '公司',
                    id: 'company'
                },
                {
                    title: '合作社',
                    id: 'cooperative'
                },
                {
                    title: '国有林场用户',
                    id: 'stateOwned'
                },
                {
                    title: '私有林场用户',
                    id: 'private'
                },
                {
                    title: '公私合营用户',
                    id: 'partnership'
                }
            ],
            activeTag: 'forestry',
            option_1: {
                title: {
                    text: '',
                    textStyle: {
                        color: '#fff'
                    },
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    },
                    // triggerOn: 'click',
                    // confine: true,
                    formatter(parms) {
                        let data = dataAll[vue.activeTag].a[parms[0].dataIndex]
                            // if (data.length < 20) {
                        let str = ''
                        for (let key in data) {
                            str += `${key} : ${data[key]}<br/>`
                        }
                        vue.randerDetails(parms[0].dataIndex)
                        return dataAll[vue.activeTag].questions[parms[0].dataIndex] + '<br/>' + str
                            //     // }

                        // 返回问题标题
                        return dataAll[vue.activeTag].questions[parms[0].dataIndex]
                    },
                    order: 'valueDesc',
                    extraCssText: 'text-align: left;padding:10px 16px;',
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [{
                    show: false,
                    type: 'category',
                    data: []
                }],
                yAxis: [{
                    type: 'value',
                    splitLine: {
                        lineStyle: {
                            color: '#999'
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#999'
                        }
                    },
                    axisLabel: {
                        color: '#fff'
                    }
                }],
                series: []
            },
            option_2: {
                title: {
                    text: '',
                    textStyle: {
                        color: '#fff',
                        fontSize: '14'
                    },
                    x: 'center',
                    y: '50'
                        // y: '340'
                },
                series: [{
                    name: '面积模式',
                    type: 'pie',
                    radius: [40, 90],
                    center: ['50%', '50%'],
                    roseType: 'area',
                    itemStyle: {
                        borderRadius: 8
                    },
                    data: []
                }],

                label: {
                    alignTo: 'edge',
                    minMargin: 5,
                    edgeDistance: 10,
                    lineHeight: 15,
                    formatter(parms) {
                        return `${parms.name}\n${parms.percent}%`
                    },
                    rich: {
                        time: {
                            fontSize: 10,
                            color: '#999'
                        }
                    }
                },
            },
            option_3: {
                title: {
                    text: '',
                    textStyle: {
                        color: '#fff',
                        fontSize: '14'
                    },
                    x: '50',
                    y: '240'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    },
                    extraCssText: 'text-align: left;padding:10px 16px;',
                },
                xAxis: {
                    show: false,
                    data: []
                },
                yAxis: {
                    show: false
                },
                dataZoom: [{
                    type: 'inside'
                }],
                series: [{
                    type: 'bar',
                    // showBackground: true,
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1, [
                                { offset: 0, color: '#FBF0A8' },
                                { offset: 0.5, color: '#FF8E8E' }
                            ]
                        )
                    },
                    emphasis: {
                        // itemStyle: {
                        //     color: new echarts.graphic.LinearGradient(
                        //         0, 0, 0, 1, [
                        //             { offset: .2, color: '#2378f7' },
                        //             { offset: .5, color: '#2378f7' },
                        //             { offset: 1, color: '#83bff6' },
                        //         ]
                        //     )
                        // }
                    },
                    data: []
                }]
            }
        }
    },
    mounted() {
        window.addEventListener("resize", function() {
            window.location.reload();
        });

        setTimeout(() => {
            this.tagChange({ title: '林业专家', id: 'forestry' })
        }, 500)
    },
    computed: {
        echarts_1() {
            return echarts.init(document.getElementById('contant'), 'walden')
        },
        echarts_2() {
            return echarts.init(document.getElementById('detail'), 'walden')
        },
        echarts_3() {
            return echarts.init(document.getElementById('statistical'), 'walden')
        }
    },
    methods: {
        // 点击事件
        async tagChange(item) {
            this.activeTag = item.id
                // console.log(this.activeTag)
            this.randerContent(dataAll[this.activeTag].show, item.title)
            this.randerStatistical(dataAll[this.activeTag].statis)
            this.randerDetails(1)
        },
        // 渲染大图
        randerContent(data, name) {
            this.option_1.title.text = name + '问卷结果展示图表'
            this.option_1.series = []
            this.option_1.xAxis[0].data = []
            this.echarts_1.setOption(this.option_1, true)
            if (data) {
                for (let i = 1; i <= data[0].length; i++) {
                    this.option_1.xAxis[0].data.push(i)
                }
                for (let item of data) {
                    this.option_1.series.push({
                        type: 'bar',
                        emphasis: {
                            focus: 'series'
                        },
                        stack: 'stack',
                        data: item
                    })
                }
                this.echarts_1.setOption(this.option_1)
            } else {
                console.log(this.option_1)
            }
        },
        // 渲染右上子图
        randerStatistical(data) {
            if (data) {
                this.option_3.title.text = data.title
                this.option_3.xAxis.data = data.keys
                this.option_3.series[0].data = data.value
                this.echarts_3.setOption(this.option_3)
            }
        },
        // 渲染小图
        randerDetails(index) {
            if (index >= 0) {
                this.option_2.title.text = dataAll[this.activeTag].questions[index]
                this.option_2.series[0].data = []
                let nikeData = dataAll[this.activeTag].a[index]
                for (let item in nikeData) {
                    this.option_2.series[0].data.push({
                        name: item,
                        value: nikeData[item]
                    })
                }
                this.echarts_2.setOption(this.option_2)
            } else {
                this.echarts_2.setOption(this.option_2, true)
            }
        }
    }
})