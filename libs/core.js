//Version 0.03

'use strict'
const Core = {
  a45:Math.PI/4, a90:Math.PI/2, a180:Math.PI, a270:Math.PI/2*3, a360:Math.PI*2,
  $:function(id){return document.getElementById(id)},
  rad:function(ang){return ang/180*Math.PI},
  deg:function(ang){return ang*180/Math.PI},
  sinp:function(ang,lenght){return Math.sin(ang)*lenght},
  cosp:function(ang,lenght){return Math.cos(ang)*lenght},
  ang1:function(x,y){return Math.atan(y/x)},
  ang2:function(x,y){return Math.atan2(y,x)+Math.PI},
  dist:function(x,y){return Math.abs(Math.sqrt(x*x+y*y))},
};

Core.Origin = function(x,y,a){
  this.x = x;
  this.y = y;
  if(a!=undefined)this.a = a;
}

Core.Screen = function(width, height){
  this.width = width;
  this.height = height;
  this.halfwidth = this.width/2;
  this.halfheight = this.height/2;
};Core.Screen.prototype = {
  resize:function(width,height){
    this.width=width;
    this.height=height;
    this.halfwidth=this.width/2;
    this.halfheight=this.height/2;
  }
};

Core.Camera = function(origin, screen){
  this.origin = origin;
  this.screen = screen;
};Core.Camera.prototype = {
  getX:function(x,y){
    var ang = (Core.ang2(this.origin.x-x, this.origin.y-y)-this.origin.a)%Core.a360;
    return (Core.a90<ang&&ang<Core.a270)?NaN:this.screen.halfwidth*(1+Math.tan(ang));
  },
};
/*




*/

Core.__proto__ = null;
