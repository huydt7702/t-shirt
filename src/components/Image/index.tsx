import { LegacyRef, forwardRef, useState } from 'react';
import images from 'src/assets/images';

interface IProps {
  src: string;
  alt?: string;
  className?: string;
  fallback?: string;
}

const Image = forwardRef(
  (
    { src, alt, className, fallback: customFallback = images.noImage, ...props }: IProps,
    ref: LegacyRef<HTMLImageElement>
  ) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
      setFallback(customFallback);
    };

    return (
      <img
        ref={ref}
        className={`object-cover ${className ? className : ''}`}
        src={fallback || src}
        alt={alt}
        {...props}
        onError={handleError}
      />
    );
  }
);

export default Image;
