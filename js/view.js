'use strict';

var Netflix = Netflix || {};

Netflix.listView = function (model) {
    var groupEl = document.createElement('div'),
        headerEl = document.createElement('h3'),
        listEl = document.createElement('ul');

    var innerFragment = document.createFragment(),
        listFragment = document.createFragment();

    groupEl.clasName = 'group';

    headerEl.innerHTML = model.summary.displayName;

    [headerEl, listEl].forEach(function (el) {
        innerFragment.appendChild(el);
    });
    groupEl.appendChild(innerFragment);
}