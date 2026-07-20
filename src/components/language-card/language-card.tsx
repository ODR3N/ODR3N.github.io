import { skeleton } from '../../utils';

const LanguageCard = ({
  loading,
  languages,
}: {
  loading: boolean;
  languages: { name: string; level: string }[];
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <div key={index}>
          {skeleton({ widthCls: 'w-24', heightCls: 'h-4', className: 'm-1' })}
        </div>,
      );
    }
    return array;
  };

  return (
    <div className="card shadow-lg card-sm bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">Languages</span>
            )}
          </h5>
        </div>
        <div className="p-3 flow-root">
          <div className="-m-1 flex flex-wrap justify-center gap-2">
            {loading
              ? renderSkeleton()
              : languages.map((language, index) => (
                  <div key={index} className="badge badge-success badge-sm">
                    {language.name} — {language.level}
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageCard;
