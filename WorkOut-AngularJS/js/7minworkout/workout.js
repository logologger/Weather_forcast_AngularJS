angular.module("7minworkout").controller("workoutController",["$scope","$interval","$location",function($scope,$interval,$location)
{
  /*
  
  Please refer the below link for differences between service factory and providers
  
  http://stackoverflow.com/questions/15666048/angularjs-service-vs-provider-vs-factory
  
  Difference between $route and $routeProvider
  
  http://stackoverflow.com/questions/17895814/angularjs-difference-between-route-and-routerprovider
  
  
  
  $route is a service while $routeProvider is a provider
  
  
  */
  
  /*javascript does not have class ..so here we use construction function below
  the next two function are the constructor created using function
  
  -----------------------MODEL------------------------------ 
  
      Exercise and Workoutplan----these are the two models which are used 
      
        Exercise contains the various constraints which we require like exercise description ,
        exercise timer and various things that are needed to do exercise
        
        Workout plan uses the exercise model above and containes the array of exercises for any workout plan
        
        
  
  
  
  */
  
  //---------------------------------MODEL-----------------------------------------------
  
  function Exercise(args)
  {
    this.name=args.name;
    this.title=args.title;
    this.description=args.description;
    this.image=args.image;
    this.related={};
    this.related.videos=args.videos;
    this.nameSound=args.nameSound;
    this.procedure=args.procedure;
    
    
  }
  
  function WorkoutPlan(args)
  {
    
    
    this.exercises=[];
    this.name=args.name;
    this.title=args.title;
    this.restBetweenExercise=args.restBetweenExercise;
    
  }
  
  var restExercise;
  var workoutPlan;
  //-----------------------------------FUNCTION TO START THE WORKOUT ----------------------
  /*
  
  
  these are anonymous function which carries out the app operation
  
  we start from startworkout which calls createWorkout function -----
  
  CreateWorkOUT ---it creates the workouts along with different exercises involved in it
  in simple words it put the data inside the model defined above
  
  
  restExercise is created inside the startworkout function that is used for showing rest message and
  timer between two exercise and duration 
  
  
  startExercise connects the view and model data using $scope DI 
  
  You should have as minimum number of variables bind with $scope in Angular JS
  
  
  
  */
  var startWorkout=function()
  {
    
    workoutPlan=createWorkout();
    
    //This is used to specify the rest period between 
    //two exercise
    restExercise={
      exercise:new Exercise({
      name:"rest",
      title:"Relax !",
      description:"Relax a bit !",
      image:"img/rest.png",
        
        
      }),
      duration:workoutPlan.restBetweenExercise
  };
    startExercise(workoutPlan.exercises.shift());
    
  };
  
  var createWorkout=function()
  {
    var workout=new WorkoutPlan({
      
      name:"7minworkout",
      title:"7 minute Workout",
      restBetweenExercise:10
      
    });
    
          workout.exercises.push({
              exercise: new Exercise({
                  name: "pushUp",
                  title: "Push Up",
                  description: "Discription about pushup.",
                  image: "img/Pushup.png",
                  videos: ["https://www.youtube.com/embed/YykjpeuMNEk", "https://www.youtube.com/embed/ZWdBqFLNljc", "https://www.youtube.com/embed/UwRLWMcOdwI", "https://www.youtube.com/embed/ynPwl6qyUNM", "https://www.youtube.com/embed/OicNTT2xzMI"],
                  variations: ["Planche push-ups", "Knuckle push-ups", "Maltese push-ups", "One arm versions"],
                  procedure: ""
              }),
              duration: 30
          });
          workout.exercises.push({
          
          exercise:new Exercise({
            
           name:"JumpingJacks",
           title:"Jumping Jacks",
           description:"Jumping Jacks",
           image:"img/JumpingJacks.png",
           videos:[],
           variations:[],
           procedure:""
            
          }),
          duration:30
          });
          workout.exercises.push({
              exercise: new Exercise({
                  name: "wallSit",
                  title: "Wall Sit",
                  description: "Wall Sit.",
                  image: "img/wallsit.png",
                  videos: [],
                  variations: [],

              }),
              duration: 30
          });
          workout.exercises.push({
              exercise: new Exercise({
                  name: "crunches",
                  title: "Abdominal Crunches",
                  description: "Abdominal Crunches.",
                  image: "img/crunches.png",
                  videos: [],
                  variations: [],
                  procedure: ""
              }),
              duration: 30
          });
          workout.exercises.push({
              exercise: new Exercise({
                  name: "stepUpOntoChair",
                  title: "Step Up Onto Chair",
                  description: "Step Up Onto Chair.",
                  image: "img/stepUpOntoChair.jpeg",
                  videos: [],
                  variations: [],
                  procedure: ""
              }),
              duration: 30
          });
          workout.exercises.push({
              exercise: new Exercise({
                  name: "squat",
                  title: "Squat",
                  description: "Squat.",
                  image: "img/squat.png",
                  videos: [],
                  variations: [],
                  procedure: ""
              }),
              duration: 30
          });
          workout.exercises.push({
              exercise: new Exercise({
                  name: "tricepdips",
                  title: "Tricep Dips On Chair",
                  description: "Tricep Dips On Chair.",
                  image: "img/tricepdips.jpg",
                  videos: [],
                  variations: [],
                  procedure: ""
              }),
              duration: 30
          });
          workout.exercises.push({
              exercise: new Exercise({
                  name: "plank",
                  title: "Plank",
                  description: "Plank.",
                  image: "img/Plank.png",
                  videos: [],
                  variations: [],
                  procedure: ""
              }),
              duration: 30
          });
          workout.exercises.push({
              exercise: new Exercise({
                  name: "highKnees",
                  title: "High Knees",
                  description: "High Knees.",
                  image: "img/highknees.png",
                  videos: [],
                  variations: [],
                  procedure: ""
              }),
              duration: 30
          });
          workout.exercises.push({
              exercise: new Exercise({
                  name: "lunges",
                  title: "Lunges",
                  description: "Lunges.",
                  image: "img/lunges.png",
                  videos: [],
                  variations: [],
                  procedure: ""
              }),
              duration: 30
          });
          workout.exercises.push({
              exercise: new Exercise({
                  name: "pushupNRotate",
                  title: "Pushup And Rotate",
                  description: "Pushup And Rotate.",
                  image: "img/pushupNRotate.jpg",
                  videos: [],
                  variations: [],
                  procedure: ""
              }),
              duration: 30
          });
          workout.exercises.push({
              exercise: new Exercise({
                  name: "sidePlank",
                  title: "Side Plank",
                  description: "Side Plank.",
                  image: "img/sideplank.png",
                  videos: [],
                  variations: [],
                  procedure: ""
              }),
              duration: 30
          });
    return workout;
    
  };
  
  var startExercise=function(exercisePlan)
  {
    /*
    
    exercisePlan here is the model Exercise along with duration for which exercise has to be done
    
    */
    
    
    $scope.currentExercise=exercisePlan;
    $scope.currentExerciseDuration=0;
    
    // Here the $interval function runs from 0  to $scope.currentExercise.duration=30 with 1 second as 
    //the difference between 2  interval
    
    
    //Since $interval function returns a promise object so we can use this just after $interval gets executed
    $interval(function()
    {
      ++$scope.currentExerciseDuration;
      
    },1000,$scope.currentExercise.duration)
    .then(function()
    {
      var next=getNextExercise($scope.currentExercise);
      if(next)
      {
        startExercise(next);
      }
      else
      {
        $location.path("/finish");
      }
});
    
  };
  
  var getNextExercise=function(currentExercisePlan)
  {
    
    var nextExercise=null;
    if(currentExercisePlan===restExercise)
    {
      
      nextExercise=workoutPlan.exercises.shift();
      
    }
    else
    {
       if(workoutPlan.exercises.length!==0)
          {
        
        nextExercise=restExercise;
      }
    }
    return nextExercise;
    
  };
   
  
  //This $watch is not called in real time instead it is called after every digest cycle 
  //so for this reason we will wrap this code in $timeout that triggers digest cycle when time  lapese
  // $scope.$watch('currentExerciseDuration',
  // function(nVal)
  // {
  //   if(nVal==$scope.currentExercise.duration)
  //   {
  //     var next=getNextExercise($scope.currentExercise);
  //     if(next)
  //     {
  //       startExercise(next);
  //     }
  //     else
  //     {
  //       console.log("WorkOut Complete");
  //     }
  //   }
  
  //----We have used promise instead of using $watch because of optimization
    
  // });
  
  var init=function()
  {
    
    startWorkout();
  };
  init();
  
  
  
  
}]);