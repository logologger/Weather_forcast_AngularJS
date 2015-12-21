/*

Since we have a heavy dependency on Jquery,Underscore
and Backbone JS so these libraries are loaded synchronously


*/
/*

Difference between require and define is that if you want to use
Js file immediately then use require else if you want to use
JS later i.e for reusability one should use define for that



*/
console.log("IT should be first line");
require.config({
  
  paths:{
    
    
    jquery:'libs/jquery/jquery',
    underscore:'libs/underscore/underscore',
    backbone:'libs/backbone/backbone',
    templates:'../templates'
    
  },
  
  //require.config just define the paths of three files that are needed everytime
   shim: {
     underscore:{
       
       exports:'_'
       
       
     },
     //Since underscore is not AMD compatible so we use 
     //exports and 
     //for backbone we write its dependency as jquery and underscore
     //and exports backbone
        backbone: {
            deps: ['jquery','underscore'],
            exports: 'Backbone'
        }
    }
  
  
  
});



/*

load our app module and pass it to our definition function


"app" dependency is passed in as "App"

*/
require(['app'],function(App){
  
  console.log("Inside main js");
  App.initialize();
  
  
  
});