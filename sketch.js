let brush = "purple"



function setup() {

    // create a 640x480 pixel canvas and attach it to your HTML
    createCanvas(640, 480).parent('p5')

    print("this is the setup")

    background(232, 227, 255)

}

function draw() {


    if(mouseIsPressed){

      if (brush == "purple"){

        let r = random(0, 255)
        print(r)

        stroke (random(142, 236), random(0, 212), 255)
        strokeWeight(2)
        fill(235, 210, 181)
        rectMode(CORNERS)
        rect(mouseX +10, mouseY +10 , pmouseX -10, pmouseY -10 )
        rectMode(CORNER)


        // line(mouseX, mouseY, pmouseX, pmouseY)
      }

      if (brush == "red"){
        stroke(235, 70, 70)
        strokeWeight(1)
        line(mouseX, mouseY, pmouseX - random(0, 20), pmouseY - random(0, 20))
      }

      if (brush == "blue"){
        stroke(144, 167, 232, random(0, 180))
        strokeWeight(8)
        fill(246, 235, 255)
        circle(mouseX + random(-20, 20), mouseY + random(-20, 20), random(2, 30))
        // line(mouseX, mouseY, pmouseX, pmouseY)
      }

      if (brush == "yellow"){
        stroke(255, 255, 255)
        fill(255, 221, random(0, 255))
        strokeWeight(1)
        circle(mouseX , mouseY, 15) //+ random(1, 50)
        // line(mouseX, mouseY, pmouseX, pmouseY)
      }


      if (brush == "rect"){
        stroke(12, 19, 97)
        fill(228, 229, 247)
        strokeWeight(1)
        rectMode(CORNERS)
        rect(mouseX + random(0, 30), mouseY, pmouseX+ random(0, 30), pmouseY )
        rectMode(CORNER)
      }


      if (brush == "white"){
        stroke(0)
        strokeWeight(1)
        fill(255)
        circle(mouseX , mouseY, random(1, 20))
      }

      if (brush == "green"){
        stroke(121, 242, 153)
        strokeWeight(2)
        line(mouseX + 10, mouseY, mouseX + 10, mouseY +10)
      }

      if (brush == "pink"){
        stroke(240, 115, 163)
        fill(245, 184, 244)
        strokeWeight(.5)
        // circle(mouseX , mouseY, 9)
        ellipse(mouseX, mouseY, 10, 3)
      }


    } // line

    stroke(171, 207, 93)
    strokeWeight(1)
    line(0, 65, 640, 65)


    stroke(0)
    strokeWeight(1)

//purple
    fill(204, 162, 252)
    ellipse(30, 30, 21, 21)

    stroke(171, 207, 93)
    strokeWeight(2.5)
    line(30, 41, 30, 64)
      stroke(0)
      strokeWeight(1)
      ellipse(20, 19, 10, 10)
      ellipse(30, 14, 10, 10)
      ellipse(40, 19, 10, 10)
      ellipse(15, 28, 10, 10)
      ellipse(17, 39, 10, 10)
      ellipse(26, 45, 10, 10)
      ellipse(37, 44, 10, 10)
      ellipse(44, 36, 10, 10)
      ellipse(45, 27, 10, 10)



//red
    fill(235, 70, 70)
    stroke(0)
    ellipse(70, 30, 20, 20)

      ellipse(63, 30, 5, 25)
      ellipse(66, 30, 5, 25)
      ellipse(69, 30, 5, 25)
      ellipse(72, 30, 5, 25)
      ellipse(75, 30, 5, 25)
      ellipse(78, 30, 5, 25)

      strokeWeight(1)
      beginShape()
      curveVertex(69, 18)
      curveVertex(69, 18)
      curveVertex(68, 11)
      curveVertex(61, 10)
      curveVertex(61, 10)
      endShape()

      beginShape()
      vertex(71, 16)
      vertex(69, 16)
      vertex(73, 10)
      vertex(77, 9)
      vertex(79, 11)
      vertex(79, 11)
      endShape()

      stroke(122, 156, 93)
      line(70, 42, 70, 64)
      line(70, 63, 81, 49)
      line(70, 63, 60, 50)


//blue
    fill(144, 167, 232)
    stroke(8, 55, 130)
    ellipse(107, 28, 30, 30)

    fill(164, 210, 237)
    stroke(87, 99, 247)
    strokeWeight(3)
    ellipse(107, 28, 18, 18)

    stroke(8, 55, 130)
    strokeWeight(1)
    line(107, 26, 95, 9)
    line(107, 26, 118, 7)

    stroke(58, 240, 153)
    line(107, 44, 107, 63)

    //leaves
    beginShape()
    vertex(107, 44)
    vertex(94, 44)
    vertex(90, 53)
    vertex(100, 50)
    endShape(CLOSE)

    beginShape()
    vertex(108, 44)
    vertex(118, 44)
    vertex(123, 53)
    vertex(114, 50)
    endShape(CLOSE)

//yellow
    fill(255)
    stroke(240, 238, 115)
    ellipse(145, 30, 23, 23)
    stroke(255, 221, random(0, 255))
    line(145, 41, 145, 12)
    line(145, 41, 145 - 4, 12 + 2)
    line(145, 41, 145 - 8, 12 + 4)
    line(145, 41, 145 - 12, 12 + 6)
    line(145, 41, 145 - 16, 12 + 8)
    line(145, 41, 145 + 4, 12 + 2)
    line(145, 41, 145 + 8, 12 + 4)
    line(145, 41, 145 + 12, 12 + 6)
    line(145, 41, 145 + 16, 12 + 8)

    stroke(145, 222, 78)//stem
    line(145, 41, 145, 64)



//rect
    fill(12, 19, 97)
    stroke(228, 229, 247)
    rect(175, 20, 15, 15)
    rect(170, 15, 10, 10)
    rect(185, 15, 10, 10)
    rect(170, 30, 10, 10)
    rect(185, 30, 10, 10)
    stroke(171, 207, 93)
    strokeWeight(1)
    line(182.5, 37, 182.5, 63)
    fill(60, 201, 117)
    beginShape()
    curveVertex(183, 64)
    curveVertex(188, 54)
    curveVertex(201, 52)
    curveVertex(194, 59)
    endShape(CLOSE)

    beginShape()
    curveVertex(183, 64)
    curveVertex(177, 50)
    curveVertex(166, 46)
    curveVertex(167, 55)
    endShape(CLOSE)


//white
    fill(255, 255, 255)

    stroke(170, 163, 196)
    ellipse(219, 25, 20, 20)
    ellipse(227, 25, 20, 20)
    ellipse(223, 23, 10, 28)
    stroke(124, 214, 171)
    line(223, 38, 223, 64)
    ellipse(227, 61, 5, 5)
    ellipse(219, 61, 5, 5)



//green
    fill(121, 242, 153)
    triangle(252, 15, 247, 35, 277, 35)
    triangle(272, 15, 247, 35, 277, 35)
    strokeWeight(2)
    line(247, 35, 262, 46)
    line(277, 35, 262, 46)
    line(262, 46, 262, 64)

//pink
    fill(245, 184, 244)
    stroke(240, 115, 163)
    fill(240, 115, 163)
    ellipse(304, 27, 8, 8)
    fill(245, 184, 244)
    ellipse(304, 18, 11, 11)
    ellipse(304, 36, 11, 11)
    ellipse(314, 27, 11, 11)
    ellipse(294, 27, 11, 11)
    stroke(58, 240, 153)
    line(304, 44, 304, 64)


//save
    fill(87, 175, 247)
    stroke(0)
    strokeWeight(2)
    textSize(20);
    text('save', 335, 32);


}


