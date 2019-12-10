var url = window.location.search;
console.log(url)
console.log(window.location.href)

if (url.indexOf("?id=") !== -1) {
  id = url.split("=")[1];
  getid(id);
}

function getid(id) {
$.get("/api/contact/" + id, data =>  {
    console.log(data)
});
}