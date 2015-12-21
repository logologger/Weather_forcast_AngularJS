define([
  /*
  'jquery',
  'underscore',
  */
  'backbone',
  'text!templates/project/list.html'
  
  
  ],function(Backbone,projectListTemplate){
  
  
  var ProjectListView=Backbone.View.extend({
    
    el:$('#container'),
    render:function()
    {
      var data={};
       
       console.log("inside ViewList "+this.el);
      
      var compiledTemplate=_.template(projectListTemplate,data);
      this.$el.append(compiledTemplate);
     
      
    }
    
  });
  
  return ProjectListView;
  
  
});