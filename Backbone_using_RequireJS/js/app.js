/*

boilerplate.js is just like template that will be used in maximum 
JS files which we are going to use.


*/



define([
  
  /*
  These are path aliases that we have used in our bootstrap 
  main.js file
  
  
  */
  
 /* 'jquery',
  'underscore',*/ 
  //not required because of shim in which backbone is dependent on both modules .so first two modules get loaded first
  'backbone',
  'router/router'
  
  
  ],function(Backbone,Router){
  
  console.log("inside app JS outside");
  var initialize=function()
  {
    
    Router.initialize();
    console.log("app JS");
    //calling the router initialize function
  };
  return {
   initialize:initialize 
    
  };
/*

What we return here will be used by other modules

*/
  
});