var strategyjava = {
  strategys: [{
    //字符串
    regex: /("[^"]*")|('[^']*')/igm,
    color: "#008000"
  },{
    //注释
    regex: /(\/\/.*)|(\/\*(.|\n|\r)*?\*\/)/igm,
    color: "#646464"
  },{
    //关键字
    regex: /\b(abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|extends|false|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|native|new|null|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|true|transient|try|void|volatile|while)\b/gm,
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