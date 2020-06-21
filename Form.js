class Form {

  constructor() {
    this.input = createInput("Fathers Name");
    this.button = createButton('LOVELY MESSAGE');
    this.greeting = createElement('h2');
  }
  
    
  display(){
    var title = createElement('h1')
    title.html("HAPPY FATHERS DAY");
    title.position(500,20);
    
    father1 = createSprite(800,300);
    father2 = createSprite(600,400);
    lovedad = createSprite(350,300);
    father1.addImage("father1",father1image);
    father2.addImage("father2",father2image);
    lovedad.addImage("lovedad",lovedadimage);
    father1.scale = 0.2;
    father2.scale = 0.2;
    lovedad.scale = 0.2;
      
    this.input.position(500,100);
    this.button.position(500,150);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
     
      //this.greeting.html("here is a special message for you in right side" + player.name)
      text("You’re not just my father, but one of my closest friends.The older I get the more I realize how important it is to have a dad like you. You have provided stability in my life and the love and acceptance I needed. Happy Father’s Day!  ",20,100);
      
      
      //this.greeting.position(displayWidth/2-70,displayHeight/4);
    });

  }
}
