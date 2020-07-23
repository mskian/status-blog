function nospaces(t) {
    if (t.value.match(/\s/g)) {
        t.value = t.value.replace(/\s/g, '');
        console.log('Username Cannot Have Spaces');
        const appNotice = $('.app .notice');
        appNotice.empty();
        appNotice.append('<div class="notification is-danger">Username Cannot Have Spaces</div>');
    }
}

(function($) {

    const btn = $('.is-link');
    const appNotice = $('.app .notice');
    const inpt = $('.query');

    $('form').on('submit', function(e) {

        e.preventDefault();

        inpt.removeClass('is-danger');

        btn.addClass('is-loading');

        appNotice.html('<p>Fetching the Video 📦...</p>');

        let query = inpt.val();

        if ('' !== query) {

            var user = query.split('m.').slice(0).join('').split('mbasic.').slice(0).join('');

            $.ajax({
                type: "GET",
                url: "https://api.sanweb.info/fb/" + user,
                success: function(data) {
                    console.log('DATA: ', data);

                    if (data == false) {
                        appNotice.empty();
                        btn.removeClass('is-loading');
                        inpt.addClass('is-danger');
                        appNotice.append('<div class="notification is-danger">Data Not Found</div>');
                    } else {
                        appNotice.empty();
                        let mvhigh = data.links.high_quality;
                        let mvlow = data.links.low_quality;
                        inpt.addClass('is-success');
                        btn.removeClass('is-loading');
                        //btn.addClass('is-info');
                        if (mvhigh == 'Not Found') {
                            appNotice.append('<div class="card equal-height"><div class="card-content content"><br><p>HD Format Not Available</p></div></div><br>');
                        } else {
                            appNotice.append('<div class="card equal-height"><div class="card-content content"><br><br><video controls><source src="' + mvhigh + '" type="video/mp4"></video><br><br><p>High Quality</p><a target="_blank" rel="nofollow noopener" class="button is-info" href="' + mvhigh + '" download><span class="icon"><i class="fas fa-external-link-square-alt"></i></span><span> Download</a></div></div><br>');
                        }
                        if (mvlow == 'Not Found') {
                            appNotice.append('<div class="card equal-height"><div class="card-content content"><br><p>SD Format Not Available</p></div></div><br>');
                        } else {
                            appNotice.append('<div class="card equal-height"><div class="card-content content"><br><br><video controls><source src="' + mvlow + '" type="video/mp4"></video><br><br><p>Low Quality</p><a target="_blank" rel="nofollow noopener" class="button is-info" href="' + mvlow + '" download><span class="icon"><i class="fas fa-external-link-square-alt"></i></span><span> Download</a></div></div><br>');
                        }
                    }
                },
                error: function(error) {
                    console.log('ERROR: ', error.statusText);
                    appNotice.empty();
                    btn.removeClass('is-loading');
                    inpt.addClass('is-danger');
                    appNotice.append('<div class="notification is-danger">There was an error: <span class="tag is-danger is-large">' + error.statusText + '</span></div>');
                }
            });
        } else {
            console.log('FAILED');
            appNotice.empty();
            btn.removeClass('is-loading');
            inpt.addClass('is-danger');
            appNotice.append('<div class="notification is-danger">Enter a Valid URL</div>');
        }
    });
})(jQuery);