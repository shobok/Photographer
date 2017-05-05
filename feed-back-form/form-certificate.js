// Certificate Form Scripts

$(function() {

    $("#CertificateForm input").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#customer_name").val();
            var email = $("input#customer_email").val();
            var for_user_name = $("input#for_user_name").val();
            var for_user_email = $("input#for_user_email").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "././feed-back-form/form-certificate.php",
                type: "POST",
                data: {
                    name: name,
                    email: email,
                    for_user_name: for_user_name,
                    for_user_email: for_user_email
                },
                cache: false,
                success: function() {
                    // Success message
                    $('#success_cert').html("<div class='alert alert-success'>");
                    $('#success_cert > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success_cert > .alert-success')
                        .append("<strong>Ваше повідомлення відправлено. </strong>");
                    $('#success_cert > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#CertificateForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success_cert').html("<div class='alert alert-danger'>");
                    $('#success_cert > .alert-danger').append("<strong>Вибачте " + firstName + ", ваше повідомлення не відправлено. Спробуйте будь-ласка пізніше.");
                    $('#success_cert > .alert-danger').append('</div>');
                    //clear all fields
                    $('#CertificateForm').trigger("reset");
                },
            });
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success_cert').html('');
});
