var tags = [];

function getTagsList() {
    var tagsContainer = document.getElementsByClassName("tags-container")[0];
    const tagsList = tagsContainer.querySelector("ul");
    return tagsList;
}

function getTagsInput() {
    const tagsList = getTagsList();
    const tagsInput = tagsList.querySelector("input");
    return tagsInput;
}

function onRemoveAllTags(e) {
    var tagsList = e.parentNode;
    var tagElements = tagsList.querySelectorAll("li");
    tagElements.forEach((tag) => {
        tagsList.removeChild(tag);
    });
    tags = [];
    console.log(tags);
}

function onRemoveTag(e) {
    var nodeToRemove = e.target.parentNode;
    var tagsList = nodeToRemove.parentNode;
    tagsList.removeChild(nodeToRemove);
    var index = tags.indexOf(e.target.value);
    tags.splice(index, 1);
    console.log(tags);
}

function createTag(name) {
    let tagElement = document.createElement("li");
    tagElement.innerHTML = name
    let closeButton = document.createElement("span");
    closeButton.innerHTML = "&times;";
    closeButton.addEventListener("click", onRemoveTag);
    tagElement.appendChild(closeButton);
    return tagElement;
}

function onInputKeyup(e) {
    if (e.key == "Enter" || e.key == ",") {
        var tagName = e.key == "," ? e.target.value.slice(0, -1) : e.target.value;
        if (!tags.includes(tagName) && tagName != '') {
            var newTag = createTag(tagName);
            var tagsList = getTagsList();
            tagsList.insertBefore(newTag, e.target);
            tags.push(tagName);
        }
        e.target.value = "";
        console.log(tags);
    }
}

getTagsInput().addEventListener("keyup", onInputKeyup);
