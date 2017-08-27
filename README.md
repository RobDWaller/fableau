# [Fableau](http://fableau.io) (Alpha)

A Tableau Web Data Connector for Facebook that allows you to pull your page and
post metrics data into Tableau.  

The WDC is currently in alpha and requires further testing and tidy up, please
use it at your own risk until we release a stable version.

You can use this code to create your own Web Data Connector however you can use
the connector as is at [Fableau.io](http://fableau.io)

## End Points

The Web Data Connector pulls data from the following Facebook Graph API end points.

```
//Post Meta Data
https://graph.facebook.com/{page-id}/posts?fields=created_time,message,id,link,type&access_token={access-token}

//Post Metric Data
https://graph.facebook.com/{page-id}/posts?fields=insights.metric(post_stories,post_storytellers,post_story_adds,post_story_adds_unique,post_engaged_users,post_consumptions,post_consumptions_unique,post_impressions,post_impressions_unique,post_impressions_paid,post_impressions_paid_unique,post_reactions_like_total,post_reactions_love_total,post_reactions_wow_total,post_reactions_haha_total,post_reactions_sorry_total,post_reactions_anger_total)&access_token={access-token}

//Page Metric Data
https://graph.facebook.com/{page-id}/insights/page_impressions,page_impressions_unique,page_impressions_paid,page_impressions_organic,page_stories,page_engaged_users,page_consumptions,page_consumptions_unique,page_negative_feedback,page_negative_feedback_unique,page_fan_adds_unique,page_views_total,page_views_logged_in_unique,page_posts_impressions,page_posts_impressions_unique,page_posts_impressions_paid,page_posts_impressions_organic,page_post_engagements,page_video_views?access_token={access-token}&since={date}&until=${date}
```

## Notes

This Web Data Connector only allows you to take single snapshots of data from
Facebook. You cannot use it to auto refresh on Tableau Server as this WDC only
stores short term access tokens. This is because the WDC only makes use of
JavaScript which is client based code and Facebook advise against asking for a
long term access token via client code.

For more information on this issue, please see the [Facebook documentation](https://developers.facebook.com/docs/facebook-login/access-tokens).
It is relatively simple to solve this problem using server based code such as
PHP or Python. We have no plans to extend this Web Data Connector to solve
this problem.

## License

MIT

## Author

[@RobDWaller](https://twitter.com/RobDWaller)
