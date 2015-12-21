define([
 
 /* 'jquery',
  'underscore',
  */
  'backbone',
  'views/projects/list',
  'views/users/list'
  
  
  
  
  
  
  
  
  
  ],function(Backbone,ProjectListView,UserListView){
  
  
  var AppRouter=Backbone.Router.extend(
    {
      routes:{
        
        'projects':'showProjects',
        'users':'showUsers',
        '*actions':'defaultAction'
      }
      
      
    });
    
    var initialize=function()
    {
      console.log("Inside Router ");
      var app_router=new AppRouter();
      app_router.on('route:showProjects',function()
      {
        var projectListView=new ProjectListView({});
        //{} is necessary while using require JS
        console.log("projects router inside");
        projectListView.render();
        
        
        
      });
      app_router.on('route:showUsers',function()
      {
        var userListView=new UserListView({});
        console.log("inside ShowUsers Views routing to users/list.js");
        userListView.render();
        
      });
      app_router.on('defaultAction',function(actions)
      {
        
        console.log('No route'+actions);
        
      });
      Backbone.history.start();
      
      
      
    };
    
    return {
      initialize:initialize
    };
  
});