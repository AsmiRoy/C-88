var Canvas= new fabric.Canvas("myCanvas");
var block_width=30;
var block_height=30;

var player_x=10;
player_y=10;
var player_object="";
var block_object="";

    function add_block(get_img){
        fabric.Image.fromURL(get_img,function(Ing)
        {
    block_object=Ing;
    block_object.scaleToWidth(block_width);
    block_object.scaleToHeight(block_height);
    block_object.set({
        top:player_y,
       left:player_x });
     Canvas.add(block_object);
    });
        }
       window.addEventListener ("keydown",mykeydown);
       function mykeydown(e){
           var k=e.keyCode;
           console.log(k);
           if (k=='67'){
           console.log("c");
           add_block("the-famous-five-illustration-16x9.jpg");
           }
           if (k=='68'){
            console.log("d");
            add_block("images.jpg");
            }
            if (k=='89'){
                console.log("y");
                add_block("download.jpg");
                }
                if (k=='87'){
                    console.log("w");
                    add_block("harry.jpg");
                }

                    if (k=='37'){
                        console.log("left");
                        left();
                    }
                    if (k=='39'){
                        console.log("right");
                        right();
                    }
                    if (k=='40'){
                        console.log("down");
                        down();
                    }
                    if (k=='38'){
                        console.log("up");
                        up();
                    }
                         }
                
                function left (){
                if(player_x >0){
                player_x=player_x - block_width;
                Canvas.remove(player_object);
                add_player();
                player_y
                }
            }
                
                
                function right (){
                if(player_x <850){
                player_x=player_x + block_width;
                Canvas.remove(player_object);
                add_player();
                }
                }
                function down (){
                if(player_y <450){
                player_y=player_y + block_width;
                Canvas.remove(player_object);
                add_player();
                }
                }
               
            
            function up (){
                if(player_y >0){
                    player_y=player_y - block_width;
                    Canvas.remove(player_object);
                    add_player();}
                }

                function add_player(){
                    fabric.Image.fromURL("Player.jpg", function(Ing)
                    {
                player_object=Ing;
                player_object.scaleToWidth(150);
                player_object.scaleToHeight(140);
                player_object.set({
                    top:player_y,
                   left:player_x });
                 Canvas.add(player_object);
                });
            }