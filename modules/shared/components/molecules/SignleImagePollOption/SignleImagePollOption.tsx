import React from 'react';
import type { FC, ReactElement } from 'react';
import Image from 'next/image';
import { getVotesResults } from '../../../logic/votesLogic/votesLogic';
import type { ISignleImagePollOption } from './ISignleImagePollOption';
import ImagePollCovered from '../../atoms/ImagePollCovered/ImagePollCovered';
import ImageCaption from '../ImageCaption/ImageCaption';
import ImagePollUncovered from '../ImagePollUncovered/ImagePollUncovered';
import { apiUrls } from '../../../configuration/ConfigPostCreation/config';

const SignleImagePollOption: FC<ISignleImagePollOption.IProps> = ({
  groupName,
  media,
  options,
  onOptionClick,
}): ReactElement => {
  const { optionsPercentage } = getVotesResults(options);

  return (
    <div className="relative w-auto" data-testid="image-poll-option">
      {media.length !== 0 ? (
        <>
          {media.map((image) => (
            <Image
              key={image.url}
              src={`${apiUrls.mediaAPI}${image.url}`}
              layout="responsive"
              className="rounded-md object-cover"
              width={300}
              height={300}
            />
          ))}
          <div className="absolute flex bottom-4 right-4">
            {options.map((option, index) => (
              <div className="mr-4 last:mr-0" key={option.id}>
                {option.vote_count !== undefined ? (
                  <ImagePollUncovered
                    id={option.id}
                    percentage={optionsPercentage[index]}
                    optionBody={option.body}
                    type="circular"
                  />
                ) : (
                  <ImagePollCovered
                    isOneImageVote
                    like={option.body === 'yes'}
                    dislike={option.body === 'no'}
                    onOptionClick={onOptionClick}
                    id={option.id}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="absolute bottom-4 left-4">
            <ImageCaption imgCaption={groupName} />
          </div>
        </>
      ) : (
        <p>cannot display this image :(</p>
      )}
    </div>
  );
};

export default SignleImagePollOption;
