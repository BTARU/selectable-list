"use strict";

ul.addEventListener("click", selectItem);

function selectItem(event) {
    let targetElem = event.target;

    if (targetElem.tagName == "LI") {
        let ctrlKey;
        if (event.ctrlKey || event.metaKey) ctrlKey = true;

        let selectedItems = event.currentTarget.querySelectorAll(".selected");
        if (selectedItems.length > 0 && !ctrlKey) {
            selectedItems.forEach((element) => {
                element.classList.remove("selected");
            });
        }

        targetElem.classList.toggle("selected");
    }
}
