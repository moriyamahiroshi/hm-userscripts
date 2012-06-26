// ==UserScript== -*- coding: utf-8 -*- vim: enc=utf-8
// @name            Add Site Name
// @description     Complements the site name in the title.
// @description(ja) TITLE要素にサイト名を補完する。
// @namespace       http://userscripts.org/users/82654
// @include         https://github.com/*
// @include         http://www.google.co.jp/search?tbs=sbi:*
// @include         http://www.google.com.tw/search?tbs=sbi:*
// @include         http://www.google.com/search?tbs=sbi:*
// @include         http://members.jcom.home.ne.jp/ksmiracle/*
// @include         http://tips.lisp-users.org/common-lisp/*
// @version         0.9.1
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
  // SITE_NAME_POSITION_TYPE
  const HEAD = 0;
  const TAIL = 1;

  var Settings = [
    // [URL, Sitename, Type (HEAD or TAIL), Separator],
    ["https://github.com/", "GitHub", TAIL, " · "],
    ["http://www.google.co.jp/search?tbs=sbi:", "Google 画像で検索", TAIL, " - "],
    ["http://www.google.com.tw/search?tbs=sbi:", "Google 以圖搜尋", TAIL, " - "],
    ["http://www.google.com/search?tbs=sbi:", "Google Search by Image", TAIL, " - "],
    ["http://members.jcom.home.ne.jp/ksmiracle/", "Love Cream Puff", TAIL, " - "],
    ["http://tips.lisp-users.org/common-lisp/", "逆引きCommon Lisp", TAIL, " - "],
  ];

  Settings.forEach(function(s){
    var url = s[0], sitename = s[1], type = s[2], separator = s[3];

    if (location.href.indexOf(url) == 0) {
      if (type == HEAD && !(document.title.indexOf(sitename) >= 0)) {
        document.title = sitename + separator + document.title;
      }
      else if (type == TAIL
               && (document.title.indexOf(sitename)
                   != (document.title.length - sitename.length))) {
        document.title += separator + sitename;
      }
    }
  });
})();

/// Add Site Name ends here.
