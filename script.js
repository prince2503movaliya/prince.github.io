let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // player 1 (O)

let count = 0;

const winPattrens = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const play_again = () => {
    turnO = true;
    enable_Boxes();
    msgContainer.classList.add("hide");
    remove_Winner_Highight();
}

const winner_Highight = (winPattrens) => {
    winPattrens.forEach((index) => {
        boxes[index].classList.add("winner");
    });
}

const remove_Winner_Highight = () => {
    boxes.forEach((box) => {
        box.classList.remove("winner");
    });
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        check_Winner();
    });
});

const diasable_Box = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enable_Boxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const display_Winner = (winner) => {
    msg.innerText = `Congratulation, winner ${winner}`;
    msgContainer.classList.remove("hide");
    diasable_Box();
    winner_Highight(winPattrens);
}

const check_Winner = () => {
    for (let pattern of winPattrens) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                display_Winner(pos1);
            }
        }
    }
};

resetBtn.addEventListener("click",play_again);