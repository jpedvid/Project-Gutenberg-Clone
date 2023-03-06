let booksModel = [];
function initializeBooksModel(){
    fetch("http://localhost:9000/api/books")
        .then(response=> response.json())
        .then(data => {
            booksModel = data;
            refreshBooks(booksModel);
        }).catch(err=> console.error("unable to load data:",err));

}
function refreshBooks(books){
    $("books-table tbody").empty();
    let rowsTemplate = _.template(`<% _.each(books,function(book){ %><tr data-id=<%-book.Text%>><td><%- book.id %></td><td><a href="https://gutenberg.org/ebooks/<%- book.Text%>.html.images" target="_blank"><img src="https://www.gutenberg.org/cache/epub/<%- book.Text%>/pg<%- book.Text%>.cover.medium.jpg" height=600 width=400 alt=<%- book.Title%>></td></tr><% }); %>`);
    let rows = rowsTemplate({'books': books});
    $("#books-table tbody").html(rows);
}
function getBookByText(text){
    for(let i = 0; i < booksModel.length;i++){
        if(booksModel[i].id == text){
            return _.cloneDeep(booksModel[i]);
        }
    }
    return null;
}
$(function(){
    initializeBooksModel();
    $("#books-table tbody").on("click","tr", function(){
        let book = getBookByText($(this).attr("id"));
        console.log(book);
    });
});