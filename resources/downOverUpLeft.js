var downOverUpLeft = function() {
    for (i = 0; i < 11; i++) {
        turtle.core.move("down");
    }
    for (i = 0; i < 2; i++) {
        turtle.core.move("right");
    }
    for (i = 0; i < 11; i++) {
        turtle.core.move("up");
    }
    for (i = 0; i < 2; i++) {
        if (turtle.core.isLettuceNear()) {
            turtle.core.eat();
            return;
        } else {
            turtle.core.move("right");
        }
    }
}
