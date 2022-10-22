const app = {
  storetime: {
    textDate: "",
    textTime: "",
  },
  arealist: [
    {
      icon: "./imgs/areas/a8.png",
      mod: "down",
      label: "数据探查管理",
      children: [
        {
          link: "",
          label: "数据探查",
        },
        {
          link: "",
          label: "数据定义",
        },
      ],
    },
    {
      icon: "./imgs/areas/a14.png",
      mod: "up",
      label: "数据接入管理",
      children: [
        {
          link: "",
          label: "业务系统管理",
        },
        {
          link: "",
          label: "关系数据库注册管理",
        },
        {
          link: "",
          label: "服务器注册管理",
        },
        {
          link: "",
          label: "数据接入定义",
        },
        {
          link: "",
          label: "数据对账",
        },
        {
          link: "",
          label: "大数据注册管理",
        },
        {
          link: "",
          label: "MPP注册管理",
        },
        {
          link: "",
          label: "多表联合接入",
        },
        {
          link: "",
          label: "非结构化数据源",
        },
        {
          link: "",
          label: "全文搜索注册",
        },
        {
          link: "",
          label: "KAFKA数据源",
        },
      ],
    },
    {
      icon: "./imgs/areas/a15.png",
      mod: "down",
      label: "数据治理管理",
      children: [
        {
          link: "",
          label: "数据标准管理",
        },
        {
          link: "",
          label: "数据处理规则",
        },
        {
          link: "",
          label: "数据分发",
        },
        {
          link: "",
          label: "数据提取",
        },
        {
          link: "",
          label: "数据关联管理",
        },
        {
          link: "",
          label: "资源编目管理",
        },
        {
          link: "",
          label: "数据质量管理",
        },
        {
          link: "",
          label: "数据运维管理",
        },
        {
          link: "",
          label: "数据安全管理",
        },
        {
          link: "",
          label: "表结构扫描",
        },
        {
          link: "",
          label: "生命周期管理",
        },
        {
          link: "",
          label: "权限管理",
        },
        {
          link: "",
          label: "规则配置",
        },
        {
          link: "",
          label: "可视化管理",
        },
      ],
    },
    {
      icon: "./imgs/areas/a16.png",
      mod: "up",
      label: "数据仓库管理",
      children: [
        {
          link: "",
          label: "数据源管理",
        },
        {
          link: "",
          label: "原始库管理",
        },
        {
          link: "",
          label: "资源库管理",
        },
        {
          link: "",
          label: "主题库管理",
        },
        {
          link: "",
          label: "业务库管理",
        },
        {
          link: "",
          label: "知识库管理",
        },
        {
          link: "",
          label: "业务索引库管理",
        },
      ],
    },
    {
      icon: "./imgs/areas/a17.png",
      mod: "down",
      label: "数据服务管理",
      children: [
        {
          link: "",
          label: "我的服务",
        },
        {
          link: "",
          label: "资源服务注册管理",
        },
        {
          link: "",
          label: "智能建模",
        },
        {
          link: "",
          label: "智能报表",
        },
        {
          link: "",
          label: "资源服务申请管理",
        },
        {
          link: "",
          label: "智能云搜",
        },
        {
          link: "",
          label: "智能交互查询",
        },
        {
          link: "",
          label: "资源服务审批管理",
        },
        {
          link: "",
          label: "建库标准扫描",
        },
      ],
    },
    {
      icon: "./imgs/areas/a18.png",
      mod: "up",
      label: "可视化管理",
      children: [
        {
          link: "",
          label: "资源可视化",
        },
        {
          link: "",
          label: "治理可视化",
        },
        {
          link: "",
          label: "服务可视化",
        },
        {
          link: "",
          label: "治理架构可视化",
        },
        {
          link: "",
          label: "运维可视化",
        },
      ],
    },
  ],
};
RanNum(0.2, 1), RanNum(2, 6);

function RanNum(n, m) {
  return (Math.random() * (m - n) + n).toFixed(2);
}

function wheelEvent(e, a) {
  a.scrollLeft += e.deltaY;
}

function dayjs() {
  var time = new Date();
  var year = time.getFullYear();
  var math = time.getMonth() + 1;
  if (math < 10) {
    math = "0" + math;
  }
  var Hours = time.getHours();
  if (Hours < 10) {
    Hours = "0" + Hours;
  }
  var Minutes = time.getMinutes();
  if (Minutes < 10) {
    Minutes = "0" + Minutes;
  }
  var Seconds = time.getSeconds();
  if (Seconds < 10) {
    Seconds = "0" + Seconds;
  }
  var week = time.getDay();
  var date = time.getDate();
  if (date < 10) {
    console.log(date);
    date = "0" + date;
  }
  var obj = {};
  obj.hours = Hours + ":" + Minutes + ":" + Seconds;
  obj.date = year + "/" + math + "/" + date;
  obj.week = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
  ][week];
  return obj;
}

function getstrp(s) {
  var obj = dayjs();
  s.textDate = obj.date + "  " + obj.week;
  s.textTime = obj.hours;
}

function datetime(s) {
  getstrp(s);
  setInterval(() => getstrp(s), 1000);
}

function scroll(e, ar) {
  if (ar == "left")
    e.scroll({
      left: 0,
      behavior: "smooth",
    });
  if (ar == "right")
    e.scroll({
      left: e.scrollWidth,
      behavior: "smooth",
    });
}

function slider(e) {
  e.target.scrollIntoView({ behavior: "smooth", block: "end" });
}
