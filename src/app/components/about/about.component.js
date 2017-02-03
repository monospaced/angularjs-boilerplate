import '../main/main.css';

export const AboutComponent = {
  bindings: { props: '<' },
  template: `
    <main class="Main">
      <section class="Section" content="$ctrl.props.about"></section>
    </main>
  `,
};