function mouseClicked() {

    print(int(mouseX), int(mouseY))

    if (mouseX > 9 && mouseX < 50 && mouseY > 7 && mouseY < 50){
      print("1st button")
      brush = "purple"
      }

    else if (mouseX > 59 && mouseX < 81 && mouseY > 8 && mouseY < 42){
      print("2nd button")
      brush = "red"
      }

    else if (mouseX > 90 && mouseX < 123 && mouseY > 10 && mouseY < 43){
      print("3rd button")
      brush = "blue"
      }

    else if (mouseX > 130 && mouseX < 160 && mouseY > 10 && mouseY < 40){
      print("4th button")
      brush = "yellow"
      }

    else if (mouseX > 169 && mouseX < 196 && mouseY > 12 && mouseY < 41){
      print("5th button")
      brush = "rect"
      }

      else if (mouseX > 209 && mouseX < 238 && mouseY > 8 && mouseY < 37){
        print("6th button")
        brush = "white"
        }

        else if (mouseX > 250 && mouseX < 280 && mouseY > 10 && mouseY < 40){
          print("7th button")
          brush = "green"
          }

        else if (mouseX > 290 && mouseX < 320 && mouseY > 10 && mouseY < 40){
            print("8th button")
            brush = "pink"
            }

        else if (mouseX > 330 && mouseX < 360 && mouseY > 10 && mouseY < 40){
            save()
                }

    else {
      print("false")
      }

      }
