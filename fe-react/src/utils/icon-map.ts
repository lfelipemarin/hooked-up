import { FC, SVGProps } from 'react';
import { ReactComponent as Icon1 } from '../stories/assets/code-brackets.svg';
import { ReactComponent as Icon2 } from '../stories/assets/colors.svg';
import { ReactComponent as Icon3 } from '../stories/assets/comments.svg';
import { ReactComponent as Icon4 } from '../stories/assets/direction.svg';
import { ReactComponent as Icon5 } from '../stories/assets/flow.svg';
import { ReactComponent as Icon6 } from '../stories/assets/plugin.svg';
import { ReactComponent as Icon7 } from '../stories/assets/repo.svg';

export const iconMap: Record<string, FC<SVGProps<SVGSVGElement>>> = {
  codeBrackets: Icon1,
  colors: Icon2,
  comments: Icon3,
  direction: Icon4,
  flow: Icon5,
  plugin: Icon6,
  repo: Icon7
};
