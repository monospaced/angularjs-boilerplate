import '../main/main.css';

export const HomeComponent = {
  bindings: { props: '<' },
  template: `
    <main class="Main">
      <section class="Section" content="$ctrl.props.title"></section>
    </main>
  `,
};
