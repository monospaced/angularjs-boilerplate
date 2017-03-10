import 'normalize.css';
import './app.css';

export const AppComponent = {
  template: `
    <nav></nav>
    <main ui-view props="$ctrl.props"></main>
  `,
  controller: class AppComponent {
    constructor($ngRedux, AppActions) {
      'ngInject';
      this.$ngRedux = $ngRedux;
    }

    $onInit() {
      this.disconnect = this.$ngRedux.connect(this.mapState)(this);
    }

    $onDestroy() {
      this.disconnect();
    }

    mapState(state) {
      return { props: state.app.props };
    }
  },
};
