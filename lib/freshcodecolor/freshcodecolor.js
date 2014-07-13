var freshcodecolor = {
  //解析高亮策略
  compile: function(code,config) {
    var i = 0,
    k = 0,
    _code = code,
    strategy = {},
    adaptorItem = {},
    colorHandle = "<code style=\"color: {{color}}!important;\">{{content}}</code>",
    _color = "",
    renderResult = "",
    renderMark = "freshcodecolor",
    renderBuffer = [],
    escapes = config.escapes || [],
    escape = {};
    //strategys 结构
    //[{regex: \ffff\,color: "#FFFFFF"}]
    
    strategys = config.strategys || [];
    
    //编码特殊字符
    for(var i=0;i<escapes.length;i++){
      escape = escapes[i];
      _code = _code.replace(escape.escapeRegex,function(m){
        return escape.placeholder;
      });
    }
    
    //遍历策略
    for(i=0;i<strategys.length;i++){
      strategy = strategys[i];
      _color = colorHandle.replace("{{color}}",strategy.color);
      //处理所有匹配元素
      _code = _code.replace(strategy.regex,function(m){
        renderBuffer.push(freshcodecolor._render(m,_color));
        return " "+renderMark+(renderBuffer.length-1)+renderMark+" ";
      });
    }
    
    //处理染色标记
    i=0;
    while(_code.match(/ ?freshcodecolor\d+freshcodecolor ?/gm)){
      _code = _code.replace(/ ?freshcodecolor\d+freshcodecolor ?/gm,function(m){
        var _result = m;
        try{
          _result = renderBuffer[parseInt(m.split(renderMark)[1])];
          //防止code标签嵌套
          if(i){
            _result = freshcodecolor._unrender(_result);
          }
        }catch(e){
          //do nothing...
        }
        return _result;
      });
      i++;
    }
    //解码特殊字符
    for(var i=0;i<escapes.length;i++){
      escape = escapes[i];
      _code = _code.replace(escape.unescapeRegex,function(m){
        return escape.source;
      });
    }
    
    return this._format(_code);
  },
  //渲染颜色方法
  _render: function(content,color){
    var _contents = content.split("<"),
    _content = "",
    _tag = this._wrap("<",color),
    i = 0,
    length = _contents.length-1;
    
    //单独包裹<
    if(_contents.length>1){
      for(i=0;i<_contents.length;i++){
        //包裹正常内容
        if(_contents[i] != ""){
          _content += this._wrap(_contents[i],color);
        }
        //补充包裹后的<
        if(i != length){
          _content += _tag;
        }
      }
    }else{
      _content = this._wrap(_contents[0],color);
    }
    return _content;
  },
  //防止code标签嵌套，解除渲染
  _unrender: function(content) {
    var renderRegex = /<code style="color: #[a-f]{3,6}!important;">.+?<\/code>/gmi,
    renderPrefix = /<code style="color: #[a-f]{3,6}!important;">/gmi,
    renderStuff = /<\/code>/gmi,
    _content = content;
    
    _content = _content.replace(renderRegex,function(m){
      return m.replace(renderPrefix,"").replace(renderStuff,"");
    });
    
    return _content;
  },
  _wrap: function(content,color){
    return color.replace("{{content}}",content);
  },
  //缩进和换行处理
  _format: function(content){
    var _content = content,
    _contents = [];
    lineHandle = "<div style='margin:0;padding:0;'>{{content}}</div>",
    spaceRegex = /^ +/gm,
    tabRegex = /^\t+/gm,
    space = "&nbsp;",
    i = 0;
    
    //替换空格
    _content = _content.replace(spaceRegex,function(m){
      var _space = "";
      for(i = 0;i<m.length;i++){
        _space += space;
      }
      return _space;
    });
    //替换tab，每个tab是两个空格
    _content = _content.replace(tabRegex,function(m){
      var _space = "";
      for(i = 0;i<m.length;i++){
        _space += space;
        _space += space;
      }
      return _space;
    });
    
    //换行
    _contents = _content.split("\n");
    _content = "";
    for(i = 0;i<_contents.length;i++){
      _content += lineHandle.replace("{{content}}",_contents[i]);
    }
    
    return _content;
  }
};