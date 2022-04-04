import { Trans, useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Language from 'components/Language';
import Card from 'pages/List/components/Card';

const List = (props) => {
  const { t, i18n } = useTranslation();

  const allQuotes = props.data.allQuotes;

  const imagePath = `http://127.0.0.1:8000/storage/${props.data.quote.thumbnail}`;

  return (
    <section>
      <div className='mt-10 ml-10'>
        <Link to='/' className='text-white capitalize '>
          <Trans i18nKey='goback'>go back</Trans>
        </Link>
      </div>
      <div className='max-w-md  m-auto'>
        <h1 className='mt-10 capitalize text-white'>
          {props.data.movie.name[i18n.language]}
        </h1>
        {allQuotes.map((quote) => (
          <Card
            key={quote.id}
            title={quote.name[i18n.language]}
            imageSrc={imagePath}
          />
        ))}
      </div>
      <Language />
    </section>
  );
};

export default List;
