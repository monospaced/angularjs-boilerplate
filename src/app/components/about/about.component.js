export const AboutComponent = {
  bindings: { props: '<' },
  template: `
    <main>
      <section content="$ctrl.props.about"></section>
    </main>
  `,
};
