// ==UserScript== -*- coding: utf-8 -*- vim: enc=utf-8
// @name            Nico Nico Douga Feed Link
// @namespace       http://userscripts.org/users/82654
// @description     ニコニコ動畫の動畫表示ページからその動畫投稿者の投稿ヴィデオのウェブフィードへ、LINK要素で關聯附けます。つまり、ブラウザのフィードボタンが使へるやうになるかもね。
// @description(ja) ニコニコ動畫の動畫表示ページからその動畫投稿者の投稿ヴィデオのウェブフィードへ、LINK要素で關聯附けます。つまり、ブラウザのフィードボタンが使へるやうになるかもね。
// @include         http://*.nicovideo.jp/watch/*
// @include         http://*.nicovideo.jp/user/*
// @include         http://*.niconico.com/watch/*
// @include         http://*.niconico.com/user/*
// @include         http://ch.niconico.com/channel/*
// @exclude         http://*.nicovideo.jp/*?rss=*
// @exclude         http://*.niconico.com/*?rss=*
// @version         0.9.0
// @author          MORIYAMA Hiroshi <hiroshi@kvd.biglobe.ne.jp>
// @copyright       © 2012  MORIYAMA Hiroshi
// @license         GPL
// ==/UserScript==

// This program is free software; you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

/// Code:

(function(){
  function getFeedURL () {
    var node = m = userId = url = null;

    /* User page */
    if (m = location.href.match(/^http:\/\/[^.]+\.nico(?:video\.jp|nico\.com)\/user\/([0-9]+)/)) {
      userId = m[1];
    }
    /* Channel page */
    else if (m = location.href.match(/^(http:\/\/ch\.niconico\.com)\/channel\/(ch[0-9]+)/)) {
      url = "http://ch.nicovideo.jp/video/" + m[1] + "?rss=2.0";
    }
    /* Watch video page */
    else if (node = document.evaluate("/descendant::a[starts-with(@href, 'user/')]"
                                      /* Niconico Channel. */
                                      + "|/descendant::div[@class='owner_prof']"
                                      + " /descendant::a[starts-with(@href, 'http://ch.nico')]"
                                      /* 'この動画は、以下のチャンネルが提供しています' */
                                      + "|/descendant::tbody[contains(., '\u3053\u306E\u52D5\u753B\u306F\u3001\u4EE5\u4E0B\u306E\u30C1\u30E3\u30F3\u30CD\u30EB\u304C\u63D0\u4F9B\u3057\u3066\u3044\u307E\u3059')]"
                                      + " /descendant::a[starts-with(@href, 'http://ch.nico')]"
                                      /* Get a videoUserId from a SCRIPT element. */
                                      + "|descendant::script[contains(self::node(),"
                                      + " 'addVariable(\"videoUserId\"')]",
                                      document.documentElement, null, 9, null).singleNodeValue) {
      if (node.href) {
        if (m = node.href.match(/^http:\/\/[^.]+\.nicovideo\.jp\/user\/([0-9]+)/)) {
          userId = m[1];
        }
        else if (node.href.match(/^http:\/\/ch\.nicovideo\.jp/)) {
          url = node.href.replace(/\.nicovideo\.jp\/channel\//, ".nicovideo.jp/video/")
            + "?rss=2.0";
        }
      }
      /* Find `so.addVariable("videoUserId", "99999999");' in a SCRIPT element. */
      else if (m = node.textContent.match(/(["'])videoUserId\1[ \t]*,[ \t]*(["'])([0-9]+)\2/)) {
        userId = m[3];
      }
    }

    if (userId) {
      url = "http://www.nicovideo.jp/user/" + userId + "/video?rss=2.0";
    }

    return url;
  }

  function addPostedVideosFeedLink (url) {
    if (url) {
      var link = document.createElement("link");
      link.href = url;
      link.rel = "alternate";
      link.type = "application/rss+xml";
      link.title = "Posted Videos (RSS feed)";
      document.getElementsByTagName("head").item(0).appendChild(link);
    }
  }

  addPostedVideosFeedLink(getFeedURL());
})();

/// Nico Nico Douga Feed Link ends here.
