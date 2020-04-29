shots = [];
shotVel = [];


function updateShots() {
    for (var i = 0; i < shots.length; i++) {
        for (var z = 0; z < bb.length; z++) {
            if (dist(shots[i].x, shots[i].y, bb[z].x, bb[z].y) < bbSize / 2) {
                bb[z] = createVector(random(0, width), random(0, height));
                bbVel[z] = p5.Vector.random2D().mult(random(0.25, 2.25));
                Score++;
            }
        }
        shots[i].add(shotVel[i]);

        push();
        stroke(132, 112, 255);

        line(shots[i].x, shots[i].y, shots[i].x + shotVel[i].x * 4, shots[i].y + shotVel[i].y * 4)

        pop();
    }
}

function keyPressed() {
    //console.log (keyCode); 
    if (keyCode == 32) {
        shots.push(createVector(p.x, p.y));
        shotVel.push(p5.Vector.fromAngle(radians(heading)).mult(7));


    }
}