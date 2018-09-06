$.ajax({
        type:'GET',
        dataType:'jsonp',
        url:'http://api.twitter.com/1/statuses/user_timeline.json',
        data:{screen_name:'sbtstech', include_rts:1}, //show retweets
        success:function(data, textStatus, XMLHttpRequest) {
            var tmp = false;
            var results = $('#twitter-div');
            //console.log(data);
            for(i in data) {
                if(data[i].retweeted_status != null) {
                    tmp = $('<li class="retweet" itemid="'+data[i].retweeted_status.id_str+'"><div class="dogear"></div><img src="'+data[i].retweeted_status.user.profile_image_url+'" alt="" align="left" width="48" height="48" /><cite>'+data[i].retweeted_status.user.screen_name+'</cite><p>'+data[i].retweeted_status.text.linkify_tweet()+'</p></li>');
                    if(data[i].retweeted_status.favorited) {
                        tmp.addClass('favorite');
                    }
                } else {
                    tmp = $('<li itemid="'+data[i].id_str+'"><div class="dogear"></div><img src="'+data[i].user.profile_image_url+'" alt="" align="left" width="48" height="48" /><cite>'+data[i].user.screen_name+'</cite><p>'+data[i].text.linkify_tweet()+'</p></li>');
                    if(data[i].favorited) {
                        tmp.addClass('favorite');
                    }
                }

                results.append(tmp);
            }
        },
        error:function(req, status, error) {
            alert('error: '+status);
        }
    });
