import React from 'react';
import type { FC, ReactElement } from 'react';
import Image from 'next/image';
import type { IImagePollOption } from './IImagePollOption';
import VoteIcon from '../../atoms/VoteIcon/VoteIcon';
import ImageCaption from '../ImageCaption/ImageCaption';

const ImagePollOption: FC<IImagePollOption.IProps> = ({
  isOneImageVote,
  imageUrl,
  imgCaption,
  imgCaptionLetter,
}): ReactElement => {
  return (
    <div className="relative w-auto">
      <Image
        src={imageUrl}
        layout="fill"
        objectFit="contain"
        className="w-full h-full"
      />
      <div className="absolute bottom-4 right-4">
        <VoteIcon isOneImageVote={isOneImageVote} />
      </div>
      <div className="absolute bottom-4 left-4">
        <ImageCaption
          imgCaption={imgCaption}
          imgCaptionLetter={imgCaptionLetter}
        />
      </div>
    </div>
  );
};

export default ImagePollOption;
