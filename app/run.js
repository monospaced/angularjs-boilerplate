export default ($transitions, scrollBehaviour) => {
  'ngInject';

  $transitions.onStart({}, function(trans) {
    scrollBehaviour.saveState = false;
    trans.promise.finally(scrollBehaviour.updateScroll);
  });
};
