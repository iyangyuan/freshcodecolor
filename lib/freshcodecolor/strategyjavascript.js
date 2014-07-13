var strategyjavascript = {
  strategys: [{
    //字符串
    regex: /("[^"]*")|('[^']*')/igm,
    color: "#008000"
  },{
    //注释
    regex: /(\/\/.*)|(\/\*(.|\n|\r)*?\*\/)/igm,
    color: "#646464"
  },{
    //正则表达式
    regex: /\/[^\/\n\r]+\//igm,
    color: "#006633"
  },{
    //关键字
    regex: /\b(break|case|catch|class|continue|default|delete|do|else|enum|export|extends|false|for|function|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|static|return|super|switch|this|throw|true|try|typeof|var|while|with|yield)\b/gm,
    color: "#A46000"
  },{
    //数字
    regex: /\b\d+\b/igm,
    color: "#FF0000"
  },{
    //操作符号
    regex: /[{}<>()\[\]\+\-\*/%!\?:;,\.=&\|^~]+/igm,
    color: "#B000B0"
  }],
  escapes: [{
    escapeRegex: /\\"/igm,
    placeholder: "escapedoublequote",
    unescapeRegex: /escapedoublequote/gm,
    source: "\\\""
  },{
    escapeRegex: /\\'/igm,
    placeholder: "escapesinglequote",
    unescapeRegex: /escapesinglequote/gm,
    source: "\\'"
  }]
};