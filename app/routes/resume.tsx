import Page from '~/components/Page';
import Title from '~/components/Title';

export default function Index() {
  return (
    <Page pageClassName="bg-red-200">
      <div>CONTENT</div>
      <div className="text-center bg-stone-800 py-6">
        <Title text="Resume" />
      </div>
    </Page>
  );
}
