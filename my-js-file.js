const taskContainer = document.querySelector(".task__container");
const saveChanges = () => {
    const taskData = {
        id: `${Date.now()}`,
        imageUrl: document.getElementById("imageurl").value,
        taskTitle: document.getElementById("tasktitle").value,
        taskType: document.getElementById("tasktype").value,
        taskDescription: document.getElementById("taskdescrription").value
    }
const newCart = `
        <div class="col-sm-12 col-md-6 col-lg-4" id="${taskData.id}">
            <div class="card">
                    <div class="card-header d-flex justify-content-end gap-2">
                        <button type="button" class="btn btn-outline-success"><i class="fa-solid fa-pen"></i></button>
                        <button type="button" class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i></button>
                    </div>
                    <div class="card-body">
                      <img src="${taskData.imageUrl}" class="card-img-top" alt="img">
                      <h5 class="card-title mt-3 fw-bold text-primary">${taskData.taskTitle}</h5>
                      <p class="card-text">${taskData.taskDescription}</p>
                      <a href="#" class="btn btn-primary">${taskData.taskType}</a>
                    </div>
            </div>
        </div>
`;
taskContainer.insertAdjacentHTML("beforeend", newCart);
};