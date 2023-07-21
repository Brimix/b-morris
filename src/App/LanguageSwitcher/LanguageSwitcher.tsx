import {useCallback, useState} from 'react';

const LanguageSwitcher = () => {
  const [isSpanish, setIsSpanish] = useState<boolean>(false);

  const onClick = useCallback(() => {
    console.log("We should be speaking ", (isSpanish ? 'spanish!' : 'english!'));
    setIsSpanish(!isSpanish);
  }, [isSpanish]);

  return (
    <div>
      <button onClick={onClick}> Switch! </button>
    </div>
  );
};

export default LanguageSwitcher;
