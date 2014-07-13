var strategycss = {
  strategys: [{
    //注释
    regex: /\/\*(.|\n|\r)*?\*\//igm,
    color: "#646464"
  },{
    //id、类选择器
    regex: /(\.|#)[\w\-_]+(?=[^}]*{)/igm,
    color: "#648000"
  },{
    //字符串
    regex: /("[^"]*")|('[^'"]*')/igm,
    color: "#008000"
  },{
    //属性选择器
    regex: /\[[^[\]]*\]/igm,
    color: "#648000"
  },{
    //伪类
    regex: /:\s*\w+[^}]*?(?=[{,])/igm,
    color: "#B000B0"
  },{
    //css属性名称
    regex: /[\w-]+?(?=[\s\n\r]*:)/igm,
    color: "#FF4000"
  },{
    //css属性值
    regex: /[#.-]?\w+[^{}:]*?(?=[\s\n\r]*[;}])/igm,
    color: "#3A6EA5"
  },{
    //标签选择器
    regex: /\w+(?=[^}]*{)/igm,
    color: "#0A246A"
  },{
    //操作符
    regex: /[{}[\]()=\-.;,!:>]/igm,
    color: "#B000B0"
  }],
  escapes: []
};