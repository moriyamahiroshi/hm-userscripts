// ==UserScript== -*- coding: utf-8 -*- vim: enc=utf-8
// @name            Amazon.co.jp Singout Link
// @description(ja) Amazon.co.jpのページ右上、「アカウントサービス」リンクの隣に「サインアウト」リンクを追加する(サインインしてゐる場合のみ)。
// @namespace       http://userscripts.org/users/82654
// @include         http://g4up.precog.net/entries/*
// @version         1.0.0
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
  var signoutLinkOrig =
    document.evaluate("descendant::*[@id='navidWelcomeMsg']"
                      + "/descendant::a[contains(@href, '/sign-out')]",
                      document.documentElement, null, 9, null).singleNodeValue;
  var homepageLink =
    document.evaluate("descendant::a[@class='navCrossshopYALink'"
                      + " and contains(@href, '/homepage.html/')]",
                      document.documentElement, null, 9, null).singleNodeValue;
  var separatorOrig =
    document.evaluate("descendant::a[@class='navCrossshopYALink'"
                      + " and contains(@href, '/homepage.html/')]"
                      + "/following-sibling::*[@class='navCrossshopBar']",
                      document.documentElement, null, 9, null).singleNodeValue;

  if (signoutLinkOrig) {
    var signoutLink = signoutLinkOrig.cloneNode(true);
    var separator = separatorOrig.cloneNode(true);

    signoutLink.textContent = "サインアウト";
    homepageLink.parentNode.insertBefore(separator,
                                         separatorOrig.nextSibling);
    homepageLink.parentNode.insertBefore(signoutLink,
                                         separatorOrig.nextSibling);
  }
})();

/// Amazon.co.jp Singout Link ends here.
