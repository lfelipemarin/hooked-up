/* eslint-disable object-curly-newline */
/* eslint-disable import/no-extraneous-dependencies */
import TestRenderer from 'react-test-renderer';
import { describe, expect, it } from 'vitest';
import navItems from '../../constants/icons';
import IconText from './icon-text.component';

describe('Render Icon text button', () => {
  it('renders an svg icon', () => {
    const testRenderer = TestRenderer.create(<IconText id={navItems[0].id} Icon={navItems[0].Icon} />);
    const testInstance = testRenderer.root;
    const svgElement = testInstance.findByType('a').findByType('svg');
    expect(svgElement).toBeDefined();
  });
  it('renders the description text', () => {
    const testRenderer = TestRenderer.create(<IconText id={navItems[0].id} Icon={navItems[0].Icon} text="Home" />);
    const testInstance = testRenderer.root;
    const spanTestInstance = testInstance.findByType('a').findByType('span');
    expect(spanTestInstance.children).toEqual(['Home']);
  });
});
