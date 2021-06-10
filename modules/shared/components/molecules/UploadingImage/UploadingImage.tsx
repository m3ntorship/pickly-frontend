import React, { useEffect, useState } from 'react';
import type { FC, ReactElement } from 'react';
import Image from 'next/image';
import type { IUploadingImage } from './IUploadingImage';
import styles from './UploadingImage.module.css';
import TextInput from '../../atoms/TextInputs/TextInput';
import * as ETextInput from '../../atoms/TextInputs/types/ETextInput';
import VerticalThreeDots from '../../icons/verticalThreeDots.svg';

const UploadingImage: FC<IUploadingImage.IProps> = ({
  file,
  textInputLetter,
  id,
  textInputValue,
  handleVerticalThreeDotsClick,
  handleTextInputOnChange,
  handleTextInputOnBlur,
}): ReactElement => {
  const [url, setUrl] = useState<string>('');
  useEffect(() => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.addEventListener('load', function (e) {
      setUrl(e.target?.result as string);
    });
  }, [file]);
  return (
    <div className={styles.container}>
      <div className="relative">
        <Image
          src={url}
          layout="fill"
          objectFit="contain"
          className="w-full h-full rounded-t-md mb-1 "
          id={id}
        />
        <button
          type="button"
          data-testid="VerticalThreeDots"
          onClick={handleVerticalThreeDotsClick}
          className={styles.button}
        >
          <VerticalThreeDots className="fill-dark-grey" />
        </button>
      </div>
      <TextInput
        variants={ETextInput.Variants.Default}
        inputType={ETextInput.InputType.Choices}
        letter={textInputLetter}
        id={id}
        onChange={handleTextInputOnChange}
        onBlur={handleTextInputOnBlur}
        value={textInputValue}
        placeholder="Type caption (optional)"
        style={{ borderTopLeftRadius: '0', borderTopRightRadius: '0' }}
      />
    </div>
  );
};

export default UploadingImage;
