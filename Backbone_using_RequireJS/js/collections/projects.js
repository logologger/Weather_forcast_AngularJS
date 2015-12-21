define([
  
  
  'backbone',
  'models/projects'
  
  ],function(Backbone,ProjectModel)
{
  var ProjectCollection=Backbone.Collection.extend({
    
    model:ProjectModel
    
  });
  
  return ProjectCollection;
  
  
});