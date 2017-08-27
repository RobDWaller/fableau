"use strict"

import Page from '../../mapper/page-meta.js';
import Post from '../../mapper/post-meta.js';
import PageMetrics from '../../mapper/page-metrics.js';
import PostMetrics from '../../mapper/post-metrics.js';

class FacebookRequests
{
    constructor(facebookData)
    {
        this.facebookData = facebookData;

        this.urlPrepend = 'https://graph.facebook.com'
    }

    setAccessToken(accessToken)
    {
        this.accessToken = accessToken;
    }

    getPosts(pageId)
    {
        return this.facebookData.getDataPaginate(`${this.urlPrepend}/${pageId}/posts?fields=created_time,message,id,link,type&access_token=${this.accessToken}`)
            .then((result) => {
                return new Post(result);
            });
    }

    getPostMetrics(pageId)
    {
        return this.facebookData.getDataPaginate(
                `${this.urlPrepend}/${pageId}/posts?fields=insights.metric(post_stories,post_storytellers,post_story_adds,post_story_adds_unique,post_engaged_users,post_consumptions,post_consumptions_unique,post_impressions,post_impressions_unique,post_impressions_paid,post_impressions_paid_unique,post_reactions_like_total,post_reactions_love_total,post_reactions_wow_total,post_reactions_haha_total,post_reactions_sorry_total,post_reactions_anger_total)&access_token=${this.accessToken}`
            ).then((result) => {
                return new PostMetrics(result);
            });
    }

    getPage(pageId)
    {
        return this.facebookData.getData(`${this.urlPrepend}/${pageId}/?fields=link,name,category,about&access_token=${this.accessToken}`)
            .then((result) => {
                return new Page(result);
            });
    }

    /**
     * @todo New Page is incorrect different data structure returned. Is in fact an account.
     */
    getPages()
    {
        return this.facebookData.getDataPaginate(`${this.urlPrepend}/me/accounts?access_token=${this.accessToken}`)
            .then((result) => {
                return new Page(result);
            });
    }

    getPageMetrics(pageId)
    {
        return this.facebookData.getDataPaginateLimit(
            `${this.urlPrepend}/${pageId}/insights/page_impressions,page_impressions_unique,page_impressions_paid,page_impressions_organic,page_stories,page_engaged_users,page_consumptions,page_consumptions_unique,page_negative_feedback,page_negative_feedback_unique,page_fan_adds_unique,page_views_total,page_views_logged_in_unique,page_posts_impressions,page_posts_impressions_unique,page_posts_impressions_paid,page_posts_impressions_organic,page_post_engagements,page_video_views?access_token=${this.accessToken}&since=${this.date.getUnixTimestampMinusDays(90)}&until=${this.date.getUnixTimestamp()}`, 'previous'
        ).then((result) => {
            return new PageMetrics(result);
        });
    }

    getAccessTokenStatus()
    {
        return this.facebookData.getData(`${this.urlPrepend}/oauth/access_token_info?access_token=${this.accessToken}`)
            .then((result) => {
                if (typeof(result.expires_in) === 'undefined') {
                    return false;
                }

                if (result.expires_in < 1) {
                    return false;
                }

                return true;
            });
    }
}

export default FacebookRequests;
