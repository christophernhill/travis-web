import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['owner-tile', 'row-li'],
  classNameBindings: ['repo.current_build.state'],

  ownerName: Ember.computed('repo.slug', function () {
    return this.get('repo.slug').split(/\//)[0];
  }),

  repoName: Ember.computed('repo.slug', function () {
    return this.get('repo.slug').split(/\//)[1];
  }),

  isAnimating: Ember.computed('repo.current_build.state', function () {
    var animationStates, state;
    state = this.get('repo.current_build.state');
    animationStates = ['received', 'queued', 'started', 'booting'];
    if (animationStates.indexOf(state) !== -1) {
      return true;
    }
  })
});
