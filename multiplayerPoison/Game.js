class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
        
        
      }
      form = new Form()
      form.display();
    }
   

    player1 = createSprite(100,200);
    player2 = createSprite(300,200);
   player3 = createSprite(500,200);
    player4 = createSprite(700,200);
   players= [player1, player2, player3, player4];

  player1.addImage("player1",p1);
  player2.addImage("player2",p2);
  player3.addImage("player3",p3);
  player4.addImage("player4",p4);


  }

  play(){
    form.hide();

    Player.getPlayerInfo();
    //player.getcarsatend();

    if(allPlayers !== undefined){
      //var display_position = 100;
      background("white");
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 250;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;
        

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        

        


         // if(keyDown("space")){
           // player.velocityY =-10;
          // }
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }
     
    }

    

    drawSprites();
  }

