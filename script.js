let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO = true;
let count= 0;

const winPattern = [
    [0,4,8],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    [0,1,2]
];

const resetGame = () => {
    turnO= true;
    enableBoxes();
    msgContainer.classList.add("hide")
}


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turnO) {
            box.innerText = "O";
            box.style.color = "purple";
            turnO= false;
        }else{
            box.innerText = "X";
            box.style.color = "orange";
            turnO= true;
        }
        box.disabled= true;
        count++;
        
        let IsWinner=checkWinner();

        if(count===9 && !IsWinner){
            showDraw();
        }
    });
  });
    
  const showDraw = () => {
    msg.innerText = `Congratulations This Match is DRAW!`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};


  const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled=true;
    }
};

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
};


const showWinner = (winner) => {
    msg.innerText = `Congratulations you are the winer, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};  


const checkWinner = () => {
    for(let pattern of winPattern){ 
        let pos1v=boxes[pattern[0]].innerText;
        let pos2v=boxes[pattern[1]].innerText;
        let pos3v= boxes[pattern[2]].innerText;

        if(pos1v!="" && pos2v!="" && pos3v!=""){
            if(pos1v===pos2v && pos2v===pos3v){
                console.log("winner",pos1v);
                showWinner(pos1v);
            }
        }

    } 
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);