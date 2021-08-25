import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("inputText").value;
  document.getElementById("inputText").value = "";

  createIncompleteList(inputText);
};

const deteleFromIncpompletedList = (target) => {
  document.getElementById("incompleted__list").removeChild(target);
};

const createIncompleteList = (text) => {
  const div = document.createElement("div");
  div.className = "bl_todo";

  // console.log(div);

  const li = document.createElement("li");
  li.innerText = text;
  // console.log(li);

  const completeButton = document.createElement("button");
  completeButton.innerText = "DONE";
  completeButton.addEventListener("click", () => {
    // alert("DONE");
    deteleFromIncpompletedList(completeButton.parentNode);

    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;

    addTarget.textContent = null;

    const li = document.createElement("li");
    li.innerText = text;

    const backBtn = document.createElement("button");
    backBtn.innerText = "RETURN";
    backBtn.addEventListener("click", () => {
      const deleteTarget = backBtn.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      const text = backBtn.parentNode.firstChild.innerText;
      createIncompleteList(text);
    });

    addTarget.appendChild(li);
    addTarget.appendChild(backBtn);

    document.getElementById("complete-list").appendChild(addTarget);
  });
  // console.log(completeButton);

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "DELETE";
  deleteButton.addEventListener("click", () => {
    deteleFromIncpompletedList(deleteButton.parentNode);
  });
  // console.log(deleteButton);

  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // console.log(div);

  document.getElementById("incompleted__list").appendChild(div);
};

document.getElementById("addBtn").addEventListener("click", () => onClickAdd());
