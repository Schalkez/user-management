$(document).ready(function(){
    $("#add_user").submit(function(event){
        alert("Data inserted successfully!");
    })
    $("#update_user").submit(function(event){
        event.preventDefault();

        let unindexed_array = $(this).serializeArray()
        let data = {}

        $.map(unindexed_array, function(n, i) {
            data[n["name"]] = n["value"]
        })

        
        let request = {
            "url": `http://localhost:3000/api/user/${data.id}`
        }

        $.ajax(request).done(function(response){
            alert("Data updated successfuly!")
        })
    })
    if (window.location.pathname == "/") {
        $ondelete = $(".table tbody td a.delete");
        $ondelete.click(function() {
            let id = $(this).attr("data-id")

            let request = {
                "url": `http://localhost:3000/api/users/${id}`,
                "method": "DELETE"
            }

            if (confirm("Do you really want to delete this record?")) {
                $.ajax(request).done(function(response){
                    alert("Data deleted successfully!");
                    window.location.reload();
                })
            }
        })
    }
});