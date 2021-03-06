import React from 'react';
import classNames from 'classnames';
import type { FC, ReactElement } from 'react';
import type { IImageCaption } from './IImageCaption';
import styles from './ImageCaption.module.css';

const ImageCaption: FC<IImageCaption.IProps> = ({
  imgCaptionLetter,
  imgCaption,
}): ReactElement => {
  // make letter and divider (|) hidden when not pass letter as a props
  const captionLetterClasses = classNames({
    hidden: !imgCaptionLetter,
  });
  return (
    <div className={styles.captionContent}>
      <span className={captionLetterClasses}>{imgCaptionLetter}</span>

      <div className={`${styles.captionDivider} ${captionLetterClasses}`} />

      <span className={styles['image-caption']} title={imgCaption} dir="auto">
        {imgCaption}
      </span>
    </div>
  );
};

export default ImageCaption;
