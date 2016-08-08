function tabs(){
  return {
    restrict: 'E',
    scope: {},
    transclude: true,
    controller: function(){
      this.tabs = [];

      this.addTab = function(tab){
        this.tabs.push(tab);
      };

      this.selectTab = function(index){
        this.tabs.forEach(function(elem,ind){ elem.selected = false; });
        this.tabs[index].selected = true;
      }
    },
    controllerAs: 'tabs',
    link: function($scope,$element,$attrs,$ctrl){
      $ctrl.selectTab($attrs.active || 0)
    },
    template: [
      '<div class="tabs">',
        '<ul class="tabs__list">',
        '<li ng-repeat="tab in tabs.tabs" ng-click="tabs.selectTab($index)">&nbsp;{{ tab.label }}&nbsp;',
        '</li>',
        '</ul>',
        '<div class="tabs__content" ng-transclude></div>',
      '</div>'
    ].join('')
  };
}

angular
  .module('app')
  .directive('tabs',tabs);
