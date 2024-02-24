document.getElementById("searchInput").addEventListener("input", function() {
    var searchInput = document.getElementById("searchInput").value.toLowerCase();
    var calculator = document.getElementById("calculator");
    var todoList = document.getElementById("todoList");
    var dynamicSearch = document.getElementById("dynamicSearch");

    if (searchInput.includes("calculator")) {
      calculator.style.display = "block";
    } else {
      calculator.style.display = "none";
    }
    if (searchInput.includes("to do list") || searchInput.includes("todolist")) {
      todoList.style.display = "block";
    } else {
      todoList.style.display = "none";
    }
    if (searchInput.includes("dynamic search")) {
      dynamicSearch.style.display = "block";
    } else {
      dynamicSearch.style.display = "none";
    }
  });