$(document).ready(function() {
    $('#taskForm').submit(function(e) {
        e.preventDefault();
        var taskName = $('#taskInput').val();
        if (taskName !== '') {
        var listItem = $('<li>').text(taskName);
        var deleteButton = $('<span>').addClass('delete-btn').text('Excluir');
        listItem.append(deleteButton);
        $('#taskList').append(listItem);
        $('#taskInput').val('');
}
});

    $('#taskList').on('click', '.delete-btn', function() {
        $(this).parent().remove();
    });

    $('#taskList').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
