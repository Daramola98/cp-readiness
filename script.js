let searchText;
function search() {
    searchText = document.getElementById('searchText').value;
    if (!searchText) {
        alert("Please Enter a Value in the Search Box");
    } else {
        alert(searchText);
    }
}

document.getElementById('search').addEventListener('click', search);