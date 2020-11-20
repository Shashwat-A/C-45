class Question {
    constructor(que, op1, op2, op3, op4) {
        this.que = que;
        this.op1 = createSprite(20, height - 50, width/2 - 10, 150);
        this.op2 = createSprite(20, 170 + 75, width/2 - 10, 150);
        this.op3 = createSprite(width/2 + 10, height - 50, width/2 - 10, 150);
        this.op4 = createSprite(width/2 + 10, 170 + 75, width/2 - 10, 150);
    }

    display() {
        //display the question
        textSize(20);
        fill("white");
        text("" + this.que, 20, 150);

        //add image to the options
    }
}