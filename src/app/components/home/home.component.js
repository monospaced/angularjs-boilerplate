export const HomeComponent = {
  bindings: { props: '<' },
  template: `
    <main>
      <section content="$ctrl.props.title"></section>
    </main>
  `,
};
