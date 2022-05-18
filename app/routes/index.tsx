import ExtLink from '~/components/ExtLink';
import Page from '~/components/Page';

export default function Index() {
  return (
    <Page>
      <h3>
        Making a difference with technology.
        <br />
        Full-stack software engineer · Technical founder · Husband · Father
      </h3>
      <div className="mt-8" />

      <h2>Profiles</h2>
      <ul className="list-disc list-inside text-slate-900 mt-2 mb-10">
        <li>
          <ExtLink href="https://github.com/bryaneaton13">GitHub</ExtLink>
        </li>
        <li>
          <ExtLink href="https://www.linkedin.com/in/bryan-eaton/">Linked In</ExtLink>
        </li>
      </ul>

      <h2>Co-founder</h2>
      <ul className="list-disc list-inside text-slate-900 mt-2 mb-10">
        <li>
          <ExtLink href="https://www.thryve.io/">Thryve</ExtLink>
        </li>
        <li>
          <ExtLink href="https://www.learn.stitchedstory.com/">Stiched Story</ExtLink>
        </li>
        <li>
          <ExtLink href="https://www.hrvids.com/">HRVids</ExtLink>
        </li>
      </ul>

      <h2>Contract work</h2>
      <ul className="list-disc list-inside text-slate-900 mt-2 mb-10">
        <li>
          <ExtLink href="https://www.zummedia.com/">Zum Media</ExtLink>
        </li>
        <li>
          <ExtLink href="https://www.wycliffe.org/">Wycliffe</ExtLink>
        </li>
        <li>
          <ExtLink href="https://www.cru.org/">Cru</ExtLink>
        </li>
        <li>
          <ExtLink href="https://www.tribl.com/">Tribl</ExtLink>
        </li>
      </ul>
    </Page>
  );
}
