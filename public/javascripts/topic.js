let collectButton = document.querySelectorAll('.collectButton')[0]
collectButton.onclick = function (e) {
    e.preventDefault();
    let state = collectButton.classList.contains('selected')
    if (!state) {
        util.ajax({
            type: 'POST',
            url: '/api/collect',
            data: {
                accesstoken: accesstokenLable.value,
                topic_id: collectButton.getAttribute('topicId')
            },
            success: function (response) {
                if (response.success) {
                    collectButton.classList.add('selected')
                    collectButton.innerText = "取消收藏"
                }else {
                    alert('collect failed')
                }
            }
        })
    }else {
        util.ajax({
            type: 'POST',
            url: '/api/decollect',
            data: {
                accesstoken: accesstokenLable.value,
                topic_id: collectButton.getAttribute('topicId')
            },
            success: function (response) {
                if (response.success) {
                    collectButton.classList.remove('selected')
                    collectButton.innerText = "收藏"
                }else {
                    alert('collect failed')
                }
            }
        })
    }
}