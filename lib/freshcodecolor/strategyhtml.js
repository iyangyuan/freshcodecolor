var strategyhtml = {
  strategys: [{
    //属性名
    regex: /[\w-]+(?=\s*=\s*)(?=.*>)/igm,
    color: "#FF4000"
  },{
    //可见转码符号
    regex: /(&quot;)|(&amp;)|(&copy;)|(&reg;)|(&lt;)|(&gt;)|(&euro;)|(&iexcl;)|(&cent;)|(&pound;)|(&curren;)|(&yen;)|(&brvbar;)|(&sect;)|(&uml;)|(&ordf;)|(&not;)|(&shy;)|(&macr;)|(&deg;)|(&plusmn;)|(&sup2;)|(&sup3;)/igm,
    color: "#B000B0"
  },{
    //属性值
    regex: /=('|").*?\1/igm,
    color: "#3A6EA5"
  },{
    //注释
    regex: /<!--(.|\n|\r)*?-->/igm,
    color: "#646464"
  },{
    //文档头
    regex: /<!DOCTYPE\s+.*>/igm,
    color: "#881280"
  },{
    //动态语言头
    regex: /<%@(.|\n|\r)*?%>/igm,
    color: "#000080"
  },{
    //html标签
    regex: /(<\/?[a-z]+( |>))|([<>])/igm,
    color: "#648000"
  }],
  escapes: []
};