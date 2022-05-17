/* eslint-disable jsx-a11y/anchor-has-content */
import type { DetailedHTMLProps, AnchorHTMLAttributes } from 'react';
import classNames from 'classnames';
import ExtLinkIcon from '~/assets/icons8-linking-48.png';

export default function ExtLink(props: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      title={props.href}
      {...props}
      className={classNames('ext-link', props.className)}
    >
      {props.children}
      {/* <img src={ExtLinkIcon} alt="Ext link" className="w-4 h-4 inline-block ml-2" /> */}
    </a>
  );
}
