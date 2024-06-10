$(document).ready(function() {
    $('#projectModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget); // Button that triggered the modal
        var title = button.data('title'); // Extract info from data-* attributes
        var description = button.data('description');
        var tools = button.data('tools').split(',');

        var modal = $(this);
        modal.find('.modal-title').text(title);
        modal.find('#projectDescription').text(description);
        
        var toolsList = modal.find('#projectTools');
        toolsList.empty();
        tools.forEach(function(tool) {
            toolsList.append('<li>' + tool.trim() + '</li>');
        });
    });
});
