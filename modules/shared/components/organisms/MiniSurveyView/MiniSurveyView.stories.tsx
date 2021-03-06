import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import { EPostType } from '../../../types/postFeed/EPostType';
import MiniSurveyView from './MiniSurveyView';
import type { IMiniSurveyView } from './IMiniSurveyView';

export default {
  title: 'organisms/MiniSurveyView',
  component: MiniSurveyView,
};

const Template: Story<IMiniSurveyView.IProps> = (args): ReactElement => (
  <MiniSurveyView {...args} />
);
export const Default = Template.bind({});
Default.args = {
  post: {
    caption: 'nalyzing Delaware Frozen',
    id: '03644270-7171-4147-b5a1-4233ff547f7ddda',
    created_at: '2021-05-24T23:10:24.114Z',
    user: {
      name: 'Ahmed Ayoub',
      id: '465456',
      profile_pic:
        'https://i.pinimg.com/736x/10/61/c8/1061c85ea0dfd3a6655b4b3b6e71ade9.jpg',
    },
    type: EPostType.MiniSurvey,
    is_hidden: false,
    media: [{ url: 'http://placeimg.com/640/480/nature?t=1622888620897' }],
    options_groups: {
      groups: [
        {
          id: '03644270-7171-4147-b5a1-4233ff547f7a',
          name: 'Group Name',
          media: [],
          options: [
            {
              id: 'eeb0a32a-1a3c-4c7f-9e50-dd3d3f70b53d',
              body: 'ali tramsy',
              media: [{ url: 'https://placeimg.com/640/480/any' }],
              vote_count: 10,
              voted: false,
            },
            {
              id: 'eeb0a32a-1a3c-4c7f-9e50-dd3d3f70b5aa',
              body: ' ahmed essam',
              media: [{ url: 'https://placeimg.com/640/480/any' }],
              vote_count: 20,
              voted: false,
            },
            {
              id: 'eeb0a32a-1a3c-4c7f-9e50-dd3d3f70b53c',
              body: ' omar gamal',
              media: [{ url: 'https://placeimg.com/640/480/any' }],
              vote_count: 30,
              voted: false,
            },
          ],
        },
      ],
    },
  },
};
