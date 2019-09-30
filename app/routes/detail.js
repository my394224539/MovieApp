import Route from '@ember/routing/route';

export default Route.extend({
      model(params) {
        return this.store.queryRecord('movie-detail', { i: params.id });
      }
});
