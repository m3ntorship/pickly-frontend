import type { UseFormReturn } from 'react-hook-form';
import type { EPollType } from './EPollType';

declare namespace IPostCreation {
  export interface IProps {
    closeModalHandler: () => void;
    postCreationGlobalState: IState;
    setPostCreationGlobalState: (state: IState) => void;
    useFormConfig: UseFormReturn;
    creating: boolean;
    setCreating: React.Dispatch<React.SetStateAction<boolean>>;
  }
  export interface IPostStructure {
    postType: EPollType.ImagePoll | EPollType.MiniSurvey | EPollType.TextPoll;
    postCaption: { id: string; body: string };
    groups: {
      id: string;
      name: string;
      options: {
        id: string;
        body: string;
        media: { id: string; file: File }[];
      }[];
      media: { id: string; file: File }[];
    }[];
    media: { id: string; file: File }[];
  }
  export interface IPostRestData {
    currentSelectedTab: string;
    isHiddenIdentity: boolean;
    privacy: string;
    createdAt: string;
    mediaCount: number;
  }
  export interface IState extends IPostRestData {
    miniSurvey: IPostStructure;
    textPoll: IPostStructure;
    imagePoll: IPostStructure;
    user: {
      id: string;
      userName: string;
      profilePic: string;
    };
  }
}
export { IPostCreation };
