// ==UserScript== -*- coding: utf-8 -*- vim: enc=utf-8
// @name            G4Up Entry Page Title with Photo Number
// @description     Adds a photo number to the document title on a G4Up entry page (e.g. <http://g4up.precog.net/entries/3027/full>).
// @description(ja) G4Upのエントリーページ(例: <http://g4up.precog.net/entries/3027/full>)のタイトルにそのエントリの番號を追加する。
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
  var url = location.href.match(/^http:\/\/g4up\.precog\.net\/entries\/([0-9]+)\//);
  if (url) {
    if (! document.title.match(url[1])) {
      document.title
        = document.title.replace(/^(G4Up\s+-\s+)/, "$1" + url[1] + " - ");
    }
    if (location.href.match(/^http:\/\/g4up\.precog\.net\/entries\/[0-9]+\/?$/)
        && ! document.title.match(/返信/)) {
      document.title += " - これに返信"; // "Reply to this photo".
    }
  }
})();

/// G4Up Entry Page Title with Photo Number ends here.
