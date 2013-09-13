function PDCtrl($scope, $sce) {
  //list of cities
  $scope.destinations = [{name: "Moscow", count: 12, content: "<p><strong>Moscow</strong> description</p>"},
                         {name:"Amsterdam", count: 25, content: "<p><strong>Amsterdam</strong> description</p>"},
                         {name: "Lisbon", count: 15, content: "<p><strong>Lisbon</strong> description</p>"},
                         {name: "Berlin", count: 19, content: "<p><strong>Berlin</strong> description</p>"},
                         {name: "Madrid", count: 25, content: "<p><strong>Madrid</strong> description</p>"}
                        ];
  //Clicking on each city name displays some additional information about the city (some html)
  $scope.select = function(destination) {
    $scope.content = $sce.trustAsHtml(destination.content);
  };
}
