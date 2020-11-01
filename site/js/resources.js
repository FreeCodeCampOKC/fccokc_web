$('.toggle-box').click(function () {
    $(this).nextAll('.toggle-div:first').toggleClass('hide-section').toggleClass('show-section')
})
