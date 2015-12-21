define([
  'backbone',
  'collections/projects',
  'text!templates/project/user.html'
  ],function(Backbone,ProjectsCollection,ProjectsListTemplate)
  {
    var projectListView=Backbone.View.extend({
      
      
      el:$('#container'),
      initialize:function()
      {
        
        this.collection=new ProjectsCollection();
        this.collection.add({
          
          name:"Rajat Singh bhadauria"
          
        });
        console.log(this.collection.models[0].attributes.name);
        var compiledTemplates=_.template(
          ProjectsListTemplate,
          {
            
            name:'Rajat',
            projects:this.collection.models[0].attributes.name
          }
          );
          
          this.$el.html(compiledTemplates);
      }
      
    });
    
    
    return projectListView;
    
  }



);

//Not able to pass model data inside Collection view