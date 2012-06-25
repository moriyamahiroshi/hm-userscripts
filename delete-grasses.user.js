// ==UserScript== -*- coding: utf-8 -*- vim: enc=utf-8
// @name            Delete Grasses
// @description     Adds the "Delete Grassess" user script command. (Grasses is "ｗｗｗｗｗｗｗｗｗｗｗ". this is a Japanese net slang, it's similar to the meaning of "ROFL", "LOL" or "LOLOLOLOLOLOL".)
// @description(ja) 草ｗｗｗｗｗｗｗｗｗｗｗを刈るユーザースクリプトコマンド "Delete Grasses" を追加します。
// @namespace       http://userscripts.org/users/82654
// @include         *
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
  GM_registerMenuCommand("Delete Grasses", function(){
    document.body.innerHTML = document.body.innerHTML.replace(/[wWｗＷ]{2,}/g, " ");
  });
})();

/// Delete Grasses ends here.
