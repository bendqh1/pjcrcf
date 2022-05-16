let formToWorkOn = document.querySelector("#prcf_form");
formToWorkOn.addEventListener("submit", function(event) {
    event.preventDefault();
    let formData = new FormData(formToWorkOn);
    fetch('behavior.php', {
        method: 'POST',
        body: formData
    });
    document.querySelector("#prcf_form_wrapper").style.display = "none";
    document.querySelector("#prcf_success_wrapper").style.display = "block";
    // Because the contact form is embeded in an iframe, any try here to remove elements outside the iframe will not work UNLESS:
    parent.document.querySelector("#mw-content-text > div > p:nth-child(1)").remove();
});
