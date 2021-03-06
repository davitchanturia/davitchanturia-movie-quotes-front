import i18n from 'i18next';

const Circle = (props) => {
  const changeLanguageHandler = (event) => {
    event.preventDefault();
    i18n.changeLanguage(props.lang);
    localStorage.setItem('language', props.lang);
  };

  const styles =
    'rounded-full transition-all h-10 w-10 m-2 text-white border border-white flex items-center justify-center circle';

  const classes =
    i18n.language === props.lang
      ? `${styles} bg-white text-black`
      : `${styles}`;

  return (
    <div className={classes}>
      <button className='cursor-pointer' onClick={changeLanguageHandler}>
        {props.lang}
      </button>
    </div>
  );
};

export default Circle;
