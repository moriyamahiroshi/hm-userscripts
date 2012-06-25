// ==UserScript== -*- coding: utf-8 -*- vim: enc=utf-8
// @name            GitHub Command Example with SSH URL
// @description     Replaces from HTTPS scheme URL to SSH scheme URL, on a new created repository page of GitHub.
// @description(ja) GitHubで新規リポジトリを作つた直後のページで例示されるコマンド引數のURLを、HTTPSスキームからSSHスキームへ置換する。
// @namespace       http://userscripts.org/users/82654
// @include         https://github.com/*/*
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
  var xpath = "/descendant::div[@id='next_step']/child::pre"
    + "/descendant::text()"
    + "[contains(., 'git remote add origin https://github.com/')]";
  var texts = document.evaluate(xpath, document.documentElement, null, 6, null);
  for (var i = 0; i < texts.snapshotLength; i++) {
    var text = texts.snapshotItem(i);
    text.data = text.data.replace(/https:\/\/github\.com\//g,
                                  "ssh://git@github.com/");
  }
})();

/// GitHub Command Example with SSH URL ends here.
