"use strict"

import Page from '../../mapper/page-meta.js';
import Post from '../../mapper/post-meta.js';
import PageMetrics from '../../mapper/page-metrics.js';
import PostMetrics from '../../mapper/post-metrics.js';
import DateTime from '../../helper/date-time.js';

/**
 * Facade for the individual requests for Facebook posts and pages data.
 *
 * @author Rob Waller <rdwaller1984@googlemail.com>
 */
class FacebookRequests
{
    /**
     * @todo probably sensible to inject the other parts into the contructor
     * @param Object facebookData
     */
    constructor(facebookData)
    {
        this.facebookData = facebookData;

        this.urlPrepend = 'https://graph.facebook.com';

        this.date = new DateTime;
    }

    /**
     * Get a list of posts from the Facebook page
     *
     * @param Object page
     * @return Promise
     */
    getPosts(page)
    {
        return this.facebookData.getDataPaginate(`${this.urlPrepend}/${page.id}/posts?fields=created_time,message,id,link,type&access_token=${page.access_token}`)
            .then((result) => {
                return new Post(result);
            });
    }

    /**
     * Get the metrics for the individual posts
     *
     * @param Object page
     * @return Promise
     */
    getPostMetrics(page)
    {
        return this.facebookData.getDataPaginate(
                `${this.urlPrepend}/${page.id}/posts?fields=insights.metric(post_stories,post_storytellers,post_story_adds,post_story_adds_unique,post_engaged_users,post_consumptions,post_consumptions_unique,post_impressions,post_impressions_unique,post_impressions_paid,post_impressions_paid_unique,post_reactions_like_total,post_reactions_love_total,post_reactions_wow_total,post_reactions_haha_total,post_reactions_sorry_total,post_reactions_anger_total)&access_token=${page.access_token}`
            ).then((result) => {
                return new PostMetrics(result);
            });
    }

    /**
     * Get details on an idividual Facebook page
     *
     * @param Object page
     * @return Promise
     */
    getPage(page)
    {
        return this.facebookData.getData(`${this.urlPrepend}/${page.id}/?fields=link,name,category,about&access_token=${page.access_token}`)
            .then((result) => {
                return new Page([result]);
            });
    }

    /**
     * Return a list of Facebook pages that the user has access to.
     *
     * @param string accessToken
     * @return Promise
     */
    getPages(accessToken)
    {
        return this.facebookData.getDataPaginate(`${this.urlPrepend}/me/accounts?access_token=${accessToken}`)
            .then((result) => {
                return new Page(result);
            });
    }

    /**
     * Get the metrics for the Facebook page.
     *
     * @param Object page
     * @return Promise
     */
    getPageMetrics(page)
    {
        return this.facebookData.getDataPaginate(
            `${this.urlPrepend}/${page.id}/insights/page_impressions,page_impressions_unique,page_impressions_paid,page_impressions_organic,page_stories,page_engaged_users,page_consumptions,page_consumptions_unique,page_negative_feedback,page_negative_feedback_unique,page_fan_adds_unique,page_views_total,page_views_logged_in_unique,page_posts_impressions,page_posts_impressions_unique,page_posts_impressions_paid,page_posts_impressions_organic,page_post_engagements,page_video_views?access_token=${page.access_token}&since=${this.date.getUnixTimestampMinusDays(90)}&until=${this.date.getUnixTimestamp()}`, 'previous', true
        ).then((result) => {
            return new PageMetrics(result);
        });
    }

    /**
     * @todo need to consider this.
     */
    getAccessTokenStatus()
    {
        return this.facebookData.getData(`${this.urlPrepend}/oauth/access_token_info?access_token=${page.access_token}`)
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
